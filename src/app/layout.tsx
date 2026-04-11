import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, Lato } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','500','600','700'] });
const lato = Lato({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400','700'] });

export const metadata: Metadata = {
  title: { template: '%s | Soak USA', default: 'Soak USA — Find Hot Springs & Natural Thermal Pools Across America' },
  description: 'Discover hot springs, natural thermal pools, and geothermal soaking spots across the USA. Browse by state with amenities, temperatures, and access details.',
  keywords: 'hot springs, thermal pools, geothermal springs, natural hot springs, soaking pools, USA hot springs',
  metadataBase: new URL('https://soakusa.net'),
  alternates: { canonical: 'https://soakusa.net' },
  robots: 'index, follow, max-snippet:-1',
  verification: {
    google: 'KEh7iMoUzXk4VMvfFsF4wXenvufyiijnvijgxDUsdaQ',
    other: { 'msvalidate.01': 'C4C9B6256BDEDED169E4DE01CA953390' },
  },
};

const toolSites = [
  { name: 'Fiber Tools', href: 'https://fibertools.app' }, { name: 'Mind Check Tools', href: 'https://mindchecktools.com' },
  { name: 'Flip My Case', href: 'https://flipmycase.com' }, { name: 'Creator Revenue Calculator', href: 'https://creatorrevenuecalculator.com' },
  { name: 'Contract Extract', href: 'https://contractextract.com' }, { name: 'Medical Bill Reader', href: 'https://medicalbillreader.com' },
  { name: 'Tax Break Tools', href: 'https://taxbreaktools.com' }, { name: '524 Tracker', href: 'https://524tracker.com' },
];
const directorySites = [
  { name: 'Public Boat Ramps', href: 'https://publicboatramps.com' }, { name: 'Find Swim Spots', href: 'https://findswimspots.com' },
  { name: 'Craft Distillery Finder', href: 'https://craftdistilleryfinder.com' }, { name: 'Drive-In Tonight', href: 'https://driveintonight.com' },
  { name: 'All Skate Parks', href: 'https://allskateparks.com' }, { name: 'Nearby Escape Rooms', href: 'https://nearbyescaperooms.com' },
  { name: 'Rockhounding Finder', href: 'https://rockhoundingfinder.com' }, { name: 'All Skating Rinks', href: 'https://allskatingrinks.com' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="consent-mode" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            wait_for_update: 500
          });
        `}</Script>
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932" strategy="afterInteractive" />
        <Script id="microsoft-clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","vsqobt7va0");`}</Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SPJKLYCFF6" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SPJKLYCFF6');`}
        </Script>
      </head>
      <body>
        <header style={{ background: 'linear-gradient(to right, #3d2010, #2a3d20)', borderBottom: '2px solid var(--terra)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 16px rgba(42,32,26,0.25)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>♨️</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', color: 'var(--sand)', letterSpacing: '0.06em' }}>Soak USA</span>
            </a>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: 'rgba(232,221,208,0.85)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Home</a>
              <a href="/browse-states" style={{ color: 'rgba(232,221,208,0.85)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Browse</a>
              <a href="/about" style={{ color: 'rgba(232,221,208,0.85)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>About</a>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>

        <footer style={{ background: 'linear-gradient(to right, #3d2010, #2a3d20)', borderTop: '2px solid rgba(196,82,26,0.3)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--sand)', fontWeight: 600, fontSize: '1.15rem', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>♨️ Soak USA</p>
                <p style={{ color: 'rgba(232,221,208,0.6)', fontSize: '0.875rem', lineHeight: 1.7 }}>Free directory of hot springs, natural thermal pools, and geothermal soaking spots across the United States.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--terra-lt)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Directory Sites</h4>
                <ul style={{ listStyle: 'none' }}>
                  {directorySites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(232,221,208,0.55)', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--terra-lt)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Tools</h4>
                <ul style={{ listStyle: 'none' }}>
                  {toolSites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(232,221,208,0.55)', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
            </div>

            {/* Etsy product callout */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(196,82,26,0.35)', borderRadius: '10px', padding: '1.5rem 2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--sand)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>Plan Your Hot Springs Road Trip</p>
                <p style={{ color: 'rgba(232,221,208,0.65)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '56ch', margin: 0 }}>Our USA Hot Springs Visit Journal has 40 real springs pre-loaded with map links, ratings, and a bucket list tracker — all in free Google Sheets.</p>
              </div>
              <a href="https://www.etsy.com/shop/DevelopVault" target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ display: 'inline-block', background: 'var(--terra)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem', padding: '0.65rem 1.35rem', borderRadius: '6px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>Get It on Etsy →</a>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: 'rgba(232,221,208,0.4)', fontSize: '0.85rem' }}>© 2026 Soak USA. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Contact', '/contact'], ['About', '/about']].map(([l, h]) => (
                  <a key={h} href={h} style={{ color: 'rgba(232,221,208,0.4)', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
