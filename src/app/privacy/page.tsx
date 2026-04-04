import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Soak USA",
  description: "Privacy policy for Soak USA hot springs directory.",
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
    <>
      <h1 style={titleStyles}>Privacy Policy</h1>
      <div style={lastUpdatedStyles}>Last updated: April 2026</div>

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
            <strong>Usage Data:</strong> We automatically collect information
            such as your device type, browser type, IP address, pages visited,
            and referring/exit pages.
          </li>
          <li>
            <strong>Cookies and Similar Technologies:</strong> We use cookies and
            similar tracking technologies to track activity and store certain
            information.
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
          <li>To gather analysis or valuable information to improve our Service</li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical and security issues</li>
          <li>To provide you with news, special offers, and general information</li>
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
        <h2 style={sectionTitleStyles}>Third-Party Services</h2>
        <p style={textStyles}>
          Our Service may contain links to other websites and services that are
          not operated by us. This Privacy Policy does not apply to these
          third-party websites and services, and we are not responsible for
          their privacy practices.
        </p>
        <p style={textStyles}>
          We use Google AdSense to display advertisements. Google may use
          cookies and similar technologies to serve ads based on your prior
          visits to our website or other websites. You can opt out of
          personalized advertising by visiting Google's Ads Settings.
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
    </>
  );
}
