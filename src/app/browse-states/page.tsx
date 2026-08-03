import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'This URL is not a current Soak USA page. The legacy location catalog was withdrawn after a data-quality audit.',
};

export default function RetiredBrowsePage() {
  notFound();
}
