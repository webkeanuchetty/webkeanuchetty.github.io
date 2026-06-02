## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom Medical Minimalist palette (`charcoal`, `clinical`)
- **Framer Motion** for entrance animations
- **lucide-react** icons
- **next/image** with Unsplash remote patterns


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

