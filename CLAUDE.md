# Soak USA — CLAUDE.md

> Source of truth for Claude Code on this project. Last updated: 2026-04-30

## Project Identity

- **Site**: Soak USA
- **Domain**: soakusa.net
- **Purpose**: Location finder for hot springs, soaking pools, and thermal baths across the United States
- **Type**: utility-site (ad-supported location directory)
- **Compliance Tier**: Standard — NOTE: Hot spring safety content requires extra care

## Tech Stack

- **Framework**: Next.js | **Deployment**: Vercel | **Language**: TypeScript | **Styling**: Tailwind CSS | **Package Manager**: npm

## 1. AdSense & Monetization

- **Publisher ID**: `ca-pub-7171402107622932`
- **ads.txt**: `google.com, pub-7171402107622932, DIRECT, f08c47fec0942fa0`
- Amazon Associates (ytearnings-20) for relevant gear recs — use rel="nofollow sponsored"

## 2. SEO

- SSR/SSG required
- Each location page: name, address/GPS, water temp range, fee (if any), clothing optional status, hours, seasonal access, nearest town
- Include "clothing optional" or "swimwear required" clearly — this affects search intent and content moderation

## 3. Core Web Vitals

- **LCP** ≤ 2.5s | **INP** ≤ 200ms | **CLS** ≤ 0.1

## 4. E-E-A-T

- Attribution: "Built by an experienced web developer" — no personal name
- IMPORTANT: Hot springs carry real health risks (high temps, bacteria, unstable ground). Every location page must include: "Consult a healthcare provider before soaking if you have heart conditions, are pregnant, or have compromised immune function. Water temperatures and conditions vary — assess conditions before entering."
- Never minimize safety considerations

## 5. Structured Data

- Organization, WebSite, LocalBusiness (for commercial/resort facilities), Place (for wild hot springs), BreadcrumbList
- Include geo coordinates, temperature range in description

## 6. Mobile-First

- Touch targets 48px+, GPS prominent and copy-able, 16px+ body text

## 7. Bing Optimization

- meta keywords, SSR mandatory, IndexNow on deploy

## 8. GEO / AI

- `/llms.txt` at root, standard AI crawler rules
- Lead content with hot spring name, location, and temperature range

## 9. Privacy & Consent

- `/privacy` and `/terms` required

## 10. Accessibility (WCAG 2.1 AA)

- Alt text on location photos, keyboard navigation, skip links

## 11. Security Headers

Standard Empire security headers

## 12. Sitemaps & Metadata

Sitemap via `app/sitemap.ts`, submit to GSC and Bing WMT

## Cross-Site Links

Footer: all sister sites (excluding self)

## Deployment

Vercel | main | `npm run build` | Env: AMAZON_ASSOCIATES_ID=ytearnings-20, INDEXNOW_API_KEY

## Warnings

Standard Empire warnings + NEVER minimize hot spring safety. Soaking in extreme temps without disclaimers is a liability risk. Health safety disclaimer required on every location page. Never present wild hot spring access as guaranteed — conditions and access change seasonally.
