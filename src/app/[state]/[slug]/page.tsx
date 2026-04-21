/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import locations from '@/data/locations.json';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

function getMapboxImage(lat: number, lng: number, width = 800, height = 500): string {
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng},${lat},13,0/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

function getSoakPreview(d: { name: string; state: string; city: string; amenities: string[]; description: string }): string {
  const amenityCount = d.amenities.length;
  const location = d.city ? `${d.city}, ${d.state}` : d.state;
  if (amenityCount >= 2) {
    return `Natural soaking spot in ${location} with ${d.amenities.slice(0, 2).join(' and ').toLowerCase()}.`;
  }
  return `Natural hot spring or soaking spot in ${location}. Open for public access.`;
}

export const revalidate = 86400;

export async function generateStaticParams() {
  return locations.map((l) => ({ state: l.stateSlug, slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `${loc.name} — Hot Spring in ${loc.state}`,
    description: ((loc as any).guide?.overview ?? loc.description).slice(0, 155),
    alternates: { canonical: `https://soakusa.net/${loc.stateSlug}/${loc.slug}` },
    robots: { index: !!(loc as any).guide, follow: true },
  };
}

const AMENITY_ICONS: Record<string, string> = {
  'Parking': '🅿️', 'Restrooms': '🚻', 'Camping': '⛺', 'Primitive': '🌿',
  'Developed': '🏗️', 'Free access': '✅', 'Fee required': '💵',
  'Clothing optional': '🌊', 'Family friendly': '👨‍👩‍👧', 'Clothing required': '👙',
  'Wheelchair accessible': '♿', 'Hiking required': '🥾', 'Changing rooms': '🔒',
  'Towels provided': '🛁', 'Private pools': '🔐', 'Pet friendly': '🐕',
};

export default async function SpringPage({ params }: { params: Promise<{ state: string; slug: string }> }) {
  const { state, slug } = await params;
  const loc = locations.find((l) => l.slug === slug && l.stateSlug === state);
  if (!loc) notFound();

  const related = locations.filter((l) => l.stateSlug === state && l.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'NaturalPlace',
        name: loc.name,
        description: loc.description,
        address: { '@type':'PostalAddress', addressLocality: loc.city || '', addressRegion: loc.state, addressCountry:'US' },
        ...(loc.lat && loc.lng ? { geo: { '@type':'GeoCoordinates', latitude: loc.lat, longitude: loc.lng } } : {}),
        url: `https://soakusa.net/${loc.stateSlug}/${loc.slug}`,
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', height: '440px', overflow: 'hidden', background: 'linear-gradient(160deg, #2a1a0e 0%, #3d2a1a 100%)' }}>
        <img src={getMapboxImage(loc.lat, loc.lng, 1400, 600)} alt={loc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.85 }} width={1400} height={600} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(42,32,26,0.9) 0%, rgba(42,32,26,0.5) 50%, rgba(42,32,26,0.15) 100%)' }} />
        <div className="container" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
          <Link href={`/${state}`} style={{ color: 'var(--terra-lt)', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', fontWeight: 700, fontFamily: 'var(--font-body)', textDecoration: 'none' }}>← {loc.state}</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--sand)', marginBottom: '0.75rem', letterSpacing: '0.04em', fontWeight: 600, lineHeight: 1.1 }}>{loc.name}</h1>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="chip chip-white">📍 {loc.city ? `${loc.city}, ` : ''}{loc.state}</span>
            {loc.amenities.slice(0,2).map((a) => <span key={a} className="chip chip-white">{a}</span>)}
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', color: 'var(--text)', marginBottom: '1rem' }}>About This Spring</h2>
              <p style={{ lineHeight: 1.85, marginBottom: '1.5rem', color: '#445' }}>
                {loc.name} is a natural soaking spot located in {loc.city ? `${loc.city}, ` : ''}{loc.state}.{' '}
                {loc.amenities.length > 0 ? `This spot features ${loc.amenities.slice(0, 2).join(' and ').toLowerCase()}.` : 'Free public access to natural thermal waters.'}{' '}
                Always check current conditions and access rules before visiting.
              </p>

              {/* GUIDE BLOCK — long-form enriched content for selected springs */}
              {(loc as any).guide && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginTop: '2rem', marginBottom: '0.75rem' }}>Getting There</h3>
                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.access}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.75rem' }}>When to Visit</h3>
                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.bestTime}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.75rem' }}>Fees & Permits</h3>
                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.fees}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.75rem' }}>Safety & Etiquette</h3>
                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.safety}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.75rem' }}>Nearby</h3>
                  <p style={{ lineHeight: 1.75, color: '#445', marginBottom: '1.5rem' }}>{(loc as any).guide.nearby}</p>
                  <div style={{ background: 'var(--cream)', border: '1px solid var(--terra)', borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: '1rem' }}>
                    <p style={{ fontFamily: 'var(--font-display)', color: 'var(--terra)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Plan Your Hot Springs Trip</p>
                    <p style={{ fontSize: '0.9rem', color: '#445', lineHeight: 1.7, marginBottom: '0.75rem' }}>{(loc as any).guide.visitJournalNote}</p>
                    <a href="https://www.etsy.com/shop/DevelopVault" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.6rem 1.2rem', background: 'var(--terra)', color: 'white', textDecoration: 'none', fontFamily: 'var(--font-body)', fontWeight: 700, borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}>Get the Visit Journal →</a>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--pebble)', fontStyle: 'italic' }}>Last updated: {(loc as any).guide.lastUpdated}</p>
                </div>
              )}

              {loc.amenities.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.9rem' }}>Features & Access</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.6rem' }}>
                    {loc.amenities.map((a) => (
                      <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.65rem 1rem', background: 'var(--white)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(196,82,26,0.1)', borderLeft: '3px solid var(--terra)', fontSize: '0.875rem', fontFamily: 'var(--font-body)', color: 'var(--text)', fontWeight: 600 }}>
                        <span>{AMENITY_ICONS[a] ?? '♨️'}</span><span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Map */}
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid rgba(196,82,26,0.15)', marginBottom: '1.5rem' }}>
                <div style={{ background: 'linear-gradient(135deg, #3d2010 0%, #1a2a10 100%)', height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🗺️</span>
                  <p style={{ color: 'var(--terra-lt)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>GPS Location</p>
                  {loc.lat && loc.lng ? (
                    <p style={{ color: 'rgba(232,221,208,0.6)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>{loc.lat.toFixed(5)}°N, {Math.abs(loc.lng).toFixed(5)}°W</p>
                  ) : (
                    <p style={{ color: 'rgba(232,221,208,0.6)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>{loc.city ? `${loc.city}, ` : ''}{loc.state}</p>
                  )}
                </div>
                {loc.lat && loc.lng && (
                  <a href={`https://www.google.com/maps?q=${loc.lat},${loc.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem', background: 'var(--terra)', color: 'var(--white)', fontWeight: 700, fontSize: '0.875rem', fontFamily: 'var(--font-body)', textDecoration: 'none' }}>
                    Open in Google Maps →
                  </a>
                )}
              </div>

              {/* Safety */}
              <div style={{ background: 'var(--sage-pale)', border: '1px solid rgba(90,122,90,0.25)', borderRadius: 'var(--radius)', padding: '1.25rem 1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--sage)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>🌿 Safety Reminder</p>
                <p style={{ fontSize: '0.875rem', color: '#445', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>Always test water temperature before entering. Avoid springs above 104°F for extended soaking. Stay hydrated, limit sessions to 15–20 minutes, and never soak alone in remote locations.</p>
              </div>
            </div>

            {/* Right — sticky panel */}
            <aside style={{ position: 'sticky', top: '5.5rem' }}>
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', border: '1px solid rgba(196,82,26,0.12)' }}>
                <div style={{ background: 'linear-gradient(135deg, #3d2010, #2a3018)', padding: '1.25rem 1.5rem', borderBottom: '2px solid var(--terra)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', color: 'var(--sand)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Spring Info</p>
                  <p style={{ color: 'rgba(232,221,208,0.55)', fontSize: '0.8rem', fontFamily: 'var(--font-body)' }}>{loc.name}</p>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  {[
                    { label: 'Location', value: `${loc.city ? `${loc.city}, ` : ''}${loc.state}` },
                    ...(loc.lat && loc.lng ? [{ label: 'Coordinates', value: `${loc.lat.toFixed(4)}°N, ${Math.abs(loc.lng).toFixed(4)}°W` }] : []),
                    { label: 'Access', value: loc.amenities.find((a) => a.toLowerCase().includes('free') || a.toLowerCase().includes('fee') || a.toLowerCase().includes('primitive')) ?? 'See site details' },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', padding: '0.65rem 0', borderBottom: '1px solid rgba(196,82,26,0.07)' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--pebble)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-body)', fontWeight: 700, flexShrink: 0 }}>{label}</span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text)', fontFamily: 'var(--font-body)', textAlign: 'right' }}>{value}</span>
                    </div>
                  ))}
                  <Link href={`/${state}`} className="btn btn-terra" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem', fontSize: '0.875rem', padding: '0.75rem 1.5rem' }}>More Springs in {loc.state}</Link>
                </div>
              </div>

              <div style={{ marginTop: '1rem', padding: '1rem 1.25rem', background: 'var(--cream)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(196,82,26,0.1)' }}>
                <p style={{ fontSize: '0.775rem', color: 'var(--stone)', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>Conditions change seasonally. Always verify current access, road conditions, and water temperatures before visiting. Information provided for reference only.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(196,82,26,0.08)', padding: '4rem 1.5rem' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text)', marginBottom: '2rem' }}>More Springs in {loc.state}</h2>
            <div className="grid-3">
              {related.map((r, i) => (
                <Link key={r.slug} href={`/${r.stateSlug}/${r.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <img src={getMapboxImage(r.lat, r.lng)} alt={r.name} className="card-img" loading="lazy" width={800} height={500} />
                    <div className="card-body">
                      <div className="card-meta"><span>📍</span><span>{r.city ? `${r.city}, ` : ''}{r.state}</span></div>
                      <h3 className="card-title">{r.name}</h3>
                      <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '0.75rem' }}>{getSoakPreview(r)}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
