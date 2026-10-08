import Image from "next/image"
import type { ReactElement } from "react"
import { TeacherSection } from "@/components/teacher-section"
import { PersonalizedLearningSection } from "@/components/personalized-learning-section"
import { OfflineLibraryScene } from "@/components/offline-library-scene"
import { QrSharingScene } from "@/components/qr-sharing-scene"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"
import styles from "@/components/story-sections.module.css"
import teacherStyles from "@/components/teacher/teacher-section.module.css"

function OfflineLibrarySection(): ReactElement {
  return (
    <section
      id="learning"
      tabIndex={-1}
      aria-labelledby="offline-library-heading"
      className={`${styles.feature} relative isolate overflow-hidden bg-background outline-none`}
    >
      <div className="relative mx-auto w-full max-w-[1227px] px-6 py-16 sm:px-8 xl:px-0 xl:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {[
            "-left-[18px] top-[140px] size-8 -rotate-30 xl:-left-[13px] xl:top-[124px] xl:size-[63px]",
            "right-6 top-7 size-8 -rotate-30 xl:top-[38px] xl:right-[44px] xl:size-[63px]",
            "bottom-10 left-2 size-5 rotate-15 xl:top-[661px] xl:bottom-auto xl:left-[66px] xl:size-[37px]",
            "-right-2 top-[220px] size-6 rounded-full xl:top-[296px] xl:right-[75px] xl:size-[63px]",
            "-right-3 bottom-[120px] size-6 rounded-full xl:top-[507px] xl:-right-[18px] xl:bottom-auto xl:size-[35px]",
            "-left-2 top-[430px] size-5 rounded-full xl:top-[408px] xl:left-[40px] xl:size-[35px]",
          ].map((className) => (
            <span
              key={className}
              className={cn("absolute bg-sky", className)}
            />
          ))}
          {/* The supplied paper already includes its shadow and left orientation. */}
          <Image
            src="/figma/offline-library/floating-paper.png"
            alt=""
            width={234}
            height={259}
            sizes="(min-width: 1280px) 136px, 110px"
            className="absolute top-[480px] -left-[35px] h-auto w-[110px] md:top-[320px] md:-left-[55px] md:w-[100px] xl:top-[191px] xl:-left-[70px] xl:w-[136px]"
          />
          <Image
            src="/figma/offline-library/floating-paper.png"
            alt=""
            width={234}
            height={259}
            sizes="(min-width: 1280px) 155px, 110px"
            className="absolute top-[320px] right-2 h-auto w-[95px] -scale-x-100 md:top-[270px] md:-right-[35px] md:w-[110px] xl:top-[396px] xl:right-[20px] xl:w-[155px]"
          />
        </div>

        <div className="relative mx-auto grid max-w-[1040px] items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
          <div className="min-w-0 text-center md:text-left">
            <h2
              id="offline-library-heading"
              className="text-[clamp(2.25rem,3.4vw,3.23rem)] leading-[1.06] font-extrabold tracking-[-0.04em] text-[#0086fa]"
            >
              Your Offline
              <br />
              Learning Library
            </h2>
            <p
              className={`${styles.description} mx-auto mt-5 max-w-[475px] font-semibold text-hero-ink md:mx-0 xl:mt-4`}
            >
              Keeps saved modules available without internet, organized by
              subject and grade.
            </p>
            <Image
              src="/figma/offline-library/books-friendly.png"
              alt=""
              aria-hidden="true"
              width={1374}
              height={1145}
              sizes="(min-width: 1280px) 270px, (min-width: 768px) 34vw, 116px"
              className="hidden h-auto w-full max-w-full md:mt-12 md:block md:w-[71%] xl:mt-[61px] xl:w-[270px]"
            />
          </div>

          <OfflineLibraryScene />
        </div>
      </div>
    </section>
  )
}

function QrSharingSection(): ReactElement {
  return (
    <section
      id="qr-sharing"
      aria-labelledby="sharing-heading"
      className={`${styles.feature} px-6 py-16 sm:px-8`}
    >
      <div className="mx-auto max-w-[900px] text-center">
        <h2
          id="sharing-heading"
          className="text-[clamp(2.25rem,3.4vw,3.23rem)] leading-[1.06] font-extrabold tracking-[-0.04em] text-[#0086fa]"
        >
          QR Sharing Experience
        </h2>
        <p
          className={`${styles.description} mx-auto mt-4 max-w-[620px] font-semibold text-hero-ink`}
        >
          Share assignments, quiz results, and student details with a scan. Pair
          nearby devices to share learning modules without internet.
        </p>
      </div>
      <QrSharingScene />
    </section>
  )
}

export function StorySections(): ReactElement {
  return (
    <>
      <OfflineLibrarySection />
      <PersonalizedLearningSection />
      <div className={teacherStyles.transitionGroup}>
        <div aria-hidden="true" className={teacherStyles.background} />
        <QrSharingSection />
        <TeacherSection />
      </div>
      <SiteFooter />
    </>
  )
}
