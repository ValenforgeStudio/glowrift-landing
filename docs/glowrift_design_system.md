**Glowrift Design System**

---

### 1. Brand Identity

**Personality:** Friendly, Clean, Cozy  
**Voice:** Casual, Fun, Practical  
**Emotional Goal:** Nostalgic, Curious

---

### 2. Visual Design System

**Core Palette:**
- White (#FFFFFF)
- Black (#000000)
- Silver (#C0C0C0)
- Gold (#E6C200)
- Sunset Accent (#D9A15E)
- Optional Cool Neutral (e.g., Sage Green #A3B18A or Soft Plum #A88DA6) for text accents or balance

**Typography:**
- Base: Sans-serif (Inter, Open Sans, or DM Sans)
- Headings: Modern geometric serif (Libre Baskerville, Playfair)
- Seasonal Display Fonts:
  - Halloween: Gothic serif or modern haunted-style
  - Thanksgiving: Rustic serif (e.g., Playfair)
  - Christmas: Decorative serif or soft script (e.g., Cinzel, Great Vibes)

**Spacing:**
- Spacious layout (Apple-style)
- Use of `space-y-8`, `px-6`, `py-16`, `max-w-5xl`

**Graphics & Motion:**
- Soft, textured section-based illustrations
- Very subtle animations (fog, drifting leaves, snow)
- Use of Lottie, SVG, or CSS keyframes
- Accessibility toggle provided for "Reduce Motion"

**Iconography:**
- Line-based (Lucide, Heroicons)
- Monotone or seasonal accent tone on hover
- Optional seasonal variants (e.g., spooky outlines, snowflake variants) for themed pages

---

### 3. Layout & Components

**Hero Section:**
- Full-screen height (`h-screen`)
- Centered headline and CTA
- Seasonal image or motion background

**Section Rhythm:**
- Alternating image/text banners (Apple-style)
- 2-column grid, staggered flow for visual rhythm

**Navigation:**
- Transparent header over hero → solid on scroll
- Logo left, nav links (Halloween, Thanksgiving, Christmas), CTA, Login
- Mobile: collapsible menu, clean and simple
- Holidays visible in nav during season; avoid mega-menus

**Component Standards:**
- Buttons: Primary (sunset or holiday accent), Secondary (white or silver), Ghost (bordered)
- Cards: Rounded corners, shadow-sm, responsive grid
- Modals: Centered, with ARIA and backdrop blur
- Tooltips/Dropdowns: Minimal, accessible, optional seasonal flair

---

### 4. User Journey

**Landing CTA:**
- Headline: "CRAFT SEASONAL MAGIC"
- Sub: "Glowrift is your AI-powered holiday toolkit. Start with our pumpkin carving stencil generator—just in time for spooky season."
- Mini Tagline Above Fold: "AI-powered tools for every season, starting with Halloween."
- CTA: "Start Creating" → Halloween stencil tool

**Homepage Scroll:**
1. Hero section (CTA)
2. How It Works (3-step visual)
3. What’s Live Now (Halloween active, others "Coming Soon")
4. Optional testimonials
5. Signup prompt
6. Footer (links, contact, socials)

**Feature Navigation:**
- Halloween tool fully accessible
- Other holidays: teasers only
- Future: holiday dropdown or toolbox hub

**Logged-In Experience:**
- MVP: Contextual tool UI (not full dashboard)
- Soft wall to generate/download → login required
- Social login first, fallback email
- No saved stencils or dashboard until Cycle 2

---

### 5. Access & Monetization

**Account Creation:**
- Triggered on generate/download
- Soft wall after preview
- Social login preferred

**Free vs Paid:**
- Free: watermark preview, 2–5 high-res downloads, basic stencil packs
- Paid: unlimited access, SVG/PNG output, premium packs, early access

**Payment Model:**
- Credit-based (tokens)
- Stripe Checkout modal
- Pricing page: 3 tiers (e.g., 10/25/unlimited)
- Token counter visible in UI if live

---

### 6. Infrastructure & Compliance

**Accessibility (A11y):**
- Contrast meets WCAG AA
- Keyboard navigation
- ARIA labels for icons
- Alt text for all images
- Motion toggle for animations

**Mobile Experience:**
- Mobile-first layout, full tool access
- Responsive nav, large touch targets
- Mobile hero still includes CTA

**SEO & Discoverability:**
- Static URLs for each holiday tool (`/pumpkin-stencils`, etc.)
- Meta tags + OpenGraph + Schema
- Blog/Tips section planned
- Sitemap, robots.txt, image alt tagging
- Fast loading, compressed assets, lazy loading

---

### 7. Seasonal Voice Guidelines

**Halloween:** Elevated, poetic, slightly gothic — inspired by Poe/King tones  
**Thanksgiving:** Grateful, rustic, warm — familial and grounded  
**Christmas:** Magical, nostalgic, joyful — emotionally rich and tradition-forward

