import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Standards',
  description: 'How Soak USA validates, classifies, sources, reviews, publishes, updates, and corrects hot-spring information.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://soakusa.net/editorial' },
};

const heading: React.CSSProperties = { fontSize: '1.3rem', color: '#7d1a00', marginTop: '1.75rem', marginBottom: '0.75rem' };
const text: React.CSSProperties = { fontSize: '0.95rem', color: '#4f4a45', lineHeight: 1.75, marginBottom: '1rem' };

export default function EditorialPage() {
  return (
    <div className="content-page">
      <h1 style={{ fontSize: '2rem', color: '#7d1a00', marginBottom: '0.75rem' }}>Editorial Standards</h1>
      <p style={{ ...text, color: '#625b54', fontStyle: 'italic' }}>Reviewed by the Soak USA editorial desk: August 2, 2026</p>

      <p style={text}>
        Soak USA is an independent research publication, not a live-conditions service, medical provider, land-management authority, or guarantee of public access. The public location catalog is currently offline following a data-quality audit.
      </p>

      <h2 style={heading}>Why the Legacy Catalog Was Withdrawn</h2>
      <p style={text}>
        The audit found material state-assignment errors, duplicate-name groups, and thermal features that could not responsibly be presented as soaking destinations. Detail-page warnings and search noindex rules did not make the underlying classification valid, so the raw corpus was removed from the runtime and retired catalog URLs now return a helpful 404 response.
      </p>

      <h2 style={heading}>Required Source Record</h2>
      <p style={text}>A nonempty array or unlabeled link is not verification. Each future location must have a validated source record containing:</p>
      <ul style={text}>
        <li>An authoritative HTTPS URL</li>
        <li>Publisher and page title</li>
        <li>A human review date</li>
        <li>The specific identity, location, access, fee, operating, or safety claims it supports</li>
        <li>A visible citation on the public page</li>
      </ul>
      <p style={text}>
        The responsible facility operator, park, land manager, tribe, or local authority is preferred. Reputable secondary sources may provide context but cannot replace the current authority for permission, closures, fees, hazards, or emergency information.
      </p>

      <h2 style={heading}>Classification and Publication</h2>
      <p style={text}>
        Managed soaking facilities, permitted natural soaking areas, observation-only thermal features, and prohibited areas must be classified separately. A future record remains unpublished and absent from the sitemap until its identity, geography, classification, and public-access status meet the source standard. Soak USA does not manufacture freshness dates or infer permission from a map coordinate.
      </p>

      <h2 style={heading}>Safety and Health Boundaries</h2>
      <p style={text}>
        General safety material must distinguish maintained hot tubs from uncontrolled natural thermal areas. Soak USA does not diagnose, prevent, treat, or cure a condition. Readers must use the responsible authority for current restrictions and emergency information and a qualified healthcare professional for personal health questions.
      </p>

      <h2 style={heading}>Updates and Corrections</h2>
      <p style={text}>
        To report an incorrect claim or submit an authority source, email <a href="mailto:contact@soakusa.net">contact@soakusa.net</a>. Include the affected URL, what should change, and the current primary source. A submission does not guarantee publication.
      </p>

      <h2 style={heading}>Commercial Independence</h2>
      <p style={text}>
        Advertising is not currently enabled. A labeled link to an Etsy shop affiliated with the publisher may produce purchase revenue, but commercial relationships do not waive the source standard or determine publication. See the Disclosure page for current details.
      </p>
    </div>
  );
}
