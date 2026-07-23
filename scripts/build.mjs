import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { guides, projects, site } from "../content/site.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registerUrl = (content) =>
  `https://apimart.ai/register?utm_source=github_pages&utm_medium=engineering_site&utm_campaign=apimart_engineering&utm_content=${encodeURIComponent(content)}`;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const nav = (active = "") => `
  <header class="site-header">
    <a class="brand" href="/"><span class="brand-mark">A/</span><span>APIMART Engineering</span></a>
    <nav aria-label="Primary navigation">
      <a ${active === "guides" ? 'aria-current="page"' : ""} href="/guides/">Guides</a>
      <a ${active === "projects" ? 'aria-current="page"' : ""} href="/projects/">Projects</a>
      <a ${active === "about" ? 'aria-current="page"' : ""} href="/about/">About</a>
      <a class="nav-cta" href="${registerUrl("navigation")}">Try APIMART</a>
    </nav>
  </header>`;

const footer = () => `
  <footer class="site-footer">
    <div>
      <a class="brand" href="/"><span class="brand-mark">A/</span><span>APIMART Engineering</span></a>
      <p>Practical notes for teams shipping AI products.</p>
    </div>
    <div class="footer-links">
      <a href="https://github.com/luyx-66">GitHub</a>
      <a href="https://docs.apimart.ai/">API docs</a>
      <a href="https://apimart.ai/pricing?utm_source=github_pages&utm_medium=engineering_site&utm_campaign=apimart_engineering&utm_content=footer">Pricing</a>
    </div>
    <p class="disclosure"><strong>Disclosure:</strong> This publication is maintained by the APIMART team. APIMART links are promotional. Benchmarks are dated, reproducible snapshots—not universal provider rankings.</p>
  </footer>`;

function page({
  title,
  description,
  canonicalPath,
  active,
  body,
  type = "website",
  structuredData,
}) {
  const canonical = `${site.origin}${canonicalPath}`;
  const fullTitle = title === site.name ? title : `${title} · ${site.name}`;
  const jsonLd =
    structuredData ??
    {
      "@context": "https://schema.org",
      "@type": type === "article" ? "TechArticle" : "WebPage",
      name: title,
      description,
      url: canonical,
      publisher: { "@type": "Organization", name: "APIMART Labs", url: "https://apimart.ai/" },
    };
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#0d1424">
  <meta property="og:type" content="${type}">
  <meta property="og:title" content="${escapeHtml(fullTitle)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site.origin}/assets/og.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(fullTitle)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${site.origin}/assets/og.png">
  <link rel="stylesheet" href="/assets/styles.css">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to content</a>
  <div class="page-shell">
    ${nav(active)}
    ${body}
    ${footer()}
  </div>
</body>
</html>`.replace(/[ \t]+$/gm, "");
}

const guideCard = (guide) => `
  <article class="guide-card">
    <span class="eyebrow">${escapeHtml(guide.eyebrow)}</span>
    <h3><a href="/guides/${guide.slug}/">${escapeHtml(guide.title)}</a></h3>
    <p>${escapeHtml(guide.description)}</p>
    <a class="text-link" href="/guides/${guide.slug}/">Read the guide <span aria-hidden="true">→</span></a>
  </article>`;

const projectCard = (project) => `
  <article class="project-card">
    <div><span class="eyebrow">${escapeHtml(project.category)}</span><h3><a href="${project.href}">${escapeHtml(project.name)}</a></h3></div>
    <p>${escapeHtml(project.description)}</p>
    <div class="card-links"><a href="${project.href}">Open project</a><a href="${project.repo}">Source</a></div>
  </article>`;

const homeBody = `
  <main id="content">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Open engineering notes · APIMART Labs</span>
        <h1>Build reliable AI products with evidence, not guesswork.</h1>
        <p>Practical guides, open-source tools, and reproducible benchmarks for AI API gateways, model routing, compatibility, reliability, and cost.</p>
        <div class="hero-actions">
          <a class="button primary" href="/guides/">Explore engineering guides</a>
          <a class="button secondary" href="${registerUrl("homepage_hero")}">Create an APIMART account</a>
        </div>
      </div>
      <aside class="signal-panel" aria-label="Published resources">
        <span class="signal-label">Published evidence</span>
        <div><strong>17</strong><span>open-source projects</span></div>
        <div><strong>50</strong><span>prompt fixtures</span></div>
        <div><strong>30</strong><span>raw image outputs</span></div>
        <div><strong>10</strong><span>measured comparisons</span></div>
      </aside>
    </section>
    <section class="editorial-intro">
      <span class="section-index">01</span>
      <div><span class="eyebrow">Latest field notes</span><h2>Operational questions, answered with reusable methods.</h2></div>
      <p>Every guide connects an engineering decision to a checklist, fixture, or open-source tool. Product references are disclosed; measurements stay dated.</p>
    </section>
    <section class="guide-grid">${guides.slice(0, 6).map(guideCard).join("")}</section>
    <section class="feature-band">
      <div>
        <span class="eyebrow">Open dataset</span>
        <h2>Inspect thirty original AI image outputs.</h2>
        <p>The benchmark hub preserves shared prompts, model IDs, parameters, latency, attempts, reported API cost, raw images, and dated findings.</p>
        <a class="button primary" href="https://luyx-66.github.io/ai-generation-benchmarks/">Open the benchmark hub</a>
      </div>
      <div class="data-ledger" aria-label="Dataset contents">
        <span>GPT Image 2</span><span>Flux 2 Flex</span><span>Gemini 2.5 Flash</span>
        <b>10 prompts × 3 models</b>
      </div>
    </section>
    <section class="editorial-intro">
      <span class="section-index">02</span>
      <div><span class="eyebrow">Open-source toolkit</span><h2>Tools for the full API evaluation loop.</h2></div>
      <a class="text-link" href="/projects/">Browse all 17 projects →</a>
    </section>
    <section class="project-grid">${projects.filter((project) => project.featured).map(projectCard).join("")}</section>
    <section class="conversion-band">
      <span class="eyebrow">Sponsored infrastructure</span>
      <h2>One API surface for supported text, image, video, and audio models.</h2>
      <p>Use the open-source tools to test your own workload, then check current APIMART availability, pricing, and limits before choosing a route.</p>
      <div class="hero-actions">
        <a class="button inverse" href="${registerUrl("homepage_conversion")}">Create an APIMART account</a>
        <a class="text-link light" href="https://docs.apimart.ai/">Read API documentation →</a>
      </div>
    </section>
  </main>`;

await writeFile(
  path.join(root, "index.html"),
  page({
    title: site.name,
    description: site.description,
    canonicalPath: "/",
    body: homeBody,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      description: site.description,
      url: `${site.origin}/`,
      publisher: { "@type": "Organization", name: "APIMART Labs", url: "https://apimart.ai/" },
    },
  }),
);

const guidesIndexBody = `
  <main id="content">
    <section class="page-heading"><span class="eyebrow">Engineering library</span><h1>Practical guides for AI API infrastructure.</h1><p>Original, implementation-focused notes maintained by the APIMART team. No paywalled conclusions and no undisclosed rankings.</p></section>
    <section class="guide-grid">${guides.map(guideCard).join("")}</section>
  </main>`;
await mkdir(path.join(root, "guides"), { recursive: true });
await writeFile(
  path.join(root, "guides", "index.html"),
  page({
    title: "AI API engineering guides",
    description: "Implementation guides for AI API gateways, OpenAI-compatible migration, load testing, routing, cost planning, and reproducible benchmarks.",
    canonicalPath: "/guides/",
    active: "guides",
    body: guidesIndexBody,
  }),
);

for (const guide of guides) {
  const guideBody = `
    <main id="content">
      <article class="article">
        <header class="article-header">
          <a class="back-link" href="/guides/">← All guides</a>
          <span class="eyebrow">${escapeHtml(guide.eyebrow)}</span>
          <h1>${escapeHtml(guide.title)}</h1>
          <p class="dek">${escapeHtml(guide.summary)}</p>
          <div class="byline"><span>APIMART Engineering</span><time datetime="${guide.published}">${guide.published}</time></div>
        </header>
        <div class="article-layout">
          <aside class="article-note"><strong>Method note</strong><p>Adapt these checks to your workload. Availability, pricing, and model behavior change over time.</p></aside>
          <div class="article-body">${guide.sections
            .map((section, index) => `<section><span class="section-index">${String(index + 1).padStart(2, "0")}</span><h2>${escapeHtml(section.heading)}</h2>${section.body}</section>`)
            .join("")}
            <section class="article-cta">
              <span class="eyebrow">Run your own test</span>
              <h2>Use supported models through one APIMART account.</h2>
              <p>Confirm current model availability, pricing, and limits before routing production traffic.</p>
              <a class="button inverse" href="${registerUrl(`guide_${guide.slug}`)}">Create an APIMART account</a>
            </section>
          </div>
        </div>
      </article>
    </main>`;
  const target = path.join(root, "guides", guide.slug);
  await mkdir(target, { recursive: true });
  await writeFile(
    path.join(target, "index.html"),
    page({
      title: guide.title,
      description: guide.description,
      canonicalPath: `/guides/${guide.slug}/`,
      active: "guides",
      type: "article",
      body: guideBody,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: guide.title,
        description: guide.description,
        datePublished: guide.published,
        dateModified: guide.published,
        url: `${site.origin}/guides/${guide.slug}/`,
        author: { "@type": "Organization", name: "APIMART Labs" },
        publisher: { "@type": "Organization", name: "APIMART Labs", url: "https://apimart.ai/" },
      },
    }),
  );
}

const projectGroups = Object.groupBy(projects, (project) => project.category);
const projectsBody = `
  <main id="content">
    <section class="page-heading"><span class="eyebrow">Open-source catalog</span><h1>Seventeen focused tools, one evaluation workflow.</h1><p>Use the calculators, compatibility checks, load testers, prompt fixtures, and benchmark pages independently. Every repository links its methodology and commercial disclosure.</p></section>
    <section class="catalog">${Object.entries(projectGroups)
      .map(([category, entries]) => `<div class="catalog-group"><h2>${escapeHtml(category)}</h2><div class="project-grid">${entries.map(projectCard).join("")}</div></div>`)
      .join("")}</section>
  </main>`;
await mkdir(path.join(root, "projects"), { recursive: true });
await writeFile(
  path.join(root, "projects", "index.html"),
  page({
    title: "Open-source AI API projects",
    description: "Seventeen open-source AI API benchmarks, gateway checks, cost calculators, load-testing tools, and model integration examples.",
    canonicalPath: "/projects/",
    active: "projects",
    body: projectsBody,
  }),
);

const aboutBody = `
  <main id="content">
    <section class="page-heading"><span class="eyebrow">About the publication</span><h1>Engineering notes with the commercial relationship in plain sight.</h1><p>APIMART Engineering is maintained by the APIMART team. We publish implementation methods and open-source tools for developers evaluating AI APIs.</p></section>
    <section class="about-grid">
      <article><span class="section-index">01</span><h2>What we publish</h2><p>Compatibility checks, load-test methods, cost models, routing patterns, code examples, prompt fixtures, and dated benchmark evidence.</p></article>
      <article><span class="section-index">02</span><h2>What we do not publish</h2><p>Fabricated measurements, universal winners based on one prompt, copied proprietary data, undisclosed affiliate rankings, or rewards for stars and reviews.</p></article>
      <article><span class="section-index">03</span><h2>How to verify a claim</h2><p>Follow the linked repository, inspect the fixture and raw result, confirm the test date, and rerun the tool against your own authorized endpoint.</p></article>
      <article><span class="section-index">04</span><h2>Commercial disclosure</h2><p>APIMART links are promotional. Product references are written from the perspective of the APIMART team. Check current pricing, availability, and limits directly.</p></article>
    </section>
    <section class="conversion-band"><span class="eyebrow">Contribute evidence</span><h2>Found a reproducible correction?</h2><p>Open an issue with the exact model ID, test window, runner region, request count, tool version, sanitized raw results, and commercial disclosure.</p><a class="button inverse" href="https://github.com/luyx-66">Visit the GitHub profile</a></section>
  </main>`;
await mkdir(path.join(root, "about"), { recursive: true });
await writeFile(
  path.join(root, "about", "index.html"),
  page({
    title: "About",
    description: "How APIMART Engineering publishes reproducible AI API guidance, discloses commercial relationships, and accepts evidence-based corrections.",
    canonicalPath: "/about/",
    active: "about",
    body: aboutBody,
  }),
);

const notFoundBody = `<main id="content"><section class="not-found"><span class="eyebrow">404 · route not found</span><h1>This page missed its model route.</h1><p>Return to the engineering library or browse the open-source project catalog.</p><div class="hero-actions"><a class="button primary" href="/">Return home</a><a class="button secondary" href="/projects/">Browse projects</a></div></section></main>`;
await writeFile(
  path.join(root, "404.html"),
  page({
    title: "Page not found",
    description: "The requested APIMART Engineering page could not be found.",
    canonicalPath: "/404.html",
    body: notFoundBody,
  }),
);

const canonicalPaths = [
  "/",
  "/guides/",
  ...guides.map((guide) => `/guides/${guide.slug}/`),
  "/projects/",
  "/about/",
];
await writeFile(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${canonicalPaths
    .map((entry) => `  <url><loc>${site.origin}${entry}</loc><lastmod>2026-07-23</lastmod></url>`)
    .join("\n")}\n</urlset>\n`,
);
await writeFile(
  path.join(root, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap.xml\n`,
);
await writeFile(
  path.join(root, "rss.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>${site.name}</title><link>${site.origin}/</link><description>${site.description}</description>${guides
    .map((guide) => `<item><title>${escapeHtml(guide.title)}</title><link>${site.origin}/guides/${guide.slug}/</link><guid>${site.origin}/guides/${guide.slug}/</guid><pubDate>Thu, 23 Jul 2026 00:00:00 GMT</pubDate><description>${escapeHtml(guide.description)}</description></item>`)
    .join("")}</channel></rss>\n`,
);

console.log(`Built ${canonicalPaths.length} canonical pages, ${guides.length} guides, and ${projects.length} project entries.`);
