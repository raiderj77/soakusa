import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Soak USA hot springs directory.",
  alternates: { canonical: "https://soakusa.net/privacy" },
};

export default function PrivacyPage() {
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
    <div className="content-page">
      <h1 style={titleStyles}>Privacy Policy</h1>
      <div style={lastUpdatedStyles}>Last updated: July 13, 2026</div>

      <section>
        <h2 style={sectionTitleStyles}>Introduction</h2>
        <p style={textStyles}>
          Soak USA ("we", "us", "our", or "Company") operates the soakusa.net
          website (the "Service").
        </p>
        <p style={textStyles}>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Information Collection and Use</h2>
        <p style={textStyles}>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>

        <h3 style={{ fontSize: "1.1rem", color: "#333", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Types of Data Collected:
        </h3>
        <ul style={textStyles}>
          <li>
            <strong>Personal Data:</strong> When you contact us, we may collect
            your name, email address, and any information you provide in your
            message.
          </li>
          <li>
            <strong>Service and Security Data:</strong> Hosting and security
            providers may process request metadata such as IP address, browser
            type, requested page, and timestamp to deliver and protect the Site.
          </li>
          <li>
            <strong>Optional Tracking:</strong> Google AdSense, Google Analytics,
            and Microsoft Clarity are not currently enabled.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Use of Data</h2>
        <p style={textStyles}>
          Soak USA uses the collected data for various purposes:
        </p>
        <ul style={textStyles}>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer support and respond to your inquiries</li>
          <li>To detect, prevent and address technical and security issues</li>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Security of Data</h2>
        <p style={textStyles}>
          The security of your data is important to us but remember that no
          method of transmission over the Internet or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Changes to This Privacy Policy</h2>
        <p style={textStyles}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "effective date" at the top of this Privacy Policy.
        </p>
        <p style={textStyles}>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Contact Us</h2>
        <p style={textStyles}>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:contact@soakusa.net" style={{ color: "#7d1a00" }}>
            contact@soakusa.net
          </a>
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Your Privacy Rights (MODPA Compliance)</h2>
        <p style={textStyles}>
          As of April 1, 2026, Soak USA complies with the Maryland Online Data Privacy Act (MODPA) and recognizes your consumer privacy rights.
        </p>

        <h3 style={{ fontSize: "1.1rem", color: "#333", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Your Consumer Rights:
        </h3>
        <ul style={textStyles}>
          <li>
            <strong>Right to Access:</strong> You have the right to confirm whether we collect personal data about you and to access that data.
          </li>
          <li>
            <strong>Right to Correct:</strong> You have the right to correct any inaccurate personal data we hold about you.
          </li>
          <li>
            <strong>Right to Delete:</strong> You have the right to request deletion of your personal data, subject to certain exceptions.
          </li>
          <li>
            <strong>Right to Opt-Out:</strong> You have the right to opt out of the sale or targeted advertising of your personal data.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> You have the right to obtain a copy of your personal data in a portable format.
          </li>
        </ul>

        <h3 style={{ fontSize: "1.1rem", color: "#333", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Global Privacy Control (GPC):
        </h3>
        <p style={textStyles}>
          The Site does not currently sell personal data or run targeted advertising. If processing subject to an opt-out is introduced later, we will honor applicable Global Privacy Control signals.
        </p>

        <h3 style={{ fontSize: "1.1rem", color: "#333", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Data Sale Notice:
        </h3>
        <p style={textStyles}>
          Soak USA does not sell or share personal data for monetary consideration. We do not participate in the sale of personal information as defined under privacy laws.
        </p>

        <h3 style={{ fontSize: "1.1rem", color: "#333", marginTop: "1rem", marginBottom: "0.5rem" }}>
          How to Exercise Your Rights:
        </h3>
        <p style={textStyles}>
          To submit a consumer rights request, please contact us at{" "}
          <a href="mailto:privacy@soakusa.net" style={{ color: "#7d1a00" }}>
            privacy@soakusa.net
          </a>
          . We will respond to verified requests within 45 days of receipt. You may also designate an authorized agent to make requests on your behalf.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Third-Party Services</h2>
        <p style={textStyles}>
          Our Service may contain links to other websites and services that are
          not operated by us. This Privacy Policy does not apply to these
          third-party websites and services, and we are not responsible for
          their privacy practices.
        </p>
        <p style={textStyles}>
          Google AdSense, Google Analytics, and Microsoft Clarity are not
          currently enabled. The Site does not load their scripts or set their
          advertising or analytics cookies.
        </p>
        <p style={textStyles}>
          A publisher identifier may remain in ads.txt or public metadata solely
          for ownership verification. If optional advertising or analytics is
          enabled later, this policy and any required consent and opt-out
          controls will be updated first.
        </p>
      </section>

            <section>
        <h2 style={sectionTitleStyles}>Affiliate Relationships</h2>
        <p style={textStyles}>
          Soak USA earns compensation from affiliate links on the site, including links to an affiliated Etsy shop. These relationships do not affect editorial content or hot spring listings. For more information, see our <a href="/disclosure" style={{ color: "#7d1a00" }}>Disclosure page</a>.
        </p>
      </section>

<section>
        <h2 style={sectionTitleStyles}>Children's Privacy</h2>
        <p style={textStyles}>
          Our Service does not address anyone under the age of 13 ("Children").
          We do not knowingly collect personally identifiable information from
          anyone under the age of 13. If you are a parent or guardian and you
          are aware that your Child has provided us with Personal Data, please
          contact us.
        </p>
      </section>
    </div>
  );
}
