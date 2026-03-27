# GEMINI.md — Tony Portfolio Coding Standards

## Stack
- **Framework:** Next.js (App Router) — `src/app/`
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-native variables — no `tailwind.config.js`)
- **Fonts:** Google Fonts — Inter & Newsreader (defined in `src/app/layout.tsx`)
- **Email:** Resend via Server Action in `src/app/actions/actions.ts`
- **Icons:** React Icons
- **Utilities:** `clsx` + `tailwind-merge` via `src/lib/utils.ts`

---

## Project Structure
```
src/
  app/
    actions/actions.ts     → Server Actions (email/contact via Resend)
    globals.css            → Global styles + Tailwind v4 theme tokens
    layout.tsx             → Root layout, font definitions
    page.tsx               → Single-page entry; composes all sections
    providers.tsx          → Client-side context providers
  components/
    sections/              → Full-page sections (Hero, About, Process, etc.)
    ui/                    → Small reusable primitives
  data/                    → TS content files (source of truth for copy)
  hooks/                   → Custom hooks
  lib/utils.ts             → cn() helper (clsx + tailwind-merge)
  types/index.ts           → Shared interfaces
```

---

## Tailwind v4 — Critical Differences
Tailwind v4 uses **CSS-native variables**, not a JS config file.

- Theme tokens are defined in `src/app/globals.css` using `@theme { }` — check here before adding new colors or spacing values.
- Do **not** create or modify a `tailwind.config.js/ts` file — it is not used.
- Use `cn()` from `src/lib/utils.ts` for conditional class merging, never string concatenation.

---

## Content Management
All portfolio copy lives in `src/data/*.ts` — never hardcoded in JSX.

| Content | File |
|---|---|
| Pain points | `src/data/painPoints.ts` |
| Process steps | `src/data/processSteps.ts` |
| Showroom items | `src/data/showroomItems.ts` |
| Testimonials | `src/data/testimonials.ts` |

Testimonial images are in `src/images/testimonials/` — import them statically for `next/image` optimization.

Type shapes for all data are in `src/types/index.ts` — extend there first before touching data files.

---

## Component Conventions
- **Sections** (`src/components/sections/`): Hero, About, Contact, CTA, Footer, Navbar, PainPoints, Process, Showroom, Testimonials — one file per section.
- **UI primitives** (`src/components/ui/`): buttons, cards, etc. Keep these headless/generic.
- Do not put section-specific logic inside `ui/` components.
- Custom hooks (`src/hooks/`): `useScrollReveal`, `useTheme`, `useTypewriter` — check these before re-implementing scroll or animation behavior.

---

## Email / Contact
- Contact form submits via Server Action in `src/app/actions/actions.ts`.
- Email is sent through **Resend** — API key is an environment variable.
- Do not add a separate API route for contact — the Server Action is the pattern.
- Show inline success/error state in the Contact section; never redirect on submit.

---

## Recurring Agent Errors to Avoid
- **Do not create `tailwind.config.js`** — Tailwind v4 is configured via `globals.css` `@theme {}`.
- **Do not hardcode section copy in JSX** — always source from `src/data/`.
- **Do not use `<img>`** — always use `<Image>` from `next/image`; testimonial photos are pre-imported in `src/images/testimonials/`.
- **Do not add a `/pages` directory** — App Router only.
- **Do not create a new API route for email** — use the existing Server Action pattern.
- **Do not re-implement scroll/animation logic** — check `src/hooks/` first.

---

## Design System & Aesthetics
**Theme:** Navy / Blue / Gold (The Digital Curator) — Dark mode by default.

**Typography:**
- **Sans-serif (Body/UI):** Inter (`var(--font-inter)`) — Used for readable body text and UI elements.
- **Serif (Display/Headings):** Newsreader (`var(--font-newsreader)`) — Used for large headings, often paired with italics for sophisticated emphasis (`font-display font-light italic`).

**Color Palette:**
- **Backgrounds:** Deep Navy (`#0b1326`) with darker surface containers for contrast.
- **Accents:** Gold (`#eac33e`) for primary CTAs and highlights. Blue accent (`#b6c4ff`) and blue glow (`#90a8ff`) for secondary emphasis.
- **Text:** Light ice blue (`#dae2fd`) for primary foreground, slate/muted (`#c5c5d3`) for secondary text.

**Design Principles & Patterns:**
- **Glassmorphism:** Use `.glass` or `.glass-card` for translucent, blurred backgrounds with subtle borders and shadows (`backdrop-filter: blur(20px)`).
- **Gradients:** Use text gradients (`.text-gradient`, `.text-gradient-gold`) for heading emphasis. Use large blurred radial background shapes (e.g., `bg-blue-900/10 blur-[140px]`) behind layouts for atmospheric depth.
- **Animations:** 
  - Use the `<ScrollReveal>` utility component or `.reveal` / `.reveal-stagger` classes for fade-up on scroll.
  - Use `.hover-lift` on cards/interactive elements for a floating effect on hover.
  - Dynamic typewriters utilize the `useTypewriter` hook with `.cursor-blink`.
- **Buttons / CTAs:** Use `.btn-gold` for primary, attention-grabbing actions, and `.btn-outline` for secondary actions.