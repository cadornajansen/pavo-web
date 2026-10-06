# PAVO website production preparation

6 October 2026. Scope: `C:/Development/pavo-web`, the marketing website.
The Android application itself was not changed or certified for release.

## What changed

- Replaced the ice/water lesson, repeated quiz/result sequence, and teaching deck
  with learner Home/Library, a teacher workspace illustration, QR handoffs,
  a family digest illustration, the online companion, and a subject library.
- Removed all captions beneath mockups/cards. Short product limitations remain
  beside the relevant feature or in the footer; roadmap items are marked planned.
- Preserved the exact hero headline, Nunito, glass-edge CTA, one persistent hero
  phone, and one-shot entrances. Mascot wing/feather/crest/blink motion now repeats
  on a seven-second cycle while visible. Reduced motion resets it to a static
  pose. All play/pause controls were removed following the user's explicit request.
- Added production metadata, social previews, icons, manifest, sitemap, robots,
  WebSite structured data, basic response headers, and a repeatable smoke check.
- Moved the shadcn CLI/CSS build dependency from runtime to development dependencies.
  No framework versions or UI libraries were upgraded.

## How it works

1. `story-sections.tsx` renders the product tour on the server. Actual learner
   screenshots are dimensioned WebP assets. Teacher/family examples are semantic
   HTML illustrations, not fabricated screenshots or live records.
2. `MotionReveal` retains its existing translation-only one-shot behavior.
   The SVG mascot observes visibility, then starts repeating Motion controls;
   leaving the viewport or enabling reduced motion stops and resets them.
3. `lib/site.ts` validates `SITE_URL` and computes `isIndexable`. Layout metadata,
   structured data, robots, and sitemap consume the same configuration. Next.js
   generates their static output during the build.
4. Missing domain, development mode, Vercel preview, or `SITE_INDEXABLE=false`
   produces noindex metadata, disallowed crawling, and an empty sitemap.
5. A public production origin supplies canonical/social URLs and a one-page
   sitemap. No fake search action, ratings, pricing, adoption, or release claims
   are embedded in structured data.

## Verification completed

- `pnpm typecheck`: passed; final Next.js builds also passed TypeScript.
- `pnpm lint`: passed with no warnings after the mascot changes.
- `pnpm build`: passed, including static generation of metadata routes.
- `pnpm audit --prod`: no known vulnerabilities.
- Next page/server runtime file traces contain no shadcn/braces entries.
- `node scripts/check-release.mjs http://localhost:3001`: passed on the built
  noindex preview: response headers, HTML metadata, internal anchors, robots,
  sitemap, manifest, icons, social image, library image, and missing-route 404.
- Ten in-memory configuration assertions covered missing domain, development,
  Vercel preview/production, forced noindex, and malformed/nonpublic URL inputs.
  The sample test origin was not saved to configuration or deployed.
- Desktop 1440×900, mobile 390×844, and narrow 320×740 checks showed no horizontal
  overflow or broken loaded images. Teacher layout and mobile hero were visually
  reviewed. Both mascot controls are absent in the production DOM.
- Live reduced-motion changes reset SVG transforms. JavaScript-disabled rendering
  retained all section headings and used the static hero layout. Keyboard Tab
  reached the visible skip link first.
- Generated dimensions verified: OG 1200×630; Apple 180×180; PNG icons at
  16/32/48/192/512. Favicon contains RGBA PNG entries at 16/32/48.

Evidence: `review/production-teacher-desktop.jpg` and
`review/production-mascot-mobile.jpg`. The latter shows the removed controls.
The original favicon format error was fixed before the successful builds.

## Remaining release requirements

1. Supply the actual public domain as `SITE_URL` in the production build environment
   and rebuild. No public domain was supplied during this work. The current local
   build intentionally remains noindex; its social image URL uses localhost.
2. Deploy through the intended Vercel project, verify HTTPS/DNS, then run the
   smoke script against that domain with `EXPECT_INDEXABLE=true` and `SITE_URL`
   set to the same origin. Submit its sitemap in the owner's Search Console.
   No deployment, DNS change, indexing submission, or live social-crawler test
   was performed.
3. Full development dependency auditing still reports the braces advisory
   [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).
   The registry and maintainer advisory showed no published fix at verification
   time, despite pnpm's suggested 3.0.4 range. This remains in build tooling;
   it was not falsely marked patched. Only trusted repository/build inputs
   should be used until a fix is published. No audit suppression was added.
4. This is not a comprehensive accessibility or performance certification.
   Ongoing mascot motion has no in-page pause control by explicit user request;
   system reduced-motion remains supported. Assess that choice before claiming
   full accessibility conformance. Field Core Web Vitals require a live site.

The QR artwork on the website is illustrative. Actual QR scanning and learner
data remain in the Android app. Its independent device/service release checks
are outside this website preparation.

## Every file changed in this pass

Modified:

- `components/story-sections.tsx` — feature-led product tour and caption removal.
- `components/animated-pavo.tsx` — visible-only loops, stop/reset cleanup; no controls.
- `components/hero-experience.tsx` — removed redundant aria-hidden wrapper during
  mascot integration; SVG itself stays decorative and hidden from accessibility.
- `app/layout.tsx` — title/description, canonical, OG/Twitter, icons, robots, viewport.
- `app/page.tsx` — WebSite JSON-LD when the real origin is configured.
- `app/favicon.ico` — branded multi-resolution replacement for the starter icon.
- `next.config.ts` — response headers and removal of X-Powered-By.
- `.gitignore` — allow the non-secret environment example to be committed.
- `package.json` — classify shadcn as development tooling.
- `pnpm-lock.yaml` — corresponding dependency classification/resolution metadata.
- `README.md` — local run, build, deployment environment, and verification commands.
- `docs/DESIGN_SYSTEM.md` — current product tour direction.
- `docs/MOCKUPS_AND_MOTION.md` — current loop and feature tour guidance.
- `docs/ASSET_MANIFEST.md` — source/provenance and image dimensions.

Created:

- `.env.example` — domain and staging indexing configuration.
- `lib/site.ts` — shared validated origin and indexing policy.
- `app/robots.ts` — crawler rules tied to environment.
- `app/sitemap.ts` — canonical landing-page sitemap.
- `app/manifest.ts` — browser-mode site identity and icon references.
- `app/apple-icon.png` — 180px Apple touch icon.
- `public/icons/icon-16.png` — 16px browser icon.
- `public/icons/icon-32.png` — 32px browser icon.
- `public/icons/icon-48.png` — 48px browser icon.
- `public/icons/icon-192.png` — 192px manifest icon.
- `public/icons/icon-512.png` — 512px manifest icon.
- `public/screens/library.webp` — optimized actual Learn capture.
- `public/social/pavo-og.jpg` — generated social preview, 83,576 bytes.
- `scripts/check-release.mjs` — HTTP release smoke checks using built-in Node APIs.
- `docs/review/production-teacher-desktop.jpg` — desktop verification capture.
- `docs/review/production-mascot-mobile.jpg` — control-free mobile mascot capture.
- `docs/PRODUCTION_REVIEW.md` — this report and full inventory.

Deleted:

- `components/lesson-moment.tsx` — removed science teaching demo.
- `components/study-jam-preview.tsx` — removed repeated teaching/quiz deck.

Existing package versions, earlier uncommitted project work, original brand
assets, previous review screenshots, and Android source were preserved.

## Main concept

A successful build proves the website can run. Production readiness also needs
correct public identity: one domain must drive canonical links, social URLs,
robots, and sitemap together. Environment-dependent metadata is baked into this
static build, so changing the domain requires rebuilding before deployment.
