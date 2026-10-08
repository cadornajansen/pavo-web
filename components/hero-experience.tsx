import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HeroClouds } from "@/components/hero-clouds"
import styles from "@/components/hero-clouds.module.css"

const exploreButton = cn(
  buttonVariants({ variant: "ghost" }),
  "min-h-11 gap-4 rounded-[14px] border-2 border-b-4 border-[#0057a9] bg-[#006dcb] px-5 text-base leading-none font-extrabold tracking-[-0.02em] text-white hover:bg-[#005fb5] hover:text-white focus-visible:ring-offset-4 motion-reduce:transition-none sm:text-lg"
)

export function HeroExperience(): React.JSX.Element {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-background"
    >
      <div
        aria-hidden="true"
        className={`${styles.background} pointer-events-none absolute inset-0`}
      >
        <div className={styles.landscape}>
          <Image
            src="/scene/landscape-refined.webp"
            alt=""
            width={1536}
            height={1024}
            sizes="100vw"
            preload
            className="absolute inset-0 size-full"
          />
          <HeroClouds />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1160px] flex-col items-center px-5 pt-28 text-center lg:pt-[110px]">
        <h1
          id="hero-title"
          className="w-full text-[clamp(1rem,8vw,2.375rem)] leading-[1.06] font-extrabold tracking-[-0.045em] sm:w-auto sm:text-[clamp(2rem,5.264vw,5rem)] sm:leading-[1.03]"
        >
          <span className="block whitespace-nowrap text-[#0086fa]">
            Learning doesn’t stop
          </span>
          <span className="block whitespace-nowrap text-hero-ink">
            when the internet does.
          </span>
        </h1>
        <p className="mt-6 w-full max-w-[720px] text-base leading-normal font-semibold text-hero-ink sm:mt-4 sm:text-lg sm:leading-[1.24] lg:mt-3 lg:text-xl">
          <span className="sm:hidden">
            Saved lessons, personal practice, and progress you can follow. Keep
            learning with PAVO, even offline.
          </span>
          <span className="hidden sm:block">
            With saved lessons, personalized practice, and progress you can
            follow,
          </span>{" "}
          <span className="hidden sm:block">
            PAVO helps Filipino learners keep moving forward—even offline.
          </span>
        </p>
        <a
          href="#learning"
          className={cn(exploreButton, "mt-7 w-[249px] sm:mt-[21px]")}
        >
          Explore Pavo
          <Image
            src="/figma/hero/arrow.svg"
            alt=""
            width={12}
            height={15}
            className="h-auto shrink-0 rotate-90"
          />
        </a>
      </div>

      {/* The source has transparent space above the device; keep Figma's crop. */}
      <div className="pointer-events-none relative mx-auto -mt-3 h-[260px] w-[min(78vw,410px)] overflow-hidden sm:h-[320px] lg:h-[341px]">
        <Image
          src="/figma/hero/phone.png"
          alt="PAVO Home showing Maria’s States of Matter lesson, available offline."
          width={853}
          height={1844}
          sizes="(min-width: 526px) 410px, 78vw"
          preload
          className="h-auto w-full"
        />
      </div>
    </section>
  )
}
