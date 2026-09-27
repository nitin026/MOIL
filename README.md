# MOIL Mining Intelligence

Next.js (App Router) port of the original single-file HTML dashboard.

## What changed vs. the original file

- The original `<style>` block → `app/globals.css`
- The original `<body>` markup → `app/embedded/body-markup.txt`, rendered
  by `app/MoilApp.js`
- The original `const DATA = {...}` script → `app/embedded/moil-data.json`,
  imported directly as JSON
- The original app-logic `<script>` (decision engine, rendering, event
  wiring) → `app/embedded/app-logic.txt`, executed unchanged via
  `new Function("DATA", source)` after mount, in `app/MoilApp.js`

No application logic was rewritten — the decision engine, thresholds,
verdict bands and rendering code are byte-for-byte the same as the
source file, just relocated so they run inside a Next.js page instead of
a raw `<script>` tag.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
npm i -g vercel   # if you don't already have it
vercel
```

Or connect this folder/repo to a new Vercel project from the Vercel
dashboard (Import Project → this repo) — no configuration is required,
it's a standard Next.js app.
