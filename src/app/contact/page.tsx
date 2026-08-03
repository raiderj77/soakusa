import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Soak USA with an editorial correction, an authoritative source, or a question about the catalog rebuild.",
  alternates: { canonical: "https://soakusa.net/contact" },
};

export default function ContactPage() {
  const titleStyles: React.CSSProperties = {
    fontSize: "2rem",
    color: "#7d1a00",
    marginBottom: "1.5rem",
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: "2rem",
  };

  const textStyles: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "1rem",
  };

  const contactInfoStyles: React.CSSProperties = {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1.5rem",
    marginBottom: "2rem",
  };

  const contactItemStyles: React.CSSProperties = {
    marginBottom: "1rem",
  };

  const contactLabelStyles: React.CSSProperties = {
    fontWeight: "600",
    color: "#7d1a00",
    display: "block",
    marginBottom: "0.25rem",
  };

  const contactValueStyles: React.CSSProperties = {
    color: "#555",
  };

  const formStyles: React.CSSProperties = {
    maxWidth: "500px",
  };

  const formGroupStyles: React.CSSProperties = {
    marginBottom: "1.5rem",
  };

  const labelStyles: React.CSSProperties = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "500",
    color: "#333",
  };

  const inputStyles: React.CSSProperties = {
    width: "100%",
    minHeight: "48px",
    padding: "0.75rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const textareaStyles: React.CSSProperties = {
    ...inputStyles,
    minHeight: "150px",
    resize: "vertical",
  };

  const buttonStyles: React.CSSProperties = {
    backgroundColor: "#7d1a00",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "4px",
    fontSize: "0.95rem",
    fontWeight: "600",
    minHeight: "48px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  return (
    <div className="content-page">
      <h1 style={titleStyles}>Contact Soak USA</h1>

      <section style={sectionStyles}>
        <p style={textStyles}>
          Send an editorial correction, an authoritative source for a future
          location record, or a question about Soak USA&apos;s publication standard.
        </p>

        <div style={contactInfoStyles}>
          <div style={contactItemStyles}>
            <span style={contactLabelStyles}>Email</span>
            <div style={contactValueStyles}>
              <a
                href="mailto:contact@soakusa.net"
                style={{ color: "#7d1a00", textDecoration: "none" }}
              >
                contact@soakusa.net
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyles}>
        <h2 style={{ fontSize: "1.3rem", color: "#7d1a00", marginBottom: "1rem" }}>
          Send Us a Message
        </h2>
        <p style={textStyles}>
          Fill out the form below to draft a message in your email application.
        </p>

        <p id="email-form-note" style={{ ...textStyles, fontSize: "0.875rem" }}>
          This form does not upload your message to Soak USA. Submitting it opens your device&apos;s configured email application; if that does not work, use the email link above.
        </p>

        <form style={formStyles} action="mailto:contact@soakusa.net" method="POST" encType="text/plain" aria-describedby="email-form-note">
          <div style={formGroupStyles}>
            <label htmlFor="contact-name" style={labelStyles}>Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              required
              style={inputStyles}
              placeholder="Your name"
            />
          </div>

          <div style={formGroupStyles}>
            <label htmlFor="contact-email" style={labelStyles}>Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              style={inputStyles}
              placeholder="your@email.com"
            />
          </div>

          <div style={formGroupStyles}>
            <label htmlFor="contact-subject" style={labelStyles}>Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              style={inputStyles}
              placeholder="What is this about?"
            />
          </div>

          <div style={formGroupStyles}>
            <label htmlFor="contact-message" style={labelStyles}>Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              style={textareaStyles}
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            style={buttonStyles}
          >
            Send Message
          </button>
        </form>
      </section>

      <section style={sectionStyles}>
        <h2 style={{ fontSize: "1.3rem", color: "#7d1a00", marginBottom: "1rem" }}>
          Suggestions & Feedback
        </h2>
        <p style={textStyles}>
          A location is considered only after its identity, geography, access,
          classification, and safety claims can be reviewed. Send us:
        </p>
        <ul style={textStyles}>
          <li>The location or thermal feature name</li>
          <li>The responsible operator, park, land manager, tribe, or local authority</li>
          <li>A current authoritative HTTPS source</li>
          <li>The claim or correction that source supports</li>
        </ul>
      </section>
    </div>
  );
}
