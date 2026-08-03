# Soak USA — Project Instructions

> Source of truth for AI-assisted work on this repository. Last reviewed: 2026-08-02.

## Current Product State

- Domain: `soakusa.net`
- Framework: Next.js on Vercel
- Product: authority-first hot-spring research and safety publication
- Public location records: **0**
- The legacy 359-record corpus was withdrawn after a data audit found material geography and feature-classification errors.
- Legacy browse, state, and location URLs return a helpful 404 response.

Do not restore the legacy corpus, counts, state groupings, guides, maps, directions, amenity labels, or search pages.

## Publication Gate for a Future Location

A location may be proposed only as a small, manually reviewed record. It must not be public, indexable, mapped, or added to the sitemap until it has a validated source record containing:

1. an authoritative HTTPS URL;
2. publisher and page title;
3. a human review date;
4. the exact claims the source supports; and
5. a visible public citation.

Preferred sources are the responsible facility operator, park, land manager, tribe, or local authority. Secondary sources cannot establish current permission, closures, fees, hazards, or emergency information.

Validate source objects structurally and by trust policy. A nonempty array, arbitrary URL, empty object, or generated prose is not verification. Add negative tests for malformed, stale, and untrusted sources before reintroducing any location route.

Every public location must also be listed explicitly in `src/data/publication-manifest.json`. An empty manifest means there are zero publishable location records. Adding a data file, route, schema object, internal link, or sitemap entry without the same reviewed manifest change is a release blocker.

## Classification and Safety

Never treat all thermal features as soakable hot springs. Keep these categories distinct:

- managed soaking facility;
- authority-permitted natural soaking area;
- observation-only thermal feature; and
- closed or prohibited area.

Do not infer permission from coordinates, names, photos, or third-party maps. Do not tell visitors to touch uncontrolled thermal water to test it. Distinguish CDC guidance for maintained hot tubs from rules for natural thermal areas. The responsible authority controls access, closures, and emergency information. Soak USA does not provide medical advice.

## Content Integrity

- No fabricated firsthand experience, health benefit, therapeutic, price, temperature, access, clothing, fee, or safety claims.
- No automatic `dateModified`, fake review dates, or future-publication promises.
- No thin programmatic pages, generated state guides, or reciprocal portfolio link rings.
- No Person schema or credential used to imply expertise outside its real scope. The owner-approved public identity may remain where explicitly authorized and relevant; CADC-II credentials do not establish hot-spring, travel, or medical authority.
- Use the Soak USA editorial desk and `contact@soakusa.net` for public accountability and corrections.

## SEO, AEO, and GEO

- Indexed content must be accurate, original, useful, and consistent with the visible page.
- Keep one H1, self-canonical metadata, visible primary sources, concise answers, and matching structured data.
- `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, and `PerplexityBot` may access public pages.
- Training-only crawlers remain blocked.
- Do not put retired browse or location routes in `sitemap.xml` or `llms.txt`.

## Privacy, Advertising, and Monetization

- Google AdSense, other ad scripts, Google Analytics, and Microsoft Clarity are disabled.
- `ads.txt` may retain the authorized seller record and `OWNERDOMAIN`; it must not claim a false `MANAGERDOMAIN`.
- Do not enable advertising until the site has a meaningful body of authority-backed content, account approval, and all required consent controls.
- The only current commercial link is the clearly labeled publisher-affiliated Etsy shop. Do not add Amazon or other affiliate claims without verified account approval and explicit authorization.

## UX, Accessibility, and Security

- WCAG AA contrast, keyboard access, visible focus, reduced-motion support, and 44–48px interactive targets.
- Test at 320px/390px mobile and desktop with no horizontal overflow.
- Maintain restrictive security headers and do not broaden CSP for disabled vendors.

## Required Verification

Run before proposing a merge:

```text
npm ci
npm run check
npm audit --omit=dev
git diff --check
```

Also verify the home, about, editorial, disclosure, privacy, terms, and contact pages in a real browser at mobile and desktop widths. Confirm retired catalog URLs return 404 and no advertising or analytics scripts load.
