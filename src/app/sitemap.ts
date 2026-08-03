import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://soakusa.net';
  const lastModified = new Date('2026-08-02');

  return [
    { url: base, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/editorial`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/disclosure`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
