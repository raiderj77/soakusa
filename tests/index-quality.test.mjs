import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const locations = JSON.parse(read("src/data/locations.json"));
const stateGuides = JSON.parse(read("src/data/state_guides.json"));

test("only editorially enriched location pages are indexable", () => {
  const locationPage = read("src/app/[state]/[slug]/page.tsx");
  assert.match(locationPage, /robots:\s*\{\s*index:\s*!!\(loc as any\)\.guide/);
  assert.ok(locations.some((location) => location.guide));
  assert.ok(locations.some((location) => !location.guide));
});

test("only states with editorial guides are indexable", () => {
  const statePage = read("src/app/[state]/page.tsx");
  assert.match(statePage, /robots:\s*\{\s*index:\s*hasEditorialGuide/);
  assert.ok(Object.keys(stateGuides).length > 0);
  assert.ok(Object.keys(stateGuides).length < 50);
});

test("sitemap includes curated state and location guide pages", () => {
  const sitemap = read("src/app/sitemap.ts");
  assert.match(sitemap, /filter\(\(s\) => guideNames\.has\(s\.name\)\)/);
  assert.match(sitemap, /const locationGuidePages/);
  assert.match(sitemap, /\.filter\(\(location\) => !!\(location as \{ guide\?: unknown \}\)\.guide\)/);
  assert.match(sitemap, /\.\.\.locationGuidePages/);
});
