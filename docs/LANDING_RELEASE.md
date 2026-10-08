# Landing release review — 9 October 2026

## Result

The landing-page changes accumulated in this session are prepared for release on the current branch. No public production deployment is claimed by these local checks. The production origin is https://www.trypavo.cloud. The Like button stores a preference in this browser only; it is not an audience-wide counter.

## Final visual changes

- Hero heading remains exactly two centered lines from 320px through 1920px viewport widths.
- Offline and personalized headings share the same responsive font size.
- PAVO beside the folder sits at its bottom edge with a soft ground shadow.
- Teacher laptop has no individual key grid. Its slim base remains as requested.
- Slow SVG clouds move behind the mountain ridge and in front at lower opacity. They pause outside the hero and stop with reduced motion.
- Mobile teacher cards and the pause button remain removed.

## Validation

- Next.js 16.3.8 production build and TypeScript checks pass.
- ESLint passes. Production dependency audit reports no known vulnerabilities after the patch update.
- Release smoke checks pass on localhost:3000: public canonical, robots, sitemap, JSON-LD, social tags/images, icons, local anchors, response headers, and 404.
- Facebook, Twitter, and Google bot user agents receive metadata in the server response.
- Browser QA covers 320, 375, 393, 640, 768, 1024, 1440, and 1920px widths, with no horizontal overflow or runtime errors.
- Cloud visibility and reduced-motion behavior and persisted Like toggle verified.
- One unthrottled localhost mobile sample recorded LCP 236ms and CLS 0. This is a local diagnostic, not field Core Web Vitals or a ranking guarantee.
- Development and Vercel preview indexing guards verified separately from public production configuration.

## How the changes work

The server emits the hero markup, local font, metadata, and public URLs. Two non-wrapping text spans create the two hero rows; the mobile font scales with viewport width. The cloud SVG shares the landscape's coordinate system; a ridge-shaped clip hides the distant clouds where the mountains begin. A visibility observer only enables their CSS animations while the hero is visible. The folder mascot uses a bottom offset rather than a top offset so its feet align across responsive sizes. Social crawlers fetch the dedicated JPEG directly; it is not loaded into the visible landing page.

## Asset provenance

The built-in image generation tool created the replacement sharing banner and rounded-square icon from the existing PAVO assets. Sharp only resized and encoded the generated outputs. The old social image remains available for previously cached shares.

Banner prompt: Create a polished PAVO social sharing banner, landscape aspect 1200:630. Existing OG provides exact PAVO logo and blue peacock identity; landscape provides Philippine mountain lake style. Airy pale cyan background, logo upper left, bold rounded navy headline 'Learning doesn’t stop.' and blue 'Even offline.' Supporting line 'Learning support for Filipino classrooms.' Bottom left 'www.trypavo.cloud'. Right side joyful PAVO carrying colorful books. Green hills, lake, distant mountains and subtle clouds. Crisp flat illustration, high contrast, generous safe margins. No fake UI, metrics or badges.

Icon prompt: Preserve the peacock face, cyan background, eyes, eyebrows, beak, antenna and colors. Replace the square outline with a rounded square with modest 12.5% corner radius. Long straight edges, not a circle. Transparent corner cutouts; no border, shadow, or extra text.

Nunito is bundled from the same Latin variable font previously cached by Next.js. License: https://github.com/google/fonts/blob/main/ofl/nunito/OFL.txt.

Security patch reference: https://github.com/advisories/GHSA-cjq9-62q9-8jv4. The project does not configure remote image patterns; the patch also clears the other package audit advisories.

## File inventory

This inventory includes the earlier authorized landing-page work being committed with the final polish. No files were deleted. Local design-reference screenshots are intentionally not included in the commit.

| Change | File | Purpose |
| --- | --- | --- |
| Modified | `.env.example` | Production domain example and indexing configuration. |
| Modified | `README.md` | Production build and release-check instructions on port 3000. |
| Modified | `app/apple-icon.png` | Rounded-square Apple touch icon. |
| Modified | `app/favicon.ico` | Rounded-square favicon containing 16, 32, and 48 pixel PNG entries. |
| Created | `app/fonts/OFL.txt` | Nunito SIL Open Font License from google/fonts. |
| Created | `app/fonts/nunito-latin-variable.woff2` | Same Nunito Latin variable font previously served by next/font/google; now bundled for reliable builds. |
| Modified | `app/layout.tsx` | Local font, canonical origin, search metadata, social previews, and icon links. |
| Modified | `app/page.tsx` | Page composition, fixed header, and WebSite structured data. |
| Created | `components/feature-scenes.module.css` | Mascot tapping and QR scanning effects. |
| Created | `components/hero-clouds.module.css` | Cloud depth, drift, responsive crop alignment, and reduced-motion fallback. |
| Created | `components/hero-clouds.tsx` | SVG clouds clipped to the mountain ridge and visibility tracking. |
| Modified | `components/hero-experience.tsx` | Centered two-line responsive hero and layered landscape. |
| Created | `components/offline-library-scene.tsx` | Scroll-driven SVG folder, phone, tapping mascot, bottom alignment, and ground shadow. |
| Created | `components/personalized-learning-cards.tsx` | Animated learning cards, progress, and mascot overlay. |
| Created | `components/personalized-learning-motion.module.css` | Learning-card motion styles. |
| Created | `components/personalized-learning-section.tsx` | Centered mobile text-first personalized learning layout. |
| Created | `components/qr-sharing-scene.tsx` | Separated phone layers and animated scanner beam. |
| Created | `components/site-footer.module.css` | Responsive closing illustration and footer styling. |
| Created | `components/site-footer.tsx` | Closing illustration and supplied project document/repository links. |
| Created | `components/site-header.module.css` | Header background and scroll transition. |
| Created | `components/site-header.tsx` | Transparent-to-white fixed header and browser-local Like button. |
| Created | `components/story-sections.module.css` | Shared section flow and description typography. |
| Modified | `components/story-sections.tsx` | Final section order, consistent heading sizes, and generalized QR copy. |
| Created | `components/teacher-section.tsx` | Teacher composition with cards hidden on mobile and no pause button. |
| Created | `components/teacher/teacher-cards.tsx` | Teacher QR, class, materials, and result illustrations. |
| Created | `components/teacher/teacher-motion.module.css` | Anchored wing animation, blink timing, and reduced-motion fallback. |
| Created | `components/teacher/teacher-motion.tsx` | Visible-only typing and blinking mascot layers. |
| Created | `components/teacher/teacher-scene.tsx` | Teacher desk, mascot, decorations, and laptop with only a slim keyboard base. |
| Created | `components/teacher/teacher-section.module.css` | Teacher background and QR-to-teacher transition. |
| Modified | `lib/site.ts` | Validated public origin and production-only indexing rules. |
| Modified | `next.config.ts` | Explicit image quality levels used by the illustrations. |
| Modified | `package.json` | Next.js and matching ESLint config patched from 16.3.6 to 16.3.8. |
| Modified | `pnpm-lock.yaml` | Exact dependency resolution for the security patch. |
| Created | `public/figma/hero/arrow.svg` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/hero/phone.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/hero/wordmark.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/offline-library/blue-folder.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/offline-library/books-friendly.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/offline-library/floating-paper.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/offline-library/pavo-with-phone-base-prompt.txt` | Existing asset-generation provenance. |
| Created | `public/figma/offline-library/pavo-with-phone-base.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/offline-library/pavo-with-phone.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/offline-library/phone-mockup-cropped.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/personalized-learning/pavo-peeking.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/qr-sharing/black-phone-clean-prompt.txt` | Existing asset-generation provenance. |
| Created | `public/figma/qr-sharing/black-phone-clean.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/qr-sharing/black-phone.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/qr-sharing/blue-phone.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/teacher/cap-tile.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/teacher/chart-tile.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/teacher/class-tile.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/teacher/floating-paper.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/teacher/pavo-working-base-prompt.txt` | Existing asset-generation provenance. |
| Created | `public/figma/teacher/pavo-working-base.png` | PAVO scene artwork retained from the landing-page implementation. |
| Created | `public/figma/teacher/pavo-working.png` | PAVO scene artwork retained from the landing-page implementation. |
| Modified | `public/icons/icon-16.png` | Rounded-square mascot icon at the filename resolution. |
| Modified | `public/icons/icon-192.png` | Rounded-square mascot icon at the filename resolution. |
| Modified | `public/icons/icon-32.png` | Rounded-square mascot icon at the filename resolution. |
| Modified | `public/icons/icon-48.png` | Rounded-square mascot icon at the filename resolution. |
| Modified | `public/icons/icon-512.png` | Rounded-square mascot icon at the filename resolution. |
| Created | `public/social/pavo-share-v2.jpg` | New 1200 x 630 social banner, 129,767 bytes. |
| Modified | `scripts/check-release.mjs` | Metadata, crawlability, image, link-anchor, header, and 404 release checks. |
| Created | `docs/LANDING_RELEASE.md` | This change inventory, execution flow, provenance, and verification record. |

## Repeat the release check

With the production server on port 3000, run in PowerShell:

```powershell
$env:EXPECT_INDEXABLE="true"
node scripts/check-release.mjs http://localhost:3000
```

A push of this branch is not confirmation that the production domain has deployed it. Verify the public domain after the hosting deployment completes. Existing social shares may retain their previously cached preview.
