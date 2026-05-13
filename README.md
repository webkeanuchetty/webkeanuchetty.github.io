# Keanu Chetty — PPCHC Physiotherapy

Premium marketing site for Keanu Chetty, specialist PPCHC physiotherapist. Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom Medical Minimalist palette (`charcoal`, `clinical`)
- **Framer Motion** for entrance animations
- **lucide-react** icons
- **next/image** with Unsplash remote patterns

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Import Project** → select the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars needed.
4. Deploy. `next.config.mjs` already whitelists `images.unsplash.com`.

## Project structure

```
app/
  layout.tsx        # Root layout, fonts (Inter + Montserrat), metadata
  page.tsx          # Single-page composition
  globals.css       # Tailwind layers + design tokens
components/
  Navbar.tsx        # Sticky, scroll-aware nav with mobile drawer
  Hero.tsx          # Headline, CTAs, hero image
  Qualifications.tsx
  Services.tsx
  ServiceCard.tsx   # Reusable service card
  About.tsx
  Contact.tsx       # Contact form (client-side demo)
  Footer.tsx
tailwind.config.ts  # Custom colors + typography
next.config.mjs     # Unsplash remote images
```

## Design tokens

- **Deep Charcoal** `#2D3436` → `charcoal`
- **Soft Clinical Blue** `#0984E3` → `clinical`
- **Clean White** `#FFFFFF`
- Display: **Montserrat** · Body: **Inter**

## Notes

- The contact form is a UI-only demo. Wire it to an API route, Resend, Formspree, or your CRM as needed.
- Replace placeholder phone, email, HPCSA registration and address in `components/Contact.tsx` and `components/Footer.tsx`.
- Replace Unsplash placeholders with licensed photography of the practice.
