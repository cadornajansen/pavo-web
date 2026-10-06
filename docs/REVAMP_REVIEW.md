# PAVO landing-page revamp

Implemented 6 October 2026 in `C:/Development/pavo-web`.

## What changed

The page follows the supplied Figma composition, then continues through saved
lessons, practice and results, the online companion, teacher/family support,
demonstration content, and clearly labeled plans. One Home phone transitions from
the landscape scene to the white feature scene. The two Figma phone placements
are states of that same element.

Visual source: [Figma 44:737](https://www.figma.com/design/IlUlrCEabENz0Abje65ljU/PAVO-UI-UX?node-id=44-737).
Glass source: node 56:3. Product evidence and claim boundaries remain in
[PAVO_FOUNDATION.md](./PAVO_FOUNDATION.md). Its original hero wording and historical
checkpoint restrictions are superseded by the latest user request and the current
design/motion guides.

## Files changed in this revamp

Paths below are relative to `C:/Development/pavo-web`.

| File | Change | Purpose |
| --- | --- | --- |
| `app/page.tsx` | Modified | Composes the hero and story; retains a keyboard skip link. |
| `app/layout.tsx` | Modified | Updates the page title and makes anchor navigation immediate; retains Google Sans/Geist. |
| `app/globals.css` | Modified | White canvas and semantic colors/shadows for the Figma scene and glass. |
| `components/hero-experience.tsx` | Created | Single-phone scroll scene, feature cards, responsive and reduced-motion behavior. |
| `components/story-sections.tsx` | Created | Product story, real screen captures, support, planned features, footer. |
| `AGENTS.md` | Modified | Records current implementation authorization and constraints. |
| `docs/DESIGN_SYSTEM.md` | Modified | Records Figma authority and the glass treatment. |
| `docs/MOCKUPS_AND_MOTION.md` | Modified | Explains the two states, asset handling, and accessible fallbacks. |
| `docs/ASSET_MANIFEST.md` | Created | Original paths, dimensions, conversion choices, and source hashes. |
| `docs/REVAMP_REVIEW.md` | Created | This implementation walkthrough and verification record. |
| `public/scene/landscape.webp` | Created | Optimized supplied landscape. |
| `public/screens/hero-phone.webp` | Created | Supplied framed Home mockup; no second device frame. |
| `public/screens/quiz.webp` | Created | Actual redesigned quiz capture. |
| `public/brand/mascot-happy.webp` | Created | Supplied hero mascot. |
| `public/brand/mascot-side.webp` | Created | Supplied companion-section mascot. |
| `public/brand/wordmark-large.webp` | Created | Larger transparent wordmark for the footer. |
| `docs/review/desktop-hero.jpg` | Created | Desktop initial-state screenshot. |
| `docs/review/desktop-reveal.jpg` | Created | Desktop white-scene screenshot. |
| `docs/review/mobile-hero.jpg` | Created | Mobile initial-state screenshot. |

No pre-existing files were deleted. Three unused asset copies prepared during
the work were removed before completion: `cloud-01.svg`, `cloud-04.svg`, and
`library.webp`; the source files remain intact.

Existing `components/motion-reveal.tsx`, `components/ui/button.tsx`, Home/lesson/
results captures, and the small wordmark are reused. Existing dependency edits
are preserved; no packages were added or changed in this revamp.

## How it works

1. Next.js renders `app/page.tsx`, which composes `HeroExperience` and
   `StorySections`. Content and images are present in the rendered HTML.
2. `HeroExperience` is a client component because it reads viewport preferences
   and scroll position. Wide windows at least 1024px by 650px with normal motion
   get a sticky scene within a section `220svh` tall (2.2 screens).
   Other layouts flow vertically.
3. Motion's `useScroll` maps travel through that section to a value from 0 to 1.
   The landscape and headline fade, the same phone moves upward and scales
   slightly, and the cards/mascot appear. Native page scrolling is preserved.
4. Animation controls update transforms and opacity without rerendering React on
   every scroll frame. The faded intro becomes inert so its hidden link cannot
   receive keyboard focus. Resizing and restored scroll positions are measured
   again to avoid an incorrect initial scene.
5. Desktop Explore links target a stable position where the reveal is complete.
   Mobile/reduced-motion links target the visible feature list. These are native
   anchors with immediate native jumps, styled with the existing shadcn
   `buttonVariants` helper. Scrolling through the page still drives the transition.
6. Story content remains server-rendered. The existing small `MotionReveal`
   wrapper adds optional viewport entrances around sections. Supplied WebP
   assets are served through Next.js Image. The results capture is deliberately
   cropped and labeled as a detail to exclude its truncated bottom action.

All authored layout and visual styling uses Tailwind utilities. Global CSS holds
imports, theme setup, and semantic tokens. Motion generates runtime transforms
and opacity; there are no authored inline layout styles, CSS modules, or custom
component selectors.

## How to test

From PowerShell:

```powershell
Set-Location C:\Development\pavo-web
pnpm dev
```

Open the localhost URL printed by Next.js. With the existing development server,
the reviewed URL is `http://localhost:3000`.

At 1440 x 900, click **Explore PAVO**. The landscape should fade completely, one
Home phone should remain, and three glass cards and the mascot should appear.
Scroll onward to the lesson, quiz/results, and the rest of the story. At 390 x
844, the same content should stack without sideways scrolling. Use Tab/Enter to
check navigation, then enable reduced motion and reload: all content should be
available without the pinned animation.

Commands run successfully: `pnpm typecheck`, `pnpm lint`, and `pnpm build`.
The production build statically prerenders `/`. Its only reported warning is
Next.js missing automatic Google Sans fallback metrics; the requested Google
Sans font loads in the browser.

Browser checks cover desktop/mobile composition, one hero-phone element, Explore
anchors, keyboard focus and the skip link, reduced motion, restored scroll,
short desktop fit, narrow-screen overflow, and image loading. Screenshots above
capture the key states. These checks do not claim validation on physical phones
or every browser engine.

## What to understand

The animation changes presentation, not the learning content or the number of
phones. A sticky container keeps one scene in view while a normalized scroll
value coordinates its parts. A static layout is the fallback, so reading the
story does not depend on the animation.

Glass dimensions, corner radius, gradient stops, and shadow come from Figma.
Backdrop blur and subtle inset highlights approximate Figma's Glass effect;
the Figma tool did not expose its complete refraction settings. Pixel-identical
refraction across browsers is not claimed.

AI is labeled an online preview. Parent-device delivery, real SMS, school sync,
and wider distribution remain planned. There are no invented user counts,
testimonials, store links, team identities, or pretend-success contact forms.
Publication/contact delivery remain outside this implementation.
