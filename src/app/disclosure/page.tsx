import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosure | Soak USA",
  description: "How Soak USA is supported: advertising, sponsored links, and possible affiliate links.",
  robots: { index: true, follow: true },
};

export default function DisclosurePage() {
  const titleStyles: React.CSSProperties = {
    fontSize: "2rem",
    color: "#7d1a00",
    marginBottom: "1.5rem",
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: "1.3rem",
    color: "#7d1a00",
    marginTop: "1.5rem",
    marginBottom: "1rem",
  };

  const textStyles: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "1rem",
  };

  const lastUpdatedStyles: React.CSSProperties = {
    fontSize: "0.85rem",
    color: "#999",
    marginBottom: "2rem",
    fontStyle: "italic",
  };

  return (
    <>
      <h1 style={titleStyles}>Disclosure</h1>
      <div style={lastUpdatedStyles}>Last updated: June 2026</div>

      <p style={textStyles}>
        Soak USA is a free directory. To keep the site running, it is supported
        by advertising and may contain sponsored or affiliate links. This page
        explains each of those relationships plainly.
      </p>

      <section>
        <h2 style={sectionTitleStyles}>Advertising</h2>
        <p style={textStyles}>
          Soak USA displays ads through Google AdSense. Google may use cookies
          and similar technologies to show ads based on your prior visits to
          this or other websites. You can review Google&apos;s advertising
          practices and opt-out options at{" "}
          <a href="https://policies.google.com/technologies/ads" style={{ color: "#7d1a00" }}>
            policies.google.com/technologies/ads
          </a>
          .
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Sponsored Links</h2>
        <p style={textStyles}>
          The site contains a sponsored link to an affiliated Etsy shop
          (DevelopVault). This link is clearly labeled &ldquo;Sponsored&rdquo;
          where it appears. Soak USA may receive compensation if you visit or
          purchase through that link.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Affiliate Links</h2>
        <p style={textStyles}>
          Some links on Soak USA may be affiliate links, meaning Soak USA could
          earn a small commission if you click through and make a purchase, at
          no additional cost to you. Affiliate links are identified with a
          &ldquo;sponsored&rdquo; or &ldquo;nofollow&rdquo; relationship
          attribute.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Editorial Independence</h2>
        <p style={textStyles}>
          Advertising, sponsored links, and any affiliate relationships do not
          influence which hot springs and soaking locations are listed on Soak
          USA, how they are described, or how they are ranked. All listings
          reflect publicly available information about the locations themselves.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Questions</h2>
        <p style={textStyles}>
          If you have questions about this disclosure, contact us at{" "}
          <a href="mailto:contact@soakusa.net" style={{ color: "#7d1a00" }}>
            contact@soakusa.net
          </a>
          .
        </p>
      </section>
    </>
  );
}
