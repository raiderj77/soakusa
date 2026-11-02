# SoakUSA — Wave 4 verification (2026-10-25)

Staging-only verification of `starter-dataset.json` (25 entries). Nothing here publishes anything: the repo's restoration gate (authoritative HTTPS source + route build + manifest entry + negative tests in a separate approved change) still applies to every record. Method: U.S. Census Geocoder reverse-geography check run by the coordinator against all 25 coordinate pairs (benchmark Public_AR_Current, vintage Current_Current), plus targeted re-verification of the 5 wave-3 publish-time flags against current authoritative sources (accessed 2026-10-25).

## Census Geocoder check — 25 of 25 state matches, 0 mismatches (PROVEN)

Every starter coordinate pair falls inside the state its record claims — the exact check the withdrawn legacy catalog failed (160/359 state mismatches in the 2026-08 audit). Counties returned: Taos NM; Routt, Garfield ×2, Ouray, Dolores CO; Mohave AZ; Riverside ×2, Lake, Colusa CA; Douglas, Clackamas, Marion OR; Lemhi, Bannock ID; Park, Sanders, Silver Bow MT; Utah, Box Elder, Sevier UT; Teton, Carbon WY; Fairbanks North Star Borough AK. Full per-entry results: coordinator worksheet `geocoder-results.json` (wave-4 workpapers).

## The 5 wave-3 flags — re-verified

1. **bagby-hot-springs — RESOLVED: CLOSED.** USFS Austin Fire Closure Order No. 06-06-05-26-19 (Oct 16 – Dec 31, 2026); Forest Roads 63/70 closed, Bagby "remains inaccessible and closed" (USFS via KXL). Third-party maps/apps showing it open are wrong per USFS. **Do not publish as open.**
2. **granite-hot-springs-pool — STILL HELD.** The USFS page is internally conflicting (undated "Site Closed… reopen May 22" banner vs. "summer season ends October 31" on the same page) and carries no dated 2026 update. Current status is NOT VERIFIED from the authoritative source.
3. **fairmont-hot-springs-resort — RESOLVED: CORRECTED.** The operator's own hot-springs page states pools are open only to registered overnight guests, condominium-association guests, and pool/golf members; RV Park and Chalet guests may use pools for a daily fee. There is **no public day use**. The dataset description must not imply public/day-use access when this record is prepared for publication.
4. **saratoga-hobo-hot-springs — STILL HELD (partially corroborated).** The Town of Saratoga's own Hobo Pool page confirms the pool and gives Town contact channels but is silent on fee, hours, and ownership. Discover Carbon County (county visitors council) confirms "free and open to the public 24 hours a day, 7 days a week" but says nothing about ownership. The dataset's town-owned/free/24-hour claim still rests on the Chamber listing.
5. **fifth-water-hot-springs — RESOLVED: publishable only with the DEQ warning.** Utah DEQ's dedicated page (updated 2026-08-27; latest entry Jul 15, 2026) carries a current harmful-bacteria advisory — "Multiple people have developed severe rashes and blisters after recreating there this summer" — with no later rescission. The USFS trail page shows no closure and does not mention the advisory. Any publication must carry the DEQ warning prominently.

## Per-entry status after wave 4

- **Staging-verified, no open verification flags (20):** ojo-caliente-mineral-springs, strawberry-park-hot-springs, iron-mountain-hot-springs, glenwood-hot-springs-pool, ouray-hot-springs-pool, dunton-hot-springs, arizona-hot-springs-ringbolt, glen-ivy-hot-springs, harbin-hot-springs, wilbur-hot-springs, two-bunch-palms, umpqua-hot-springs, breitenbush-hot-springs, goldbug-hot-springs, lava-hot-springs, chico-hot-springs, quinns-hot-springs-resort, crystal-hot-springs, mystic-hot-springs, chena-hot-springs-resort.
- **Verified with a publication condition (3):** bagby-hot-springs (closed through Dec 31, 2026 — never publish as open), fairmont-hot-springs-resort (description must state guests/members-only access), fifth-water-hot-springs (must carry the Utah DEQ bacteria warning).
- **Still held (2):** granite-hot-springs-pool (current status unconfirmable), saratoga-hobo-hot-springs (fee/hours/ownership unconfirmed by the Town).

Standing publication blockers unchanged from wave 3: 8 of the 25 source URLs are HTTP, not HTTPS (strawberry-park, dunton, arizona-hot-springs-ringbolt via NPS, harbin, lava-hot-springs, fairmont, crystal, mystic) and CLAUDE.md requires authoritative HTTPS before publication; route build + manifest + tests remain a separate approved change per record.
