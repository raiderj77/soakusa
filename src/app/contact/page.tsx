import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Soak USA - Get in Touch",
  description:
    "Contact Soak USA with questions, suggestions, or feedback about our hot springs directory.",
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
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  return (
    <>
      <h1 style={titleStyles}>Contact Soak USA</h1>

      <section style={sectionStyles}>
        <p style={textStyles}>
          Have questions about hot springs? Want to suggest a location? Looking
          for more information? We'd love to hear from you!
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
          Send us a Message
        </h2>
        <p style={textStyles}>
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form style={formStyles} action="mailto:contact@soakusa.net" method="POST">
          <div style={formGroupStyles}>
            <label style={labelStyles}>Name</label>
            <input
              type="text"
              name="name"
              required
              style={inputStyles}
              placeholder="Your name"
            />
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Email</label>
            <input
              type="email"
              name="email"
              required
              style={inputStyles}
              placeholder="your@email.com"
            />
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Subject</label>
            <input
              type="text"
              name="subject"
              style={inputStyles}
              placeholder="What is this about?"
            />
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Message</label>
            <textarea
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
          Know of a hot spring we should feature? Have feedback about our
          directory? We'd love to hear your suggestions! Send us an email with:
        </p>
        <ul style={textStyles}>
          <li>Name and location of the hot spring</li>
          <li>State and city information</li>
          <li>Description and key amenities</li>
          <li>Any other relevant details</li>
        </ul>
      </section>
    </>
  );
}
