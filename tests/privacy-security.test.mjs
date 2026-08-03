import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const layout = read("src/app/layout.tsx");
const privacy = read("src/app/privacy/page.tsx");
const disclosure = read("src/app/disclosure/page.tsx");
const about = read("src/app/about/page.tsx");
const ads = read("public/ads.txt");
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
  assert.match(disclosure, /does not currently load Google AdSense/i);
  assert.doesNotMatch(disclosure, /displays ads through Google AdSense/i);
  assert.match(ads, /pub-7171402107622932/);
  assert.match(ads, /^OWNERDOMAIN=soakusa\.net$/m);
  assert.doesNotMatch(ads, /^MANAGERDOMAIN=/m);
});

test("sitewide navigation remains first-party and commercial links are explicit", () => {
  assert.doesNotMatch(layout, /fibertools|mindchecktools|flipmycase|creatorrevenuecalculator|contractextract|medicalbillreader|taxbreaktools|524tracker|aibusinessalternative|publicboatramps/i);
  assert.match(layout, /Affiliated shop/);
  assert.match(layout, /may receive revenue from a purchase/i);
  assert.match(disclosure, /affiliated with Soak USA&apos;s[\s\S]*publisher/i);
});

test("privacy and about copy avoid blanket legal or accuracy guarantees", () => {
  assert.doesNotMatch(privacy, /MODPA Compliance|As of April 1, 2026|complies with the Maryland/i);
  assert.match(privacy, /took effect October 1, 2025/i);
  assert.match(privacy, /does not claim that every listed statutory duty or right\s+applies/i);
  assert.doesNotMatch(about, /accurate, comprehensive information|comprehensive directory/i);
  assert.match(about, /zero public location records/i);
  assert.match(about, /material state-assignment and feature-classification errors/i);
});

test("frame protections and restrictive resource directives are enabled", () => {
  assert.match(policy, /X-Frame-Options"[\s\S]*DENY/);
  assert.match(policy, /frame-ancestors 'none'/);
  assert.match(policy, /object-src 'none'/);
  assert.match(policy, /base-uri 'self'/);
  assert.match(policy, /upgrade-insecure-requests/);
  assert.doesNotMatch(policy, /mapbox|api\.mapbox\.com/i);
});

test("keyboard navigation and form controls have explicit accessibility hooks", () => {
  assert.match(layout, /className="skip-link" href="#main-content"/);
  assert.match(layout, /<main id="main-content"/);
  assert.match(layout, /aria-label="Primary navigation"/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /outline:\s*3px solid var\(--white\)/);
  assert.match(styles, /box-shadow:\s*0 0 0 5px var\(--text\)/);
  assert.match(styles, /prefers-reduced-motion/);
  for (const id of ["contact-name", "contact-email", "contact-subject", "contact-message"]) {
    assert.match(contact, new RegExp(`htmlFor="${id}"`));
    assert.match(contact, new RegExp(`id="${id}"`));
  }
});

test("core text and action colors meet WCAG AA contrast", () => {
  const hex = (name) => {
    const match = styles.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "i"));
    assert.ok(match, `missing --${name}`);
    return match[1];
  };
  const rgb = (value) => value.match(/[0-9a-f]{2}/gi).map((part) => parseInt(part, 16) / 255);
  const luminance = (value) => rgb(value)
    .map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
    .reduce((total, channel, index) => total + channel * [0.2126, 0.7152, 0.0722][index], 0);
  const contrast = (a, b) => {
    const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (light + 0.05) / (dark + 0.05);
  };

  assert.ok(contrast(hex("terra"), hex("ivory")) >= 4.5);
  assert.ok(contrast(hex("terra"), hex("white")) >= 4.5);
  assert.ok(contrast(hex("pebble"), hex("ivory")) >= 4.5);
  assert.ok(contrast(hex("terra-lt"), "#2a3d20") >= 4.5);
  assert.ok(contrast(hex("white"), "#2a3d20") >= 3);
  assert.ok(contrast(hex("text"), hex("white")) >= 3);
  assert.doesNotMatch(layout, /rgba\(232,221,208,0\.(?:[0-5]|6[0-4])\)/);
});
