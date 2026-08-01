import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial',
  description: 'In-depth guides, safety tips, and expert content about hot springs and natural soaking spots across the USA.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://soakusa.net/editorial' },
};

export default function EditorialPage() {
  return (
    <div className="content-page">
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Editorial Content</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#666' }}>
        In-depth guides, safety information, and expert content about hot springs and natural
        soaking spots are coming soon. Our editorial team is developing comprehensive resources
        to help you plan safe, enjoyable visits to natural hot springs across the United States.
      </p>
      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#888', marginTop: '1.5rem' }}>
        In the meantime, explore our{' '}
        <a href="/" style={{ color: 'var(--gold, #b8860b)', textDecoration: 'underline' }}>
          hot springs directory
        </a>{' '}
        to find locations near you.
      </p>
    </div>
  );
}
