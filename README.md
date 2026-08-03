# Soak USA

Soak USA is an authority-first hot-spring research and safety publication at
`soakusa.net`.

The public location catalog is intentionally empty. A 2026-08-02 audit found
material geography and feature-classification errors in the legacy corpus, so
catalog pages were retired instead of being left online behind disclaimers.
See `docs/catalog-quarantine-2026-08-02.md` for the evidence and restoration
gate.

## Quality gates

```powershell
npm ci
npm run check
npm audit --omit=dev
git diff --check
```

Do not restore the legacy location data or programmatic routes. A future record
must follow the source and classification policy in `CLAUDE.md` and the public
Editorial Standards page.
