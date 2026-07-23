import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { guides, projects, site } from "../content/site.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const excluded = new Set([".git", "node_modules"]);

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries
      .filter((entry) => !excluded.has(entry.name))
      .map((entry) => {
        const target = path.join(directory, entry.name);
        if (entry.isDirectory()) return htmlFiles(target);
        return entry.name.endsWith(".html") ? [target] : [];
      }),
  );
  return nested.flat();
}

const files = await htmlFiles(root);
const titles = new Set();
const descriptions = new Set();
const canonicalPages = [];
const errors = [];

for (const file of files) {
  const html = await readFile(file, "utf8");
  const relative = path.relative(root, file).replaceAll("\\", "/");
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  for (const [label, pattern] of [
    ["UTF-8 charset", /<meta charset="utf-8">/],
    ["viewport", /name="viewport"/],
    ["Open Graph title", /property="og:title"/],
    ["Open Graph image", /property="og:image"/],
    ["Twitter card", /name="twitter:card"/],
    ["JSON-LD", /application\/ld\+json/],
    ["APIMART disclosure", /APIMART links are promotional|APIMART team/],
  ]) {
    if (!pattern.test(html)) errors.push(`${relative}: missing ${label}`);
  }
  if (!title) errors.push(`${relative}: missing title`);
  else if (titles.has(title)) errors.push(`${relative}: duplicate title`);
  else titles.add(title);
  if (!description) errors.push(`${relative}: missing description`);
  else if (descriptions.has(description)) errors.push(`${relative}: duplicate description`);
  else descriptions.add(description);
  if (!canonical) errors.push(`${relative}: missing canonical`);
  else if (relative !== "404.html") canonicalPages.push(canonical);
  if (/鈥|锟|�/.test(html)) errors.push(`${relative}: contains mojibake`);
  if (/sk-[A-Za-z0-9]{20,}/.test(html)) errors.push(`${relative}: contains a credential-like value`);

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs.filter((value) => value.startsWith("/") && !value.startsWith("//"))) {
    if (href.startsWith("/assets/")) continue;
    const localHref = href.replace(/^\//, "");
    const target = href.endsWith("/")
      ? path.join(root, localHref, "index.html")
      : path.join(root, localHref);
    try {
      await access(target);
    } catch {
      errors.push(`${relative}: broken internal link ${href}`);
    }
  }
}

const sitemap = await readFile(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== canonicalPages.length) {
  errors.push(`sitemap has ${sitemapUrls.length} URLs; expected ${canonicalPages.length}`);
}
for (const canonical of canonicalPages) {
  if (!sitemapUrls.includes(canonical)) errors.push(`sitemap missing ${canonical}`);
}
if (projects.length !== 17) errors.push(`expected 17 project entries; found ${projects.length}`);
if (guides.length !== 6) errors.push(`expected 6 engineering guides; found ${guides.length}`);
if (!sitemap.includes(site.origin)) errors.push("sitemap origin is incorrect");
const socialImage = await stat(path.join(root, "assets", "og.png"));
if (socialImage.size < 100_000) errors.push("social preview image is missing or unexpectedly small");

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}
console.log(`Validated ${files.length} HTML files, ${canonicalPages.length} canonical pages, ${guides.length} guides, and ${projects.length} projects.`);
