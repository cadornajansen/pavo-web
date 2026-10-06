import Image from "next/image"
import {
  ArrowRight,
  ArrowUp,
  BookOpen,
  Brain,
  CalendarDays,
  Check,
  ClipboardList,
  FileText,
  FlaskConical,
  GraduationCap,
  Heart,
  Languages,
  LockKeyhole,
  QrCode,
  ScanLine,
  WifiOff,
} from "lucide-react"
import type { ReactElement } from "react"
import { MotionReveal } from "@/components/motion-reveal"
import { AnimatedPavo } from "@/components/animated-pavo"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12"
const heading =
  "text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-balance"
const link =
  "inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-bold outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"

function AppScreen({
  name,
  alt,
}: {
  name: "home" | "library"
  alt: string
}): ReactElement {
  return (
    <div className="w-full max-w-[268px] rounded-[36px] bg-device p-1.5 shadow-phone">
      <Image
        src={`/screens/${name}.webp`}
        width={1080}
        height={2400}
        alt={alt}
        sizes="268px"
        className="h-auto w-full rounded-[30px]"
      />
    </div>
  )
}

function StudentSection(): ReactElement {
  return (
    <section
      id="learning"
      aria-labelledby="student-heading"
      className={cn(container, "scroll-mt-24 py-20 lg:py-28")}
    >
      <MotionReveal className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-bold text-primary">
            Your learning space
          </p>
          <h2 id="student-heading" className={heading}>
            Open PAVO.
            <br />
            <span className="text-primary">Find your next step.</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
            Your next lesson, saved materials, and practice to return to.
            Together, on your phone.
          </p>
          <ul className="mt-8 space-y-5">
            {[
              {
                icon: BookOpen,
                title: "Pick up a lesson",
                text: "A home screen that puts your next action first.",
              },
              {
                icon: WifiOff,
                title: "Take your library with you",
                text: "Open saved modules even without a connection.",
              },
              {
                icon: Brain,
                title: "Give ideas another go",
                text: "Spaced review and mixed practice, at your pace.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <Icon
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-primary"
                />
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 max-w-xs text-sm leading-6 text-muted-foreground">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative grid grid-cols-2 items-start gap-3 rounded-[36px] bg-secondary/60 px-3 py-8 sm:gap-5 sm:px-7 sm:py-10">
          <div className="pt-14">
            <AppScreen
              name="home"
              alt="PAVO student home with the next assignment, saved lesson, and review shortcuts."
            />
          </div>
          <AppScreen
            name="library"
            alt="PAVO library with subject filters, saved modules, and Scan assignment."
          />
        </div>
      </MotionReveal>
    </section>
  )
}

function TeacherSection(): ReactElement {
  return (
    <section
      id="support"
      aria-labelledby="teacher-heading"
      className="scroll-mt-24 bg-muted/60 py-20 lg:py-28"
    >
      <div
        className={cn(
          container,
          "grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        )}
      >
        <MotionReveal className="min-w-0">
          <div
            role="img"
            aria-label="Illustration of a teacher workspace: class roster, learner reports, concepts to revisit, and assignment tools."
            className="overflow-hidden rounded-[28px] border border-primary/10 bg-background shadow-sm"
          >
            <div className="flex items-center justify-between gap-3 bg-foreground px-6 py-6 text-background sm:px-8">
              <div>
                <p className="text-xs font-semibold text-background/70">
                  TEACHER WORKSPACE
                </p>
                <p className="mt-1 text-2xl font-bold">A view of your class.</p>
              </div>
              <GraduationCap
                aria-hidden="true"
                className="size-8 shrink-0 text-highlight"
              />
            </div>
            <div className="p-5 sm:p-8">
              <div className="flex items-center gap-2 border-b border-border pb-4 text-sm font-bold">
                <ClipboardList
                  aria-hidden="true"
                  className="size-5 text-primary"
                />{" "}
                Record book{" "}
                <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-success">
                  <WifiOff aria-hidden="true" className="size-3" /> On your
                  device
                </span>
              </div>
              <div className="space-y-4 py-6">
                {[
                  {
                    initials: "MS",
                    name: "Maria",
                    subject: "Fractions",
                    status: "Ready to revisit",
                    color: "bg-secondary text-primary",
                  },
                  {
                    initials: "JL",
                    name: "Jules",
                    subject: "Reading comprehension",
                    status: "Building confidence",
                    color: "bg-success/10 text-success",
                  },
                  {
                    initials: "AL",
                    name: "Alex",
                    subject: "Ecosystems",
                    status: "A little support",
                    color: "bg-highlight/20 text-foreground",
                  },
                ].map((row) => (
                  <div key={row.name} className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-extrabold",
                        row.color
                      )}
                    >
                      {row.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold">{row.name}</p>
                      <p className="truncate text-xs leading-5 text-muted-foreground">
                        {row.subject}
                      </p>
                    </div>
                    <span className="max-w-24 text-right text-xs font-semibold text-muted-foreground">
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-border pt-5">
                {[
                  { icon: ScanLine, label: "Scan reports" },
                  { icon: QrCode, label: "Assign work" },
                  { icon: FileText, label: "Build modules" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-xl bg-secondary/50 px-1 py-4 text-center text-xs font-bold"
                  >
                    <Icon aria-hidden="true" className="size-5 text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <p className="mb-4 text-sm font-bold text-primary">For the teacher</p>
          <h2 id="teacher-heading" className={heading}>
            See the learner
            <br />
            <span className="text-primary">behind the score.</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
            Bring reports into one record book. Find concepts that need
            attention, then shape the next assignment around them.
          </p>
          <div className="mt-7 flex flex-wrap gap-2 text-xs font-bold">
            {["Class sections", "Learner histories", "Module authoring"].map(
              (text) => (
                <span
                  key={text}
                  className="rounded-full border border-border px-3 py-2"
                >
                  {text}
                </span>
              )
            )}
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}

function SharingSection(): ReactElement {
  return (
    <section
      aria-labelledby="sharing-heading"
      className={cn(container, "py-20 lg:py-28")}
    >
      <MotionReveal className="mx-auto max-w-xl text-center">
        <p className="mb-4 text-sm font-bold text-primary">
          A classroom connection
        </p>
        <h2 id="sharing-heading" className={heading}>
          Pass it on.
          <br />
          <span className="text-primary">No signal needed.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted-foreground">
          Assignments go out. Learning reports come back. PAVO connects the two
          through QR sharing.
        </p>
      </MotionReveal>
      <MotionReveal className="mt-12 grid items-center gap-6 rounded-[32px] bg-secondary/50 p-6 sm:p-10 md:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-4">
          <p className="text-sm font-extrabold">Teacher → learner</p>
          <div className="flex items-center gap-4 rounded-2xl bg-background p-5">
            <ClipboardList
              aria-hidden="true"
              className="size-7 shrink-0 text-primary"
            />
            <div>
              <p className="font-bold">Your next assignment</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Scan. Save. Get started.
              </p>
            </div>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            A profile QR helps teachers add learners to their class.
          </p>
        </div>
        <div className="mx-auto flex size-28 items-center justify-center rounded-[24px] border-2 border-primary/15 bg-background text-primary sm:size-36">
          <QrCode
            aria-hidden="true"
            className="size-20 stroke-[1.4] sm:size-24"
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm font-extrabold">Learner → teacher</p>
          <div className="flex items-center gap-4 rounded-2xl bg-background p-5">
            <FileText
              aria-hidden="true"
              className="size-7 shrink-0 text-success"
            />
            <div>
              <p className="font-bold">A report worth sharing</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Progress joins the record book.
              </p>
            </div>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            Learning materials can also travel through files or Android Nearby.
          </p>
        </div>
      </MotionReveal>
    </section>
  )
}

function FamilySection(): ReactElement {
  return (
    <section
      aria-labelledby="family-heading"
      className={cn(
        container,
        "grid items-center gap-10 pb-20 lg:grid-cols-2 lg:gap-20 lg:pb-28"
      )}
    >
      <MotionReveal>
        <p className="mb-4 text-sm font-bold text-success">For the family</p>
        <h2 id="family-heading" className={heading}>
          Something to
          <br />
          <span className="text-success">talk about tonight.</span>
        </h2>
        <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
          A weekly digest makes room for a better conversation: what they tried,
          what clicked, and where you can help.
        </p>
        <p className="mt-6 flex items-center gap-2 text-sm font-semibold">
          <LockKeyhole aria-hidden="true" className="size-4 text-success" />{" "}
          PIN-protected, on the learner’s device.
        </p>
      </MotionReveal>
      <MotionReveal delay={0.08}>
        <div
          role="img"
          aria-label="Illustration of the family digest: completed learning, practice, and ideas to revisit."
          className="rounded-[28px] bg-success/5 p-6 sm:p-8"
        >
          <div className="flex items-center justify-between border-b border-success/15 pb-5">
            <div>
              <p className="text-xs font-bold text-success">
                THE LEARNING WEEK
              </p>
              <p className="mt-1 text-2xl font-extrabold">
                Small steps, together.
              </p>
            </div>
            <Heart
              aria-hidden="true"
              className="size-6 shrink-0 text-success"
            />
          </div>
          <div className="divide-y divide-success/10">
            {[
              {
                icon: Check,
                title: "What they finished",
                text: "Completed lessons and practice",
              },
              {
                icon: CalendarDays,
                title: "How they kept going",
                text: "Active days and review habits",
              },
              {
                icon: Brain,
                title: "Where to lend a hand",
                text: "Ideas that need another look",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-4 py-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background text-success">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  )
}

function CompanionSection(): ReactElement {
  return (
    <section
      id="study-jam"
      aria-labelledby="companion-heading"
      className="scroll-mt-24 bg-secondary/40 py-20 lg:py-24"
    >
      <div
        className={cn(
          container,
          "grid items-center gap-10 md:grid-cols-[0.75fr_1.25fr] lg:gap-20"
        )}
      >
        <MotionReveal className="mx-auto w-full max-w-[290px]">
          <AnimatedPavo className="h-auto w-full" />
        </MotionReveal>
        <MotionReveal>
          <p className="mb-4 text-sm font-bold text-primary">
            Ask PAVO · Online companion
          </p>
          <h2 id="companion-heading" className={heading}>
            A little help.
            <br />A way into the idea.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            Ask about a topic, or turn selected material into a Study Jam with
            review notes, flashcards, and practice.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Ask a question", "Create a Study Jam", "Save for later"].map(
              (text) => (
                <span
                  key={text}
                  className="flex items-center gap-2 rounded-full bg-background px-4 py-2.5 text-sm font-bold"
                >
                  {text}
                </span>
              )
            )}
          </div>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            Creating with AI needs internet and a configured companion service.
            Saved practice stays available offline.
          </p>
        </MotionReveal>
      </div>
    </section>
  )
}

function LibrarySection(): ReactElement {
  return (
    <section
      aria-labelledby="library-heading"
      className={cn(container, "py-20 lg:py-28")}
    >
      <MotionReveal className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
        <h2 id="library-heading" className={heading}>
          Big curiosity.
          <br />
          <span className="text-primary">Room to explore.</span>
        </h2>
        <p className="max-w-xs text-base leading-7 text-muted-foreground">
          Original demo learning materials for Grades 1–10.
        </p>
      </MotionReveal>
      <MotionReveal className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: FlaskConical,
            title: "Science",
            tone: "bg-secondary text-primary",
            mark: "Explore",
          },
          {
            icon: GraduationCap,
            title: "Mathematics",
            tone: "bg-highlight/15 text-foreground",
            mark: "Work it out",
          },
          {
            icon: Languages,
            title: "English",
            tone: "bg-success/8 text-success",
            mark: "Find your voice",
          },
        ].map(({ icon: Icon, title, tone, mark }) => (
          <div
            key={title}
            className={cn(
              "relative overflow-hidden rounded-[24px] px-6 py-7",
              tone
            )}
          >
            <Icon aria-hidden="true" className="mb-8 size-12 stroke-[1.3]" />
            <p className="text-xs font-bold opacity-75">{mark}</p>
            <h3 className="mt-1 text-2xl font-extrabold">{title}</h3>
            <p className="mt-4 border-t border-current/10 pt-4 text-sm font-bold">
              60 original modules
            </p>
          </div>
        ))}
      </MotionReveal>
      <MotionReveal className="mt-7 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xl font-extrabold">
          <span className="mr-2 text-4xl text-primary">180</span> places to
          begin.
        </p>
        <p className="max-w-xs text-sm leading-6 text-muted-foreground">
          Demonstration content, not official DepEd publications.
        </p>
      </MotionReveal>
    </section>
  )
}

function VisionSection(): ReactElement {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="scroll-mt-24 bg-muted/60 py-20 lg:py-24"
    >
      <div className={container}>
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold text-primary">The vision</p>
          <h2 id="vision-heading" className={heading}>
            A way forward.
            <br />
            For every Filipino learner.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground">
            Learning that stays accessible, practice that feels personal, and
            support that reaches beyond the classroom.
          </p>
        </MotionReveal>
        <MotionReveal className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-background px-6 py-5">
          <p className="text-xs font-extrabold tracking-wider text-primary">
            PLANNED NEXT
          </p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            School record synchronization · Updates on a parent’s own device ·
            Real SMS delivery · Wider content distribution
          </p>
        </MotionReveal>
        <MotionReveal className="mt-10 text-center">
          <a
            href="#learning"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-3 rounded-full px-6"
            )}
          >
            Explore PAVO <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </MotionReveal>
      </div>
    </section>
  )
}

function Footer(): ReactElement {
  return (
    <footer className={cn(container, "pt-12 pb-8")}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold">A little progress, every day.</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6">
          <a href="#learning" className={link}>
            For learners
          </a>
          <a href="#support" className={link}>
            For teachers
          </a>
          <a href="#top" className={link}>
            Back to top <ArrowUp aria-hidden="true" className="size-4" />
          </a>
        </nav>
      </div>
      {/* <Image
        src="/brand/wordmark-large.webp"
        alt="PAVO"
        width={1600}
        height={420}
        sizes="(max-width:767px) 90vw, 900px"
        className="mx-auto mt-10 h-auto w-full max-w-[900px] opacity-[0.12]"
      /> */}
      <p className="mt-8 max-w-2xl text-xs leading-6 text-muted-foreground">
        PAVO is an Android app in development. Product illustrations use example
        content; availability may change as the app develops. Website previews
        do not collect learner information.
      </p>
    </footer>
  )
}

export function StorySections(): ReactElement {
  return (
    <>
      <StudentSection />
      <TeacherSection />
      <SharingSection />
      <FamilySection />
      <CompanionSection />
      <LibrarySection />
      <VisionSection />
      <Footer />
    </>
  )
}
