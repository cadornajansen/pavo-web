"use client"

import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  Brain,
  ChartNoAxesCombined,
  WifiOff,
  type LucideIcon,
} from "lucide-react"
import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
} from "motion/react"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatedPavo } from "@/components/animated-pavo"
import { usePrefersReducedMotion } from "@/components/use-reduced-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Lessons that stay.",
    description: "Saved on your phone. Ready offline.",
    icon: WifiOff,
  },
  {
    title: "Practice, just for you.",
    description: "Return to what needs another look.",
    icon: Brain,
  },
  {
    title: "Every step counts.",
    description: "See your progress. Find what’s next.",
    icon: ChartNoAxesCombined,
  },
] as const

function FeatureCard({
  title,
  description,
  icon: Icon,
  index,
  active,
  reduceMotion,
}: {
  title: string
  description: string
  icon: LucideIcon
  index: number
  active: boolean
  reduceMotion: boolean
}): React.JSX.Element {
  const card = useRef<HTMLElement>(null)
  const played = useRef(false)
  const inView = useInView(card, { once: true, amount: 0.25 })
  const controls = useAnimationControls()

  useLayoutEffect(() => {
    if (reduceMotion) {
      controls.stop()
      controls.set({ y: 0 })
      return
    }
    if (!active || !inView || played.current) return
    played.current = true
    // Prepare the slide before paint. Never reset already-visible pixels to zero opacity.
    controls.set({ y: 56 })
    void controls.start({
      y: 0,
      transition: {
        duration: 0.75,
        delay: index * 0.13,
        ease: [0.16, 1, 0.3, 1],
      },
    })
  }, [active, inView, reduceMotion, controls, index])

  return (
    <motion.article
      ref={card}
      initial={false}
      animate={controls}
      className="flex items-center gap-3.5 rounded-[14px] border border-primary/15 bg-secondary/65 px-4 py-4 shadow-[0_3px_0_#0066c71a,inset_0_1px_0_#fff] backdrop-blur-xl"
    >
      <Icon
        className="size-6 shrink-0 text-primary"
        strokeWidth={1.7}
        aria-hidden="true"
      />
      <div>
        <h2 className="font-heading text-lg leading-6 font-extrabold tracking-[-0.025em]">
          {title}
        </h2>
        <p className="mt-0.5 text-[13px] leading-5 font-medium text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.article>
  )
}

function progressBetween(value: number, start: number, end: number): number {
  const progress = Math.max(0, Math.min(1, (value - start) / (end - start)))
  return progress * progress * (3 - 2 * progress)
}

export function HeroExperience(): React.JSX.Element {
  const section = useRef<HTMLElement>(null)
  const introElement = useRef<HTMLDivElement>(null)
  const featuresHaveEntered = useRef(false)
  const detailsWereVisible = useRef<boolean | null>(null)
  const [wideScreen, setWideScreen] = useState<boolean | null>(null)
  const [mascotActive, setMascotActive] = useState(false)
  const [detailsVisible, setDetailsVisible] = useState(false)
  const reduceMotion = usePrefersReducedMotion()
  const animated = wideScreen === true && reduceMotion === false
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  })
  const scene = useAnimationControls()
  const intro = useAnimationControls()
  const phone = useAnimationControls()

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 1024px) and (min-height: 650px)"
    )
    const update = (): void => setWideScreen(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (wideScreen === null) return

    function update(value: number): void {
      const travel = animated ? progressBetween(value, 0.02, 0.6) : 0
      const fade = animated ? progressBetween(value, 0.04, 0.4) : 0
      scene.set({ opacity: 1 - fade, y: -fade * 24 })
      intro.set({
        opacity: animated ? 1 - progressBetween(value, 0.02, 0.28) : 1,
        y: -travel * 32,
      })
      phone.set({
        y: -travel * (410 - window.innerHeight * 0.11),
        scale: 1 - travel * 0.13,
      })

      const nextDetailsVisible = !animated || value >= 0.42
      if (detailsWereVisible.current !== nextDetailsVisible) {
        detailsWereVisible.current = nextDetailsVisible
        setDetailsVisible(nextDetailsVisible)
      }
      if (nextDetailsVisible && !featuresHaveEntered.current) {
        // The scene can be revisited, but its entrance belongs to the first visit.
        featuresHaveEntered.current = true
        setMascotActive(true)
      }
      if (introElement.current)
        introElement.current.inert = animated && value > 0.28
    }

    // Restored scroll positions and layout changes must use the current geometry.
    function syncPosition(): void {
      const bounds = section.current?.getBoundingClientRect()
      if (bounds)
        update(
          Math.max(
            0,
            Math.min(
              1,
              -bounds.top / Math.max(1, bounds.height - window.innerHeight)
            )
          )
        )
    }
    syncPosition()
    const frame = window.requestAnimationFrame(syncPosition)
    const unsubscribe = scrollYProgress.on("change", update)
    window.addEventListener("resize", syncPosition)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", syncPosition)
      unsubscribe()
    }
  }, [animated, wideScreen, reduceMotion, scrollYProgress, scene, intro, phone])

  return (
    <section
      ref={section}
      data-animated={animated}
      aria-labelledby="hero-title"
      className="group/hero relative isolate bg-background data-[animated=true]:h-[210svh]"
    >
      <div
        id="experience"
        tabIndex={-1}
        aria-label="PAVO feature preview"
        className="pointer-events-none absolute top-[84svh] h-px w-px outline-none"
      />
      <div className="relative overflow-clip group-data-[animated=true]/hero:sticky group-data-[animated=true]/hero:top-0 group-data-[animated=true]/hero:h-svh">
        <motion.div
          data-scene
          aria-hidden="true"
          initial={false}
          animate={scene}
          className="pointer-events-none absolute inset-x-0 top-0 h-[690px] group-data-[animated=true]/hero:h-full sm:h-[810px] lg:h-[760px]"
        >
          <Image
            src="/scene/landscape-refined.webp"
            alt=""
            width={1536}
            height={1024}
            sizes="100vw"
            preload
            className="absolute inset-0 size-full object-cover object-[78%_bottom] lg:object-[50%_bottom]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-transparent" />
        </motion.div>

        <header className="relative z-30 mx-auto flex h-22 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-10 lg:px-12">
          <a
            href="#top"
            aria-label="PAVO home"
            className="flex min-h-11 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
          >
            <Image
              src="/brand/wordmark.webp"
              alt="PAVO"
              width={560}
              height={147}
              sizes="114px"
              className="h-auto w-[94px] sm:w-[114px]"
            />
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-8">
            <a
              href="#support"
              className="hidden min-h-11 items-center text-sm font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-primary md:inline-flex"
            >
              For teachers & families
            </a>
            <a
              href={animated ? "#experience" : "#features"}
              className={cn(buttonVariants(), "h-11 gap-2 px-4 sm:px-5")}
            >
              Explore PAVO{" "}
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </a>
          </nav>
        </header>

        <motion.div
          ref={introElement}
          initial={false}
          animate={intro}
          className="relative z-10 mx-auto flex max-w-[1160px] flex-col items-center px-5 pt-10 text-center"
        >
          <h1
            id="hero-title"
            className="font-heading text-[clamp(1.75rem,7.8vw,4.75rem)] leading-[1.14] font-extrabold tracking-[-0.045em] text-foreground lg:text-[clamp(3.5rem,5.1vw,4.75rem)]"
          >
            <span className="block pb-1 text-primary">
              Learning doesn’t stop
            </span>
            <span className="block">when the internet does.</span>
          </h1>
          <a
            href={animated ? "#experience" : "#features"}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-7 h-12 gap-4 px-7"
            )}
          >
            Explore PAVO <ArrowDown data-icon="inline-end" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          data-hero-phone
          initial={false}
          animate={phone}
          className="relative z-10 mx-auto mt-9 w-[min(72vw,310px)] origin-top group-data-[animated=true]/hero:absolute group-data-[animated=true]/hero:top-[410px] group-data-[animated=true]/hero:left-1/2 group-data-[animated=true]/hero:m-0 group-data-[animated=true]/hero:w-[min(380px,42svh)] group-data-[animated=true]/hero:-translate-x-1/2 sm:w-[340px] lg:w-[380px]"
        >
          <Image
            src="/screens/hero-phone.webp"
            alt="PAVO Home: Maria’s States of Matter lesson is available offline, with review practice and her saved library below."
            width={410}
            height={886}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 72vw"
            preload
            className="h-auto w-full"
          />
        </motion.div>

        <div
          data-hero-details
          data-hidden={animated && !detailsVisible}
          className="relative z-20 group-data-[animated=true]/hero:pointer-events-none group-data-[animated=true]/hero:absolute group-data-[animated=true]/hero:inset-0 data-[hidden=true]:invisible"
        >
          <div
            id="features"
            data-feature-cards
            tabIndex={-1}
            className="relative mx-auto mt-10 flex max-w-[360px] scroll-mt-8 flex-col gap-4 px-5 outline-none group-data-[animated=true]/hero:absolute group-data-[animated=true]/hero:top-[39%] group-data-[animated=true]/hero:left-[calc(50%-470px)] group-data-[animated=true]/hero:m-0 group-data-[animated=true]/hero:w-[296px] group-data-[animated=true]/hero:p-0 xl:group-data-[animated=true]/hero:left-[calc(50%-550px)] xl:group-data-[animated=true]/hero:w-[320px]"
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  index === 1 &&
                    "group-data-[animated=true]/hero:translate-x-3",
                  index === 2 && "group-data-[animated=true]/hero:translate-x-6"
                )}
              >
                <FeatureCard
                  {...feature}
                  index={index}
                  active={mascotActive}
                  reduceMotion={reduceMotion}
                />
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-10 flex w-fit flex-col items-center pb-10 group-data-[animated=true]/hero:absolute group-data-[animated=true]/hero:right-[calc(50%-455px)] group-data-[animated=true]/hero:bottom-[13%] group-data-[animated=true]/hero:m-0 group-data-[animated=true]/hero:p-0 xl:group-data-[animated=true]/hero:right-[calc(50%-570px)]">
            <AnimatedPavo
              active={mascotActive}
              className="h-auto w-[200px] -scale-x-100 overflow-visible group-data-[animated=true]/hero:w-[245px] xl:group-data-[animated=true]/hero:w-[310px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
