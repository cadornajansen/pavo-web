<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

# PAVO website agent context

## Source of truth

PAVO is an Android-first, offline-first learning platform for Filipino classrooms.

For product truth, use these sources in this order:

1. The actual PAVO application repository and implemented behavior.
2. `docs/PAVO_FOUNDATION.md` for product purpose, claim boundaries, and known roadmap direction.
3. Current PAVO brand assets and application UI.
4. The current website, Figma, screenshots, and other documentation as references only.

`DESIGN_SYSTEM.md`, `MOCKUPS_AND_MOTION.md`, `POLISH_REVIEW.md`,
`PRODUCTION_REVIEW.md`, and `REVAMP_REVIEW.md` document previous design decisions
and implementations. They are historical/reference material, not binding design authority.

## Product integrity

Do not fabricate:

- implemented functionality
- production readiness
- users or adoption numbers
- learning outcomes
- testimonials
- partnerships or government approval
- successful deployments
- impact statistics

Clearly distinguish between:

- implemented / available
- in development
- planned
- long-term vision

Inspect the application repository directly when determining which category something belongs to.

## Technical constraints

Preserve the existing core stack unless there is a strong technical reason to change it:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Motion
- pnpm
- Vercel

Preserve unrelated working functionality.

Maintain responsive behavior, accessibility, reduced-motion support, semantic HTML,
keyboard usability, and reasonable performance.

## Creative freedom

The existing website and Figma are not visual constraints.

For authorized redesign work, you may substantially rethink:

- information architecture
- hero design
- typography
- layouts
- section composition
- spacing
- visual hierarchy
- backgrounds
- product presentation
- mascot usage
- motion
- scroll interactions
- illustration
- generated visual assets
- transitions
- navigation
- storytelling

Do not preserve an existing design decision merely because it already exists.

Avoid defaulting to conventional SaaS patterns when a PAVO-specific solution would
communicate the product better.

Use real PAVO application states, screenshots, assets, and product behavior wherever useful.

## Design exploration mode

When explicitly asked to research, explore, critique, or establish an art direction,
do not begin production implementation until the design direction has been intentionally chosen.

Spend that phase understanding the product, users, references, visual opportunities,
interaction concepts, storytelling, and creative direction.