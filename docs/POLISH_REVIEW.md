# PAVO polish review — 6 October 2026

## Scope and latest decisions

This pass preserves the supplied single-phone hero and the product evidence.
The latest user corrections override earlier design experiments:

- Hero: “Learning doesn’t stop / when the internet does.” No eyebrow or subtitle.
- Nunito for all website typography; screenshot pixels remain unchanged.
- Compact blue hero cards with one short title and sentence. No Learn / Recall / Grow row.
- Cards slide up once; mockup entrances never reset opacity.
- The latest focused checkpoint replaces only the lesson and Study Jam compositions:
  visual ice-to-water learning example beside the real lesson screen, and a PAVO
  practice deck instead of the reference-like three-card branching diagram.

## Files changed in this complete polish pass

| File | Change |
| --- | --- |
| `app/layout.tsx` | Nunito, restored headline metadata, thin scrollbar utilities. |
| `app/globals.css` | Nunito role mapping and semantic embossed-button colors/shadows. |
| `components/hero-experience.tsx` | Original headline, compact cards, single-phone scroll composition, one-shot slide-up, removed subtitle/eyebrow/redundant row/caption. |
| `components/motion-reveal.tsx` | One-shot translation-only entrance; no transparent reset of loaded images. |
| `components/use-reduced-motion.ts` (new) | Reactive browser preference subscription with static server fallback. |
| `components/animated-pavo.tsx` (new) | Preserves supplied SVG paths; finite wing greeting, feather movement, and blink. |
| `components/story-sections.tsx` | Lesson, practice/results and Study Jam presentation; latest checkpoint removes text-heavy lesson sidebars and branching diagram. |
| `components/lesson-moment.tsx` (new) | Local illustrative ice-to-water interaction. |
| `components/study-jam-preview.tsx` (new) | Local illustrative review, flashcard and quiz deck. |
| `components/ui/button.tsx` | Existing primitive behavior preserved; default blue button gains fine glass edge and inset highlights. |
| `public/scene/landscape-refined.webp` (new) | Generated landscape, optimized WebP; original retained. |
| `AGENTS.md` | Current user typography, composition and motion choices. |
| `docs/DESIGN_SYSTEM.md` | Nunito and compact-card authority; previous Figma glass reference marked historical. |
| `docs/MOCKUPS_AND_MOTION.md` | Translation-only one-shot entrances, finite mascot, live reduced-motion behavior. |
| `docs/ASSET_MANIFEST.md` | Generated landscape and original SVG provenance. |
| `docs/POLISH_REVIEW.md` (new) | This review, changed-file inventory, validation and generation prompt. |
| `docs/review/polish-desktop-hero.jpg` (new) | 1440 × 900 hero evidence. |
| `docs/review/polish-desktop-features.jpg` (new) | 1440 × 900 compact-card evidence. |
| `docs/review/polish-mobile-hero.jpg` (new) | 390 × 844 hero evidence. |
| `docs/review/polish-desktop-lesson.jpg` (new) | Ice-to-water example beside the real lesson screen. |
| `docs/review/polish-desktop-study-jam.jpg` (new) | Original PAVO practice deck composition. |
| `docs/review/polish-mobile-study-jam.jpg` (new) | Mobile flashcard interaction evidence. |

No source files were deleted. Existing dependency edits, package files and original
assets were preserved. No packages were added. No deployment or contact delivery
was performed. Earlier uncommitted changes to `app/page.tsx` are outside this pass.

## Important execution flow

1. The server renders readable content. Nunito is loaded by Next's font loader and
   exposed through the existing semantic font utilities.
2. On wide, tall screens with motion allowed, document scroll controls the landscape
   opacity and the position of the same hero phone.
3. At the feature checkpoint, each card's viewport observer and active flag permit
   one entrance: 56 px upward over 750 ms, staggered by 130 ms.
4. A ref records that an entrance has played. Scrolling backward cannot clear it.
   The scene can still reverse its background naturally.
5. Shared story entrances move 18 px over 650 ms. Image opacity stays at one, avoiding
   the old visible → transparent → visible flash.
6. The reduced-motion hook subscribes to the browser's preference. Changing it
   while the page is open stops movement and selects the natural stacked hero.
7. Lesson and Study Jam interactions change only local example state. They do not
   call an AI service, modify an app record or pretend that content was generated.

A ref stores a value between renders without triggering another render. State
stores values that should update what is displayed. The examples use state for
visible choices; entrance guards use refs for one-time behavior.

## Verification

Before the latest two-section redesign:
- TypeScript, ESLint and production build passed.
- 1440 × 900: one hero phone, original headline, Nunito, compact cards around
  320 × 80 px, visible first slide and no replay on a return visit.
- 390 × 844 and 320 × 740: stacked content and no horizontal document overflow.
- 1024 × 650: final phone and feature cards fit within the viewport.
- Live reduced-motion preference: static hero, neutral transforms, one phone.
- Keyboard navigation: visible blue focus treatment on the wordmark and links.
- Mobile lesson screenshot and its parent remained fully opaque.

After the two-section redesign:
- TypeScript and ESLint passed. The production build passed after implementation.
- 1440 × 900: inspected both visual compositions; saved review screenshots.
- 390 × 844: flashcard reveal works and all content fits within the page width.
- 320 × 740: no horizontal overflow, all format controls share one row, and
  interactive targets retain at least 44 px height.
- Warm it up changes the illustration to liquid; keyboard Enter resets it.
- Flashcards reveals the answer using keyboard Enter.
- Quiz gives a useful retry prompt for Liquid and correct feedback for Solid.
- Controls update only local example state. No generation requests are made.
- The final 320 px control-spacing adjustment was checked in-browser and rebuilt.

## One manual test

Open http://localhost:3000/, reload once, choose Explore PAVO, scroll through the
cards and back. The slide should happen only on the first visit. Continue to
Saved lessons and use Warm it up / Try again. In Study Jam, switch among the three
modes, reveal the flashcard, and answer the quiz. Resize to 390 × 844 and repeat.

Commands from `C:\Development\pavo-web`:

- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`

## Generated background

The native generated size is 1536 × 1024; WebP quality 90 produces 120,424 bytes.
This is not a claimed 4K asset. Original landscape and all supplied files remain.
The built-in image generation tool used the existing background as a reference.

Source:
`C:/Users/DDCic/.codex/generated_images/01a10c76-ee1f-76f2-8b97-2baaedd05b39/exec-6f250915-51db-4729-b589-48b47647c1cb.png`

Prompt:

> Create a substantially more refined high-resolution replacement for the attached PAVO website background. Output ONLY the background landscape artwork, no website UI, words, lettering, logos, mascot, phone or buttons. Wide landscape composition, 3:2 image suitable for a full-width desktop hero. Keep the Filipino countryside setting and optimistic daylight but REDESIGN the illustration with art-directed restraint and excellent clear edges. Premium contemporary editorial vector-style landscape, silky flat color shapes with extremely subtle atmospheric gradients, no mottled texture, no AI-looking tiny clutter, no photorealism and no 3D. The TOP 62 PERCENT is spacious pale ice-blue sky (#edf8ff near center, very light azure toward edges) with only two or three broad beautifully shaped white clouds at the extreme left and right edges. Center sky must be empty and quiet for dark website text. The lower 38 percent has elegant asymmetrical layers of soft rounded green Philippine hills, a tranquil turquoise lake, soft mint distant ridges, a few broad geometric rice-field terraces, a small cream Filipino schoolhouse with muted terracotta roof nestled at LOWER RIGHT, one understated coconut palm at LOWER LEFT. No volcano or recognizable landmark. No Mayon cone. School is a small landscape detail and no more than 8% of the picture width. Avoid intricate buildings or flag details. Extremely restrained foreground foliage framing only bottom corners. Sophisticated balanced blue, jade and warm pale green palette, avoid neon lime, avoid oversaturation. Smooth polished shapes, coherent direction of light, carefully spaced forms, fine visual craft at every scale. Overall airy, welcoming, thoughtful, designed for an offline learning app used by Filipino children and families. Preserve the idea of the reference but improve composition, craftsmanship, calmness and resolution. No dark heavy foreground, no giant central mountain, no clouds across middle headline area.

