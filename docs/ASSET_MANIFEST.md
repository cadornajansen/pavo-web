# PAVO landing-page assets

Prepared 6 October 2026 for the Figma landing-page revamp. Original files remain
unchanged. Only format optimization and proportional resizing
of the large footer wordmark were performed in the first revamp. The subsequent
polish adds the generated landscape and path-preserving SVG component below.

## Polish additions

- `public/scene/landscape-refined.webp`: built-in image generation using the previous
  landscape as a composition reference; 1536 x 1024, 120,424 bytes, opaque WebP
  quality 90. Native generated size, not a claimed 4K upscale. The original stays.
- Generation source: `C:/Users/DDCic/.codex/generated_images/01a10c76-ee1f-76f2-8b97-2baaedd05b39/exec-6f250915-51db-4729-b589-48b47647c1cb.png`.
- `components/animated-pavo.tsx`: all 40 original paths from
  `C:/Design/PAVO/pavo-svg.svg`, preserving fills, geometry and native transforms.
  SVG group wrappers add the finite wave, blink and feather movement. No redraw.
- Full generation prompt and implementation review: [POLISH_REVIEW.md](POLISH_REVIEW.md).

## Added assets

| Website path | Source | Dimensions | Bytes | Transparency | Encoding |
| --- | --- | --- | ---: | --- | --- |
| `public/scene/landscape.webp` | `C:/Design/PAVO/background-website.png` | 1520 x 724 | 97,364 | Opaque | WebP quality 90 |
| `public/screens/hero-phone.webp` | `C:/Design/PAVO/iphone-mockup.png` | 410 x 886 | 266,168 | Preserved | Lossless WebP |
| `public/brand/mascot-happy.webp` | `C:/Design/PAVO/MASCOT(closed_one_eye).png` | 3066 x 2789 | 142,778 | Preserved | Lossless WebP |
| `public/brand/mascot-side.webp` | `C:/Design/PAVO/MASCOT-SIDE.png` | 3065 x 2803 | 139,850 | Preserved | Lossless WebP |
| `public/brand/wordmark-large.webp` | `C:/Design/PAVO/PAVO-TEXT.png` | 1600 x 420 | 41,012 | Preserved | Proportional downsize, lossless WebP |
| `public/screens/quiz.webp` | `redesign-implementation/04-quiz.png` | 1080 x 2400 | 41,266 | Opaque | Lossless WebP |

The screenshot source prefix above is
`C:/Users/DDCic/StudioProjects/Jeymi-and-Friends/design-reference/`.
Dimensions match the originals except the large wordmark, which is proportionally
downsized from 10518 x 2763 to 1600 x 420 for the footer. Existing `wordmark.webp`
remains unchanged. PNG sources for landscape and quiz
contain alpha channels but their pixels are fully opaque; WebP omits that redundant
channel. Actual transparency in phone and mascot assets is retained.

## Composition and evidence notes

- The landscape includes the supplied lake, rounded hills, school, foreground,
  and clouds. It has no Mayon-shaped volcano, text, mascot, or phone overlay.
- The hero phone already includes its complete iPhone frame, status bar, and
  Home screen. Do not wrap it in a second device frame. It is the user-supplied
  mockup; its hardware does not establish an available iOS release.
- The quiz is an actual redesigned development-app capture. The quiz
  shows a learner selecting **Liquid** for the question about retaining shape;
  the selection is not evidence that this answer is correct. Do not redraw it.
- Existing `home.webp`, `lesson.webp`, and `results.webp` assets are retained.
  The results source truncates its lowest action; present it as a labeled detail.
- No current redesigned teacher or family screenshot was found in
  `redesign-implementation/`. Historical captures exist in `current-ui/teacher/`
  and `current-ui/student/` but were not copied or presented as the current UI.

## Source identity

SHA-256 values permit exact source verification. Converted WebP file hashes differ
from PNG hashes by design.

| Source filename | SHA-256 |
| --- | --- |
| `background-website.png` | `dfaf54f6bd7442d37bda2f3b31e0dacfb1062e6ce4122089a8b242b5b6bcdfd9` |
| `iphone-mockup.png` | `a6c7e5b320bb7434c73fe6571fd02f3bca34dc0cced55c0a89d4462412f70032` |
| `MASCOT(closed_one_eye).png` | `d4c2405741c6320c797d8efd0bc4768fd21196bc42d681520982a80f459dff80` |
| `MASCOT-SIDE.png` | `4c399cad03509efb7454626779d90fffee85be419633119fc67d68da74a7ca2a` |
| `PAVO-TEXT.png` | `53c438ce1d3a07500833c7860b7e92aafe82f9bff9af0d4dbb53ee9c136fda46` |
| `04-quiz.png` | `68522ebab9a072638ee984afd00b2fb8a856f0acda296e0af7f7e9ec5be4e51c` |


## Production assets — 6 October 2026

- `public/screens/library.webp`: `redesign-implementation/02-learn.png`, resized
  to 720 × 1600 WebP (quality 88), 62,376 bytes. Unmodified app content.
- `public/icons/icon-{16,32,48,192,512}.png`, `app/apple-icon.png` (180), and
  `app/favicon.ico` (RGBA PNG entries at 16/32/48) derive from the user-supplied
  `C:/Design/PAVO/ICON.jpg`. Originals preserved.
- `public/social/pavo-og.jpg`: generated social composition using the supplied
  PAVO wordmark and mascot as references. 1200 × 630 JPEG, 83,576 bytes. Original
  generated file remains at
  `C:/Users/DDCic/.codex/generated_images/01a10c76-ee1f-76f2-8b97-2baaedd05b39/exec-e3365c0f-3ba9-4788-a5e9-e2324301089a.png`.
- Teacher/family displays are authored HTML feature illustrations. Names and
  examples are illustrative, not actual learner records or app screenshots.
