import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Soak USA hot-spring research and safety publication.",
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
    color: "#625b54",
    marginBottom: "2rem",
    fontStyle: "italic",
  };

  return (
    <div className="content-page">
      <h1 style={titleStyles}>Privacy Policy</h1>
      <div style={lastUpdatedStyles}>Last updated: August 2, 2026</div>

      <section>
        <h2 style={sectionTitleStyles}>Introduction</h2>
        <p style={textStyles}>
          Soak USA ("we", "us", or "our") operates the soakusa.net website
          (the "Site").
        </p>
        <p style={textStyles}>
          This policy explains the limited personal data that may be processed
          when you visit the Site or contact us, the current status of optional
          advertising and analytics, and how to submit a privacy request.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Information Collection and Use</h2>
        <p style={textStyles}>
          The Site does not require an account. The following information may be
          processed to deliver, secure, and support it.
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
          Soak USA may use the limited data described above for these purposes:
        </p>
        <ul style={textStyles}>
          <li>To deliver, maintain, and secure the Site</li>
          <li>To publish material changes to the Site or this policy</li>
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
        <h2 style={sectionTitleStyles}>Privacy Requests and Applicable Rights</h2>
        <p style={textStyles}>
          Depending on where you live and whether a privacy law applies to the
          Site&apos;s processing, you may have rights concerning personal data.
          Maryland&apos;s Online Data Privacy Act took effect October 1, 2025;
          Maryland residents can review the Attorney General&apos;s official{" "}
          <a href="https://oag.maryland.gov/resources-info/Pages/data-privacy.aspx" style={{ color: "#7d1a00" }}>
            consumer privacy guidance
          </a>
          . This policy does not claim that every listed statutory duty or right
          applies to every request.
        </p>

        <h3 style={{ fontSize: "1.1rem", color: "#333", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Requests You May Submit:
        </h3>
        <ul style={textStyles}>
          <li>
            <strong>Access:</strong> Ask whether we hold personal data associated with you and request access where applicable.
          </li>
          <li>
            <strong>Correction:</strong> Ask us to correct inaccurate personal data where applicable.
          </li>
          <li>
            <strong>Deletion:</strong> Ask us to delete personal data, subject to legal and operational exceptions.
          </li>
          <li>
            <strong>Opt-out:</strong> Ask to opt out of covered sale, sharing, or targeted-advertising processing if it is introduced and the applicable law provides that right.
          </li>
          <li>
            <strong>Portability:</strong> Request a portable copy where applicable and technically feasible.
          </li>
        </ul>

        <h3 style={{ fontSize: "1.1rem", color: "#333", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Global Privacy Control (GPC):
        </h3>
        <p style={textStyles}>
          The Site does not currently sell personal data, share it for cross-context behavioral advertising, or run targeted advertising. If covered opt-out processing is introduced later, the Site will implement and disclose the controls required for the deployed configuration, including recognition of applicable Global Privacy Control signals.
        </p>

        <h3 style={{ fontSize: "1.1rem", color: "#333", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Data Sale Notice:
        </h3>
        <p style={textStyles}>
          Soak USA does not currently sell personal data or share it for cross-context behavioral advertising. Links to third-party sites may allow those sites to receive ordinary request information when you choose to follow a link; their own privacy policies apply there.
        </p>

        <h3 style={{ fontSize: "1.1rem", color: "#333", marginTop: "1rem", marginBottom: "0.5rem" }}>
          How to Exercise Your Rights:
        </h3>
        <p style={textStyles}>
          To submit a consumer rights request, please contact us at{" "}
          <a href="mailto:privacy@soakusa.net" style={{ color: "#7d1a00" }}>
            privacy@soakusa.net
          </a>
          . We will verify and respond to requests within the period required by
          applicable law. We may need information reasonably necessary to match
          a request to data we hold and may deny or limit a request when the law
          permits or requires it.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Third-Party Services</h2>
        <p style={textStyles}>
          The Site may contain links to other websites and services that are
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
          The Site links to an Etsy shop affiliated with Soak USA&apos;s publisher.
          A purchase may produce revenue for the publisher. Soak USA does not
          currently publish third-party affiliate offers. For more information,
          see our <a href="/disclosure" style={{ color: "#7d1a00" }}>Disclosure page</a>.
        </p>
      </section>

<section>
        <h2 style={sectionTitleStyles}>Children's Privacy</h2>
        <p style={textStyles}>
          The Site is not directed to children under the age of 13.
          We do not knowingly collect personally identifiable information from
          anyone under the age of 13. If you are a parent or guardian and you
          are aware that your Child has provided us with Personal Data, please
          contact us.
        </p>
      </section>
    </div>
  );
}
