import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hot Spring Research & Safety',
  description: 'Authority-first hot-spring research and safety resources from Soak USA. The legacy catalog was withdrawn; any future record must pass authority-backed review.',
  alternates: { canonical: 'https://soakusa.net' },
  openGraph: {
    title: 'Hot Spring Research & Safety | Soak USA',
    description: 'The legacy Soak USA catalog was withdrawn. Any future location record must pass authority-backed review before publication.',
    url: 'https://soakusa.net',
    siteName: 'Soak USA',
    type: 'website',
  },
};

const FAQS = [
  {
    q: 'Is the Soak USA location directory currently available?',
    a: 'No. Soak USA withdrew its legacy location catalog after a data-quality audit found state-assignment and feature-classification errors. Any future location record must have structured, visible source support before publication.',
  },
  {
    q: 'How should I verify a hot spring before a trip?',
    a: 'Use the current website or office of the responsible facility operator, park, land manager, tribe, or local authority. Confirm that soaking is permitted and check closures, access, fees, hazards, and posted rules.',
  },
  {
    q: 'Are natural hot springs safe for soaking?',
    a: 'There is no universal answer. Some thermal features are closed, scalding, unstable, or otherwise unsafe, and some places prohibit soaking entirely. Follow current authority information and do not enter or touch an uncontrolled thermal feature to test it.',
  },
  {
    q: 'Does Soak USA provide medical advice?',
    a: 'No. Soak USA provides general research and safety information, not diagnosis or treatment advice. People with questions about heat exposure or personal health conditions should ask a qualified healthcare professional.',
  },
  {
    q: 'Does Soak USA report live conditions?',
    a: 'No. Soak USA is not a live closure, weather, water-quality, or emergency service. Use the responsible authority for current conditions and emergency instructions.',
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Soak USA',
        url: 'https://soakusa.net',
        description: 'Authority-first hot-spring research and safety resources.',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Soak USA',
        url: 'https://soakusa.net',
        contactPoint: { '@type': 'ContactPoint', contactType: 'editorial corrections', email: 'contact@soakusa.net' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }) }} />

      <section style={{ position: 'relative', background: 'linear-gradient(160deg, #3d2010 0%, #2a3018 50%, #1a2a10 100%)', overflow: 'hidden', padding: '7rem 1.5rem 8rem' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 700px 300px at 50% 80%, rgba(232,221,208,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="anim-fade-up" style={{ display: 'inline-block', color: 'var(--sand)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem', background: 'rgba(232,221,208,0.08)', padding: '0.4rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(232,221,208,0.3)' }}>
            Catalog quality reset
          </p>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', color: 'var(--sand)', marginBottom: '1.25rem', lineHeight: 1.05 }}>
            <span style={{ display: 'block' }}>Hot Spring Research</span>
            <span style={{ display: 'block', color: 'var(--terra-lt)' }}>You Can Verify</span>
          </h1>
          <div aria-hidden="true" className="divider anim-fade-up anim-delay-2" style={{ maxWidth: '280px', margin: '0 auto 1.5rem', color: 'var(--sand)' }}>♨</div>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '620px', margin: '0 auto 2.75rem', lineHeight: 1.7 }}>
            The legacy location catalog was withdrawn after a data-quality audit. Any future record must pass authority-backed review of identity, location, access, and safety claims before publication.
          </p>
          <div className="anim-fade-up anim-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/editorial" className="btn btn-terra">Read the Publication Standard</Link>
            <a href="#safety-sources" className="btn btn-outline">Use Official Safety Sources</a>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z" fill="var(--ivory)" />
        </svg>
      </section>

      <section style={{ background: 'var(--white)', borderBottom: '1px solid rgba(196,82,26,0.08)' }}>
        <div className="container stats-grid">
          {[
            { n: '0', l: 'Public Location Records' },
            { n: '100%', l: 'Sources Required' },
            { n: 'No', l: 'Live Conditions' },
            { n: 'No', l: 'Ads Running' },
          ].map(({ n, l }) => (
            <div key={l} className="stat-item">
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="section-label">Why the reset happened</p>
          <h2 className="section-title">Accuracy Comes Before Coverage</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>
            A review of the legacy catalog found incorrect state assignments and records that treated non-soakable thermal features as visitor destinations. Hiding details behind a warning was not enough, so the full catalog was withdrawn from public navigation and search.
          </p>
          <p style={{ lineHeight: 1.85 }}>
            The rebuild starts smaller. Each future record must identify an authoritative publisher, link visibly to the supporting source, state which claims that source supports, record a human review date, and separate managed soaking facilities from natural or prohibited thermal features.
          </p>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(160deg, #3d2010 0%, #2a3018 100%)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--terra-lt)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.75rem' }}>Research workflow</p>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--sand)' }}>How to Check a Location Now</h2>
          </div>
          <div className="grid-3">
            {[
              { icon: '1', title: 'Identify the Authority', desc: 'Find the current facility operator, park, land manager, tribe, or local authority responsible for the site.' },
              { icon: '2', title: 'Confirm Permission', desc: 'Verify that soaking is permitted and review closures, access routes, reservations, fees, and posted restrictions.' },
              { icon: '3', title: 'Check Current Hazards', desc: 'Use current warnings for thermal danger, water conditions, weather, roads, wildlife, and emergency information.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius)', border: '1px solid rgba(217,114,72,0.45)' }}>
                <div className="step-icon" style={{ color: 'var(--sand)' }}>{icon}</div>
                <h3 style={{ color: 'var(--terra-lt)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="safety-sources" style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="section-label">Primary sources</p>
          <h2 className="section-title">Start With Current Official Guidance</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '2rem' }}>
            Managed hot tubs and uncontrolled natural thermal areas are not interchangeable. Use the responsible authority for the specific place and treat general guidance as a starting point only.
          </p>
          <div className="grid-3">
            <a className="card" href="https://www.cdc.gov/healthy-swimming/safety/what-you-can-do-to-stay-healthy-in-hot-tubs.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', padding: '1.5rem' }}>
              <h3 className="card-title">CDC: Managed Hot-Tub Safety</h3>
              <p>Health and temperature guidance for maintained hot tubs.</p>
            </a>
            <a className="card" href="https://www.nps.gov/yell/planyourvisit/swimming.htm" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', padding: '1.5rem' }}>
              <h3 className="card-title">NPS: Yellowstone Rules</h3>
              <p>Official restrictions and hazards for Yellowstone swimming and soaking.</p>
            </a>
            <a className="card" href="https://www.usgs.gov/publications/thermal-springs-united-states" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', padding: '1.5rem' }}>
              <h3 className="card-title">USGS: Thermal Springs</h3>
              <p>Federal background on thermal springs in the United States.</p>
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(196,82,26,0.12)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Current Soak USA Status</h2>
          </div>
          {FAQS.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      <section style={{ background: 'linear-gradient(160deg, #3d2010 0%, #2a3018 100%)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--sand)', marginBottom: '1rem' }}>Report a Source or Correction</h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', marginBottom: '2rem', lineHeight: 1.7 }}>Send the location name, responsible authority, and a current primary-source link. Submission does not guarantee publication.</p>
          <Link href="/contact" className="btn btn-terra">Contact Soak USA</Link>
        </div>
      </section>
    </>
  );
}
