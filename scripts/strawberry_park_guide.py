#!/usr/bin/env python3
"""
WS5 mini-pilot: enrich Strawberry Park Hot Springs with a long-form guide.

Two surgical edits:
1. src/data/locations.json: add `guide` field to strawberry-park-hot-springs entry
2. src/app/[state]/[slug]/page.tsx:
   - generateMetadata: use guide.overview for description; flip robots.index to true
     when guide is present
   - render guide block after "About This Spring" intro when loc.guide exists
   - guide block includes overview, access, bestTime, fees, safety, nearby + a CTA
     to the DevelopVault USA Hot Springs Visit Journal

Idempotent: re-runs safely (skips if guide field or guide JSX already present).
"""
import json
import sys
from pathlib import Path

REPO = Path("/home/rex/soakusa")

GUIDE = {
    "overview": (
        "Strawberry Park Hot Springs sits seven miles north of downtown Steamboat Springs, "
        "Colorado, in the Routt National Forest. It is one of the most photographed natural "
        "hot springs in the United States, known for its rock-walled pools, surrounding pine "
        "forest, and after-dark clothing-optional policy. Water flows from a single source at "
        "the top of the property and cascades through four to six pools at progressively cooler "
        "temperatures, ending in a creek-fed cold plunge. Strawberry Park has been operated as "
        "a private natural hot springs resort since the 1960s and remains family-owned."
    ),
    "access": (
        "From Steamboat Springs, take 7th Street north onto Park Road, which becomes County "
        "Road 36. The first five miles are paved; the final two miles are dirt road that "
        "becomes rough in wet conditions and may require four-wheel drive in winter. The "
        "springs operate a paid shuttle from downtown Steamboat for visitors who do not want "
        "to drive the dirt road. Parking is on-site for those who do drive in. The road is "
        "plowed but can ice over from November through April."
    ),
    "bestTime": (
        "Summer (June through September) is peak season with longest daylight hours, easiest "
        "access, and fullest amenities. Winter visits are popular for the soaking-in-snow "
        "experience but require careful drive planning. Weekday afternoons are quieter than "
        "weekends. After dark (typically 9 PM onward) the property switches to adults-only "
        "with a clothing-optional policy; reservations are strongly recommended for that "
        "window and walk-ins are often turned away."
    ),
    "fees": (
        "Day passes are approximately $20 per adult and $10 per child as of 2026, payable at "
        "the gatehouse. Cash and card both accepted. Camping (around $30 per site) and rustic "
        "cabin rentals (from approximately $90 per night) are available on-site through "
        "advance reservation. Massage appointments book separately. Rates change annually; "
        "verify on the official site before driving out."
    ),
    "safety": (
        "Pool temperatures range from approximately 95°F at the cool end to 104°F at the upper "
        "source. The hottest pool is at the top and water cools as it flows down. Limit "
        "individual soaks to 15 to 20 minutes and hydrate between sessions. The dirt access "
        "road has tight turns; do not attempt the final two miles in a low-clearance vehicle "
        "when wet or snow-covered. After-dark adults-only policy means no children on-site "
        "after 9 PM. Photography is restricted on the property."
    ),
    "nearby": (
        "Steamboat Springs town has the Old Town Hot Springs (urban developed) for a contrast "
        "experience. Routt National Forest offers extensive hiking, biking, and fishing within "
        "a 20-minute drive. Other notable Colorado springs within day-trip range include "
        "Glenwood Hot Springs (about three hours south) and Conundrum Hot Springs (a four-hour "
        "drive plus 8.5-mile hike from Aspen). Lodging in Steamboat ranges from the historic "
        "Hotel Bristol to ski-season condos."
    ),
    "visitJournalNote": (
        "Track temperatures, dates, road conditions, and your impressions of every hot spring "
        "you visit with the USA Hot Springs Visit Journal — a printable tracker built "
        "specifically for hot springs explorers. Includes pages for primitive and developed "
        "springs, fee logs, and visit memories."
    ),
    "lastUpdated": "2026-04-20",
}


def patch_locations_json():
    p = REPO / "src" / "data" / "locations.json"
    data = json.loads(p.read_text(encoding="utf-8"))
    found = False
    for entry in data:
        if entry.get("slug") == "strawberry-park-hot-springs":
            if "guide" in entry:
                return False, "already has guide"
            entry["guide"] = GUIDE
            found = True
            break
    if not found:
        return False, "strawberry-park-hot-springs entry not found"
    p.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    return True, "patched locations.json"


def patch_page_tsx():
    p = REPO / "src" / "app" / "[state]" / "[slug]" / "page.tsx"
    src = p.read_text(encoding="utf-8")

    if "GUIDE BLOCK" in src:
        return False, "page.tsx already patched"

    # 1. Replace generateMetadata description + robots
    old_meta = (
        "    description: `${loc.description.slice(0, 155)}`,\n"
        "    alternates: { canonical: `https://soakusa.net/${loc.stateSlug}/${loc.slug}` },\n"
        "    robots: { index: false, follow: true },"
    )
    new_meta = (
        "    description: ((loc as any).guide?.overview ?? loc.description).slice(0, 155),\n"
        "    alternates: { canonical: `https://soakusa.net/${loc.stateSlug}/${loc.slug}` },\n"
        "    robots: { index: !!(loc as any).guide, follow: true },"
    )
    if old_meta not in src:
        return False, "generateMetadata anchor not found (file may have drifted)"
    src = src.replace(old_meta, new_meta, 1)

    # 2. Insert guide block after the "About This Spring" intro paragraph
    anchor = (
        "              </p>\n"
        "              {loc.amenities.length > 0 && ("
    )
    guide_block = (
        "              </p>\n"
        "              {/* GUIDE BLOCK — long-form enriched content for selected springs */}\n"
        "              {(loc as any).guide && (\n"
        "                <div style={{ marginBottom: '2rem' }}>\n"
        "                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginTop: '2rem', marginBottom: '0.75rem' }}>Getting There</h3>\n"
        "                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.access}</p>\n"
        "                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.75rem' }}>When to Visit</h3>\n"
        "                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.bestTime}</p>\n"
        "                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.75rem' }}>Fees & Permits</h3>\n"
        "                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.fees}</p>\n"
        "                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.75rem' }}>Safety & Etiquette</h3>\n"
        "                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.safety}</p>\n"
        "                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.75rem' }}>Nearby</h3>\n"
        "                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.nearby}</p>\n"
        "                  <div style={{ background: 'var(--cream)', border: '1px solid var(--terra)', borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: '1rem' }}>\n"
        "                    <p style={{ fontFamily: 'var(--font-display)', color: 'var(--terra)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Plan Your Hot Springs Trip</p>\n"
        "                    <p style={{ fontSize: '0.9rem', color: '#445', lineHeight: 1.7, marginBottom: '0.75rem' }}>{(loc as any).guide.visitJournalNote}</p>\n"
        "                    <a href=\"https://www.etsy.com/shop/DevelopVault\" target=\"_blank\" rel=\"noopener noreferrer\" style={{ display: 'inline-block', padding: '0.6rem 1.2rem', background: 'var(--terra)', color: 'white', textDecoration: 'none', fontFamily: 'var(--font-body)', fontWeight: 700, borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}>Get the Visit Journal →</a>\n"
        "                  </div>\n"
        "                  <p style={{ fontSize: '0.75rem', color: 'var(--pebble)', fontStyle: 'italic' }}>Last updated: {(loc as any).guide.lastUpdated}</p>\n"
        "                </div>\n"
        "              )}\n"
        "              {loc.amenities.length > 0 && ("
    )
    if anchor not in src:
        return False, "page.tsx render anchor not found"
    src = src.replace(anchor, guide_block, 1)

    p.write_text(src, encoding="utf-8")
    return True, "patched page.tsx"


def main():
    print(f"Repo: {REPO}\n")
    ok1, msg1 = patch_locations_json()
    print(f"  locations.json: {'OK' if ok1 else 'SKIP/FAIL'} — {msg1}")
    ok2, msg2 = patch_page_tsx()
    print(f"  page.tsx:       {'OK' if ok2 else 'SKIP/FAIL'} — {msg2}")
    return 0 if (ok1 and ok2) else 1


if __name__ == "__main__":
    sys.exit(main())
