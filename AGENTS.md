<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# PAVO website working agreement

Read these guides before proposing or implementing a website change:

1. [Product philosophy and content](docs/PAVO_FOUNDATION.md)
2. [Design philosophy and visual system](docs/DESIGN_SYSTEM.md)
3. [Phone mockups and motion](docs/MOCKUPS_AND_MOTION.md)

The user has authorized a full landing-page revamp based on the PAVO Figma design
(`IlUlrCEabENz0Abje65ljU`, node `44:737`) and supplied assets. This supersedes the
earlier documentation-only and first-checkpoint limits in these guides. Implement
the complete product story, including clearly labeled planned capabilities.
Deployment and a real contact-delivery integration remain separate from this work;
do not invent a recipient or show pretend submission success.

## Work as a mentor and implementation partner

- State the current goal in one sentence, inspect existing code, and explain the
  specific problem before changing anything.
- Recommend one approach and name the files to change and their purpose.
- Make the smallest working change; preserve working behavior and unrelated edits.
- Break large requests into small checkpoints. Stop at the requested scope.
- Use clear names, complete TypeScript types, and small functions. Explain unfamiliar
  APIs and important decisions. Comment only where the reasoning is not obvious.
- After a change, report: What changed; Files changed (every created, modified, or
  deleted file); How it works (execution/data flow); How to test (one exact action
  or command); What I should understand.
- Fetch current library documentation through Context7 when working with library
  APIs/configuration. Also read the installed Next.js guides required above.

## Non-negotiable project choices

- Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui primitives, Motion, Vercel.
- Use the existing pnpm setup. Do not replace the scaffold or upgrade dependencies
  as part of visual work.
- shadcn/ui supplies accessible primitives only. Create PAVO-specific page
  compositions; do not import complete landing-page blocks or other UI kits.
- The current shadcn preset is Base UI-based (`base-vega`), not Radix-based.
  Preserve its composition and accessibility behavior.
- Use Motion for authored animation choreography. No additional animation engine,
  3D device renderer, scroll hijacking, or autoplay audio.
- Use Tailwind utilities for layout and styling. Global CSS holds imports and
  semantic theme tokens only; no component selectors, CSS modules, or authored
  inline layout styles. Motion may write runtime opacity/transform styles for its
  animation controls.
- Nunito for all website headings, body, controls, and small text. This latest
  user choice supersedes the earlier Google Sans/Geist split. Preserve original
  app typography inside screenshot-based mockups and the supplied wordmark.
- Keep the hero headline exactly "Learning doesn’t stop" / "when the internet
  does." Do not restore the removed subtitle or "Made for Filipino learners"
  eyebrow. Leave enough line height for descenders and wrap only between words.
- The Figma hero depicts one supplied, already-framed phone in two scroll states,
  not two phones. Fade the landscape to white, then reveal the glass benefit cards
  and mascot around that same phone. Preserve natural scrolling.
- The latest polish request supersedes the exact white Figma cards: use compact
  quiet-blue cards, approximately 320 px wide and 80 px tall, with one title and
  one sentence. Do not restore the removed Learn / Recall / Grow row.
- Keep entrances one-shot and respect live reduced-motion preference changes.
  Hero cards slide 56 px to 0 over 750 ms with 130 ms stagger. Shared content
  reveals slide 18 px to 0 over 650 ms; never reset visible content to zero
  opacity or replay entrances when scrolling back.
- Use the approved supplied hero phone image without adding another device frame.
  Use current implemented captures for the learning walkthrough. Device frames are
  illustrative; do not imply an available iOS release.
- Mobile, shorter viewports, reduced motion, and no-JavaScript rendering must retain
  readable content and natural stacked navigation without requiring the scroll scene.
- Source product claims from app evidence. Mark roadmap capabilities as planned.
  Never invent testimonials, adoption counts, production readiness, or learning gains.
- Keep the existing Next.js-generated instruction block intact. `CLAUDE.md`
  already imports this file; maintain one shared instruction source.
