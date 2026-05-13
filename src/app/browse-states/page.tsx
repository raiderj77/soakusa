import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Browse Hot Springs by State',
  description: 'Find hot springs in 14 US states with active listings. Explore GPS coordinates, temperatures, and access details. More states being added regularly.',
  alternates: { canonical: 'https://soakusa.net/browse-states' },
};

const ALL_STATES: { name: string; slug: string }[] = [
  { name: 'Alabama', slug: 'alabama' }, { name: 'Alaska', slug: 'alaska' },
  { name: 'Arizona', slug: 'arizona' }, { name: 'Arkansas', slug: 'arkansas' },
  { name: 'California', slug: 'california' }, { name: 'Colorado', slug: 'colorado' },
  { name: 'Connecticut', slug: 'connecticut' }, { name: 'Delaware', slug: 'delaware' },
  { name: 'Florida', slug: 'florida' }, { name: 'Georgia', slug: 'georgia' },
  { name: 'Hawaii', slug: 'hawaii' }, { name: 'Idaho', slug: 'idaho' },
  { name: 'Illinois', slug: 'illinois' }, { name: 'Indiana', slug: 'indiana' },
  { name: 'Iowa', slug: 'iowa' }, { name: 'Kansas', slug: 'kansas' },
  { name: 'Kentucky', slug: 'kentucky' }, { name: 'Louisiana', slug: 'louisiana' },
  { name: 'Maine', slug: 'maine' }, { name: 'Maryland', slug: 'maryland' },
  { name: 'Massachusetts', slug: 'massachusetts' }, { name: 'Michigan', slug: 'michigan' },
  { name: 'Minnesota', slug: 'minnesota' }, { name: 'Mississippi', slug: 'mississippi' },
  { name: 'Missouri', slug: 'missouri' }, { name: 'Montana', slug: 'montana' },
  { name: 'Nebraska', slug: 'nebraska' }, { name: 'Nevada', slug: 'nevada' },
  { name: 'New Hampshire', slug: 'new-hampshire' }, { name: 'New Jersey', slug: 'new-jersey' },
  { name: 'New Mexico', slug: 'new-mexico' }, { name: 'New York', slug: 'new-york' },
  { name: 'North Carolina', slug: 'north-carolina' }, { name: 'North Dakota', slug: 'north-dakota' },
  { name: 'Ohio', slug: 'ohio' }, { name: 'Oklahoma', slug: 'oklahoma' },
  { name: 'Oregon', slug: 'oregon' }, { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Rhode Island', slug: 'rhode-island' }, { name: 'South Carolina', slug: 'south-carolina' },
  { name: 'South Dakota', slug: 'south-dakota' }, { name: 'Tennessee', slug: 'tennessee' },
  { name: 'Texas', slug: 'texas' }, { name: 'Utah', slug: 'utah' },
  { name: 'Vermont', slug: 'vermont' }, { name: 'Virginia', slug: 'virginia' },
  { name: 'Washington', slug: 'washington' }, { name: 'West Virginia', slug: 'west-virginia' },
  { name: 'Wisconsin', slug: 'wisconsin' }, { name: 'Wyoming', slug: 'wyoming' },
];

export default function BrowseStatesPage() {
  const countByState = new Map<string, number>();
  for (const loc of locations) {
    countByState.set(loc.state, (countByState.get(loc.state) ?? 0) + 1);
  }

  const withListings = ALL_STATES
    .filter((s) => (countByState.get(s.name) ?? 0) > 0)
    .sort((a, b) => a.name.localeCompare(b.name));

  const comingSoon = ALL_STATES
    .filter((s) => (countByState.get(s.name) ?? 0) === 0)
    .sort((a, b) => a.name.localeCompare(b.name));

  const statesWithListings = withListings.length;
  const totalLocations = locations.length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://soakusa.net' },
          { '@type': 'ListItem', position: 2, name: 'Browse Hot Springs by State', item: 'https://soakusa.net/browse-states' },
        ],
      },
      {
        '@type': 'WebPage',
        name: 'Browse Hot Springs by State',
        url: 'https://soakusa.net/browse-states',
        description: `Directory of hot springs across the United States. Currently ${statesWithListings} states have active listings with ${totalLocations}+ locations.`,
        isPartOf: { '@type': 'WebSite', url: 'https://soakusa.net', name: 'Soak USA' },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, #3d2010 0%, #2a3018 60%, #1a2a10 100%)', overflow: 'hidden', padding: '4rem 1.5rem 3.5rem' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 500px 200px at 50% 100%, rgba(232,221,208,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/" style={{ color: 'var(--terra-lt)', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-body)', textDecoration: 'none' }}>← Home</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem,4.5vw,3.5rem)', color: 'var(--sand)', marginBottom: '0.75rem', letterSpacing: '0.04em', fontWeight: 600 }}>
            Browse Hot Springs <span style={{ color: 'var(--terra-lt)' }}>by State</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="chip chip-terra">{statesWithListings} States with Listings</span>
            <span style={{ color: 'rgba(232,221,208,0.6)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>{totalLocations}+ hot spring locations</span>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* States with listings */}
      <section style={{ padding: '4rem 1.5rem 2rem' }}>
        <div className="container">
          <p className="section-label">Active Listings</p>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>States with Hot Springs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {withListings.map((s) => {
              const count = countByState.get(s.name) ?? 0;
              return (
                <Link key={s.slug} href={`/${s.slug}`} className="state-card-active" style={{ textDecoration: 'none' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)' }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--terra)' }}>
                    {count} {count === 1 ? 'spring' : 'springs'}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming soon states */}
      <section style={{ padding: '2rem 1.5rem 5rem', background: 'var(--cream)', borderTop: '1px solid rgba(196,82,26,0.08)' }}>
        <div className="container">
          <p className="section-label">Coming Soon</p>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>More States Being Added</h2>
          <p style={{ color: 'var(--stone)', fontFamily: 'var(--font-body)', marginBottom: '2rem', maxWidth: '520px' }}>We are actively mapping hot springs across the remaining states. Check back soon.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.6rem' }}>
            {comingSoon.map((s) => (
              <div key={s.slug} style={{ background: 'var(--white)', border: '1px solid rgba(196,82,26,0.08)', borderRadius: 'var(--radius-sm)', padding: '0.9rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', opacity: 0.6 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{s.name}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--stone)' }}>Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
