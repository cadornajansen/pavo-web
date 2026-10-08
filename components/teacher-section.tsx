import type { ReactElement } from "react"
import styles from "@/components/teacher/teacher-section.module.css"
import sectionStyles from "@/components/story-sections.module.css"
import { TeacherMotion } from "@/components/teacher/teacher-motion"
import {
  AssignmentSentCard,
  ClassOverviewCard,
  LearningMaterialsCard,
  ShareToClassCard,
} from "@/components/teacher/teacher-cards"
import {
  TeacherDecorations,
  TeacherDeskScene,
  TeacherGround,
} from "@/components/teacher/teacher-scene"

export function TeacherSection(): ReactElement {
  return (
    <section
      id="support"
      aria-labelledby="teacher-heading"
      className={`${styles.section} ${sectionStyles.feature} relative isolate mb-16 overflow-hidden pt-6 pb-10 sm:pt-8 sm:pb-12 xl:py-10`}
    >
      <TeacherGround />
      <TeacherMotion className="relative mx-auto w-full max-w-[1280px] px-6 pt-10 sm:px-8 sm:pt-12 xl:aspect-[1280/780] xl:pt-16">
        <TeacherDecorations />
        <div
          data-teacher-layer="heading"
          className="relative z-10 mx-auto max-w-[560px] text-center"
        >
          <h2
            id="teacher-heading"
            className="text-[clamp(2.25rem,5vw,4rem)] leading-[1.06] font-extrabold tracking-[-0.045em]"
          >
            <span className="block text-[#1e2f51]">Less busywork.</span>
            <span className="block text-[#0678d9]">More teaching.</span>
          </h2>
          <p
            className={`${sectionStyles.description} mx-auto mt-5 max-w-[440px] font-semibold text-[#536985]`}
          >
            Collect quiz scores, organize lessons, and keep learner reports
            together. Spend more time supporting your students.
          </p>
        </div>
        {/* Keep placement outside the animated children so their rotations stay intact. */}
        <div className="relative mt-10 sm:mt-12 md:pt-40 xl:static xl:mt-0 xl:pt-0">
          <div
            data-teacher-layer="share-card"
            className="absolute top-0 -left-2 hidden w-[145px] origin-top-left scale-75 -rotate-[9deg] opacity-80 sm:left-[7%] sm:w-[190px] sm:scale-100 md:block xl:top-[200px] xl:left-8 xl:w-[200px] xl:opacity-100"
          >
            <ShareToClassCard />
          </div>
          <div
            data-teacher-layer="class-card"
            className="absolute top-[190px] right-5 hidden w-[270px] rotate-[7deg] xl:block"
          >
            <ClassOverviewCard />
          </div>
          <div
            data-teacher-layer="sent-card"
            className="absolute bottom-[135px] left-10 hidden w-[240px] rotate-[7deg] xl:block"
          >
            <AssignmentSentCard />
          </div>
          <div
            data-teacher-layer="materials-card"
            className="absolute top-3 -right-2 hidden w-[210px] origin-top-right scale-75 rotate-[7deg] opacity-80 sm:right-[5%] sm:w-[240px] sm:scale-100 md:block xl:top-auto xl:right-7 xl:bottom-[110px] xl:opacity-100"
          >
            <LearningMaterialsCard />
          </div>
          <div
            data-teacher-layer="desk-scene"
            className="relative z-10 mx-auto w-[95%] max-w-[520px] sm:w-[75%] xl:absolute xl:bottom-0 xl:left-1/2 xl:w-[520px] xl:-translate-x-1/2"
          >
            <TeacherDeskScene />
          </div>
        </div>
      </TeacherMotion>
    </section>
  )
}
