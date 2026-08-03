import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Soak USA, its authority-first publication standard, catalog quality reset, safety boundaries, and commercial disclosures.',
  alternates: { canonical: 'https://soakusa.net/about' },
};

const heading: React.CSSProperties = { fontSize: '1.3rem', color: '#7d1a00', marginTop: '1.75rem', marginBottom: '0.75rem' };
const text: React.CSSProperties = { fontSize: '0.95rem', color: '#4f4a45', lineHeight: 1.75, marginBottom: '1rem' };

export default function AboutPage() {
  return (
    <div className="content-page">
      <h1 style={{ fontSize: '2rem', color: '#7d1a00', marginBottom: '0.75rem' }}>About Soak USA</h1>
      <p style={{ ...text, color: '#625b54', fontStyle: 'italic' }}>Last reviewed: August 2, 2026</p>

      <h2 style={heading}>Mission</h2>
      <p style={text}>
        Soak USA is rebuilding as an authority-first hot-spring research publication. Its purpose is to help readers identify the responsible operator or land manager and find current rules, not to substitute for official access, closure, safety, or health information.
      </p>

      <h2 style={heading}>Current Catalog Status</h2>
      <p style={text}>
        There are currently zero public location records. A data-quality audit found material state-assignment and feature-classification errors in the legacy catalog, including records that were not suitable soaking destinations. The catalog was removed from public navigation and search instead of being presented with disclaimers.
      </p>

      <h2 style={heading}>What a Future Record Must Show</h2>
      <ul style={text}>
        <li>The responsible authority or facility operator</li>
        <li>A visible authoritative HTTPS source with publisher and title</li>
        <li>The exact claims supported by that source</li>
        <li>A human review date and correction path</li>
        <li>A clear distinction between managed soaking, natural thermal features, and prohibited areas</li>
      </ul>

      <h2 style={heading}>Safety and Health Boundaries</h2>
      <p style={text}>
        Soak USA is not a live-conditions service, emergency service, land-management authority, or medical provider. Do not enter closed water or touch an uncontrolled thermal feature to test it. Follow current instructions from the responsible authority. People with questions about heat exposure or personal health conditions should ask a qualified healthcare professional.
      </p>

      <h2 style={heading}>Publisher and Corrections</h2>
      <p style={text}>
        Soak USA is an independent web publication. Editorial corrections and source submissions can be sent to <a href="mailto:contact@soakusa.net">contact@soakusa.net</a>. Include the relevant URL, responsible authority, and current primary source when possible.
      </p>

      <h2 style={heading}>How the Site Is Supported</h2>
      <p style={text}>
        Advertising and third-party analytics are not currently enabled. The site includes a clearly labeled link to an Etsy shop affiliated with the publisher; a purchase may produce revenue for the publisher. See the Disclosure page for the current commercial relationships.
      </p>
    </div>
  );
}
