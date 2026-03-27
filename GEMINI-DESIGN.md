# Mobile-Responsive Development Prompt (Tailwind CSS)

## Objective

Convert an existing website into a fully responsive, mobile-first interface using Tailwind CSS. Ensure consistent behavior and visual integrity across all screen sizes, from small mobile devices (375×667) to large desktop displays.

## Core Principles

* Mobile-first development
* Progressive enhancement
* Accessibility compliance (WCAG 2.1 AA minimum)
* Performance optimization
* Cross-browser consistency
* Scalable, maintainable component structure

## Breakpoint Strategy (Tailwind Defaults)

* `sm`: 640px
* `md`: 768px
* `lg`: 1024px
* `xl`: 1280px
* `2xl`: 1536px

Design must begin at **375px width baseline (iPhone SE class)** and scale upward.

## Layout Requirements

* Use `flex`, `grid`, and responsive utility classes (`sm:`, `md:`, `lg:` etc.)
* Avoid fixed widths; prefer `max-w-*`, `%`, or `flex-basis`
* Maintain consistent spacing using Tailwind spacing scale (`p-`, `m-`, `gap-`)
* Prevent horizontal overflow at all breakpoints
* Use container patterns:

  * `mx-auto px-4 sm:px-6 lg:px-8`
* Ensure readable line lengths (`max-w-prose` for text-heavy sections)

## Typography

* Use responsive typography:

  * `text-sm sm:text-base md:text-lg lg:text-xl`
* Maintain hierarchy (heading scaling)
* Ensure sufficient contrast ratios
* Use `leading-*` and `tracking-*` for readability

## Navigation

* Mobile:

  * Collapse into hamburger menu
  * Use accessible toggle (`aria-expanded`, `aria-controls`)
* Desktop:

  * Horizontal navigation bar
* Ensure touch targets ≥ 44px height

## Images & Media

* Use responsive images:

  * `w-full h-auto`
* Use `object-cover` where appropriate
* Implement lazy loading
* Serve optimized formats (WebP/AVIF if possible)

## Components

* Build reusable components:

  * Cards, buttons, forms, modals
* Use consistent padding, border radius, and shadows
* Ensure components stack vertically on small screens and align horizontally on larger screens

## Forms

* Full-width inputs on mobile
* Inline grouping on larger screens
* Use accessible labels and error messaging
* Ensure keyboard navigation

## Performance

* Minimize CSS bundle size (purge unused styles)
* Avoid excessive DOM nesting
* Optimize assets (images, fonts)
* Defer non-critical scripts

## Accessibility

* Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
* ARIA roles where necessary
* Focus states visible (`focus:outline-none` must be replaced with custom focus styles)
* Keyboard navigable UI
* Color contrast compliance

## Testing Requirements

* Test on:

  * 375×667 (small mobile)
  * 768px (tablet)
  * 1024px+ (desktop)
* Validate no layout breaks or overflow
* Cross-browser testing:

  * Chrome, Firefox, Safari, Edge

## Anti-Patterns to Avoid

* Fixed pixel layouts
* Hidden overflow masking layout issues
* Absolute positioning for core layout
* Ignoring landscape orientation
* Inconsistent spacing scales

## Deliverables

* Fully responsive UI implementation
* Clean, structured Tailwind-based code
* Component-based architecture
* Documented responsive decisions (if deviations occur)

## Success Criteria

* No horizontal scrolling at any breakpoint
* Consistent UX across devices
* Fast load times (LCP optimized)
* Accessibility standards met
* Codebase remains maintainable and scalable
