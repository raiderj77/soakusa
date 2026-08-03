# Catalog quarantine record — 2026-08-02

## Decision

Soak USA withdrew the complete legacy location catalog from the public runtime.
The current product exposes zero location records. Browse, state, and location
URLs return a helpful 404 response, and those URLs are absent from the sitemap
and LLM indexes.

This is a fail-closed data-quality decision, not a claim that every legacy
coordinate or name was wrong. Git history preserves the prior corpus for
controlled research; it must not be restored directly to production.

## Evidence that triggered the quarantine

The legacy corpus contained 359 records. A batch reverse-geography audit sent
all 359 coordinate pairs to the U.S. Census Geocoder and received a geography
result for every pair. The declared state disagreed with the returned state for
160 records:

| Legacy state | Census-returned state | Records |
| --- | --- | ---: |
| Montana | Wyoming | 146 |
| Idaho | Montana | 7 |
| Arizona | Nevada | 4 |
| California | Nevada | 2 |
| Nevada | California | 1 |

The Census Geocoder methodology is documented in the [official technical
documentation](https://www.census.gov/programs-surveys/geography/technical-documentation/complete-technical-documentation/census-geocoder.html).
Reverse-geography output establishes an administrative geography check; it does
not establish that a coordinate is a visitor destination or that soaking is
permitted.

The content audit also found:

- all 359 records shared the same `Natural hot spring` amenity label;
- only one record had a city value;
- no record had a structured source or guide record;
- within the same declared state, 15 duplicate-name groups covered 43 records;
- the corpus included geysers, fumaroles, paint pots, and unsafe or prohibited
  thermal features alongside potential soaking locations.

One representative record was Mirror Pool. The National Park Service identifies
it as a Yellowstone thermal feature with a listed temperature of 174.9 °F and
instructs visitors to remain on boardwalks. NPS separately states that soaking in
Yellowstone hot springs is prohibited. See the [NPS Mirror Pool
record](https://www.nps.gov/places/000/mirror-pool.htm) and [Yellowstone swimming
and soaking rules](https://www.nps.gov/yell/planyourvisit/swimming.htm).

## Material removed from the public product

- the legacy `locations.json` runtime payload;
- generated state-guide data;
- browse, state, and location-page output;
- map and direction behavior tied to unvalidated coordinates;
- an unsafe published California roundup; and
- the stale Strawberry Park guide generator.

The site keeps current safety and research pages, official CDC/NPS/USGS links,
editorial standards, corrections, privacy, terms, and commercial disclosure.
Advertising and third-party analytics remain disabled.

## Restoration gate

A location can return only as a small, manually reviewed record. Before it is
public, indexable, mapped, or added to the sitemap, it must have:

1. identity and coordinates verified against an authoritative source;
2. explicit classification as a managed facility, permitted natural soaking
   area, observation-only feature, or closed/prohibited area;
3. an authoritative HTTPS URL, publisher, page title, and human review date;
4. a claim-level mapping showing exactly what each source supports;
5. a visible public citation and correction path;
6. current permission/access language attributed to the responsible operator,
   park, land manager, tribe, or local authority; and
7. negative tests proving malformed, stale, or untrusted source objects cannot
   activate publication, schema, mapping, or sitemap inclusion.

The record must also be included in `src/data/publication-manifest.json` in the
same reviewed change. An empty manifest is an explicit zero-publication state.

No corpus-wide restoration or unsourced programmatic page generation is allowed.
