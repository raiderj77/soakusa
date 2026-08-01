/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

function getMapboxImage(lat: number, lng: number, width = 800, height = 500): string {
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng},${lat},13,0/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

function getSoakPreview(d: { name: string; state: string; city: string; amenities: string[]; description: string }): string {
  const amenityCount = d.amenities.length;
  const location = d.city ? `${d.city}, ${d.state}` : d.state;
  if (amenityCount >= 2) {
    return `Directory record in ${location} listing ${d.amenities.slice(0, 2).join(' and ').toLowerCase()}. Verify current details before visiting.`;
  }
  return `Mapped hot spring or soaking spot in ${location}. Verify current access and conditions before visiting.`;
}

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hot Springs Directory Across the USA',
  description: 'Discover hot springs, natural thermal pools, and geothermal soaking spots across the United States. GPS coordinates, temperatures, and access info.',
  alternates: { canonical: 'https://soakusa.net' },
  openGraph: {
    title: 'Hot Springs Directory Across the USA',
    description: 'Browse mapped hot-spring and thermal-pool records by state, then verify current access and conditions with the responsible operator or land manager.',
    url: 'https://soakusa.net',
    siteName: 'Soak USA',
    type: 'website',
  },
};

const ALL_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const FAQS = [
  {
    q: 'How do I find a hot spring near me?',
    a: 'Browse the Soak USA directory by state. Records may include coordinates, temperature information, amenities, and access notes, but conditions change and critical details should be confirmed with the responsible operator or land manager.',
  },
  {
    q: 'Are hot springs free to visit?',
    a: 'Fees, permits, parking charges, and access rules vary by location. A directory record may show a source-reported fee status, but always verify current charges and requirements directly with the operator or land manager before traveling.',
  },
  {
    q: 'Is it safe to soak in natural hot springs?',
    a: 'Natural thermal areas can have uncontrolled temperatures, unstable ground, microorganisms, and changing conditions. Consult a healthcare provider before soaking if you have heart conditions, are pregnant, or have compromised immune function. Assess conditions before entering and obey closures and posted warnings.',
  },
  {
    q: 'What should I bring to a hot spring?',
    a: 'Bring drinking water, suitable footwear, weather-appropriate clothing, and any supplies required by the operator or land manager. Plan for limited services at remote sites, follow Leave No Trace guidance, and pack out all waste.',
  },
  {
    q: 'Are clothing requirements different at different hot springs?',
    a: 'Yes. Clothing rules and local customs vary by facility and land manager. Check the current rules for the specific location and follow all posted requirements rather than relying on general assumptions.',
  },
];

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://soakusa.net',
        name:'Soak USA',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Organization',
        name:'Soak USA',
        url:'https://soakusa.net',
        description:'Directory of hot springs and natural soaking spots across the United States',
        contactPoint:{'@type':'ContactPoint',contactType:'customer support',email:'contact@soakusa.net'},
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity:FAQS.map(({q,a}) => ({
          '@type':'Question',
          name:q,
          acceptedAnswer:{'@type':'Answer',text:a},
        })),
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, #3d2010 0%, #2a3018 50%, #1a2a10 100%)', overflow: 'hidden', padding: '7rem 1.5rem 8rem' }}>
        {/* Steam mist layers */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 700px 300px at 50% 80%, rgba(232,221,208,0.06) 0%, transparent 60%), radial-gradient(ellipse 400px 200px at 20% 50%, rgba(196,82,26,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="anim-fade-up" style={{ display: 'inline-block', color: 'var(--sand)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem', fontFamily: 'var(--font-body)', background: 'rgba(232,221,208,0.08)', padding: '0.4rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(232,221,208,0.2)' }}>
            ♨️ Hot Springs Directory
          </p>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', color: 'var(--sand)', fontWeight: 600, marginBottom: '1.25rem', lineHeight: 1.05, letterSpacing: '0.04em' }}>
            <span style={{ display: 'block' }}>Find Your Perfect</span>
            <span style={{ display: 'block', color: 'var(--terra-lt)' }}>Hot Spring</span>
          </h1>
          <div className="divider anim-fade-up anim-delay-2" style={{ maxWidth: '280px', margin: '0 auto 1.5rem' }}>♨</div>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1.05rem', color: 'rgba(232,221,208,0.7)', marginBottom: '2.75rem', maxWidth: '480px', margin: '0 auto 2.75rem', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}>
            Natural hot springs, thermal pools &amp; geothermal soaking spots ,  {locations.length} mapped records across {statesWithData} states.
          </p>
          <div className="anim-fade-up anim-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="/colorado" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem', background: 'var(--terra)', color: 'white', textDecoration: 'none', transition: 'background 0.2s' }}>Find Hot Springs →</a>
            <a href="/california" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem', background: 'transparent', color: 'white', border: '2px solid rgba(196,82,26,0.4)', textDecoration: 'none', transition: 'background 0.2s' }}>Browse by State</a>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid rgba(196,82,26,0.08)' }}>
        <div className="container stats-grid">
          {[
            { n:locations.length.toLocaleString(), l:'Mapped Records' },
            { n:`${statesWithData}`, l:'States Covered' },
            { n:'Thermal', l:'& Mineral Pools' },
            { n:'GPS', l:'Coordinates' },
          ].map(({n,l}) => (
            <div key={l} className="stat-item">
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">♨️ Top Soaks</p>
          <h2 className="section-title">Featured Hot Springs</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>Beloved geothermal soaking destinations from the Rockies to the Pacific Coast.</p>
          <div className="grid-3">
            {featured.map((loc, i) => (
              <Link key={loc.slug} href={`/${loc.stateSlug}/${loc.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <img src={getMapboxImage(loc.lat, loc.lng)} alt={loc.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{getSoakPreview(loc)}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {loc.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'linear-gradient(160deg, #3d2010 0%, #2a3018 100%)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--terra-lt)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.75rem', fontFamily: 'var(--font-body)' }}>How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--sand)', letterSpacing: '0.04em' }}>Plan Your Soak</h2>
          </div>
          <div className="grid-3">
            {[
              { icon:'🗺️', title:'Find a Spring', desc:'Browse available directory records by state, with source-provided temperatures, access notes, and GPS coordinates where present.' },
              { icon:'♨️', title:'Check Conditions', desc:'Review water temperature, access type (primitive vs. developed), permit requirements, and seasonal closures.' },
              { icon:'🌿', title:'Verify Before You Go', desc:'Check the current land-manager or operator page for access, closures, rules, fees, and water conditions.' },
            ].map(({icon,title,desc}) => (
              <div key={title} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius)', border: '1px solid rgba(196,82,26,0.2)' }}>
                <div className="step-icon">{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--terra-lt)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'rgba(232,221,208,0.65)', lineHeight: 1.7, fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text)', marginBottom: '1.25rem' }}>Plan Around Current Conditions</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Hot-spring access, road conditions, fees, closures, and water conditions can change. Treat this directory as a starting point and verify each trip with the responsible land manager or facility operator.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text)', marginTop: '2rem', marginBottom: '0.75rem' }}>Safety First</h3>
          <p style={{ lineHeight: 1.85 }}>For managed hot tubs, the CDC says water temperature should not exceed 104°F (40°C), children under 5 should not use hot tubs, and pregnant visitors should speak with a healthcare provider first. Natural thermal areas can have different and uncontrolled hazards; obey closures and posted rules. <a href="https://www.cdc.gov/healthy-swimming/safety/what-you-can-do-to-stay-healthy-in-hot-tubs.html" target="_blank" rel="noopener noreferrer nofollow">Read the CDC hot-tub safety guidance</a>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(196,82,26,0.08)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </div>
          {FAQS.map(({q,a}) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Browse States */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">Browse by State</p>
            <h2 className="section-title">Browse Springs by State</h2>
          </div>
          <div className="grid-states">
            {ALL_STATES.map((s) => (
              <Link key={s} href={`/${s.toLowerCase().replace(/\s+/g,'-')}`} className="state-link">{s}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Content */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--cream)', borderTop: '1px solid rgba(196,82,26,0.08)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text)', marginBottom: '0.75rem' }}>How to find the best hot spring for your trip</h2>
          <p style={{ fontWeight: 700, lineHeight: 1.75, marginBottom: '0.75rem' }}>Search by state and filter by development level ,  resort hot springs offer amenities and reliable access, while primitive springs require more planning but offer a more natural experience.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.75rem' }}>Matching a spring to your group starts with access, supervision, current rules, and the experience required to reach it. Developed facilities may publish operating details, while primitive sites require independent verification with the relevant land manager.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text)', marginTop: '3rem', marginBottom: '0.75rem' }}>Does SoakUSA provide medical advice?</h2>
          <p style={{ fontWeight: 700, lineHeight: 1.75, marginBottom: '0.75rem' }}>No. SoakUSA is a trip-planning directory and does not claim that a spring or its minerals prevent, treat, or cure a health condition.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.75rem' }}>People with health concerns should ask a qualified healthcare professional whether hot-water exposure is appropriate for them. Follow the current rules and warnings published by the facility operator or land manager.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text)', marginTop: '3rem', marginBottom: '0.75rem' }}>What is the difference between developed and primitive hot springs?</h2>
          <p style={{ fontWeight: 700, lineHeight: 1.75, marginBottom: '0.75rem' }}>Developed hot springs generally have constructed infrastructure and published operator rules. Primitive springs may have limited or no facilities, and their water and access conditions can change without notice.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.75rem' }}>Use current operator or land-manager information to compare access, services, closures, and hazards. A directory category does not guarantee that a site is staffed, maintained, open, or safe to enter.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text)', marginTop: '3rem', marginBottom: '0.75rem' }}>What hot spring etiquette should I follow?</h2>
          <p style={{ fontWeight: 700, lineHeight: 1.75, marginBottom: '0.75rem' }}>Keep noise low, limit soak time to 20 to 30 minutes when others are waiting, pack out all trash, and leave the area exactly as you found it. Hot springs are shared natural resources.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2rem' }}>Leave No Trace principles apply everywhere but matter especially at hot springs, where concentrated visitor use can degrade fragile ecosystems quickly. Soap, shampoo, and detergents ,  even biodegradable varieties ,  are prohibited at most natural springs because they disrupt the delicate microbial communities that give spring water its character and can harm downstream aquatic life. Respect clothing customs at each location: research ahead of time rather than assuming, and follow posted signage without question.</p>

          <div style={{ borderTop: '1px solid rgba(196,82,26,0.12)', paddingTop: '2rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#888', marginBottom: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Further Reading</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="https://www.usgs.gov/science/science-explorer/water/geothermal-resources-and-hot-springs" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--terra)', fontSize: '0.9rem' }}>USGS ,  Geothermal resources and hot springs</a></li>
              <li><a href="https://www.blm.gov/programs/recreation" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--terra)', fontSize: '0.9rem' }}>Bureau of Land Management ,  Recreation on public lands</a></li>
              <li><a href="https://lnt.org" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--terra)', fontSize: '0.9rem' }}>Leave No Trace Center for Outdoor Ethics</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(160deg, #3d2010 0%, #2a3018 100%)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <p style={{ color: 'var(--terra-lt)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.75rem' }}>♨️ The Water Awaits</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--sand)', marginBottom: '1rem' }}>Find Your Soak</h2>
          <p style={{ color: 'rgba(232,221,208,0.6)', marginBottom: '2rem', lineHeight: 1.7 }}>{locations.length} mapped records across {statesWithData} states. Verify current details before traveling.</p>
          <Link href="/browse-states" className="btn btn-terra" style={{ padding: '0.9rem 2.25rem' }}>Explore Springs →</Link>
        </div>
      </section>
    </>
  );
}
