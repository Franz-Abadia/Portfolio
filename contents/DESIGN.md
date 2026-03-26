# Design System: The Luxe Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

This is not a standard portfolio; it is a high-end showroom where words are treated as fine art. We reject the "template" look of rigid, symmetrical grids. Instead, we embrace **Intentional Asymmetry** and **Editorial Spacing**. By overlapping glass containers and using high-contrast typography scales, we create a sense of exclusivity and "quiet luxury." The goal is to make the user feel like they are flipping through a bespoke, limited-edition monograph rather than browsing a website.

---

## 2. Colors & Tonal Depth

Our palette is rooted in the depth of a midnight sky, illuminated by the "inner glow" of gold accents.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional dividers are prohibited. 
*   **Sectioning:** Define boundaries solely through background color shifts. A section using `surface-container-low` (#131b2e) should sit directly against the `background` (#0b1326).
*   **The Signature Glow:** Use subtle radial gradients (e.g., `primary` transitioning to `primary-container`) in hero backgrounds or behind main CTAs to provide a "soulful" luminosity that flat hex codes cannot achieve.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of obsidian and frosted glass.
*   **Base:** `surface` (#0b1326)
*   **Layer 1 (The Stage):** `surface-container` (#171f33) for large content areas.
*   **Layer 2 (The Artifact):** `surface-container-high` (#222a3d) for secondary elements.
*   **Glassmorphism:** For floating navigation or "Featured Work" cards, use semi-transparent `surface-variant` (#2d3449 at 40% opacity) with a `backdrop-filter: blur(20px)`.

---

## 3. Typography

The interplay between the serif **Newsreader** (standing in for Playfair Display's editorial grace) and the sans-serif **Inter** creates a dialogue between tradition and modern precision.

*   **Display-LG (3.5rem, Newsreader):** Reserved for hero headlines. Use `on-surface` (#dae2fd). The letter-spacing should be slightly tighter (-0.02em) to feel high-fashion.
*   **Headline-MD (1.75rem, Newsreader):** Used for case study titles. These should often be placed asymmetrically, sometimes overlapping the edge of a glass card.
*   **Body-LG (1rem, Inter):** The workhorse for copy. Use `on-surface-variant` (#c5c5d3) to reduce eye strain and maintain the "dimmed luxury" mood.
*   **Label-MD (0.75rem, Inter):** All-caps with increased letter-spacing (0.1em) for category tags or small "Motto" text above headlines. Use `secondary` (#eac33e) for these.

---

## 4. Elevation & Depth

We move away from the "drop shadow" of the early 2010s. Depth is achieved through **Tonal Layering** and **Ambient Light**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a "recessed" or "carved" look.
*   **Ambient Shadows:** If an element must float (like a CTA button), use a diffused shadow: `box-shadow: 0 20px 40px rgba(5, 41, 122, 0.2)`. The shadow color is a tinted version of `on-primary` (#05297a), never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` (#444651) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Glass Cards
*   **Structure:** No borders. `surface-container-highest` at 50% opacity.
*   **Effect:** `backdrop-filter: blur(16px)`. 
*   **Spacing:** Use `spacing-8` (2.75rem) for internal padding to ensure the copy has "room to breathe."

### Elegant Buttons
*   **Primary (The Signature Gold):** Background `secondary` (#eac33e), text `on-secondary` (#3c2f00). Roundedness: `md` (0.375rem).
*   **Hover State:** Apply a `box-shadow: 0 0 20px #eac33e` (the Gold Glow).
*   **Secondary (The Ghost):** Background `none`, `outline-variant` Ghost Border. On hover, the background fills with a 5% opacity `primary`.

### Sophisticated Form Elements
*   **Inputs:** Forbid the "box" look. Use a `surface-container-lowest` background with a bottom-only "Ghost Border." 
*   **Focus State:** The bottom border transitions to `secondary` (Gold), and the label (Inter Label-SM) lifts with a subtle 0.2s ease.

### Navigation
*   **Style:** A centered, floating pill using `xl` roundedness (0.75rem).
*   **Background:** Glassmorphic `surface-container-low` at 70% opacity.
*   **Interaction:** No underlines. Use a small `secondary` (Gold) dot appearing below the active link.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use the `spacing-20` (7rem) and `spacing-24` (8.5rem) values generously. High-end design is defined by the space you *don't* fill.
*   **DO** use subtle parallax on imagery. When a user scrolls, glass cards should move at 0.95x speed against the background.
*   **DO** use "Entrance Animations." Elements should fade in and slide up slightly (20px) using a `cubic-bezier(0.16, 1, 0.3, 1)` easing.

### Don’t:
*   **DON’T** use dividers or lines. If you feel the need to separate two pieces of content, increase the vertical spacing to `spacing-16` or shift the background tone.
*   **DON’T** use 100% white (#FFFFFF). Always use `on-surface` (#dae2fd) or `on-surface-variant` (#c5c5d3) to maintain the premium, low-light showroom atmosphere.
*   **DON’T** use sharp corners. Every element should have at least the `DEFAULT` (0.25rem) or `md` (0.375rem) roundedness to feel sophisticated and approachable.