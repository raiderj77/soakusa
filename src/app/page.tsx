import type { Metadata } from "next";
import locations from "@/data/locations.json";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Soak USA - Find Hot Springs Across the USA",
  description:
    "Discover hot springs and natural thermal pools across the USA. Browse our directory of geothermal hot springs by state with detailed information, amenities, and safety guidelines.",
  openGraph: {
    title: "Soak USA - Find Hot Springs Across the USA",
    description:
      "Discover hot springs and natural thermal pools across the USA.",
    type: "website",
  },
};

export default function Home() {
  const heroStyles: React.CSSProperties = {
    textAlign: "center",
    padding: "3rem 0 2rem",
    borderBottom: "3px solid #7d1a00",
    marginBottom: "3rem",
  };

  const heroTitleStyles: React.CSSProperties = {
    fontSize: "2.5rem",
    color: "#7d1a00",
    margin: "0 0 0.5rem 0",
  };

  const heroSubtitleStyles: React.CSSProperties = {
    fontSize: "1.1rem",
    color: "#666",
    margin: "0",
  };

  const featuredGridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "3rem",
  };

  const cardStyles: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1.5rem",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    backgroundColor: "#fff",
  };

  const cardTitleStyles: React.CSSProperties = {
    fontSize: "1.2rem",
    color: "#7d1a00",
    marginTop: 0,
    marginBottom: "0.5rem",
  };

  const cardLocationStyles: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "#ff6b35",
    fontWeight: "600",
    marginBottom: "0.5rem",
  };

  const cardDescriptionStyles: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.5",
    marginBottom: "1rem",
  };

  const amenitiesStyles: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "1rem",
  };

  const amenityBadgeStyles: React.CSSProperties = {
    backgroundColor: "#f0f0f0",
    color: "#333",
    padding: "0.3rem 0.6rem",
    borderRadius: "4px",
    fontSize: "0.8rem",
  };

  const linkButtonStyles: React.CSSProperties = {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#7d1a00",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.2s",
    fontSize: "0.9rem",
  };

  const contentSectionStyles: React.CSSProperties = {
    lineHeight: "1.7",
    color: "#333",
    marginBottom: "3rem",
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: "1.8rem",
    color: "#7d1a00",
    marginTop: "2rem",
    marginBottom: "1rem",
  };

  const textContentStyles: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "1.2rem",
  };

  const faqStyles: React.CSSProperties = {
    marginTop: "2rem",
  };

  const faqItemStyles: React.CSSProperties = {
    marginBottom: "1.5rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid #eee",
  };

  const faqQuestionStyles: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#7d1a00",
    marginBottom: "0.5rem",
  };

  const faqAnswerStyles: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.6",
  };

  const disclaimerStyles: React.CSSProperties = {
    backgroundColor: "#fff3cd",
    border: "1px solid #ffc107",
    borderRadius: "4px",
    padding: "1rem",
    marginTop: "2rem",
    fontSize: "0.9rem",
    color: "#333",
  };

  const featuredLocations = locations.slice(0, 6);

  return (
    <>
      <section style={heroStyles}>
        <h1 style={heroTitleStyles}>Find Hot Springs Across the USA</h1>
        <p style={heroSubtitleStyles}>
          Discover natural thermal pools and geothermal hot springs by state
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#7d1a00", marginBottom: "1.5rem" }}>
          Featured Hot Springs
        </h2>
        <div style={featuredGridStyles}>
          {featuredLocations.map((location) => (
            <div
              key={location.slug}
              style={cardStyles}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <h3 style={cardTitleStyles}>{location.name}</h3>
              <p style={cardLocationStyles}>
                {location.city}, {location.state}
              </p>
              <p style={cardDescriptionStyles}>
                {location.description.substring(0, 120)}...
              </p>
              <div style={amenitiesStyles}>
                {location.amenities.slice(0, 3).map((amenity, idx) => (
                  <span key={idx} style={amenityBadgeStyles}>
                    {amenity}
                  </span>
                ))}
              </div>
              <a
                href={`/${location.stateSlug}/${location.slug}`}
                style={linkButtonStyles}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.backgroundColor =
                    "#ff6b35";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.backgroundColor =
                    "#7d1a00";
                }}
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={contentSectionStyles}>
        <h2 style={sectionTitleStyles}>What Are Hot Springs?</h2>
        <p style={textContentStyles}>
          Hot springs are natural thermal pools heated by geothermal energy deep
          within the Earth. Water from underground reservoirs is heated by the
          Earth's internal heat and rises to the surface, creating these unique
          natural wonders. Hot springs form in areas with active or recent
          volcanic and geothermal activity, where the Earth's crust is thinner
          and allows heat to reach the surface more easily. The water in these
          springs contains dissolved minerals and rocks, which gives many hot
          springs their distinctive properties and potential therapeutic
          benefits.
        </p>

        <h2 style={sectionTitleStyles}>Types of Hot Springs</h2>
        <p style={textContentStyles}>
          <strong>Developed Hot Springs:</strong> These are commercial or resort-style hot
          springs with infrastructure like changing facilities, admission fees,
          and amenities such as dining and lodging. Examples include spas and
          wellness resorts that harness natural geothermal resources to provide
          luxury experiences.
        </p>
        <p style={textContentStyles}>
          <strong>Semi-Developed Hot Springs:</strong> These springs have some basic
          infrastructure like parking areas and marked trails but remain more
          natural. They typically allow free or low-cost access while maintaining
          the wild character of the location.
        </p>
        <p style={textContentStyles}>
          <strong>Primitive and Wild Hot Springs:</strong> These undeveloped thermal
          pools remain in their natural state, often requiring hiking or
          backcountry travel to access. They offer an authentic experience for
          adventurous visitors seeking solitude and natural beauty.
        </p>

        <h2 style={sectionTitleStyles}>Health Benefits of Soaking</h2>
        <p style={textContentStyles}>
          Many people visit hot springs for the therapeutic and relaxation
          benefits associated with soaking in warm mineral water. The heat itself
          promotes relaxation and can help ease muscle tension and stress. The
          minerals found in hot spring water—including sulfur, silica, iron, and
          magnesium—are believed to offer various health benefits such as
          improved skin health, better circulation, and pain relief.
        </p>
        <p style={textContentStyles}>
          Soaking in hot springs has been valued across cultures for centuries
          as a wellness practice. However, it's important to note that while
          many people report feeling better after soaking, individual experiences
          vary, and hot springs should not be used as a substitute for medical
          treatment.
        </p>

        <h2 style={sectionTitleStyles}>How to Visit Hot Springs Safely</h2>
        <p style={textContentStyles}>
          <strong>Check Water Temperature:</strong> Hot spring water can reach
          scalding temperatures. Always test the temperature before entering and
          be cautious around very hot areas. Some springs have temperature
          warnings posted.
        </p>
        <p style={textContentStyles}>
          <strong>Verify Water Quality:</strong> Check with local authorities or
          park management about water quality and any advisories. Some hot springs
          may have mineral content or conditions that make them unsuitable for
          soaking.
        </p>
        <p style={textContentStyles}>
          <strong>Start Gradually:</strong> Enter hot water slowly, allowing your
          body to acclimate. Start with shorter soaking times, especially if
          you're new to hot springs.
        </p>
        <p style={textContentStyles}>
          <strong>Stay Hydrated:</strong> Soaking in warm water can cause
          dehydration. Bring plenty of water and drink regularly while soaking.
        </p>
        <p style={textContentStyles}>
          <strong>Know Your Health Status:</strong> Consult with a healthcare
          provider if you have heart conditions, high blood pressure, or
          pregnancy concerns before soaking in hot springs.
        </p>

        <h2 style={sectionTitleStyles}>
          Best Regions for Hot Springs in the USA
        </h2>
        <p style={textContentStyles}>
          <strong>Pacific Northwest:</strong> Oregon, Washington, and northern
          California offer numerous hot springs ranging from developed resorts to
          remote wilderness pools. The region's volcanic geology creates abundant
          geothermal activity.
        </p>
        <p style={textContentStyles}>
          <strong>Rocky Mountains:</strong> Colorado, Wyoming, and Montana host
          some of America's most famous hot springs, including those near
          Steamboat Springs and in Yellowstone National Park. These areas offer a
          mix of developed and primitive options.
        </p>
        <p style={textContentStyles}>
          <strong>Southwest:</strong> New Mexico and Arizona have long traditions
          of hot spring use, with both developed spas and rustic natural pools.
          The desert landscape offers stunning scenic backdrops.
        </p>
        <p style={textContentStyles}>
          <strong>Northern California:</strong> The Sierra Nevada region contains
          many hot springs accessible for day trips and backpacking adventures,
          with varying levels of development.
        </p>
        <p style={textContentStyles}>
          <strong>Alaska:</strong> Remote Alaskan hot springs offer pristine
          natural experiences, though they typically require significant travel
          and wilderness skills to access.
        </p>

        <h2 style={sectionTitleStyles}>Frequently Asked Questions</h2>
        <div style={faqStyles}>
          <div style={faqItemStyles}>
            <div style={faqQuestionStyles}>
              Q: Are hot springs safe to soak in?
            </div>
            <div style={faqAnswerStyles}>
              A: Most hot springs are safe when approached with caution. Always
              check water temperature before entering, verify water quality with
              local authorities, and avoid soaking if you have certain health
              conditions. Never soak alone in remote locations.
            </div>
          </div>

          <div style={faqItemStyles}>
            <div style={faqQuestionStyles}>
              Q: What should I bring when visiting a hot spring?
            </div>
            <div style={faqAnswerStyles}>
              A: Bring a towel, swimsuit, water shoes (especially for rocky
              springs), plenty of drinking water, sun protection, and any
              personal items you'll need. For remote springs, bring a headlamp,
              first aid kit, and emergency supplies.
            </div>
          </div>

          <div style={faqItemStyles}>
            <div style={faqQuestionStyles}>
              Q: Can children and pets visit hot springs?
            </div>
            <div style={faqAnswerStyles}>
              A: Many hot springs allow children and pets, but rules vary by
              location. Always verify policies with the specific hot spring.
              Keep close supervision of children due to temperature and safety
              risks. Some springs prohibit pets entirely.
            </div>
          </div>

          <div style={faqItemStyles}>
            <div style={faqQuestionStyles}>
              Q: How long should I soak in a hot spring?
            </div>
            <div style={faqAnswerStyles}>
              A: Start with 10-15 minute soaks, especially if you're new to hot
              springs. Most people find 20-30 minutes comfortable. Listen to your
              body and exit if you feel dizzy, overheated, or uncomfortable. Break
              between soaks to cool down and rehydrate.
            </div>
          </div>

          <div style={faqItemStyles}>
            <div style={faqQuestionStyles}>
              Q: What is the best season to visit hot springs?
            </div>
            <div style={faqAnswerStyles}>
              A: Most hot springs can be visited year-round. Winter visits offer
              the unique experience of soaking in warm water while surrounded by
              snow and cold air. Summer provides easier access to remote springs.
              Check seasonal road closures and weather conditions before planning
              your trip.
            </div>
          </div>
        </div>

        <div style={disclaimerStyles}>
          <strong>Safety Disclaimer:</strong> Always check water temperature
          before entering hot springs, as some can cause serious burns. Never
          soak if you have health conditions that may be negatively affected by
          heat or mineral-rich water. Do not soak if you're ill. Always verify
          current conditions and any health advisories with local authorities
          before visiting. Soaking in natural hot springs is at your own risk.
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are hot springs safe to soak in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most hot springs are safe when approached with caution. Always check water temperature before entering, verify water quality with local authorities, and avoid soaking if you have certain health conditions.",
                },
              },
              {
                "@type": "Question",
                name: "What should I bring when visiting a hot spring?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bring a towel, swimsuit, water shoes, plenty of drinking water, sun protection, and personal items you'll need.",
                },
              },
              {
                "@type": "Question",
                name: "How long should I soak in a hot spring?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start with 10-15 minute soaks. Most people find 20-30 minutes comfortable. Listen to your body and exit if you feel dizzy or overheated.",
                },
              },
              {
                "@type": "Question",
                name: "Can children and pets visit hot springs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many hot springs allow children and pets, but rules vary by location. Always verify policies with the specific hot spring.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best season to visit hot springs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most hot springs can be visited year-round. Winter offers unique soaking experiences while summer provides easier access to remote springs.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Soak USA",
            url: "https://soakusa.net",
            logo: "https://soakusa.net/logo.png",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              email: "contact@soakusa.net",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Soak USA",
            url: "https://soakusa.net",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://soakusa.net/search?q={search_term_string}",
              },
              query_input: "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
