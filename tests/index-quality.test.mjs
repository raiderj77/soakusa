import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const locations = JSON.parse(read("src/data/locations.json"));
const stateGuides = JSON.parse(read("src/data/state_guides.json"));

test("location pages require structured sources before indexing", () => {
  const locationPage = read("src/app/[state]/[slug]/page.tsx");
  assert.match(locationPage, /robots:\s*\{\s*index:\s*hasVerifiedSources/);
  assert.ok(locations.some((location) => location.guide));
  assert.equal(locations.filter((location) => Array.isArray(location.sources) && location.sources.length > 0).length, 0);
});

test("unsourced generated state guides remain out of search", () => {
  const statePage = read("src/app/[state]/page.tsx");
  assert.match(statePage, /robots:\s*\{\s*index:\s*false/);
  assert.doesNotMatch(statePage, /state_guides|guide_md|faq_md|faqJsonLd|guideHtml|faqHtml/);
  assert.ok(Object.keys(stateGuides).length > 0);
  assert.ok(Object.keys(stateGuides).length < 50);
});

test("sitemap requires structured sources and excludes unsourced state guides", () => {
  const sitemap = read("src/app/sitemap.ts");
  assert.match(sitemap, /const locationGuidePages/);
  assert.match(sitemap, /Array\.isArray\(candidate\.sources\)/);
  assert.doesNotMatch(sitemap, /state_guides|statePages|guideNames/);
  assert.match(sitemap, /\.\.\.locationGuidePages/);
  assert.match(sitemap, /\/browse-states/);
  assert.match(sitemap, /\/disclosure/);
  assert.doesNotMatch(sitemap, /\/editorial/);
  assert.doesNotMatch(sitemap, /lastModified:\s*new Date\(\)/);
});

test("homepage avoids unsupported medical and market-size claims", () => {
  const homepage = read("src/app/page.tsx");
  assert.doesNotMatch(homepage, /The Healing Power|health benefits of soaking|\$500 million|over 1,000 documented/i);
  assert.match(homepage, /cdc\.gov\/healthy-swimming/);
  assert.match(homepage, /does not claim that a spring or its minerals prevent, treat, or cure/i);
});

test("directory previews do not assert public access", () => {
  for (const path of ["src/app/page.tsx", "src/app/[state]/page.tsx", "src/app/[state]/[slug]/page.tsx"]) {
    const source = read(path);
    assert.doesNotMatch(source, /Open for public access/);
    assert.match(source, /Verify current access and conditions before visiting/);
  }
  assert.doesNotMatch(read("src/app/[state]/[slug]/page.tsx"), /Free public access/i);
});

test("homepage metadata, headings, and schema match implemented features", () => {
  const homepage = read("src/app/page.tsx");
  assert.match(homepage, /title:\s*'Hot Springs Directory Across the USA'/);
  assert.ok("Hot Springs Directory Across the USA | Soak USA".length <= 60);
  assert.equal((homepage.match(/<h1\b/g) ?? []).length, 1);
  assert.doesNotMatch(homepage, /SearchAction|LocalBusiness|'@type':\s*'Person'/);
  assert.match(homepage, /mainEntity:FAQS\.map/);
});

test("every location page contains the required health and conditions warning", () => {
  const page = read("src/app/[state]/[slug]/page.tsx");
  assert.match(page, /Consult a healthcare provider before soaking if you have heart conditions, are pregnant, or have compromised immune function\./);
  assert.match(page, /Water temperatures and conditions vary; assess conditions before entering\./);
});

test("static pages declare self canonicals and llms files report the current scope", () => {
  for (const [path, canonical] of [
    ["src/app/about/page.tsx", "https://soakusa.net/about"],
    ["src/app/contact/page.tsx", "https://soakusa.net/contact"],
    ["src/app/disclosure/page.tsx", "https://soakusa.net/disclosure"],
    ["src/app/privacy/page.tsx", "https://soakusa.net/privacy"],
    ["src/app/terms/page.tsx", "https://soakusa.net/terms"],
  ]) {
    assert.match(read(path), new RegExp(`canonical: ["']${canonical.replaceAll(".", "\\.")}["']`));
  }

  const llms = `${read("public/llms.txt")}\n${read("public/llms-full.txt")}`;
  assert.match(llms, /359 mapped/i);
  assert.doesNotMatch(llms, /360\+|MODPA\/GDPR\/CCPA compliant|honors GPC/i);
});
