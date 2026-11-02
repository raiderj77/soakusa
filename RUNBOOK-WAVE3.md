# RUNBOOK — SoakUSA Wave 3 catalog rebuild package (working-tree only, UNPUBLISHED)

Owner: Jason Ramirez. Authorization: Portfolio Wave 3 delegation, 2026-10-25.
HARD GATES: $0 spend. NO git commit/push/merge/deploy. Working-tree changes only.
No accounts, sends, purchases.

## CRITICAL repo rules (CLAUDE.md + docs/catalog-quarantine-2026-08-02.md + tests)
- Public location records are 0 BY DESIGN. src/data/locations.json MUST stay []
  and src/data/publication-manifest.json MUST stay {"version":1,"publishedLocations":[]}.
- tests/index-quality.test.mjs asserts: locations.json == [], manifest empty,
  and walk("src/data") == exactly [locations.json, publication-manifest.json].
  Therefore the starter dataset MUST NOT live in src/data/. It goes in
  docs/catalog-rebuild-2026-10-25/ as an UNPUBLISHED staging package.
- Do NOT touch src/app, sitemap, public/llms*.txt, robots, or any route.
- Do NOT restore any legacy record. The legacy format (from git history,
  pre-quarantine) was: name, slug, state, stateSlug, city, lat, lng,
  description, amenities[] — with a single generic "Natural hot spring"
  amenity, no sources, no classification. That format FAILED the audit.
  The rebuild schema below keeps those legacy fields for compatibility and
  ADDS the gate fields CLAUDE.md requires.

## Inputs provided by orchestrator (verified 2026-10-25 via web search against
operator / NPS / BLM / USFS / municipal sources)
- File `soak-dataset.json` placed next to this runbook in the repo root by the
  orchestrator: exactly 25 records. Copy it VERBATIM to
  docs/catalog-rebuild-2026-10-25/starter-dataset.json — do not edit names,
  coordinates, URLs, classifications or descriptions, do not add records,
  do not remove records. If the file is missing or does not parse or does not
  contain exactly 25 records, STOP and report that in CHANGES.md instead of
  inventing data.
- Deliberately EXCLUDED by the orchestrator (note in sources.md):
  Esalen Institute (Slates Hot Springs, CA) — published coordinates conflicted
  between sources (NOT VERIFIED); Ten Thousand Waves (Santa Fe, NM) — operator
  model is a Japanese-style soaking spa using well water, not a natural hot
  spring, so it does not belong in a natural-springs catalog without a
  separate managed-facility explainer; Yellowstone thermal features — soaking
  is prohibited (observation-only / closed), excluded from a soaking starter
  set on purpose.

## Tasks
1. Create docs/catalog-rebuild-2026-10-25/README.md: purpose, unpublished
   status, why the package lives outside src/data, the restoration gate
   (from CLAUDE.md: authoritative HTTPS URL, publisher + page title, human
   review date, exact claims supported, visible public citation, plus a
   same-change publication-manifest update and negative tests before any
   record can go public), and the exact owner steps to publish the first
   record later.
2. Create docs/catalog-rebuild-2026-10-25/sources.md — source list for
   rebuilding the catalog from public sources. Use ONLY these (all verified
   live on 2026-10-25):
   - Operator / facility official sites (primary for managed facilities) —
     list the 17 operator URLs that appear in starter-dataset.json sources.
   - National Park Service, Lake Mead (Arizona/Ringbolt Hot Springs):
     http://www.nps.gov/lake/planyourvisit/hikeazhot.htm
   - U.S. Forest Service recreation pages: Umpqua
     https://www.fs.usda.gov/r06/umpqua/recreation/umpqua-hot-springs-trailhead ;
     Bagby https://www.fs.usda.gov/recarea/mthood/recarea/?recid=52880 ;
     Fifth Water https://www.fs.usda.gov/recarea/uwcnf/recarea/?recid=9861 ;
     Granite https://www.fs.usda.gov/r04/bridger-teton/recreation/granite-hot-springs-pool
   - Bureau of Land Management: Goldbug https://www.blm.gov/visit/goldbug-hot-springs
   - City of Ouray (municipal operator): https://ourayhotsprings.com/
   - Saratoga-Platte Valley Chamber (local authority listing, needs Town of
     Saratoga re-confirmation): https://www.saratogachamber.info/play/mineral-hot-springs
   - USGS Thermal Springs in the United States (background/identity only,
     never access permission): https://www.usgs.gov/publications/thermal-springs-united-states
   - U.S. Census Geocoder (state-assignment cross-check that caught the legacy
     errors): https://www.census.gov/programs-surveys/geography/technical-documentation/complete-technical-documentation/census-geocoder.html
   - CDC managed hot-tub safety guidance (safety framing only):
     https://www.cdc.gov/healthy-swimming/safety/what-you-can-do-to-stay-healthy-in-hot-tubs.html
   - NPS Yellowstone swimming/soaking rules (example of prohibited soaking —
     why observation-only features are excluded):
     https://www.nps.gov/yell/planyourvisit/swimming.htm
   For each source: publisher, what claim types it can support, what it can
   NEVER support (e.g. secondary/background sources cannot establish current
   permission, closures, fees or hazards), and the review cadence.
   Also add a "sources to avoid" section: OSM-only reseeds (that is what the
   withdrawn corpus used), aggregator/guide sites as sole source, AI-generated
   lists, and any source without a named responsible publisher.
3. Create docs/catalog-rebuild-2026-10-25/schema-and-plan.md: document the
   record schema exactly as used in starter-dataset.json — legacy-compatible
   fields (name, slug, state, stateSlug, city, lat, lng, description,
   amenities) PLUS classification (one of managed-soaking-facility |
   authority-permitted-natural-soaking-area | observation-only-thermal-feature
   | closed-or-prohibited-area), sources[] each with url, publisher, title,
   reviewDate, supports[], and top-level status field semantics: every starter
   record is a draft (do NOT add a status field to the JSON itself — document
   that the file's location outside src/data IS its unpublished status).
   Include: validation checklist per record, Census-Geocoder state cross-check
   step, classification decision rules, the manifest + negative-test work
   required before publication, and a phased plan (Phase 1: this package;
   Phase 2: owner picks first 5, re-verify at publish time; Phase 3: build
   route/schema/tests in a separate approved change; Phase 4: publish).
4. Copy soak-dataset.json verbatim to
   docs/catalog-rebuild-2026-10-25/starter-dataset.json, then delete the
   root-level soak-dataset.json input copy. Validate with node: parses,
   25 records, unique slugs, every record has classification + non-empty
   sources with https/http URL, publisher, title, reviewDate 2026-10-25,
   non-empty supports, lat/lng in US bounds. Report counts by classification
   and by state in CHANGES.md.
5. Write CHANGES.md at repo root: what was produced (file paths), validation
   results, explicit statement that locations.json and publication-manifest
   remain empty/unchanged and no route/sitemap/llms file was touched, the
   excluded-entries note, known re-verification needs before publication
   (Bagby current status, Granite seasonal reopening, Fairmont guest-only
   pool access, Saratoga town confirmation, Fifth Water Utah DEQ bacteria
   advisory), and "To go live" owner steps.
6. VERIFY: run `npm run test` equivalent — the package.json scripts are
   test:privacy and test:index (use /opt/homebrew/bin/npm if needed) — ONLY
   if node_modules exists; do NOT run npm ci/install. Report results
   verbatim. Also `git status --porcelain` summary in CHANGES.md.
7. Final message: files created, validation counts, test results, blockers.
   Leave the working tree dirty (uncommitted).
