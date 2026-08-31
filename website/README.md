# Amalide website

The marketing site for [Amalide](../README.md) — a static Next.js export served
from GitHub Pages at <https://tonykastaneda.github.io/Amalide/>.

The production build sets `NEXT_PUBLIC_BASE_PATH=/Amalide` so assets resolve on
the project Pages URL (not a custom domain).

## Develop

```bash
npm install
npm run dev            # http://localhost:3000/
npm run dev:pages      # http://localhost:3000/Amalide/  (matches Pages base path)
```

## Build

```bash
npm run build:pages    # static export to ./out for tonykastaneda.github.io/Amalide
```

## Deploy

Pushing to `main` with changes under `website/**` triggers
`.github/workflows/pages.yml`, which runs `npm ci && npm run build:pages` and
publishes `out/` to GitHub Pages.

## Layout

- `app/` — the page (`page.tsx`), shell (`layout.tsx`), header (`Header.tsx`),
  styles (`globals.css`, Tailwind v4)
- `public/brand/` — logo assets from `../branding/`, `public/og.png` — social card
- `next.config.ts` — `output: "export"` + `basePath` from `NEXT_PUBLIC_BASE_PATH`
