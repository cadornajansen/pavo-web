import Image from "next/image"
import { ArrowDown, ArrowUp, ArrowUpRight, Check } from "lucide-react"
import type { ReactElement } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import styles from "@/components/site-footer.module.css"

const experienceLinks = [
  { label: "Offline library", href: "#learning" },
  { label: "Personalized support", href: "#personalized-learning" },
  { label: "QR experience", href: "#qr-sharing" },
  { label: "For teachers", href: "#support" },
] as const

const projectLinks = [
  {
    label: "Project information",
    href: "https://docs.google.com/document/d/1lAAFkYXA7XgECoxprGKt19EeD6-brhlhvPw4fcKqARI/edit",
  },
  {
    label: "GitHub repository",
    href: "https://github.com/DrewBasadre/Jeymi-and-Friends",
  },
] as const

const footerLink =
  "inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-bold text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"

function ClosingIllustration(): ReactElement {
  return (
    <div aria-hidden="true" className={styles.illustration}>
      <Image
        src="/figma/offline-library/books-friendly.png"
        alt=""
        width={1374}
        height={1145}
        sizes="(min-width: 640px) 150px, 88px"
        className={styles.books}
      />
      <Image
        src="/figma/teacher/cap-tile.png"
        alt=""
        width={1254}
        height={1254}
        sizes="(min-width: 640px) 160px, 112px"
        className={styles.cap}
      />
      <div className={styles.phone}>
        <div className={styles.phoneSpeaker} />
        <Image
          src="/figma/personalized-learning/pavo-peeking.png"
          alt=""
          width={1561}
          height={1007}
          sizes="(min-width: 640px) 287px, 241px"
          className={styles.mascot}
        />
        <div className={styles.phoneLesson}>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-[10px] border-b-[3px] border-[#0b9b79] bg-[#31cba5] text-white">
            <Check className="size-4 stroke-[3]" />
          </span>
          <div className="flex-1">
            <div className="h-2 w-full rounded-full bg-[#d8edfb]" />
            <div className="mt-1.5 h-2 w-2/3 rounded-full bg-[#d8edfb]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SiteFooter(): ReactElement {
  return (
    <footer className="overflow-hidden">
      <section
        aria-labelledby="closing-heading"
        className="relative isolate bg-white pt-16 sm:pt-20"
      >
        <div className="relative z-20 mx-auto max-w-[800px] px-6 text-center">
          <h2
            id="closing-heading"
            className="text-[clamp(2.5rem,5.3vw,4.75rem)] leading-[1.05] font-extrabold tracking-[-0.04em] text-[#10213a]"
          >
            Learning that
            <span className="block text-[#0086fa]">keeps going.</span>
          </h2>
          <a
            href="#project-resources"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mt-7 min-h-12 gap-3 rounded-[14px] border-2 border-b-4 border-[#0057a9] bg-[#006dcb] px-6 text-base font-extrabold text-white hover:bg-[#005fb5] hover:text-white focus-visible:ring-offset-4 motion-reduce:transition-none sm:mt-8"
            )}
          >
            Explore the project
            <ArrowDown aria-hidden="true" className="size-[18px]" />
          </a>
        </div>
        <ClosingIllustration />
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 -bottom-px z-10 h-[140px] w-full text-[#0066c7] sm:h-[230px]"
        >
          <path
            d="M0 10C210 8 255 230 540 230H900C1185 230 1230 8 1440 10V260H0Z"
            fill="currentColor"
          />
        </svg>
      </section>

      <div
        id="project-resources"
        className="relative bg-[#0066c7] px-6 pt-10 pb-7 sm:px-8 sm:pt-12 sm:pb-9"
      >
        <div className="mx-auto max-w-[1040px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-9 md:grid-cols-[1.25fr_1fr_1fr] md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <a
                href="#top"
                aria-label="PAVO home"
                className="inline-block rounded-lg text-[3.25rem] leading-none font-black tracking-[-0.06em] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                PAVO
              </a>
              <p className="mt-4 max-w-[260px] text-sm leading-relaxed font-semibold text-[#d3edff]">
                An offline-first learning platform for Filipino classrooms.
              </p>
            </div>
            <nav aria-labelledby="footer-explore-heading">
              <h3
                id="footer-explore-heading"
                className="mb-2 text-lg font-extrabold text-white max-[380px]:text-base"
              >
                Explore PAVO
              </h3>
              <ul>
                {experienceLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className={footerLink}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-labelledby="footer-project-heading">
              <h3
                id="footer-project-heading"
                className="mb-2 text-lg font-extrabold text-white max-[380px]:text-base"
              >
                Project materials
              </h3>
              <ul>
                {projectLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className={footerLink}>
                      {label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 max-[380px]:hidden"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-10 flex flex-col gap-5 border-t border-white/20 pt-6 sm:mt-12 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <p className="max-w-[700px] text-xs leading-relaxed text-[#d3edff]">
              PAVO is an Android app in development. Product illustrations use
              example content; availability may change as the app develops.
              Website previews do not collect learner information.
            </p>
            <a href="#top" className={cn(footerLink, "shrink-0")}>
              Back to top
              <ArrowUp aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
