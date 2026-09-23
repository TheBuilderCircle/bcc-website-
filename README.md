# BCCG 2026 marketing site

Next.js (App Router + TypeScript + Tailwind v4) rebuild of the Blockchain & Crypto Conference
Ghana (BCCG) 2026 marketing site: Home (`/`), About (`/about`), Register (`/register`).

This build targets **pixel fidelity at the 1512px desktop canvas only**. Responsive/mobile
layout is a deliberate, separate follow-up — the components use normal document flow rather than
the original design's absolute-positioned canvas, so that follow-up won't require a rewrite.

## Setup

Requires Node 18+.

```bash
npm install
npm run dev
```

Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.

## Project structure

- `app/` — the three routes (`page.tsx`, `about/page.tsx`, `register/page.tsx`) plus
  `layout.tsx` (fonts, global metadata) and `globals.css` (design tokens as a Tailwind v4
  `@theme` block).
- `components/layout/` — chrome shared across all 3 pages: `SiteNav`, `SiteFooter`,
  `StayConnectedBand`, `NewsletterSignup`.
- `components/ui/` — small reusable primitives: `Button`, `HighlightedWord` (the tinted-rectangle-and-corner-dots headline treatment), `BlurredBlob`, `GuideLines`, `Pill`.
- `components/sections/{home,about,register}/` — page-specific sections.
- `lib/content.ts` — copy that's shared across multiple components (nav items, the five
  experience tracks, audience/partner card data, footer links) — edit copy here rather than in
  the components.
- `lib/registration-forms.ts` — the four Register tabs (fields, copy, and each tab's Formspree
  endpoint).
- `public/svg/` — decorative art and icons, authored directly from the design's exported SVG
  markup.
- `public/images/` — real photos go here (see checklist below); referenced by filename from the
  components even before the files exist.

## Still needed from you

- [ ] Drop these photos into `public/images/` (any of them missing just renders as a blank image
      box until supplied):
  - `hero-stage.jpg` — Home hero background
  - `photo-row-1.jpg` … `photo-row-4.jpg` — the 4-photo strip
  - `audience-bg.jpg` — Home "audience" section background
  - `stay-connected-bg.jpg` — Home Stay Connected band background
  - `experiences-backdrop.png` — optional low-opacity watercolour backdrop for the "five
    experiences" section (currently unused; add and wire up if you have it)
- [ ] Confirm the Register form's "I am primarily interested in" options — currently the five
      conference experience-track names, sourced from `lib/content.ts`'s `experienceTracks`
      (the original Figma file left this list undefined).
