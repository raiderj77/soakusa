import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosure",
  description: "How Soak USA is supported, including its affiliated Etsy shop and current advertising status.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://soakusa.net/disclosure" },
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
    color: "#625b54",
    marginBottom: "2rem",
    fontStyle: "italic",
  };

  return (
    <div className="content-page">
      <h1 style={titleStyles}>Disclosure</h1>
      <div style={lastUpdatedStyles}>Last updated: August 2, 2026</div>

      <p style={textStyles}>
        Soak USA is a free research publication. The site currently includes a clearly
        labeled link to an affiliated Etsy shop. Advertising code is not
        currently enabled. This page explains those relationships plainly.
      </p>

      <section>
        <h2 style={sectionTitleStyles}>Advertising</h2>
        <p style={textStyles}>
          Soak USA does not currently load Google AdSense or other advertising
          scripts. Its public ads.txt file authorizes the publisher account so
          the domain can be verified, but that file does not mean ads are being
          served. Before advertising is enabled, Soak USA will update its
          disclosures and add any consent or opt-out controls required for the
          deployed configuration.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Sponsored Links</h2>
        <p style={textStyles}>
          The site contains a link to an Etsy shop affiliated with Soak USA&apos;s
          publisher. The relationship is labeled &ldquo;Affiliated shop&rdquo;
          where the link appears. A purchase may produce revenue for the
          publisher; simply viewing or clicking the link does not create a
          charge for the visitor.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Affiliate Links</h2>
        <p style={textStyles}>
          Soak USA does not currently publish third-party affiliate offers.
          If one is added later, the commercial relationship will be disclosed
          next to the link and the link will use the appropriate sponsored
          relationship attribute.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Editorial Independence</h2>
        <p style={textStyles}>
          Commercial relationships do not determine which locations are
          published. The legacy catalog is offline. Any future record must pass
          the source, classification, and review requirements described in the
          Editorial Standards before it can appear publicly.
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
    </div>
  );
}
