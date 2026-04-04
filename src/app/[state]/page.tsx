import locations from "@/data/locations.json";
import type { Metadata } from "next";

export const revalidate = 86400;

const states = [
  "colorado",
  "montana",
  "idaho",
  "wyoming",
  "new-mexico",
  "oregon",
  "california",
  "nevada",
  "utah",
  "alaska",
];

export async function generateStaticParams() {
  return states.map((state) => ({
    state: state,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const stateNames: Record<string, string> = {
    colorado: "Colorado",
    montana: "Montana",
    idaho: "Idaho",
    wyoming: "Wyoming",
    "new-mexico": "New Mexico",
    oregon: "Oregon",
    california: "California",
    nevada: "Nevada",
    utah: "Utah",
    alaska: "Alaska",
  };

  const stateName = stateNames[state] || state;

  return {
    title: `Hot Springs in ${stateName} - Soak USA`,
    description: `Discover hot springs and natural thermal pools in ${stateName}. Browse our directory of geothermal hot springs with detailed information and amenities.`,
    openGraph: {
      title: `Hot Springs in ${stateName} - Soak USA`,
      description: `Discover hot springs and natural thermal pools in ${stateName}.`,
      type: "website",
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;

  const stateNames: Record<string, string> = {
    colorado: "Colorado",
    montana: "Montana",
    idaho: "Idaho",
    wyoming: "Wyoming",
    "new-mexico": "New Mexico",
    oregon: "Oregon",
    california: "California",
    nevada: "Nevada",
    utah: "Utah",
    alaska: "Alaska",
  };

  const stateName = stateNames[state] || state;

  const filteredLocations = locations.filter(
    (location) => location.stateSlug === state
  );

  const breadcrumbStyles: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "1.5rem",
  };

  const breadcrumbLinkStyles: React.CSSProperties = {
    color: "#7d1a00",
    textDecoration: "none",
  };

  const pageHeadingStyles: React.CSSProperties = {
    fontSize: "2rem",
    color: "#7d1a00",
    marginBottom: "2rem",
  };

  const gridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "2rem",
  };

  const cardStyles: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1.5rem",
    backgroundColor: "#fff",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  };

  const cardTitleStyles: React.CSSProperties = {
    fontSize: "1.2rem",
    color: "#7d1a00",
    marginTop: 0,
    marginBottom: "0.5rem",
  };

  const cardCityStyles: React.CSSProperties = {
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
    fontSize: "0.9rem",
  };

  const noResultsStyles: React.CSSProperties = {
    textAlign: "center",
    padding: "2rem",
    color: "#666",
  };

  return (
    <>
      <nav style={breadcrumbStyles}>
        <a href="/" style={breadcrumbLinkStyles}>
          Home
        </a>
        {" / "}
        <span>{stateName} Hot Springs</span>
      </nav>

      <h1 style={pageHeadingStyles}>Hot Springs in {stateName}</h1>

      {filteredLocations.length > 0 ? (
        <div style={gridStyles}>
          {filteredLocations.map((location) => (
            <div
              key={location.slug}
              style={cardStyles}
            >
              <h2 style={cardTitleStyles}>{location.name}</h2>
              <p style={cardCityStyles}>{location.city}</p>
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
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div style={noResultsStyles}>
          <p>No hot springs found for {stateName} yet.</p>
          <p>
            <a href="/" style={{ color: "#7d1a00" }}>
              Browse other states
            </a>
          </p>
        </div>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://soakusa.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: `${stateName} Hot Springs`,
                item: `https://soakusa.net/${state}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
