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
});
