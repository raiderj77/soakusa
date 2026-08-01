import type { MetadataRoute } from 'next';
import locations from '@/data/locations.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://soakusa.net';
  const lastModified = new Date('2026-08-01');

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/browse-states`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/disclosure`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const locationGuidePages: MetadataRoute.Sitemap = locations
    .filter((location) => {
      const candidate = location as { guide?: unknown; sources?: unknown[] };
      return !!candidate.guide && Array.isArray(candidate.sources) && candidate.sources.length > 0;
    })
    .map((location) => ({
      url: `${base}/${location.stateSlug}/${location.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  return [...staticPages, ...locationGuidePages];
}
