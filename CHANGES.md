# Wave 3 catalog rebuild package — UNPUBLISHED

Produced:

- `docs/catalog-rebuild-2026-10-25/README.md`: purpose, quarantine/restoration gate and exact first-record owner procedure.
- `docs/catalog-rebuild-2026-10-25/sources.md`: 17 operator URLs, all runbook-listed authority/background references, claim limits, review cadences, exclusions and sources to avoid.
- `docs/catalog-rebuild-2026-10-25/schema-and-plan.md`: exact starter schema, draft status semantics, validation checklist, Census state cross-check, classifications and phased publication plan.
- `docs/catalog-rebuild-2026-10-25/starter-dataset.json`: verbatim supplied input, copied and byte-compared before deleting the root `soak-dataset.json` input copy.
- `CHANGES.md`: this report. `RUNBOOK-WAVE3.md` was pre-existing and remains unmodified/untracked.

## Validation results

Node validation passed: JSON parses as an array of exactly 25 records, 25 unique slugs; all classifications belong to the required enum; every record has nonempty sources with HTTP/HTTPS URL, nonempty publisher/title, reviewDate exactly 2026-10-25 and nonempty string supports. All coordinates are finite and inside the broad US envelope latitude 18–72, longitude -180–-66, including Alaska. This is a bounds check, not a new Census state verification or source review.

The copy was byte-for-byte equal before input deletion. SHA-256: `1fba394d6e5c19546baa2e04471c0ab7292cf1157280c8b635dc2fe3d1b8684b`. No names, coordinates, URLs, classifications, descriptions or other JSON fields were edited; no records or status fields were added or removed.

| Classification | Records |
| --- | ---: |
| managed-soaking-facility | 18 |
| authority-permitted-natural-soaking-area | 7 |
| observation-only-thermal-feature | 0 |
| closed-or-prohibited-area | 0 |
| Total | 25 |

| State | Records |
| --- | ---: |
| Alaska | 1 |
| Arizona | 1 |
| California | 4 |
| Colorado | 5 |
| Idaho | 2 |
| Montana | 3 |
| New Mexico | 1 |
| Oregon | 3 |
| Utah | 3 |
| Wyoming | 2 |
| Total | 25 |

`src/data/locations.json` remains [] and `src/data/publication-manifest.json` remains {"version":1,"publishedLocations":[]}; both were byte-compared with HEAD and are unchanged. src/data still contains exactly those two files. No route, src/app, sitemap, robots or public/llms file was touched. Public locations remain zero.

## Deliberately excluded

- Esalen Institute / Slates Hot Springs, California: published coordinate conflicts; NOT VERIFIED.
- Ten Thousand Waves, Santa Fe, New Mexico: Japanese-style well-water soaking spa rather than a natural hot spring; needs a separate managed-facility explainer.
- Yellowstone thermal features: prohibited soaking; observation-only/closed features deliberately excluded from the soaking starter set.

## Publication blockers and re-verification needs

- Bagby current status must be confirmed with the Forest Service.
- Granite actual seasonal reopening and road status must be confirmed; planned reopening does not establish access.
- Fairmont guest/member-only pool access needs operator confirmation.
- Saratoga town ownership, permission, fees and hours need Town of Saratoga confirmation; Chamber listing is insufficient.
- Fifth Water current Utah DEQ bacteria advisory and Forest Service access/closure status require confirmation.
- Eight HTTP source URLs must be resolved to verified authoritative HTTPS pages before publication. They remain verbatim in staging.
- All claims, amenities, precise coordinates and classifications need claim-level human review at publication time. Supplied supports often cover general location, not every descriptive claim. Dates are orchestrator-provided provenance, not a fresh human review by this task. Census reverse-geography checks remain a publication step.

## To go live — owner steps

1. Pick the first five drafts for manual review, then select the first record; selection alone does not publish anything.
2. Re-verify identity, precise coordinates, classification, access, closures and every proposed claim with responsible authorities at publication time. Resolve all applicable blockers above and verify authoritative HTTPS URLs, publishers, page titles, actual human review dates and exact supported claims.
3. Cross-check state with Census Geocoder; retain benchmark/vintage, returned state and review date; resolve any discrepancy.
4. In a separate approved change, build route/schema and trusted-source/freshness validation, visible public citations and correction path. Add negative tests blocking malformed, stale, untrusted and non-manifest records from routes, indexing, mapping, structured data, links and sitemap.
5. Add only the reviewed runtime record and its explicit publication-manifest entry in the same reviewed change. Replace zero-record assertions with a reviewed allowlist while keeping other drafts quarantined.
6. Complete CLAUDE.md checks for that later implementation (npm ci, npm run check, npm audit --omit=dev, git diff --check), mobile/desktop review and retained-404 verification. Obtain separate owner release authorization before commit, merge or deployment. No release actions are authorized or performed here.

## Verification output

Tests were skipped exactly as the runbook requires when node_modules is absent. No dependencies were installed. Verbatim verification output:

```text
SKIPPED: npm run test (test:privacy and test:index); node_modules does not exist. No npm ci/install run.
PASS: runtime data empty and byte-for-byte unchanged; src/data contains exactly two permitted files; no tracked src/app, src/data or public changes; root input removed.
```

`git diff --check`: exit 0, no output. No test-pass claim is made. Build/typecheck/audit/browser checks are deferred to the separately authorized publication implementation; this change contains only unpublished staging documentation/data.

Final `git status --porcelain` summary (default collapsed untracked directory output):

```text
?? CHANGES.md
?? RUNBOOK-WAVE3.md
?? docs/catalog-rebuild-2026-10-25/
```

Working tree intentionally left dirty and uncommitted. $0 spend; no accounts, sends, purchases, git commit/push/merge or deployment.
