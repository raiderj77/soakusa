import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Soak USA - Hot Springs Directory",
  description:
    "Learn about Soak USA's mission to help people discover hot springs and natural thermal pools across the United States.",
};

export default function AboutPage() {
  const titleStyles: React.CSSProperties = {
    fontSize: "2rem",
    color: "#7d1a00",
    marginBottom: "1.5rem",
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: "2rem",
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

  return (
    <>
      <h1 style={titleStyles}>About Soak USA</h1>

      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>Our Mission</h2>
        <p style={textStyles}>
          Soak USA is dedicated to helping people discover, explore, and safely
          visit hot springs and natural thermal pools throughout the United
          States. We believe that hot springs offer a unique connection to
          nature and an opportunity for relaxation, wellness, and adventure.
        </p>
        <p style={textStyles}>
          Our mission is to provide accurate, comprehensive information about
          hot springs across the USA, making it easier for enthusiasts to plan
          their next thermal adventure.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>What We Offer</h2>
        <p style={textStyles}>
          Soak USA maintains a comprehensive directory of hot springs throughout
          the United States. Our directory includes:
        </p>
        <ul style={textStyles}>
          <li>Detailed information about hot springs locations and access</li>
          <li>Amenities and features of each hot spring</li>
          <li>Safety information and best practices for soaking</li>
          <li>Geothermal and geological information</li>
          <li>Tips for visiting different types of hot springs</li>
          <li>Health and wellness information about thermal soaking</li>
        </ul>
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>Safety and Responsibility</h2>
        <p style={textStyles}>
          Safety is paramount when visiting hot springs. We emphasize the
          importance of:
        </p>
        <ul style={textStyles}>
          <li>Always checking water temperature before entering</li>
          <li>Verifying water quality with local authorities</li>
          <li>Following all posted warnings and advisories</li>
          <li>
            Avoiding soaking if you have health conditions affected by heat or
            mineral water
          </li>
          <li>Never soaking alone in remote locations</li>
          <li>Respecting private property and local regulations</li>
        </ul>
        <p style={textStyles}>
          Visiting hot springs is at your own risk. Always verify current
          conditions with local authorities before planning your trip.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>Environmental Stewardship</h2>
        <p style={textStyles}>
          We encourage all visitors to hot springs to practice Leave No Trace
          principles:
        </p>
        <ul style={textStyles}>
          <li>Pack out all trash and belongings</li>
          <li>Use biodegradable soap or avoid soap entirely</li>
          <li>Respect wildlife and natural habitats</li>
          <li>Stay on designated trails and areas</li>
          <li>Minimize campfire impacts</li>
          <li>Respect other visitors' experiences</li>
        </ul>
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>Disclaimer</h2>
        <p style={textStyles}>
          The information provided on Soak USA is for informational purposes
          only. While we strive to provide accurate and up-to-date information,
          conditions at hot springs can change. Always verify current conditions,
          access information, and any advisories with local authorities before
          visiting.
        </p>
        <p style={textStyles}>
          Soaking in natural hot springs carries inherent risks. We recommend
          consulting with healthcare providers if you have health conditions that
          may be affected by heat or mineral-rich water.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>Contact Us</h2>
        <p style={textStyles}>
          Have questions or suggestions? We'd love to hear from you. Visit our
          contact page to get in touch.
        </p>
      </section>
    </>
  );
}
