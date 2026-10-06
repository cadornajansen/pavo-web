# PAVO: design philosophy and website system

Read [the foundation](PAVO_FOUNDATION.md) first. Updated on 6 October 2026 for the
user-authorized full landing-page revamp and subsequent polish. The latest user
choices documented below take precedence over the historical Figma treatment and
earlier documentation-only checkpoint.

## Current visual authority

[PAVO UI/UX, node 44:737](https://www.figma.com/design/IlUlrCEabENz0Abje65ljU/PAVO-UI-UX?node-id=44-737)
is the starting point: a landscape hero, a single front-facing Home phone, and a
scroll transition to white with glass feature overlays and the supplied mascot.
The two phone placements in the design describe successive states of the same
phone. They must not become two repeated hero phone sections.

Extend that visual language into the full product story: lessons, practice and
results, the online companion, teacher/family support, Philippine learning content,
and the planned direction. Favor varied editorial compositions and useful screen
details over a uniform feature-card grid.

## Design philosophy

**Calm enough to learn. Warm enough to return. Clear enough to act.**

Make the product recognizable before adding decoration. Large readable app screens,
confident navy headings, clear blue actions, generous whitespace, and the supplied
peacock create PAVO's identity. Sophistication comes from composition and timing.

- One dominant message and one visual focal point in each section.
- Use open layouts; reserve cards for genuinely grouped information.
- Put a clear benefit beside the screen that demonstrates it.
- Keep the mascot near the moment it supports, never across readable interface text.
- Keep the body primarily white with quiet blue accents. The supplied landscape,
  clear blue headline, and tinted benefit overlays are intentional parts of the
  hero. Reserve glass for those overlays rather than applying it to every section.
- Use the supplied Philippine landscape with rounded hills; do not reintroduce the
  removed Mayon volcano. No fabricated dashboards or impact statistics.
- Keep the full experience useful with reduced motion and keyboard navigation.

## How to use the supplied references

The screenshots are visual references, not instructions to copy their contents.

- Wika: borrow the readable phone + focused benefit + mascot relationship and spacing.
- Clucky: borrow concise feature explanations and purposeful mascot poses.
- Tarsi: borrow the immediate product benefit and prominent app demonstration.
  Its perspective phone is not the requested PAVO direction: use flat 2D phones.
- The additional app-landing references inform product scale, selective overlays,
  deliberate whitespace, and a strong closing identity. Their dark themes and
  mascots do not replace PAVO's light app palette or supplied artwork.
- shadcn and Motion screenshots identify the selected tools; their dark/yellow
  website themes are not PAVO's visual palette.
- Do not copy competitor characters, wording, device renders, adoption figures,
  rankings, download badges, or visual identity.

## Color foundation: current app values

These app values are transcribed from `mobile/src/theme/tokens.ts`, not sampled
from compressed screenshots. The revised website uses white (`#FFFFFF`) for its
main canvas so the landscape can transition into white; the app retains its
near-white background.

| Role | Hex | Use |
| --- | --- | --- |
| App background | `#F8FAFC` | Source app background, preserved inside captures |
| Website background | `#FFFFFF` | Main canvas and completed hero transition |
| Surface | `#FFFFFF` | Phone screens and selected content surfaces |
| Foreground | `#10213A` | Navy headings and main text |
| Muted foreground | `#596B82` | Paragraphs and secondary labels |
| Primary | `#0066C7` | Main actions and selected states |
| Primary pressed | `#0054A6` | Pressed actions |
| Primary tint | `#EAF4FF` | Quiet blue emphasis and secondary actions |
| Muted surface | `#F0F4F8` | Subtle grouped backgrounds |
| Border | `#DCE5EF` | Quiet separation, not a substitute for focus visibility |
| Brand highlight | `#FFD233` | Small celebratory or brand accents; navy text on yellow |
| Success | `#007C68` | Offline-ready and saved/progress indicators |
| Error | `#C0392B` | Form or action failures |

Use semantic theme tokens rather than scattered raw color classes. Map shadcn's
primary to PAVO blue with white foreground; secondary and interaction accent to
blue tint with navy foreground. Keep yellow as a separate brand-highlight token:
shadcn's interaction `accent` is not the same concept as the app's gold accent.
Use blue for focus rings with visible separation from adjacent surfaces.

Default to a light landing page, matching the redesigned app. Do not add a theme
switcher merely because the starter includes a theme provider. The mascot's
cyan/green/yellow colors stay intact as artwork; do not recolor the whole UI to
match every feather. Verify actual text/background contrast when implemented.

## Current polish direction

The latest user choices supersede the exact white Figma cards below and the
intermediate multicolor preview-card treatment:

- Use **Nunito throughout the website**, including headings, body, and controls.
- Keep the hero text exactly **Learning doesn’t stop** / **when the internet
  does.** The subtitle and "Made for Filipino learners" eyebrow are removed.
  Use solid-color text, 1.14 line height, and safe word wrapping so descenders
  remain visible. Do not clip the bottom of the first line.
- Hero cards use quiet blue surfaces and restrained edges, approximately 320 px
  wide and 80 px tall at desktop size. Allow height to grow for readable text.
  Each card has one title and one sentence; remove extra preview content.
- The Learn / Recall / Grow decorative row is removed. Do not replace it with
  arbitrary floating shapes or another competing sequence.
- The backdrop may transition, but content entrances play only once per page
  mount. Cards slide 56 px to 0 over 750 ms with 130 ms stagger. Shared section
  entrances slide 18 px to 0 over 650 ms without resetting opacity.
- Use the supplied SVG for a finite mascot greeting. Blue buttons use inset
  highlights and a fine inner border for a glass edge.
- The regenerated landscape is `public/scene/landscape-refined.webp`; preserve
  the original for comparison.

## Visual lesson and Study Jam checkpoint

The latest user correction rejects the branching material-to-three-cards diagram
and text-heavy lesson sidebars. The lesson pairs the real reader capture with an
original ice-to-water illustration and a small working example. Study Jam uses a
single practice deck with PAVO's mascot, colored page edges, and working format
controls. Show an actual example before explaining its benefit. Keep these examples
visibly illustrative; do not imply they are screenshots or live AI generation.
Use the same one-shot entrance wrapper and existing shadcn buttons.

## Original Figma glass measurements (historical)

Historical reference: feature-card node `56:3` inside the supplied `44:737`
composition. The following records the original panel treatment; the current
compact quiet-blue cards above supersede its dimensions, fill, and heavy shadow.

| Property | Figma evidence / implementation mapping |
| --- | --- |
| Reference dimensions | 396 x 93 px; allow height to grow with real copy and narrower screens |
| Corner radius | 20 px |
| Fill | Vertical gradient: `rgb(219 219 219 / 20%)` -> `rgb(255 255 255 / 20%)` at 46.154% -> `rgb(239 239 239 / 20%)` |
| Edge | Fetched design code: 0.5 px `#CECECE`; screenshot inspector: outside linear stroke at 10% opacity |
| Drop shadow | 0 px x, 4 px y, 10.1 px blur, black at 14% opacity |
| Glass effect | The Figma node has a Glass effect, but its refraction settings were not exposed by the design-context tool |

The initial browser treatment used a 24 px backdrop blur, a 50%-opacity `#CECECE` border,
and white inset highlights (top: 0 1 px at 60%; bottom: 0 -1 px with 1 px blur at
90%). These are explicit CSS approximations of the screenshot's edge and glass
effect, not a claim of identical Figma refraction. The latest polish intentionally
replaces its white fill and heavy shadow. Match text contrast and appearance at
the actual display size, including when the backdrop has become white.

All values belong in semantic theme tokens and Tailwind utilities. Glass styling
must not depend on a raster screenshot of the card, and its contents remain
selectable, readable HTML. If backdrop filtering is unsupported, the fill, edge,
and text must remain usable.

## Typography

Latest user choice: **Nunito for all website typography.** This replaces the
earlier Google Sans/Geist split. Preserve the supplied wordmark as artwork rather
than recreating the logo with a font, and retain original fonts inside app captures.

The following are baseline text roles, not copied app sizes. The revised hero can
scale up to 76 px and major body headings to 60 px on wide screens, with fluid
mobile sizes. Preserve readable supporting copy rather than shrinking it to fit.

| Role | Family / weight | Mobile size / line height | Desktop size / line height |
| --- | --- | --- | --- |
| Hero heading | Nunito / 800 | Fluid; 1.14 line height | Fluid, up to 76 px; 1.14 line height |
| Section heading | Nunito / 700 | 30 / 36 px | 44 / 50 px |
| Supporting heading | Nunito / 600 | 22 / 28 px | 24 / 30 px |
| Intro paragraph | Nunito / 400 | 18 / 28 px | 20 / 30 px |
| Body and form fields | Nunito / 400 | 16 / 26 px | 16 / 26 px |
| Buttons and navigation | Nunito / 500-600 | 16 / 24 px | 16 / 24 px |
| Captions and labels | Nunito / 400-500 | 14 / 20 px | 14 / 20 px |

Interpolate heading sizes fluidly between these endpoints. The larger Figma hero
and editorial headings use tighter tracking (approximately -0.04em to -0.055em);
supporting headings remain quieter. Keep normal body tracking and a prose width
around 60 characters. Do not shrink body copy to force a composition to fit.

The current layout loads the `Nunito` variable font through `next/font/google`
with the Latin subset and `display: "swap"`. Both semantic utilities,
`font-heading` and `font-sans`, map to `--font-nunito`. Their separate role names
remain useful for sizing and weight even though the font family is shared.
App screenshot pixels keep the app's own typography; do not redraw them in Nunito.

## Space, shape, and responsive composition

- Base spacing follows the app's 4, 8, 12, 16, 20, 24, 32, 40 px scale. Add
  64/80/96 px only for website section spacing.
- Start with 20 px mobile page gutters, 32 px tablet gutters, and 48 px desktop
  gutters. Cap content at 1200 px; center it on wider displays.
- For the full-story sections, start with 80 px vertical padding on mobile and
  112 px on desktop; adjust to the content rather than inserting empty screens.
- Controls: 14 px corner radius; content cards: 20 px; larger feature surfaces:
  24 px. Phone-frame curvature belongs to the mockup spec.
- Interactive targets should be at least 44 by 44 px, with clear labels and focus.
- Below 768 px, stack explanation and screen. From 768 to 1023 px, use generous
  tablet stacking unless both columns remain readable. At 1024 px and above,
  pair copy and phones in two columns.
- No horizontal page overflow at 320 px. Keep phones proportional, reserve image
  dimensions, and reflow content at 200% zoom rather than clipping text.
- Mobile and desktop get deliberate compositions with the same content/order.
  Hover is an enhancement, never the only way to reveal information.
- The large-screen hero may use a bounded sticky scene with normal document
  scrolling. Mobile, short windows, reduced motion, and no-JavaScript rendering
  use a natural stack. Size the phone to fit both available width and height.

## Styling and animation ownership

Use Tailwind utilities for every authored layout and visual rule. Global CSS is
limited to Tailwind/primitive imports and semantic theme tokens: no component
selectors, CSS modules, or authored inline layout styles. Motion owns runtime
opacity and transform values for choreography; its generated styles are an
animation mechanism, not a second layout system. Do not add GSAP or another UI kit.

## shadcn/ui is the primitive layer

A primitive is a reusable interaction such as a button, input, dialog, or disclosure.
A page composition is the arrangement that tells PAVO's story. Keep these separate.

- Reuse the existing shadcn Button and add only needed official shadcn primitives.
  Likely later needs: Field, Input, Textarea, Select, and an accessible Sheet if
  navigation actually needs a mobile overlay.
- Keep components in `components/ui/`. Customize semantic tokens and intentional
  variants while preserving behavior, labels, focus, and keyboard handling.
- Current components use Base UI. Verify each installed component's API; do not
  paste Radix-only `asChild` patterns into Base UI components.
- Use a semantic anchor with the existing `buttonVariants` helper for links styled
  as buttons, following the current shadcn Base UI Button documentation. Use the
  Button primitive for actions. Do not turn navigation links into button roles.
- Create custom section layouts, phone frames, illustration placement, and story
  sequences using normal layout markup. These are not replacement interaction primitives.
- Do not install another UI kit or borrow entire shadcn/third-party marketing blocks.
  Do not turn every section into a generic Card grid.
- Motion handles custom choreography. Existing primitive CSS transitions can remain;
  do not animate the same property with two competing systems.

## References and review

- [shadcn theming](https://ui.shadcn.com/docs/theming)
- [Next.js font documentation](https://nextjs.org/docs/app/api-reference/components/font)
- [Nunito font](https://fonts.google.com/specimen/Nunito)
- Installed Next.js guide: `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md`.

Review at 390 px and 1440 px: the heading, app evidence, next
action, and PAVO identity should be recognizable without relying on animation.

Planned school synchronization, real SMS, updates on a parent's own device, and
wider content distribution belong in a visibly labeled planned section. Online
AI requirements appear beside that feature; current app previews remain distinct
from roadmap claims.


## Production tour — current direction

Use actual learner Home and Learn captures with no captions. Follow with a
teacher workspace illustration, a bidirectional QR handoff, and a simple family
digest. Keep each section focused on one product benefit with concise copy.
The prior science lesson and Study Jam teaching demos have been removed. The
mascot repeats while visible and has no playback controls (explicit user choice).
