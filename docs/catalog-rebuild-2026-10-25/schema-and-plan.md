# Schema and staged publication plan

## Exact starter record shape

The JSON root is an array of 25 objects. Every object has exactly these fields; there is no status field in the supplied JSON:

| Field | Type and meaning |
| --- | --- |
| name | string; supplied feature/facility name |
| slug | string; unique record identifier |
| state | string; declared state name |
| stateSlug | string; state identifier |
| city | string; may be empty for natural areas |
| lat | number; latitude |
| lng | number; longitude |
| description | string; supplied draft description, subject to claim review |
| amenities | string[]; supplied labels, each requiring support before publication |
| classification | enum below; draft classification, not proof of current permission |
| sources | nonempty array of the source objects below |

Each source has exactly `url` (HTTP/HTTPS string in staging), `publisher` (nonempty string), `title` (nonempty page-title string), `reviewDate` (YYYY-MM-DD string, supplied as 2026-10-25), and `supports` (nonempty string[] describing the exact claim scope). Publication requires authoritative HTTPS and actual human review. A populated sources array alone is not verification.

Top-level status semantics: every starter record is a **draft**. Location outside src/data is its unpublished status. Do not add a `status` key to the JSON or interpret its absence as approval. Future explicit status handling requires a separately reviewed schema change; only validated records with same-change manifest authorization may activate publication.

## Classification decision rules

- `managed-soaking-facility`: responsible operator identifies and manages a soaking facility. Confirm operating model and access restrictions; do not infer unrestricted public access.
- `authority-permitted-natural-soaking-area`: responsible authority explicitly permits soaking in a natural area. Re-check closures and conditions at publication; the draft category does not establish today's permission. Preserve supplied Granite and Saratoga classifications pending authority confirmation.
- `observation-only-thermal-feature`: thermal feature intended only for observation; never present as a soaking destination.
- `closed-or-prohibited-area`: authority prohibits access/soaking or closes the area; no soaking recommendation. Closure evidence overrides a soaking label for publication.

Never infer permission or natural-spring identity from coordinates, names, photos, amenities or third-party maps. A well-water spa needs separate editorial treatment. Never instruct touching uncontrolled thermal water to test it; CDC maintained-hot-tub guidance does not govern natural thermal areas.

## Per-record validation checklist

- Verify all fields/types, unique slug and correct stateSlug; distinguish facility identity from the geographic thermal feature.
- Validate finite coordinates within US bounds. This package uses a broad US envelope (latitude 18–72, longitude -180–-66), including Alaska; bounds alone do not establish state or destination accuracy.
- Submit each coordinate pair to Census Geocoder reverse geography, record returned state, benchmark/vintage and review date, and compare with state/stateSlug. Resolve any disagreement before publication. This packaging pass does not claim to have run the Census service.
- Confirm precise coordinates, destination/access point and classification against authoritative evidence. Verify every description/amenity claim against sources[].supports; do not expand a source's scope silently.
- Verify authoritative publisher/trust policy, HTTPS, page title, actual human date, exact supported claims and fresh access/closure evidence. Define and test source freshness limits for the later implementation.
- Resolve pending checks, provide visible public citations and correction path, and require same-change manifest authorization plus negative tests before any public surface activates.

## Phases

1. **This package:** preserve the verified input unchanged in unpublished documentation staging. Keep public records at zero.
2. **Owner selects first five:** manually re-verify each at publication time, including Census state checks, claims and access. Selection does not publish anything.
3. **Separate approved change:** build route/schema/source validation, manifest enforcement and tests. Reject malformed (including arbitrary URLs/empty objects), stale or untrusted sources and absent manifest entries across routes, indexing, maps, schema, links and sitemap. Revise zero-record tests only into explicit reviewed allowlist assertions.
4. **Publish:** after all gates pass and owner release authorization, activate only the reviewed records with the same-change manifest update.

## First-record owner procedure

1. Select one draft for the first publication from the owner's first-five shortlist; do not bulk restore legacy data.
2. At publication time, have a human re-open the responsible authority's sources. Verify identity, coordinates, classification, current permission, closures, fees, hazards and applicable access restrictions. Resolve the specific pending checks below. Record the actual human review date and exact supported claims; the supplied 2026-10-25 date is provenance, not a substitute for a new review.
3. Resolve every HTTP source to a verified authoritative HTTPS page and record its publisher and exact page title. Do not mechanically rewrite schemes or assume a redirect establishes trust. Remove or substantiate unsupported claims in the proposed public record.
4. Cross-check the coordinates' state with the Census Geocoder and retain the result and methodology. Resolve disagreements with the responsible authority before proceeding.
5. In a separate owner-approved implementation change, build source trust/freshness validation, a visible public citation and correction path, and the route/schema needed for this one record. Add negative tests for malformed, stale and untrusted sources and for missing manifest authorization; these must prevent publication, indexing, mapping, structured data, internal links and sitemap inclusion.
6. Add only the reviewed public record to runtime data and its explicit entry to src/data/publication-manifest.json in the same reviewed change. Keep all other drafts outside runtime. Update the existing zero-record assertions deliberately to enforce the reviewed allowlist; do not simply remove the quarantine tests.
7. Run the required checks for that later change (CLAUDE.md: npm ci, npm run check, npm audit --omit=dev, git diff --check), review mobile/desktop public pages and retained 404s, and verify that only the authorized record activates. Obtain the owner's release authorization before committing, merging or deploying. This runbook authorizes none of those actions.

## Re-verification needs

- Bagby: confirm current opening/closure status with the Forest Service.
- Granite: confirm actual seasonal reopening and road status; a planned reopening is not proof of access.
- Fairmont: confirm guest/member-only pool access directly with the operator.
- Saratoga: obtain Town of Saratoga confirmation of ownership, permission, fees and hours; Chamber identity evidence is insufficient.
- Fifth Water: confirm current Utah DEQ bacteria advisory and Forest Service closures/conditions. No new DEQ URL is supplied or invented in this package.
- Eight supplied HTTP source URLs need verified authoritative HTTPS replacements before publication.
- Reconcile every description and amenity with exact supports[] claims: general-location support alone does not verify precise coordinates, temperatures, permission or safety.
