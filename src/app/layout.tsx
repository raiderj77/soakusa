import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Soak USA - Find Hot Springs & Natural Thermal Pools Directory",
  description:
    "Discover hot springs and natural thermal pools across the USA. Browse our directory of geothermal hot springs by state with detailed information, amenities, and safety guidelines.",
  keywords:
    "hot springs, thermal pools, geothermal springs, USA hot springs directory, natural hot springs, relaxation, mineral pools",
  authors: [{ name: "Soak USA" }],
  creator: "Soak USA",
  publisher: "Soak USA",
  metadataBase: new URL("https://soakusa.net"),
  alternates: {
    canonical: "https://soakusa.net",
  },
  openGraph: {
    type: "website",
    url: "https://soakusa.net",
    title: "Soak USA - Find Hot Springs & Natural Thermal Pools Directory",
    description:
      "Discover hot springs and natural thermal pools across the USA. Browse our directory of geothermal hot springs by state.",
    siteName: "Soak USA",
    images: [
      {
        url: "https://soakusa.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soak USA - Hot Springs Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soak USA - Find Hot Springs & Natural Thermal Pools Directory",
    description:
      "Discover hot springs and natural thermal pools across the USA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification=xyz",
    other: {
      "msvalidate.01": "C4C9B6256BDEDED169E4DE01CA953390",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerStyles: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#7d1a00",
    padding: "1rem 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const headerContainerStyles: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyles: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    margin: 0,
  };

  const navStyles: React.CSSProperties = {
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
    listStyle: "none",
  };

  const navLinkStyles: React.CSSProperties = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.2s",
  };

  const footerStyles: React.CSSProperties = {
    backgroundColor: "#f5f5f5",
    padding: "2rem",
    marginTop: "3rem",
    borderTop: "1px solid #ddd",
  };

  const footerContainerStyles: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
  };

  const footerSectionStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const footerTitleStyles: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    color: "#333",
    marginBottom: "1rem",
  };

  const footerLinksStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: 0,
    margin: 0,
    listStyle: "none",
  };

  const footerLinkStyles: React.CSSProperties = {
    color: "#666",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.2s",
  };

  const contentStyles: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem",
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          strategy="afterInteractive"
          async
          crossOrigin="anonymous"
        />
        <Script
          id="adsense-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-7171402107622932",
              enable_page_level_ads: true
            });`,
          }}
        />

        <header style={headerStyles}>
          <div style={headerContainerStyles}>
            <h1 style={logoStyles}>
              <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
                Soak USA
              </a>
            </h1>
            <nav>
              <ul style={navStyles}>
                <li>
                  <a
                    href="/"
                    style={navLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#ff6b35")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#fff")
                    }
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    style={navLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#ff6b35")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#fff")
                    }
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    style={navLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#ff6b35")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#fff")
                    }
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main style={contentStyles}>{children}</main>

        <footer style={footerStyles}>
          <div style={footerContainerStyles}>
            <section style={footerSectionStyles}>
              <h3 style={footerTitleStyles}>Directory Sites</h3>
              <ul style={footerLinksStyles}>
                <li>
                  <a
                    href="https://publicboatramps.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Public Boat Ramps
                  </a>
                </li>
                <li>
                  <a
                    href="https://findswimspots.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Find Swim Spots
                  </a>
                </li>
                <li>
                  <a
                    href="https://craftdistilleryfinder.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Craft Distillery Finder
                  </a>
                </li>
                <li>
                  <a
                    href="https://driveintonight.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Drive-In Tonight
                  </a>
                </li>
                <li>
                  <a
                    href="https://allskateparks.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    All Skate Parks
                  </a>
                </li>
                <li>
                  <a
                    href="https://rockhoundingfinder.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Rockhounding Finder
                  </a>
                </li>
                <li>
                  <a
                    href="https://nearbyescaperooms.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Nearby Escape Rooms
                  </a>
                </li>
                <li>
                  <a
                    href="https://allskatingrinks.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    All Skating Rinks
                  </a>
                </li>
              </ul>
            </section>

            <section style={footerSectionStyles}>
              <h3 style={footerTitleStyles}>Tool Sites</h3>
              <ul style={footerLinksStyles}>
                <li>
                  <a
                    href="https://fibertools.app"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Fiber Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://mindchecktools.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Mind Check Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://flipmycase.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Flip My Case
                  </a>
                </li>
                <li>
                  <a
                    href="https://creatorrevenuecalculator.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Creator Revenue Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="https://contractextract.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Contract Extract
                  </a>
                </li>
                <li>
                  <a
                    href="https://medicalbillreader.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Medical Bill Reader
                  </a>
                </li>
                <li>
                  <a
                    href="https://taxbreaktools.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    Tax Break Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://524tracker.com"
                    style={footerLinkStyles}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#333")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#666")
                    }
                  >
                    524 Tracker
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div
            style={{
              maxWidth: "1200px",
              margin: "2rem auto 0",
              paddingTop: "2rem",
              borderTop: "1px solid #ddd",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "#999",
            }}
          >
            <p style={{ margin: "0.5rem 0" }}>
              © 2026 Soak USA. All rights reserved.
            </p>
            <p style={{ margin: "0.5rem 0" }}>
              <a href="/privacy" style={footerLinkStyles}>
                Privacy Policy
              </a>
              {" | "}
              <a href="/terms" style={footerLinkStyles}>
                Terms of Service
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
