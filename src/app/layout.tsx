import type { Metadata } from 'next';
import { Cormorant_Garamond, Lato } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','500','600','700'] });
const lato = Lato({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400','700'] });

export const metadata: Metadata = {
  title: { template: '%s | Soak USA', default: 'Hot Spring Research & Safety | Soak USA' },
  description: 'Authority-first hot-spring research and safety resources. The legacy catalog was withdrawn; any future record must pass authority-backed review.',
  keywords: 'hot spring safety, thermal feature safety, hot spring research, official hot spring sources, USA hot springs',
  metadataBase: new URL('https://soakusa.net'),
  verification: {
    google: 'KEh7iMoUzXk4VMvfFsF4wXenvufyiijnvijgxDUsdaQ',
    other: { 'msvalidate.01': 'C4C9B6256BDEDED169E4DE01CA953390' },
  },
  other: {
    'impact-site-verification': '33743021-50c0-44e5-88b2-fdfb122eb051',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <header style={{ background: 'linear-gradient(to right, #3d2010, #2a3d20)', borderBottom: '2px solid var(--terra)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 16px rgba(42,32,26,0.25)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>♨️</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', color: 'var(--sand)', letterSpacing: '0.06em' }}>Soak USA</span>
            </a>
            <nav aria-label="Primary navigation" style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="/" style={{ color: 'rgba(232,221,208,0.85)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Home</a>
              <a href="/#safety-sources" style={{ color: 'rgba(232,221,208,0.85)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Safety Sources</a>
              <a href="/editorial" style={{ color: 'rgba(232,221,208,0.85)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Editorial</a>
              <a href="/about" style={{ color: 'rgba(232,221,208,0.85)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>About</a>
            </nav>
          </div>
        </header>

        <main id="main-content" style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>

        <footer style={{ background: 'linear-gradient(to right, #3d2010, #2a3d20)', borderTop: '2px solid rgba(196,82,26,0.3)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--sand)', fontWeight: 600, fontSize: '1.15rem', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>♨️ Soak USA</p>
                <p style={{ color: 'rgba(232,221,208,0.78)', fontSize: '0.875rem', lineHeight: 1.7 }}>Authority-first hot-spring research, official safety sources, and a transparent catalog-rebuild standard.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--terra-lt)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Explore Soak USA</h4>
                <ul style={{ listStyle: 'none' }}>
                  {[['Safety Sources', '/#safety-sources'], ['About Soak USA', '/about'], ['Contact', '/contact']].map(([label, href]) => (
                    <li key={href} style={{ marginBottom: '0.2rem' }}><a href={href} style={{ color: 'rgba(232,221,208,0.78)', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', minHeight: '32px' }}>{label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--terra-lt)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Trust &amp; Policies</h4>
                <ul style={{ listStyle: 'none' }}>
                  {[['Editorial Standards', '/editorial'], ['Privacy', '/privacy'], ['Terms', '/terms'], ['Disclosure', '/disclosure']].map(([label, href]) => (
                    <li key={href} style={{ marginBottom: '0.2rem' }}><a href={href} style={{ color: 'rgba(232,221,208,0.78)', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', minHeight: '32px' }}>{label}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Etsy product callout */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(196,82,26,0.35)', borderRadius: '10px', padding: '1.5rem 2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(232,221,208,0.78)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.35rem' }}>Affiliated shop</span>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--sand)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>Optional Hot Springs Trip Journal</p>
                <p style={{ color: 'rgba(232,221,208,0.78)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '56ch', margin: 0 }}>The publisher is affiliated with the linked Etsy shop and may receive revenue from a purchase. Check the Etsy listing for current contents, price, and availability.</p>
              </div>
              <a href="https://www.etsy.com/shop/DevelopVault" target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ display: 'inline-block', background: 'var(--terra)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem', padding: '0.65rem 1.35rem', borderRadius: '6px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>Get It on Etsy →</a>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: 'rgba(232,221,208,0.78)', fontSize: '0.85rem' }}>© 2026 Soak USA. All rights reserved.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.25rem' }}>
                {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Contact', '/contact'], ['About', '/about'], ['Disclosure', '/disclosure']].map(([l, h]) => (
                  <a key={h} href={h} style={{ color: 'rgba(232,221,208,0.78)', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
