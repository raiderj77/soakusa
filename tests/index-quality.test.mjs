import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const walk = (path) => {
  const visit = (absolute, prefix) => readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = `${prefix}${entry.name}`;
    return entry.isDirectory()
      ? visit(join(absolute, entry.name), `${relativePath}/`)
      : [relativePath];
  });
  return visit(join(root, path), `${path}/`);
};

const home = read("src/app/page.tsx");
const layout = read("src/app/layout.tsx");
const sitemap = read("src/app/sitemap.ts");
const robots = read("public/robots.txt");
const llms = `${read("public/llms.txt")}\n${read("public/llms-full.txt")}`;

test("the invalid legacy catalog and its generators stay quarantined", () => {
  assert.deepEqual(JSON.parse(read("src/data/locations.json")), []);
  assert.deepEqual(walk("src/data").sort(), [
    "src/data/locations.json",
    "src/data/publication-manifest.json",
  ]);
  assert.deepEqual(JSON.parse(read("src/data/publication-manifest.json")), {
    version: 1,
    publishedLocations: [],
  });
  assert.equal(existsSync(join(root, "src/data/state_guides.json")), false);
  assert.equal(existsSync(join(root, "content/blog/2026-05-03-best-natural-hot-springs-in-california-for-a-weekend-trip.md")), false);
  assert.equal(existsSync(join(root, "scripts/strawberry_park_guide.py")), false);
});

test("retired and arbitrary catalog-shaped URLs return a helpful 404", () => {
  for (const path of [
    "src/app/browse-states/page.tsx",
    "src/app/[state]/page.tsx",
    "src/app/[state]/[slug]/page.tsx",
  ]) {
    const source = read(path);
    assert.match(source, /notFound\(\)/);
    assert.doesNotMatch(source, /permanentRedirect|redirect\(/);
    assert.doesNotMatch(source, /locations\.json|mapbox|LocalBusiness|generateStaticParams/i);
    assert.match(source, /title:\s*['"]Page Not Found['"]/);
  }
  const notFoundPage = read("src/app/not-found.tsx");
  assert.match(notFoundPage, /404 — Page not found/);
  assert.match(notFoundPage, /legacy location catalog was withdrawn/i);
  assert.match(notFoundPage, /robots:\s*\{\s*index:\s*false,\s*follow:\s*true\s*\}/);
});

test("the complete public route inventory stays fail-closed", () => {
  assert.deepEqual(
    walk("src/app").filter((path) => path.endsWith("/page.tsx")).sort(),
    [
      "src/app/[state]/[slug]/page.tsx",
      "src/app/[state]/page.tsx",
      "src/app/about/page.tsx",
      "src/app/browse-states/page.tsx",
      "src/app/contact/page.tsx",
      "src/app/disclosure/page.tsx",
      "src/app/editorial/page.tsx",
      "src/app/page.tsx",
      "src/app/privacy/page.tsx",
      "src/app/terms/page.tsx",
    ],
  );
});

test("the sitemap exposes only current static trust content", () => {
  const expectedSuffixes = ["", "/about", "/contact", "/disclosure", "/editorial", "/privacy", "/terms"].sort();
  const actualSuffixes = [...sitemap.matchAll(/\{\s*url:\s*(base|`\$\{base\}([^`]*)`)/g)]
    .map((match) => match[1] === "base" ? "" : match[2])
    .sort();
  assert.deepEqual(actualSuffixes, expectedSuffixes);
  assert.equal((sitemap.match(/\{\s*url:/g) ?? []).length, expectedSuffixes.length);
  assert.match(sitemap, /new Date\(['"]2026-08-02['"]\)/);
  assert.doesNotMatch(sitemap, /browse-states|locations\.json|\[state\]|\.map\(|new Date\(\)/);
});

test("runtime publication surfaces contain no alternate catalog activation path", () => {
  const appSource = walk("src/app")
    .filter((path) => /\.(?:ts|tsx)$/.test(path))
    .map(read)
    .join("\n");
  assert.doesNotMatch(appSource, /from\s+['"][^'"]*locations\.json|mapbox|GeoCoordinates|LocalBusiness|TouristAttraction|'@type':\s*'Place'/i);
  assert.doesNotMatch(appSource, /href\s*=\s*['"]\/browse-states|['"]\/browse-states['"]/i);
  assert.doesNotMatch(llms, /https:\/\/soakusa\.net\/(?:browse-states|[a-z-]+\/[a-z0-9-]+)/i);
});

test("the homepage accurately describes the reset and links to primary authorities", () => {
  assert.match(home, /Public Location Records[\s\S]*?0|n:\s*['"]0['"][\s\S]*?Public Location Records/i);
  assert.match(home, /legacy location catalog was withdrawn/i);
  assert.match(home, /catalog was withdrawn/i);
  assert.match(home, /https:\/\/www\.cdc\.gov\/healthy-swimming\//);
  assert.match(home, /https:\/\/www\.nps\.gov\/yell\/planyourvisit\/swimming\.htm/);
  assert.match(home, /https:\/\/www\.usgs\.gov\/publications\/thermal-springs-united-states/);
  assert.doesNotMatch(home, /healing|therapeutic|reliable access|filter by development|Top Soaks|Find Your Perfect|market value/i);
  assert.doesNotMatch(home, /every record is rebuilt|records will return|records are rebuilt/i);
  assert.doesNotMatch(home, /usgs\.gov\/programs\/water-resources\/science\/hot-springs/i);
});

test("homepage metadata and structured answers match visible content", () => {
  const pageTitle = "Hot Spring Research & Safety";
  assert.match(home, /title:\s*['"]Hot Spring Research & Safety['"]/);
  assert.ok(pageTitle.length <= 60);
  assert.equal((home.match(/<h1\b/g) ?? []).length, 1);
  assert.match(home, /'@type':\s*'FAQPage'/);
  assert.doesNotMatch(home, /SearchAction|LocalBusiness|'@type':\s*'Person'|dateModified/);
  assert.doesNotMatch(layout, /Hot Springs Directory|Browse mapped|thermal-pool records/i);
});

test("all indexable static pages declare self-canonical URLs", () => {
  const pages = {
    "src/app/page.tsx": "https://soakusa.net",
    "src/app/about/page.tsx": "https://soakusa.net/about",
    "src/app/editorial/page.tsx": "https://soakusa.net/editorial",
    "src/app/contact/page.tsx": "https://soakusa.net/contact",
    "src/app/disclosure/page.tsx": "https://soakusa.net/disclosure",
    "src/app/privacy/page.tsx": "https://soakusa.net/privacy",
    "src/app/terms/page.tsx": "https://soakusa.net/terms",
  };
  for (const [path, canonical] of Object.entries(pages)) {
    assert.match(read(path), new RegExp(`canonical:\\s*['"]${canonical.replaceAll(".", "\\.")}['"]`));
  }
});

test("LLM summaries disclose zero records and the withdrawn legacy product", () => {
  assert.match(llms, /Public location records:\s*0/i);
  assert.match(llms, /legacy[\s\S]{0,80}(catalog|location)[\s\S]{0,80}(withdrawn|not part of the public product)/i);
  assert.match(llms, /visible authoritative source/i);
  assert.doesNotMatch(llms, /359 mapped|browse hot springs|search by state|comprehensive directory/i);
});

test("AI search agents remain discoverable while training agents stay blocked", () => {
  for (const bot of ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Applebot"]) {
    assert.match(robots, new RegExp(`User-agent: ${bot}\\s+Allow: \\/`));
  }
  for (const bot of ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended"]) {
    assert.match(robots, new RegExp(`User-agent: ${bot}\\s+Disallow: \\/`));
  }
});

test("local and CI quality gates include tests, types, and production build", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.match(pkg.scripts.test, /test:privacy[\s\S]*test:index/);
  assert.match(pkg.scripts.typecheck, /tsc --noEmit/);
  assert.match(pkg.scripts.check, /npm run test[\s\S]*npm run typecheck[\s\S]*npm run build/);
  assert.match(read(".github/workflows/empire-check.yml"), /npm run check/);
  assert.doesNotMatch(read(".github/workflows/empire-check.yml"), /canonical author|credential everywhere|CADC-II/i);
});

test("AI project instructions cannot silently restore the unsafe corpus", () => {
  const instructions = read("CLAUDE.md");
  assert.match(instructions, /Do not restore the legacy corpus/i);
  for (const requirement of ["authoritative HTTPS URL", "publisher and page title", "human review date", "exact claims", "visible public citation"]) {
    assert.match(instructions, new RegExp(requirement, "i"));
  }
  assert.match(instructions, /nonempty array[\s\S]*is not verification/i);
  assert.match(instructions, /No thin programmatic pages/i);
  assert.match(instructions, /publication-manifest\.json/);
  assert.match(instructions, /empty manifest means there are zero publishable location records/i);
});
