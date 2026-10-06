# PAVO: clean 2D phone mockups and purposeful motion

Read [the foundation](PAVO_FOUNDATION.md) and [design system](DESIGN_SYSTEM.md).
Updated on 6 October 2026 for the authorized full Figma revamp. The source design
is [PAVO UI/UX, node 44:737](https://www.figma.com/design/IlUlrCEabENz0Abje65ljU/PAVO-UI-UX?node-id=44-737).
Earlier documentation-only and no-iPhone-frame restrictions are superseded by the
user's selection of the supplied hero mockup.

## Phone treatment

Use a **front-facing, flat, portrait phone presentation**. Build the composition
around readable PAVO UI; the device should stay visually quiet. The approved hero
uses the supplied `iphone-mockup.png`, which already includes its frame. The
learning walkthrough uses actual implemented app captures.

- Straight-on orientation: no perspective, 3D tilt, rotation, reflective metal,
  dramatic lens lighting, or heavy device-rendering library.
- Never wrap the already-framed hero image in a second device bezel. Its hardware
  is illustrative, not evidence of an iOS release. Keep the Android development
  preview distinction in the page's quiet supporting copy.
- For raw lesson/quiz captures, use a thin navy/slate frame, rounded corners, and
  restrained shadow. Do not add hardware that covers UI content.
- Preserve each asset's intrinsic ratio: the supplied hero is 410 x 886, while
  implemented screen captures are 1080 x 2400. Fit the important state rather
  than stretching or silently cropping action labels.
- Typical outer width: up to 320 px on mobile, up to 360 px beside desktop copy;
  shrink within the available gutter width. Use a focused detail crop outside the
  frame when an important label is otherwise too small to read.
- The user-approved hero mockup is illustrative. It must not be treated as proof
  of an implemented platform or behavior. Use actual captures for lesson, quiz,
  and results evidence; do not fabricate additional screens or AI replies.
- The frames are illustrative. An app button inside a screenshot is not a working
  web control; do not give it misleading hover/focus behavior.
- Captions identify screen purpose; informative images receive concise alt text.
  Decorative frames/mascots do not repeat the caption to screen readers.

## Essential screen storyboard

Capture root:
`C:/Users/DDCic/StudioProjects/Jeymi-and-Friends/design-reference/redesign-implementation`.

| Moment | Current source | What the visitor should understand |
| --- | --- | --- |
| Hero / start | Supplied `C:/Design/PAVO/iphone-mockup.png`, informed by `06-home-refined.png` | A personal greeting, a clear next lesson, and visible offline availability. This is one already-framed illustrative image. |
| Find a lesson | `02-learn.png` | A saved learning library makes the next lesson easy to find. |
| Read and listen | `03-reader.png` | A readable lesson, listening option, and clear understanding check. |
| Practise | `04-quiz.png` | One understandable question, a selected answer, and a clear next action. |
| Reflect and continue | `05-results.png` | A result saved on-device, something to revisit, and report sharing. |

Home -> lesson -> results are the three strongest anchor visuals. Learn and quiz
support the middle of that sequence rather than competing as five hero phones.
Use the Grade 5 States of Matter demonstration to keep the story coherent.

All five files exist. Home, reader, and results were visually inspected for this
guide. The results capture cuts off its lowest action at the image edge; obtain
a complete capture or use an explicitly framed results detail before publication.
Inspect Learn and quiz at final display size before selecting their exact crops.
Do not silently change screenshot data to fabricate continuity.

`07-profile-refined.png` and `08-ask-refined.png` are available as secondary sources.
Ask PAVO's recorded capture is an unconfigured-service state, not evidence of a
successful AI reply. Teacher and family sections need fresh redesigned captures;
do not fill them with the historical pre-redesign screens by default.

The redesign review documents demo records. Use **App preview - demo data** where
context is needed; these implemented captures no longer need a blanket label of
unbuilt concept. Any later invented/future UI must be labeled separately.

## Brand asset inventory

Original source folder: `C:/Design/PAVO`.

| Original file | Intended use |
| --- | --- |
| `PAVO-TEXT.png` | Supplied wordmark in navigation and closing identity |
| `ICON.jpg` | Source app icon; prepare appropriate web icon sizes later |
| `MASCOT-FRONT.png` | Welcome and progress/result moments |
| `MASCOT-SIDE.png` | Supporting pose oriented toward the product story |
| `MASCOT(closed_one_eye).png` | Encouragement or a small celebratory moment |
| `pavo-svg.svg` | Source for the looping articulated mascot |
| `iphone-mockup.png` | Approved already-framed Home hero image; one instance across two scroll states |
| `background-website.png` | Landscape matched to the Figma hero, with rounded hills instead of Mayon |
| `clouds/*.svg` | Supplied cloud layers, when a separately animated cloud is useful |

The front mascot was inspected: it is smooth, colorful 2D artwork, not pixel art.
Preserve its proportions and colors. The PNG files are whole poses; the supplied
SVG is the source for the implemented wing greeting, feather movement, and blink.
The latest user request makes this a seven-second loop with a quiet rest, active
only while visible. Reduced motion renders a static pose. Playback controls were
explicitly removed at the user’s request.

Leave originals untouched. Selected optimized copies live in `public/brand/`,
`public/screens/`, and `public/scene/`. Preserve transparency, image clarity,
dimensions, and source traceability. Inspect each asset's background before export;
do not assume a JPEG has transparency.

## Motion direction

Use the installed **Motion** package for authored React animations. The intended
import family is `motion/react`; do not add a second `framer-motion` dependency.
Check the installed package and current docs before implementation.

## One hero phone, two scroll states

The Figma canvas draws the same phone twice to explain a transition. Render one
hero phone image and retain it throughout the scene:

1. The landscape, exact headline "Learning doesn’t stop" / "when the internet
   does.", and Explore PAVO action introduce the app. The phone enters below the
   headline and action. The hero has no subtitle or "Made for Filipino learners"
   eyebrow. Website type is Nunito; screenshot type stays unchanged.
2. As normal document scrolling advances, the landscape fades to white and the
   same phone moves into its feature composition. Three compact quiet-blue
   benefit cards and the mascot reveal around it. Each card contains one title
   and one sentence, around 320 x 80 px at desktop size. Their text does not
   cover essential app UI. The Learn / Recall / Grow row is removed.
3. The scene releases into the rest of the page: lesson, practice/results,
   optional online companion, shared support, local content, and planned vision.

Use Motion for the scroll-linked transforms and opacity. Tailwind defines the
layout and glass presentation. A bounded sticky scene is acceptable on sufficiently
large screens; scrolling must never be captured or locked. Mobile, short windows,
reduced motion, and no-JavaScript rendering retain one phone followed by the same
benefits in normal flow. The supplied small cloud layers are optional decoration,
not a reason to animate the entire landscape continuously.

Explore links must land on visible content or a stable reveal checkpoint, not an
invisible absolute element inside the sticky scene. Restored scroll positions,
hash navigation, viewport resizing, and preference changes must apply the current
scroll state immediately. The final phone composition must fit within the viewport,
including bottom navigation, and the starting phone must not cover the hero CTA.

The learner sections use quieter entrances. Sophistication means coordinated
timing and continuity, not constant movement.

These are website choreography defaults, not claims about existing app animations:

| Moment | Current treatment | Timing |
| --- | --- | --- |
| Hero scene | One phone persists while the landscape fades to white | Scroll progress, not an auto-playing timeline; static fallback required |
| Hero benefit cards | One entrance per card; no opacity reset or replay on return | 750 ms; 56 px to 0 translation; 130 ms stagger |
| Learner steps | Shared `MotionReveal` moves each explanation/screen once; persistent ref prevents replay | 650 ms; 18 px to 0 translation only |
| Supporting detail | A single restrained highlight or callout entrance that does not cover UI | 200-300 ms |
| Mascot | SVG wing greeting, feather follow-through, and blink while visible | Seven-second repeating cycle; static with reduced motion |
| Controls | Subtle hover/press/focus feedback through their primitive variants | 120-180 ms |

Use ease-out for entrances and critically damped-feeling springs only where they
improve continuity. No overshooting text or bouncing reading surfaces. Shared
content entrances animate translation only: never fade already-visible images or
text back to zero when a viewport observer fires. The hero landscape/intro still
use scroll-linked opacity as part of the scene transition. Avoid animated blur,
shadows, and layout dimensions. Keep text immediately accessible and never hide
essential content behind a JS-dependent entrance state.

Mobile: use natural stacked scrolling. Desktop: use the bounded hero scene and
varied editorial compositions below, with the same content order. Do not introduce
scroll locking, forced slides, auto-advancing carousels, or pinning that traps the
visitor. Planned capabilities are content, not simulated working interactions.

## Accessibility and loading behavior

- Plan for `MotionConfig` with the user's reduced-motion preference respected.
  Use `useReducedMotion` to explicitly remove custom scroll-linked transforms
  and other effects that need a separate static alternative.
- Reduced motion retains the same content, order, and actions in a static layout.
  Shared content remains fully visible; do not replace movement with another
  entrance fade or merely slow a large movement down.
- `usePrefersReducedMotion` subscribes to the browser preference through
  `useSyncExternalStore`, including changes while the page is open. A static server
  snapshot preserves hydration consistency. The installed Motion hook does not
  subscribe its React state to later preference changes.
- Keyboard and touch users receive the same information. Animation does not move
  focus, replace labels, or create inaccessible screenshot hotspots.
- Server-render readable content. Limit client-side animation to the pieces that
  need it; do not make the entire page client-only for an entrance effect.
- Reserve image dimensions to avoid layout shifts. Load the primary above-fold
  visual intentionally and defer below-fold images. Do not preload every screen.
- A failed image still has meaningful adjacent copy. No autoplay audio or video.

## Review pass

At 390 x 844 and 1440 x 900, scroll from the hero through results with normal and
reduced motion, then tab through navigation and the closing CTA. Also inspect a
short desktop window, hash navigation, reload at a mid-scroll position, and
JavaScript-disabled rendering. Confirm: readable screens, no
cropped essential actions, no horizontal overflow, one coherent lesson story,
no obscured text, visible keyboard focus, and identical content without movement.
Scroll back and forth across viewed sections: their content must remain visible,
with no repeated entrance or image flicker. Confirm the two-line hero copy, absent
subtitle/eyebrow, compact cards, and removed Learn / Recall / Grow row.

Sources: [Motion accessibility](https://motion.dev/docs/react-accessibility),
[reduced motion](https://motion.dev/docs/react-use-reduced-motion), and the local
implemented-redesign review/captures listed above. That review's app test results
are historical evidence. Report current website runtime verification separately;
editing these guides does not itself establish that the checks have passed.


## Production tour update — 6 October 2026

The learner home/library, teacher workspace illustration, QR handoff, family
digest illustration, online companion, and subject library replace the earlier
lesson/quiz walkthrough. The older walkthrough tables above are provenance only.
No labels appear beneath mockups. Teacher and family visuals are feature
illustrations with example content, not captures of a released app.
