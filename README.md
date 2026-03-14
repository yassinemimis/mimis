# mimis — Portfolio Redesign

Dark editorial portfolio built with **Next.js 14 App Router**.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Fonts**: Syne (display) + DM Mono (monospace) via Google Fonts
- **Styling**: Pure inline styles + CSS variables (no Tailwind dependency)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
├── app/
│   ├── globals.css      ← Design tokens + base styles
│   ├── layout.tsx       ← Root layout + font links
│   └── page.tsx         ← Page assembly
├── components/
│   ├── Navbar.tsx       ← Fixed nav with scroll effect
│   ├── Hero.tsx         ← Full-height hero with stats grid
│   ├── Projects.tsx     ← Numbered rows with filter tabs
│   ├── Experience.tsx   ← 2-column grid
│   ├── Skills.tsx       ← 5-column skill columns
│   └── Contact.tsx      ← CTA + links + footer
└── data/
    └── portfolio.ts     ← All your content in one place
```

## Customization

All content lives in **`src/data/portfolio.ts`** — edit your name, projects, experience and links there.

Design tokens (colors, fonts) are in **`src/app/globals.css`** under `:root`.

## Deploy

```bash
# Build
npm run build

# Deploy to Vercel
vercel --prod
```
