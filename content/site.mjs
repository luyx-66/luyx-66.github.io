export const site = {
  name: "APIMART Engineering",
  origin: "https://luyx-66.github.io",
  description:
    "Practical engineering guides, open-source tools, and reproducible benchmarks for AI APIs, model routing, reliability, and cost planning.",
};

export const projects = [
  {
    name: "AI Generation Benchmarks",
    href: "https://luyx-66.github.io/ai-generation-benchmarks/",
    repo: "https://github.com/luyx-66/ai-generation-benchmarks",
    category: "Benchmark hub",
    description: "Fifty prompt fixtures, thirty raw outputs, and ten dated image-model comparisons.",
    featured: true,
  },
  {
    name: "AI API Provider Benchmark",
    href: "https://luyx-66.github.io/ai-api-provider-benchmark/",
    repo: "https://github.com/luyx-66/ai-api-provider-benchmark",
    category: "Evaluation",
    description: "A reproducible framework for latency, reliability, compatibility, and routing tests.",
    featured: true,
  },
  {
    name: "OpenAI-Compatible Provider Guide",
    href: "https://luyx-66.github.io/openai-compatible-api-provider-guide/",
    repo: "https://github.com/luyx-66/openai-compatible-api-provider-guide",
    category: "Migration",
    description: "Compatibility checks and a practical migration path for OpenAI-style clients.",
    featured: true,
  },
  {
    name: "Affordable AI API Comparison",
    href: "https://luyx-66.github.io/affordable-ai-api-comparison/",
    repo: "https://github.com/luyx-66/affordable-ai-api-comparison",
    category: "Cost planning",
    description: "Workload-based cost modeling for text, image, and video API usage.",
    featured: true,
  },
  {
    name: "Best AI API Gateway",
    href: "https://github.com/luyx-66/best-ai-api-gateway",
    repo: "https://github.com/luyx-66/best-ai-api-gateway",
    category: "Evaluation kit",
    description: "Score providers against the reliability and compatibility requirements that matter to your product.",
    featured: true,
  },
  {
    name: "AI API Load Tester",
    href: "https://github.com/luyx-66/ai-api-load-tester",
    repo: "https://github.com/luyx-66/ai-api-load-tester",
    category: "Developer tool",
    description: "Measure latency, throughput, retries, and rate-limit behavior on endpoints you are authorized to test.",
    featured: true,
  },
  {
    name: "LLM API Cost Calculator",
    href: "https://github.com/luyx-66/llm-api-cost-calculator",
    repo: "https://github.com/luyx-66/llm-api-cost-calculator",
    category: "Developer tool",
    description: "Estimate text, image, and video spend with caller-supplied current pricing.",
  },
  {
    name: "Multi-Provider LLM API Examples",
    href: "https://github.com/luyx-66/multi-provider-llm-api-examples",
    repo: "https://github.com/luyx-66/multi-provider-llm-api-examples",
    category: "Code examples",
    description: "OpenAI-compatible examples for routing text, image, and video model calls.",
  },
  {
    name: "OpenRouter Alternative Checker",
    href: "https://github.com/luyx-66/openrouter-alternative-openai-compatible-api-provider",
    repo: "https://github.com/luyx-66/openrouter-alternative-openai-compatible-api-provider",
    category: "Migration",
    description: "Compare response shape, route availability, and latency before changing providers.",
  },
  {
    name: "Claude, GPT-5, and Gemini Gateway",
    href: "https://github.com/luyx-66/claude-gpt5-gemini-api-gateway",
    repo: "https://github.com/luyx-66/claude-gpt5-gemini-api-gateway",
    category: "Code examples",
    description: "A shared API pattern for common LLM provider workflows.",
  },
  {
    name: "GPT Image 2 API Examples",
    href: "https://github.com/luyx-66/gpt-image2-api-examples",
    repo: "https://github.com/luyx-66/gpt-image2-api-examples",
    category: "Image API",
    description: "Single and batch generation examples with retries and budget controls.",
  },
  {
    name: "Nano Banana API Examples",
    href: "https://github.com/luyx-66/nano-banana-api-examples",
    repo: "https://github.com/luyx-66/nano-banana-api-examples",
    category: "Image API",
    description: "Async polling and batch prompt patterns for Gemini image workflows.",
  },
  {
    name: "AI Image Generation Batch",
    href: "https://github.com/luyx-66/ai-image-generation-api-batch",
    repo: "https://github.com/luyx-66/ai-image-generation-api-batch",
    category: "Automation",
    description: "A resumable Python batch client with concurrency and retry controls.",
  },
  {
    name: "Sora 2 and AI Video API Examples",
    href: "https://github.com/luyx-66/sora-2-ai-video-generation-api-examples",
    repo: "https://github.com/luyx-66/sora-2-ai-video-generation-api-examples",
    category: "Video API",
    description: "Async video generation, polling, resume, and budget-limit examples.",
  },
  {
    name: "AI API 中转实测",
    href: "https://luyx-66.github.io/ai-api-relay-benchmark-cn/",
    repo: "https://github.com/luyx-66/ai-api-relay-benchmark-cn",
    category: "中文评测",
    description: "成功率、P50/P95 延迟和 OpenAI 兼容性评测方法。",
  },
  {
    name: "OpenAI API 中转兼容性",
    href: "https://luyx-66.github.io/openai-api-relay-compatibility-cn/",
    repo: "https://github.com/luyx-66/openai-api-relay-compatibility-cn",
    category: "中文迁移",
    description: "OpenAI、Claude 和 GPT API 中转兼容性检查清单。",
  },
  {
    name: "便宜 AI API 成本对比",
    href: "https://luyx-66.github.io/cheap-ai-api-cost-comparison-cn/",
    repo: "https://github.com/luyx-66/cheap-ai-api-cost-comparison-cn",
    category: "中文成本",
    description: "按真实工作负载估算大模型与 AI API 成本。",
  },
];

export const guides = [
  {
    slug: "ai-api-gateway-evaluation",
    title: "How to evaluate an AI API gateway",
    description:
      "A practical scorecard for testing compatibility, reliability, observability, and cost before routing production AI traffic through a gateway.",
    eyebrow: "Architecture · 8 min",
    published: "2026-07-23",
    summary:
      "A gateway decision is an operational decision. Test the request path, failure behavior, and billing evidence—not only the model list.",
    sections: [
      {
        heading: "Start from the workload",
        body: `<p>Write down the calls your product actually makes: model IDs, streaming requirements, image or video task polling, tool calls, structured outputs, concurrency, and timeout expectations. A provider can support an API shape in general while still missing one detail your application depends on.</p>
        <p>Create a small fixture set from sanitized production-like requests. Keep the input, parameters, expected response fields, and acceptance criteria together so every candidate sees the same test.</p>`,
      },
      {
        heading: "Measure four independent dimensions",
        body: `<div class="check-grid">
          <article><strong>Compatibility</strong><span>Request fields, streaming, errors, usage metadata, SDK behavior.</span></article>
          <article><strong>Reliability</strong><span>Success rate, P50/P95 latency, timeouts, retries, and rate limits.</span></article>
          <article><strong>Operations</strong><span>Request IDs, logs, spend controls, model health, and incident communication.</span></article>
          <article><strong>Economics</strong><span>Effective cost for accepted outputs, not only the listed unit price.</span></article>
        </div>`,
      },
      {
        heading: "Score evidence, not promises",
        body: `<p>Record the test window, runner region, request count, concurrency, model identifier, retry policy, and raw result location. Separate measured values from vendor documentation and clearly date both. A single prompt is a workflow check, not a universal model ranking.</p>
        <p>Use the open-source <a href="https://github.com/luyx-66/best-ai-api-gateway">gateway evaluation kit</a> and <a href="https://github.com/luyx-66/ai-api-provider-benchmark">provider benchmark</a> as starting points.</p>`,
      },
      {
        heading: "Decide with failure drills",
        body: `<p>Before launch, deliberately test invalid credentials, unknown models, oversized inputs, timeouts, 429 responses, and provider-side failures. Confirm that your application classifies these cases, retries only when safe, and preserves enough context to investigate the request.</p>`,
      },
    ],
  },
  {
    slug: "openai-compatible-api-migration-checklist",
    title: "OpenAI-compatible API migration checklist",
    description:
      "Move an existing OpenAI-style client to another API provider without treating base URL compatibility as the whole migration.",
    eyebrow: "Migration · 7 min",
    published: "2026-07-23",
    summary:
      "Changing a base URL is the first test, not the last. Validate the response contract and failure modes your application relies on.",
    sections: [
      {
        heading: "Inventory the contract you use",
        body: `<p>List endpoints, model aliases, request options, streaming events, response fields, error handling, and usage metadata consumed by your code. Search the application for assumptions about provider-specific headers, finish reasons, image response formats, and tool-call serialization.</p>`,
      },
      {
        heading: "Run a compatibility matrix",
        body: `<ol class="steps">
          <li><strong>Authentication:</strong> verify header format and key scoping.</li>
          <li><strong>Happy path:</strong> compare parsed responses, not just HTTP 200.</li>
          <li><strong>Streaming:</strong> confirm event order, termination, and interrupted connections.</li>
          <li><strong>Errors:</strong> test invalid model, invalid input, rate limit, and timeout cases.</li>
          <li><strong>Accounting:</strong> capture usage fields and reconcile them with provider records.</li>
        </ol>`,
      },
      {
        heading: "Keep rollback cheap",
        body: `<p>Put the base URL, credential, model mapping, timeout, and retry policy in configuration. Avoid scattering provider checks through business logic. During rollout, keep the previous route available and move a small percentage of traffic first.</p>
        <pre><code>client = OpenAI(
    api_key=os.environ["AI_API_KEY"],
    base_url=os.environ["AI_API_BASE_URL"],
    timeout=30,
)</code></pre>`,
      },
      {
        heading: "Use a repeatable checker",
        body: `<p>The <a href="https://github.com/luyx-66/openai-compatible-api-provider-guide">provider compatibility guide</a> and <a href="https://github.com/luyx-66/openrouter-alternative-openai-compatible-api-provider">migration checker</a> provide fixtures you can adapt to your own routes.</p>`,
      },
    ],
  },
  {
    slug: "ai-api-reliability-load-testing",
    title: "Load-test an AI API without fooling yourself",
    description:
      "Design an authorized AI API load test that separates client overhead, provider latency, rate limits, and model task duration.",
    eyebrow: "Reliability · 9 min",
    published: "2026-07-23",
    summary:
      "A useful load test represents one production question at a time and reports failures alongside latency.",
    sections: [
      {
        heading: "Define the boundary",
        body: `<p>Only test endpoints you own or are authorized to test. Decide whether the test measures the gateway, a model route, an asynchronous generation task, or the full user journey. Mixing them produces a number that is difficult to act on.</p>`,
      },
      {
        heading: "Warm up, then measure",
        body: `<p>Run a short warm-up to establish connections and caches, then record a fixed measurement window. Report request count, concurrency, payload size, model ID, region, timeouts, and retry policy. For asynchronous image or video tasks, measure submission latency and completion latency separately.</p>`,
      },
      {
        heading: "Report the full outcome",
        body: `<div class="metric-strip">
          <span><b>Success rate</b><small>accepted / attempted</small></span>
          <span><b>P50 + P95</b><small>distribution, not average</small></span>
          <span><b>429 rate</b><small>capacity signal</small></span>
          <span><b>Retry cost</b><small>extra calls and time</small></span>
        </div>
        <p>Never delete failed requests from the denominator. If retries are enabled, publish both first-attempt and final success rates so the retry policy does not hide instability.</p>`,
      },
      {
        heading: "Start with a bounded tool",
        body: `<p>The <a href="https://github.com/luyx-66/ai-api-load-tester">AI API Load Tester</a> emits latency, throughput, status, and retry evidence for OpenAI-compatible endpoints. Begin with a small authorized test and increase load gradually.</p>`,
      },
    ],
  },
  {
    slug: "multi-provider-ai-routing",
    title: "Design multi-provider AI routing for failure, not demos",
    description:
      "A routing pattern for model aliases, provider health, fallback policy, and observability across multiple AI API providers.",
    eyebrow: "Architecture · 8 min",
    published: "2026-07-23",
    summary:
      "Fallback is safe only when the alternate route is compatible with the original request and its product expectations.",
    sections: [
      {
        heading: "Separate product intent from provider IDs",
        body: `<p>Application code should ask for a capability such as “fast support answer” or “high-quality product image,” while configuration maps that intent to a versioned provider route. This keeps migrations out of business logic and makes changes reviewable.</p>`,
      },
      {
        heading: "Make fallback explicit",
        body: `<p>A fallback policy should state which errors qualify, how many attempts are allowed, whether the request is idempotent, and what quality or feature differences are acceptable. Never retry a potentially billable non-idempotent request blindly.</p>
        <pre><code>route:
  primary: provider-a/model-x
  fallback: provider-b/model-y
  on: [timeout, unavailable]
  max_attempts: 2
  budget_usd: 0.08</code></pre>`,
      },
      {
        heading: "Carry one trace across routes",
        body: `<p>Generate an application request ID before selecting a provider. Store the chosen route, provider request ID, latency, status, retry reason, reported usage, and cost evidence under that trace. Without this, fallback improves availability while making incidents and billing harder to understand.</p>`,
      },
      {
        heading: "Prove route equivalence",
        body: `<p>Use contract fixtures to check response fields and product acceptance fixtures to check outputs. The <a href="https://github.com/luyx-66/multi-provider-llm-api-examples">multi-provider examples</a> show a small OpenAI-compatible routing surface you can extend.</p>`,
      },
    ],
  },
  {
    slug: "ai-api-cost-planning",
    title: "Plan AI API cost around accepted work",
    description:
      "Estimate AI API spend using workload units, retry behavior, failed outputs, and product acceptance—not a single headline token price.",
    eyebrow: "FinOps · 7 min",
    published: "2026-07-23",
    summary:
      "The useful cost unit is the product outcome your team accepts, not always the provider billing unit.",
    sections: [
      {
        heading: "Build a workload model",
        body: `<p>For text, record input and output token distributions. For images and video, record resolution, duration, variants, retries, and the percentage of outputs accepted by the workflow. Multiply by daily or monthly volume and keep scenario assumptions visible.</p>`,
      },
      {
        heading: "Include operational amplification",
        body: `<p>Retries, safety rejections, model fallbacks, regenerated outputs, and polling requests can increase the effective cost of one accepted result. Model these separately so improvements to prompts, validation, or routing can be valued.</p>
        <pre><code>effective_cost =
  total_provider_cost
  / accepted_product_outputs</code></pre>`,
      },
      {
        heading: "Date every price source",
        body: `<p>Pricing and availability change. Store the source URL, currency, unit, checked date, and any volume assumptions next to each price. A calculator should accept current prices rather than hard-code a claim that will age silently.</p>`,
      },
      {
        heading: "Use scenario tools",
        body: `<p>Try the <a href="https://github.com/luyx-66/llm-api-cost-calculator">LLM API Cost Calculator</a> for caller-supplied prices or the <a href="https://luyx-66.github.io/affordable-ai-api-comparison/">workload comparison guide</a> for text, image, and video planning.</p>`,
      },
    ],
  },
  {
    slug: "reproducible-ai-image-benchmarks",
    title: "Build a reproducible AI image benchmark",
    description:
      "Preserve prompts, parameters, original outputs, latency, retries, and review criteria so another team can reproduce an image-model comparison.",
    eyebrow: "Evaluation · 9 min",
    published: "2026-07-23",
    summary:
      "A benchmark becomes useful when its raw evidence survives longer than the screenshot in the article.",
    sections: [
      {
        heading: "Freeze the fixture",
        body: `<p>Store the exact prompt, negative prompt if supported, model identifier, size or aspect ratio, seed behavior, safety settings, and number of requested outputs. Keep the fixture separate from conclusions so it can be rerun when a model changes.</p>`,
      },
      {
        heading: "Preserve the original result",
        body: `<p>Download expiring assets, keep the original format, and link each asset to a machine-readable run record. Record submission time, completion time, attempts, task ID when safe to publish, and the provider-reported cost. Never include credentials or signed URLs.</p>`,
      },
      {
        heading: "Review with declared criteria",
        body: `<ol class="steps">
          <li>Instruction following and composition.</li>
          <li>Preservation of required product or character attributes.</li>
          <li>Text, anatomy, marks, and unwanted-object defects.</li>
          <li>Latency, failure, retry, and effective cost evidence.</li>
        </ol>`,
      },
      {
        heading: "Keep the conclusion narrow",
        body: `<p>One prompt and one accepted output demonstrate a workflow, not a universal winner. Publish the test date and limitations beside the finding. Explore the <a href="https://luyx-66.github.io/ai-generation-benchmarks/">open benchmark hub</a> for fifty fixtures, thirty raw outputs, and dated comparison pages.</p>`,
      },
    ],
  },
];
