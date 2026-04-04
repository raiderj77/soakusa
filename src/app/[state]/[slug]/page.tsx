import locations from "@/data/locations.json";
import type { Metadata } from "next";

export const revalidate = 86400;

export async function generateStaticParams() {
  return locations.map((location) => ({
    state: location.stateSlug,
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Hot Spring Not Found",
      description: "This hot spring could not be found.",
    };
  }

  return {
    title: `${location.name} - Hot Springs in ${location.state} - Soak USA`,
    description: location.description,
    openGraph: {
      title: `${location.name} - Soak USA`,
      description: location.description,
      type: "website",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}) {
  const { state, slug } = await params;

  const location = locations.find(
    (loc) => loc.slug === slug && loc.stateSlug === state
  );

  if (!location) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Hot Spring Not Found</h1>
        <p>
          <a href="/" style={{ color: "#7d1a00" }}>
            Return Home
          </a>
        </p>
      </div>
    );
  }

  const breadcrumbStyles: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "1.5rem",
  };

  const breadcrumbLinkStyles: React.CSSProperties = {
    color: "#7d1a00",
    textDecoration: "none",
  };

  const titleStyles: React.CSSProperties = {
    fontSize: "2.2rem",
    color: "#7d1a00",
    marginBottom: "0.5rem",
    marginTop: 0,
  };

  const locationInfoStyles: React.CSSProperties = {
    fontSize: "1.1rem",
    color: "#ff6b35",
    fontWeight: "600",
    marginBottom: "1.5rem",
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: "2rem",
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: "1.3rem",
    color: "#7d1a00",
    marginBottom: "1rem",
    marginTop: "1.5rem",
  };

  const descriptionStyles: React.CSSProperties = {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "1.5rem",
  };

  const amenitiesGridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
  };

  const amenityCardStyles: React.CSSProperties = {
    backgroundColor: "#f9f9f9",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    padding: "1rem",
    fontSize: "0.95rem",
    color: "#333",
  };

  const detailsTableStyles: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "1.5rem",
  };

  const tableRowStyles: React.CSSProperties = {
    borderBottom: "1px solid #ddd",
  };

  const tableCellStyles: React.CSSProperties = {
    padding: "0.75rem",
    textAlign: "left",
  };

  const tableHeaderStyles: React.CSSProperties = {
    ...tableCellStyles,
    backgroundColor: "#f5f5f5",
    fontWeight: "600",
    color: "#333",
  };

  const disclaimerStyles: React.CSSProperties = {
    backgroundColor: "#fff3cd",
    border: "1px solid #ffc107",
    borderRadius: "4px",
    padding: "1rem",
    marginTop: "2rem",
    fontSize: "0.9rem",
    color: "#333",
    lineHeight: "1.6",
  };

  const mapContainerStyles: React.CSSProperties = {
    marginTop: "2rem",
    marginBottom: "2rem",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid #ddd",
  };

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

  return (
    <>
      <nav style={breadcrumbStyles}>
        <a href="/" style={breadcrumbLinkStyles}>
          Home
        </a>
        {" / "}
        <a href={`/${state}`} style={breadcrumbLinkStyles}>
          {stateName} Hot Springs
        </a>
        {" / "}
        <span>{location.name}</span>
      </nav>

      <article>
        <h1 style={titleStyles}>{location.name}</h1>
        <p style={locationInfoStyles}>
          {location.city}, {location.state}
        </p>

        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>About This Hot Spring</h2>
          <p style={descriptionStyles}>{location.description}</p>
        </section>

        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>Location Details</h2>
          <table style={detailsTableStyles}>
            <tbody>
              <tr style={tableRowStyles}>
                <td style={tableHeaderStyles}>City</td>
                <td style={tableCellStyles}>{location.city}</td>
              </tr>
              <tr style={tableRowStyles}>
                <td style={tableHeaderStyles}>State</td>
                <td style={tableCellStyles}>{location.state}</td>
              </tr>
              <tr style={tableRowStyles}>
                <td style={tableHeaderStyles}>Latitude</td>
                <td style={tableCellStyles}>{location.lat.toFixed(4)}</td>
              </tr>
              <tr style={tableRowStyles}>
                <td style={tableHeaderStyles}>Longitude</td>
                <td style={tableCellStyles}>{location.lng.toFixed(4)}</td>
              </tr>
            </tbody>
          </table>

          <div style={mapContainerStyles}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDjJfDL8L8xQ8_YNYiKVLx5TlQcbmjfnlE&q=${location.lat},${location.lng}`}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>Amenities & Features</h2>
          <div style={amenitiesGridStyles}>
            {location.amenities.map((amenity, idx) => (
              <div key={idx} style={amenityCardStyles}>
                ✓ {amenity}
              </div>
            ))}
          </div>
        </section>

        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>Visiting Information</h2>
          <p style={descriptionStyles}>
            Before planning your visit, we recommend checking local regulations,
            current conditions, and any seasonal closures. Contact local park
            services or visitor centers for the most up-to-date information about
            access, amenities, and any advisories.
          </p>
          <p style={descriptionStyles}>
            Always respect the natural environment and follow Leave No Trace
            principles when visiting these natural wonders.
          </p>
        </section>

        <div style={disclaimerStyles}>
          <strong>Important Safety Information:</strong> Hot spring water can
          reach scalding temperatures. Always test the water before entering.
          Check water temperature warnings and any posted advisories. Never soak
          if you have health conditions affected by heat or mineral-rich water.
          Do not soak if you're feeling ill. Soaking in natural hot springs is
          at your own risk. Always verify current conditions with local
          authorities before visiting.
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: location.name,
            description: location.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: location.city,
              addressRegion: location.state,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: location.lat,
              longitude: location.lng,
            },
          }),
        }}
      />

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
              {
                "@type": "ListItem",
                position: 3,
                name: location.name,
                item: `https://soakusa.net/${state}/${location.slug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
