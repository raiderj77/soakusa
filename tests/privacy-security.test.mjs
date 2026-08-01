import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const layout = read("src/app/layout.tsx");
const privacy = read("src/app/privacy/page.tsx");
const policy = read("next.config.ts");
const styles = read("src/app/globals.css");
const contact = read("src/app/contact/page.tsx");

test("optional advertising and analytics do not execute", () => {
  assert.doesNotMatch(layout, /googletagmanager|googlesyndication\.com\/pagead|clarity\.ms|Cookiebot/i);
  assert.doesNotMatch(policy, /unsafe-eval|googletagmanager|googlesyndication|clarity\.ms|Cookiebot/i);
});

test("obsolete tracking cookie middleware is absent", () => {
  assert.equal(existsSync(join(root, "src/middleware.ts")), false);
  assert.equal(existsSync(join(root, "src/lib/gpc.ts")), false);
});

test("public disclosures and publisher verification match production", () => {
  assert.match(privacy, /not\s+currently\s+enabled/i);
  assert.match(read("public/ads.txt"), /pub-7171402107622932/);
});

test("frame protections and restrictive resource directives are enabled", () => {
  assert.match(policy, /X-Frame-Options"[\s\S]*DENY/);
  assert.match(policy, /frame-ancestors 'none'/);
  assert.match(policy, /object-src 'none'/);
  assert.match(policy, /base-uri 'self'/);
  assert.match(policy, /upgrade-insecure-requests/);
});

test("keyboard navigation and form controls have explicit accessibility hooks", () => {
  assert.match(layout, /className="skip-link" href="#main-content"/);
  assert.match(layout, /<main id="main-content"/);
  assert.match(layout, /aria-label="Primary navigation"/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /prefers-reduced-motion/);
  for (const id of ["contact-name", "contact-email", "contact-subject", "contact-message"]) {
    assert.match(contact, new RegExp(`htmlFor="${id}"`));
    assert.match(contact, new RegExp(`id="${id}"`));
  }
});
