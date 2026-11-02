# Wave 3 catalog rebuild — UNPUBLISHED

This is a $0, working-tree-only research staging package for 25 supplied starter records. It publishes zero locations and is not approval to visit or a current access directory. No accounts, sends, purchases, commits, pushes, merges or deployments are authorized.

The legacy 359-record corpus failed geography and classification audits. This package lives outside `src/data` because runtime data must contain exactly `locations.json` ([]) and `publication-manifest.json` ({"version":1,"publishedLocations":[]}). Existing tests enforce that quarantine. No legacy record is restored and no route, sitemap, robots or LLM index changes are part of this package.

## Restoration gate

CLAUDE.md and the quarantine record require authoritative HTTPS URL, publisher and page title, human review date, exact claims supported, and visible public citation. Identity and coordinates, explicit classification and current permission must be verified with the responsible authority. Include a visible correction path. Structural validity alone is not verification. Before any public record, the same reviewed change must update the publication manifest and include negative tests blocking malformed, stale and untrusted sources across publication surfaces. An empty manifest means zero publishable records.

The source dates and verification statements are supplied by the orchestrator, verified 2026-10-25 according to RUNBOOK-WAVE3.md; this packaging task does not represent a fresh human source review. The JSON is preserved byte-for-byte. See sources.md and schema-and-plan.md.

## Exact owner steps to publish the first record later

1. Select one draft for the first publication from the owner's first-five shortlist; do not bulk restore legacy data.
2. At publication time, have a human re-open the responsible authority's sources. Verify identity, coordinates, classification, current permission, closures, fees, hazards and applicable access restrictions. Resolve the specific pending checks below. Record the actual human review date and exact supported claims; the supplied 2026-10-25 date is provenance, not a substitute for a new review.
3. Resolve every HTTP source to a verified authoritative HTTPS page and record its publisher and exact page title. Do not mechanically rewrite schemes or assume a redirect establishes trust. Remove or substantiate unsupported claims in the proposed public record.
4. Cross-check the coordinates' state with the Census Geocoder and retain the result and methodology. Resolve disagreements with the responsible authority before proceeding.
5. In a separate owner-approved implementation change, build source trust/freshness validation, a visible public citation and correction path, and the route/schema needed for this one record. Add negative tests for malformed, stale and untrusted sources and for missing manifest authorization; these must prevent publication, indexing, mapping, structured data, internal links and sitemap inclusion.
6. Add only the reviewed public record to runtime data and its explicit entry to src/data/publication-manifest.json in the same reviewed change. Keep all other drafts outside runtime. Update the existing zero-record assertions deliberately to enforce the reviewed allowlist; do not simply remove the quarantine tests.
7. Run the required checks for that later change (CLAUDE.md: npm ci, npm run check, npm audit --omit=dev, git diff --check), review mobile/desktop public pages and retained 404s, and verify that only the authorized record activates. Obtain the owner's release authorization before committing, merging or deploying. This runbook authorizes none of those actions.

## Pending checks

- Bagby: confirm current opening/closure status with the Forest Service.
- Granite: confirm actual seasonal reopening and road status; a planned reopening is not proof of access.
- Fairmont: confirm guest/member-only pool access directly with the operator.
- Saratoga: obtain Town of Saratoga confirmation of ownership, permission, fees and hours; Chamber identity evidence is insufficient.
- Fifth Water: confirm current Utah DEQ bacteria advisory and Forest Service closures/conditions. No new DEQ URL is supplied or invented in this package.
- Eight supplied HTTP source URLs need verified authoritative HTTPS replacements before publication.
- Reconcile every description and amenity with exact supports[] claims: general-location support alone does not verify precise coordinates, temperatures, permission or safety.
