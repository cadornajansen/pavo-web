import type { ReactElement } from "react"
import { PersonalizedLearningCards } from "@/components/personalized-learning-cards"
import styles from "@/components/story-sections.module.css"

export function PersonalizedLearningSection(): ReactElement {
  return (
    <section
      id="personalized-learning"
      aria-labelledby="personalized-learning-heading"
      className="flex flex-col justify-center bg-background px-6 py-16 sm:px-8 md:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1040px] items-center gap-12 md:grid-cols-2 md:gap-12 lg:gap-20">
        <div className="min-w-0 text-center md:order-last md:text-left">
          <h2
            id="personalized-learning-heading"
            className="text-[clamp(2.25rem,3.4vw,3.23rem)] leading-[1.06] font-extrabold tracking-[-0.04em] text-[#0086fa]"
          >
            Personalized
            <br />
            learning support
          </h2>
          <p
            className={`${styles.description} mx-auto mt-5 max-w-[420px] font-semibold text-hero-ink md:mx-0`}
          >
            PAVO helps you know what to work on next, from assignments to
            concepts worth reviewing. Ask PAVO and Study Jam are there when
            you’re online.
          </p>
        </div>
        <PersonalizedLearningCards />
      </div>
    </section>
  )
}
