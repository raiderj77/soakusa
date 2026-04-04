import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Soak USA",
  description: "Terms of service and legal disclaimers for Soak USA.",
};

export default function TermsPage() {
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

  const disclaimerBoxStyles: React.CSSProperties = {
    backgroundColor: "#fff3cd",
    border: "1px solid #ffc107",
    borderRadius: "4px",
    padding: "1rem",
    marginBottom: "2rem",
    fontSize: "0.95rem",
    color: "#333",
    lineHeight: "1.6",
  };

  return (
    <>
      <h1 style={titleStyles}>Terms of Service</h1>
      <div style={lastUpdatedStyles}>Last updated: April 2026</div>

      <div style={disclaimerBoxStyles}>
        <strong>IMPORTANT SAFETY DISCLAIMER:</strong> Hot springs can be extremely
        hot and pose serious burn and safety risks. Always verify water
        temperature before entering. Never soak if you are ill or have health
        conditions affected by heat. Always check with local authorities for
        current conditions, advisories, and any health warnings. Soaking in
        natural hot springs is at your own risk.
      </div>

      <section>
        <h2 style={sectionTitleStyles}>1. Agreement to Terms</h2>
        <p style={textStyles}>
          By accessing and using the Soak USA website (soakusa.net), you accept
          and agree to be bound by the terms and provision of this agreement.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>2. Use License</h2>
        <p style={textStyles}>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Soak USA's website for personal,
          non-commercial transitory viewing only. This is the grant of a license,
          not a transfer of title, and under this license you may not:
        </p>
        <ul style={textStyles}>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>
            Attempt to decompile or reverse engineer any software contained on
            the website
          </li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          <li>
            Violate any applicable laws or regulations or encourage others to do so
          </li>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>3. Disclaimer</h2>
        <p style={textStyles}>
          The materials on Soak USA's website are provided on an 'as is' basis.
          Soak USA makes no warranties, expressed or implied, and hereby disclaims
          and negates all other warranties including, without limitation, implied
          warranties or conditions of merchantability, fitness for a particular
          purpose, or non-infringement of intellectual property or other violation
          of rights.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>4. Hot Springs Safety Disclaimer</h2>
        <p style={textStyles}>
          <strong>
            Soaking in natural hot springs carries inherent risks. The information
            provided on Soak USA is for informational purposes only and is not
            professional medical advice.
          </strong>
        </p>
        <ul style={textStyles}>
          <li>
            <strong>Water Temperature Risk:</strong> Hot spring water can reach
            dangerous temperatures that can cause severe burns in seconds. Always
            test water temperature with your hand before entering.
          </li>
          <li>
            <strong>Health Risks:</strong> Do not soak if you are ill, pregnant,
            or have conditions affected by heat (including but not limited to:
            heart disease, high blood pressure, diabetes, or heat sensitivity).
            Consult with a healthcare provider before soaking.
          </li>
          <li>
            <strong>Water Quality:</strong> Some hot springs may contain minerals,
            bacteria, or other substances that could affect your health. Check
            with local authorities for water quality information and advisories.
          </li>
          <li>
            <strong>Dehydration:</strong> Soaking in warm water can cause rapid
            dehydration. Drink plenty of water before, during, and after soaking.
          </li>
          <li>
            <strong>Current Conditions:</strong> Conditions at hot springs change
            seasonally and can be affected by weather. Always verify current
            access, safety conditions, and any advisories with local authorities
            before visiting.
          </li>
          <li>
            <strong>Private Property:</strong> Some hot springs are on private
            property. Respect all posted signs and private property rights. Obtain
            permission before accessing private land.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>5. Limitations of Liability</h2>
        <p style={textStyles}>
          In no event shall Soak USA or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to use
          the materials on Soak USA's website, even if Soak USA or an authorized
          representative has been notified orally or in writing of the possibility
          of such damage.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>6. Accuracy of Materials</h2>
        <p style={textStyles}>
          The materials appearing on Soak USA's website could include technical,
          typographical, or photographic errors. Soak USA does not warrant that
          any of the materials on the website are accurate, complete, or current.
          Soak USA may make changes to the materials contained on the website at
          any time without notice.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>7. Links to Third-Party Websites</h2>
        <p style={textStyles}>
          Soak USA has not reviewed all of the sites linked to its website and is
          not responsible for the contents of any such linked site. The inclusion
          of any link does not imply endorsement by Soak USA of the site. Use of
          any such linked website is at the user's own risk.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>8. Modifications to Terms</h2>
        <p style={textStyles}>
          Soak USA may revise these terms of service for the website at any time
          without notice. By using this website, you are agreeing to be bound by
          the then current version of these terms of service.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>9. Governing Law</h2>
        <p style={textStyles}>
          These terms and conditions are governed by and construed in accordance
          with the laws of the United States, and you irrevocably submit to the
          exclusive jurisdiction of the courts in that location.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>10. Contact Information</h2>
        <p style={textStyles}>
          If you have any questions about these Terms of Service, please contact us at{" "}
          <a href="mailto:contact@soakusa.net" style={{ color: "#7d1a00" }}>
            contact@soakusa.net
          </a>
        </p>
      </section>

      <div style={disclaimerBoxStyles} style={{ marginTop: "2rem" }}>
        <strong>Remember:</strong> The responsibility for your safety when visiting
        hot springs lies with you. Always exercise caution, verify conditions with
        local authorities, and make informed decisions about your health and safety.
      </div>
    </>
  );
}
