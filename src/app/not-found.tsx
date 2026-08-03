import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'This URL is not a current Soak USA page. The legacy location catalog was withdrawn after a data-quality audit.',
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <div className="content-page">
      <p className="section-label">404 — Page not found</p>
      <h1 style={{ fontSize: '2rem', color: '#7d1a00', marginBottom: '1rem' }}>This Page Is Not Available</h1>
      <p style={{ color: '#4f4a45', lineHeight: 1.75, marginBottom: '1rem' }}>
        This URL does not identify a current Soak USA page. If you followed an old location or state link, that content was withdrawn after a data-quality audit found material geography and feature-classification errors.
      </p>
      <p style={{ color: '#4f4a45', lineHeight: 1.75, marginBottom: '1.75rem' }}>
        No retired record should be treated as evidence that a thermal feature is open, accessible, or safe for soaking. Use the responsible operator or land-management authority for current information.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        <Link className="btn btn-terra" href="/">Go to Soak USA Home</Link>
        <Link className="btn" href="/editorial" style={{ border: '2px solid var(--terra)', color: 'var(--terra)' }}>Read the Editorial Standard</Link>
      </div>
    </div>
  );
}
