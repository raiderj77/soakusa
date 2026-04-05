/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Soak USA — Find Hot Springs & Natural Thermal Pools Across America',
  description: 'Discover hot springs, natural thermal pools, and geothermal soaking spots across all 50 states. GPS coordinates, temperatures, and access info.',
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

const IMG_KEYWORDS = ['hot+springs','thermal+pool','geothermal+pool','natural+hot+spring','mineral+spring','soaking+pool','steam+pool','mountain+hot+spring'];

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://soakusa.net',
        name:'Soak USA',
        potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:'https://soakusa.net/search?q={search_term_string}'},'query-input':'required name=search_term_string'},
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, #3d2010 0%, #2a3018 50%, #1a2a10 100%)', overflow: 'hidden', padding: '7rem 1.5rem 8rem' }}>
        {/* Steam mist layers */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 700px 300px at 50% 80%, rgba(232,221,208,0.06) 0%, transparent 60%), radial-gradient(ellipse 400px 200px at 20% 50%, rgba(196,82,26,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="anim-fade-up" style={{ display: 'inline-block', color: 'var(--sand)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem', fontFamily: 'var(--font-body)', background: 'rgba(232,221,208,0.08)', padding: '0.4rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(232,221,208,0.2)' }}>
            ♨️ Hot Springs Directory
          </p>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', color: 'var(--sand)', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.05, letterSpacing: '0.04em' }}>
            Find Your Perfect
          </h1>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', color: 'var(--terra-lt)', fontWeight: 600, marginBottom: '1.25rem', lineHeight: 1.05, letterSpacing: '0.04em' }}>
            Hot Spring
          </h1>
          <div className="divider anim-fade-up anim-delay-2" style={{ maxWidth: '280px', margin: '0 auto 1.5rem' }}>♨</div>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1.05rem', color: 'rgba(232,221,208,0.7)', marginBottom: '2.75rem', maxWidth: '480px', margin: '0 auto 2.75rem', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}>
            Natural hot springs, thermal pools &amp; geothermal soaking spots — {locations.length}+ locations across {statesWithData} states.
          </p>
          <form method="GET" action="/search" className="anim-fade-up anim-delay-3">
            <div className="search-wrap">
              <input type="text" name="q" placeholder="Search by state, city, or spring type…" className="search-input" />
              <button type="submit" className="search-btn">Find Springs</button>
            </div>
          </form>
        </div>
        <svg aria-hidden viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid rgba(196,82,26,0.08)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n:`${locations.length}+`, l:'Hot Springs' },
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
                  <img src={`https://source.unsplash.com/800x500/?${IMG_KEYWORDS[i%IMG_KEYWORDS.length]}&sig=${i+1}`} alt={loc.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{loc.description.slice(0,110)}…</p>
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
              { icon:'🗺️', title:'Find a Spring', desc:'Browse by state to discover every hot spring — with temperatures, access details, and GPS coordinates.' },
              { icon:'♨️', title:'Check Conditions', desc:'Review water temperature, access type (primitive vs. developed), permit requirements, and seasonal closures.' },
              { icon:'🌿', title:'Soak In Nature', desc:'Pack a towel, water, and sun protection. Find your spot and let the mineral-rich waters do the rest.' },
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text)', marginBottom: '1.25rem' }}>The Healing Power of Hot Springs</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Hot springs have drawn people for millennia. From the ancient Roman baths to the traditional Japanese onsen culture, soaking in naturally heated, mineral-rich water is one of humanity's oldest wellness practices. The United States, with its geologically active western states, has an extraordinary concentration of hot springs accessible to the public.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>The minerals found in thermal waters — magnesium, sulfur, calcium, and silica — are thought to support muscle relaxation, skin health, and circulation. Whether or not you subscribe to the therapeutic claims, the combination of warm water, natural scenery, and stillness is undeniably restorative.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text)', marginTop: '2rem', marginBottom: '0.75rem' }}>Safety First</h3>
          <p style={{ lineHeight: 1.85 }}>Water temperatures vary widely — from pleasant 100°F to dangerously scalding 200°F+. Always test the water before entering and never soak in springs over 104°F. Avoid submerging your head. Pregnant women and people with heart conditions should consult a doctor. Stay hydrated, limit sessions to 15–20 minutes, and shower after soaking in sulfur springs.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(196,82,26,0.08)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </div>
          {[
            { q:'Are hot springs free to visit?', a:'It depends on the location. Primitive hot springs on BLM land are typically free, though some require a day-use fee or parking pass. Developed hot springs at resorts or state parks usually charge admission. Always check current access details before visiting.' },
            { q:'What should I bring to a hot spring?', a:'Bring water (you\'ll get dehydrated), a towel, sandals for rocky pools, sunscreen, and a change of clothes. A waterproof bag for electronics is useful. For primitive springs, bring a headlamp if visiting at dusk, and pack out all trash.' },
            { q:'What\'s the ideal soaking temperature?', a:'Most people find 100–104°F most comfortable for extended soaking. Above 104°F can stress the cardiovascular system. Water above 112°F is generally unsafe for prolonged immersion. Many springs mix with cold stream water naturally, so you can find comfortable spots.' },
            { q:'Are hot springs open year-round?', a:'Many primitive hot springs are accessible year-round, though roads may close in winter. Developed resorts typically operate year-round. Summer brings higher crowds; winter soaking in snowy landscapes is spectacular but requires careful road and weather assessment.' },
            { q:'Can children use hot springs?', a:'Children can enjoy hot springs, but exercise extra caution. Keep young children in cooler, shallower areas. Never leave children unattended near hot water, and avoid springs where the temperature is difficult to control. Some developed facilities have age restrictions.' },
          ].map(({q,a}) => (
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
            <p className="section-label">All 50 States</p>
            <h2 className="section-title">Browse Springs by State</h2>
          </div>
          <div className="grid-states">
            {ALL_STATES.map((s) => (
              <Link key={s} href={`/${s.toLowerCase().replace(/\s+/g,'-')}`} className="state-link">{s}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(160deg, #3d2010 0%, #2a3018 100%)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <p style={{ color: 'var(--terra-lt)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.75rem' }}>♨️ The Water Awaits</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--sand)', marginBottom: '1rem' }}>Find Your Soak</h2>
          <p style={{ color: 'rgba(232,221,208,0.6)', marginBottom: '2rem', lineHeight: 1.7 }}>{locations.length}+ hot springs across {statesWithData} states. Discover your next retreat.</p>
          <Link href="/browse-states" className="btn btn-terra" style={{ padding: '0.9rem 2.25rem' }}>Explore Springs →</Link>
        </div>
      </section>
    </>
  );
}
