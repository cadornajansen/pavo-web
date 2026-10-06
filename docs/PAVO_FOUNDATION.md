# PAVO: product philosophy and landing-page foundation

Grounded on 6 October 2026. This is a documentation baseline, not an implemented
website or permission to begin coding.

## The page's job

Help someone scanning the pitch QR understand PAVO, see its actual learning
experience, and connect with the team. The audience includes judges, evaluators,
students, teachers, and other people in the room.

PAVO means **Personalized Adaptive Virtual Organizer**. It is an Android-first,
offline-first learning platform for Filipino classrooms. Its core loop is:

**Learn offline -> practise -> understand progress -> choose support -> learn again.**

The page tells one carefully curated story. Personalization here means thoughtful
PAVO-specific storytelling, not a visitor questionnaire or role gate.

## Product principles and their website consequences

| Product principle | Website consequence |
| --- | --- |
| Learning should remain useful with unreliable connectivity. | Show saved lessons and local progress. Keep the site light enough for a phone on mobile data; do not claim the website itself works offline. |
| Give a learner a useful next step. | Show a continuous lesson journey, not an inventory of unrelated features. |
| Encourage progress without shame. | Use supportive language, the supplied mascot, and constructive results. Avoid guilt, punitive streak language, and inflated promises. |
| Teachers need actionable evidence. | Show how a learner report informs support, not just a decorative analytics chart. |
| Families need understandable progress. | Describe the digest and next support action in everyday language. |
| AI enhances the core experience. | Explain connectivity requirements near AI features; do not imply all intelligence depends on a cloud service or that cloud AI runs offline. |
| Trust grows from concrete evidence. | Use actual screen states and synthetic demonstration records. Separate working features, demonstrated flows, and future plans. |

## Source authority

User decisions in this conversation define the website brief. Current app source
and implemented redesign captures define the product appearance. These guides
translate those sources into website decisions; they do not redefine the app.

App source root: `C:/Users/DDCic/StudioProjects/Jeymi-and-Friends`.

| Source under the app root | What it establishes |
| --- | --- |
| `PRODUCT_DESCRIPTION.md` and `APP_CAPABILITIES.md` | Product purpose, learning tools, teacher workflows, offline boundaries, and demonstration content. |
| `mobile/src/theme/tokens.ts` | Current blue/navy/white/yellow colors, spacing, radii, and Google Sans app typography. Actual values take precedence over outdated comments. |
| `mobile/src/screens/StudentScreens.tsx` | Implemented Home, Learn, reader, quiz, results, and progress behavior. |
| `mobile/src/components/Brand.tsx` | Current supplied-image mascot and wordmark usage. |
| `design-reference/redesign-implementation/README.md` and its PNGs | Implemented redesign and recorded verification limits. Refined Home supersedes the first Home capture. |
| `design-reference/current-ui/SCREEN_INVENTORY.md` | Historical pre-redesign coverage; useful for locating workflows, not the current visual source of truth. |

The older `DESIGN.md` describes teal gradients and a pixel-art mascot. Those
details conflict with the current app and supplied artwork; do not carry them
into this site. Likewise, `redesign-concepts/2026-10-05` contains earlier concepts,
not the current implemented-screen baseline. The older readiness audit predates
the implemented redesign and must not be used to label the whole redesign unbuilt.

## Content sequence

Voice: warm, clear English. Explain benefits with short sentences and concrete
examples. One main idea per section; supporting copy should usually fit in two
sentences. Pavo's character adds warmth without speaking down to learners.

| Section | Message and visual evidence |
| --- | --- |
| Meet PAVO | Working headline: **A next step for every learner.** Supporting copy: **PAVO brings offline lessons, personalized practice, and clearer progress to Filipino students, teachers, and families.** Show refined Home with the supplied mascot. |
| Why PAVO exists | Learning needs continue despite unreliable internet, different learner needs, and limited teacher time. Keep this bridge short. |
| Follow one learner | Home -> Learn -> lesson -> quiz -> results. Explain one benefit beside each screen. Use the current Grade 5 **States of Matter** demonstration as the narrative anchor. |
| Turn progress into support | Explain teacher reports, support decisions, and family digests. Obtain current redesigned captures before featuring teacher/family UI; older screenshots only establish workflow history. |
| Built for Philippine classrooms | Core offline learning, local sharing workflows, and original demo materials for Grades 1-10 in Science, Math, and English. Show practical interface evidence rather than unsupported impact statistics. |
| Where PAVO goes next | School synchronization, real parent-message delivery, and wider distribution of materials. Clearly mark these as planned directions, without dates. Connect the vision to SDG 4. |
| Meet the team and connect | Team names/roles supplied by the team, then **Help shape what comes next.** Invite feedback, classroom interest, and partnership conversations. |

Hero actions: **Explore PAVO** moves to the walkthrough; **Connect with the team**
moves to the closing form. The conversion goal is a team conversation, not an
unverified app-store download.

Interest form brief: name, email, and message required; role optional. Submit label:
**Send interest**. Acknowledge receipt only after confirmed delivery/storage;
preserve entries on failure. Delivery service, recipient, and privacy text remain
implementation inputs. Do not implement a pretend-success form.

## Claims that need careful wording

- Describe original demo materials as demonstration content, not official DepEd
  publications or evidence of formal approval.
- Describe personalization through actual next-step, practice, and format behavior.
  Do not claim scientifically proven learning-style matching or measured learning gains.
- Core saved learning and local records work offline; cloud companion generation
  requires connectivity and configured services.
- Parent digests are available on the learner device. SMS delivery is simulated
  in the documented MVP; do not portray real delivery as already working.
- QR/file workflows and Android Nearby sharing are distinct mechanisms. Do not
  imply automatic school-wide synchronization, mesh networking, or universally
  validated two-device reliability.
- Implemented redesign captures show a development build with demo records.
  They are stronger evidence than concept art but do not certify production readiness.

## Current web-project baseline

Inspected `C:/Development/pavo-web` on 6 October 2026:

- Next.js 16.3.6, React 19.3.0, TypeScript, Tailwind CSS 4, App Router in `app/`.
- shadcn `base-vega`; Base UI is installed and the existing Button uses it.
- Motion is already declared as `^14.0.0`; pnpm lockfile and workspace file exist.
- Only Button is currently present in `components/ui/`; add other primitives only
  when needed by an authorized implementation checkpoint.
- The starter uses Geist/Geist Mono and generic theme values. The font split and
  PAVO palette in the design guide are intended changes, not already implemented.
- Vercel is the chosen deployment destination; no deployment was verified here.
- Existing user edits to `package.json` and `pnpm-lock.yaml` must be preserved.

## Review and outstanding content

Before implementation, use the other two guides to choose the exact screen
composition for the requested section. Before publication, obtain current
teacher/family captures, team identities, and a real form delivery destination.
These gaps do not require inventing substitute evidence.

Content check: show the section outline and matched screenshots to a person
unfamiliar with PAVO for 60 seconds. They should explain who it helps, how offline
learning fits the experience, and how to contact the team.
