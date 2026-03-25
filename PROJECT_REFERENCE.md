# Alex Rivera | Copy That Converts — Project Reference

> **Central source of truth** for every phase. All updates reference this file.

---

## 1. Brand Identity

| Key          | Value                                          |
|--------------|-------------------------------------------------|
| **Name**     | Alex Rivera                                     |
| **Tagline**  | Copy That Converts                              |
| **Persona**  | High-end solo copywriter, Fortune 500 clients   |
| **Mood**     | Confident, exclusive, results-focused            |
| **Theme**    | Modern luxury showroom (Apple Store × gallery)   |

---

## 2. Color System

| Token              | Light Mode   | Dark Mode    | Usage                  |
|---------------------|-------------|--------------|------------------------|
| `--navy`            | `#1E3A8A`   | `#1E3A8A`    | Primary brand          |
| `--navy-light`      | `#2563EB`   | `#3B82F6`    | Interactive accent     |
| `--blue-accent`     | `#3B82F6`   | `#60A5FA`    | Links/secondary accent |
| `--blue-glow`       | `#60A5FA`   | `#93C5FD`    | Hover glow effects     |
| `--gold`            | `#F59E0B`   | `#FCD34D`    | CTAs, metrics, badges  |
| `--gold-soft`       | `#FCD34D1a` | `#FCD34D1a`  | Subtle gold highlights |
| `--background`      | `#F8FAFC`   | `#0B1120`    | Page background        |
| `--foreground`      | `#0F172A`   | `#F1F5F9`    | Body text              |
| `--card`            | `#FFFFFF`   | `#1E293B`    | Card surfaces          |
| `--muted`           | `#F1F5F9`   | `#1E293B`    | Subtle backgrounds     |
| `--muted-foreground`| `#64748B`   | `#94A3B8`    | Secondary text         |
| `--border`          | `#E2E8F0`   | `#334155`    | Borders                |
| `--glass-bg-light`  | `rgba(255,255,255,0.6)` | — | Glassmorphism bg |
| `--glass-bg-dark`   | — | `rgba(30,41,59,0.6)` | Glassmorphism bg       |
| `--glass-border`    | `rgba(255,255,255,0.3)` | `rgba(255,255,255,0.08)` | Glass borders |

---

## 3. Typography

| Role       | Font             | Weights       | Usage                    |
|------------|------------------|---------------|--------------------------|
| **Display**| Playfair Display | 700, 800      | Hero headline, section H2|
| **Body**   | Inter            | 400, 500, 600 | Body, nav, buttons       |

---

## 4. Site Architecture (Single-Page Scroll)

```
┌─────────────────────────────────────────┐
│  NAVBAR  (sticky, glass, hamburger mob) │
├─────────────────────────────────────────┤
│  HERO  (full viewport)                  │
│  • Headshot left / typewriter right     │
│  • "I write copy that generates         │
│     7-figure revenue"                   │
│  • Gold CTA → scrolls to Showroom      │
├─────────────────────────────────────────┤
│  PAIN POINTS  (3 cards)                 │
│  • Generic copy fails                   │
│  • Low conversions                      │
│  • No clear ROI                         │
│  • Each → smooth scroll to Showroom    │
├─────────────────────────────────────────┤
│  PROCESS  (5 horizontal steps)          │
│  • Discovery → Research → Strategy      │
│    → Copywriting → Optimization         │
│  • Glass cards + progress line          │
├─────────────────────────────────────────┤
│  SHOWROOM  (masonry gallery)            │
│  • 12+ copy samples                     │
│  • Tag: Email/Landing/Ad                │
│  • Metric badge, glassmorphism hover    │
│  • Load More / infinite scroll          │
├─────────────────────────────────────────┤
│  TESTIMONIALS  (carousel)               │
│  • 6 clients + logos + results          │
│  • Star ratings, slide animation        │
├─────────────────────────────────────────┤
│  CONTACT  (footer-style)                │
│  • Form + Calendly embed                │
│  • Gold CTA: "Book a Call"              │
│  • Social: LinkedIn, Twitter            │
└─────────────────────────────────────────┘
```

---

## 5. Interactions & Motion

| Interaction                | Technique                          |
|----------------------------|------------------------------------|
| Typewriter headline        | Custom hook, cursor blink          |
| Scroll-triggered reveals   | IntersectionObserver, stagger      |
| Pain Point CTA → Showroom  | `scrollIntoView({ behavior: 'smooth' })` |
| Hover lift + glow          | CSS transform + box-shadow + blue glow |
| Parallax backgrounds       | CSS `transform: translateY()` on scroll |
| Testimonial carousel       | CSS scroll-snap or state rotation  |
| Dark/light toggle          | `useTheme` hook + `<html>` class   |
| Mobile hamburger menu      | Slide-in overlay, animated icon    |
| Staggered card entrances   | CSS nth-child transition-delay     |

---

## 6. Phase Breakdown

### Phase 1 — Foundation ✅
- [x] Next.js + Tailwind project scaffolded
- [x] Google Fonts: Playfair Display + Inter
- [x] `globals.css` with theme variables, glass utility, reveal animations
- [x] Custom hooks: `useTypewriter`, `useScrollReveal`, `useTheme`

### Phase 2 — Types & Data ✅
- [x] TypeScript interfaces (`Testimonial`, `PainPoint`, `ProcessStepData`, `ShowroomItem`)
- [x] Data files: `painPoints.ts`, `showroomItems.ts`
- *Needs update:* pivot content to copywriter brand

### Phase 3 — Data Content Update 🔄
- [ ] Update `types/index.ts` — add metrics, star ratings, logos
- [ ] Update `painPoints.ts` — copywriter pain points + "See How I Fix This →"
- [ ] Update `showroomItems.ts` — 12 copy samples (emails, landing pages, ads)
- [ ] Create `testimonials.ts` — 6 clients with metrics
- [ ] Create `processSteps.ts` — 5 copywriting steps

### Phase 4 — UI Components ✅ (re-theme)
- [x] `GlassCard`, `MetricBadge`, `PainPointCard`, `ProcessStep`
- [x] `ShowroomCard`, `TestimonialCard`, `TypewriterText`
- [x] `ScrollReveal`, `ThemeToggle`
- *Needs update:* navy/gold color references, copy-specific content

### Phase 5 — Section Components 🔄
- [ ] `Navbar.tsx` — sticky glass nav, hamburger mobile menu
- [ ] `Hero.tsx` — full viewport, typewriter, headshot, CTA
- [ ] `PainPoints.tsx` — 3-column grid, CTA scrolls to Showroom
- [ ] `Process.tsx` — 5 horizontal steps with progress line
- [ ] `Showroom.tsx` — masonry gallery, load-more, glassmorphism hover
- [ ] `Testimonials.tsx` — carousel with auto-rotate
- [ ] `Contact.tsx` — form + Calendly placeholder + social icons
- [ ] `Footer.tsx` — minimal footer

### Phase 6 — Page Assembly & Layout
- [ ] `layout.tsx` — root layout with fonts + theme
- [ ] `page.tsx` — compose all sections in order
- [ ] SEO meta tags (title, description, OG)

### Phase 7 — Polish & Verify
- [ ] Responsive QA (mobile, tablet, desktop)
- [ ] Dark/light mode visual check
- [ ] Animation performance (prefers-reduced-motion)
- [ ] Browser test via dev server

---

## 7. Aligned Skills

| Skill                      | Purpose                                    |
|----------------------------|--------------------------------------------|
| `antigravity-design-expert`| Glassmorphism, GSAP parallax, spatial depth|
| `interactive-portfolio`    | Portfolio architecture, 30-second test     |
| `scroll-experience`        | Scroll-triggered reveals, parallax layers  |
| `design-spells`            | Micro-interactions, hover magic, premium   |

---

## 8. File Map

```
src/
├── app/
│   ├── globals.css          ← Theme variables + utilities
│   ├── layout.tsx           ← Root layout (fonts, theme)
│   └── page.tsx             ← All sections composed
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── PainPoints.tsx
│   │   ├── Process.tsx
│   │   ├── Showroom.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       ├── MetricBadge.tsx
│       ├── PainPointCard.tsx
│       ├── ProcessStep.tsx
│       ├── ScrollReveal.tsx
│       ├── ShowroomCard.tsx
│       ├── TestimonialCard.tsx
│       ├── ThemeToggle.tsx
│       └── TypewriterText.tsx
├── data/
│   ├── painPoints.ts
│   ├── processSteps.ts
│   ├── showroomItems.ts
│   └── testimonials.ts
├── hooks/
│   ├── useScrollReveal.ts
│   ├── useTheme.ts
│   └── useTypewriter.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```
