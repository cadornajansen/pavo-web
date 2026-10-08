"use client"

import Image from "next/image"
import { Atom, BookOpen, Calculator, Clock3, Zap } from "lucide-react"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import {
  useCallback,
  useRef,
  useSyncExternalStore,
  type ReactElement,
} from "react"
import motionStyles from "@/components/personalized-learning-motion.module.css"
import { usePrefersReducedMotion } from "@/components/use-reduced-motion"

function QuadraticIcon(): ReactElement {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="size-full">
      <path
        d="M7 6v35h35"
        fill="none"
        stroke="#073267"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M11 37Q25-10 39 37"
        fill="none"
        stroke="#009d82"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g fill="#ffc928">
        <circle cx="11" cy="37" r="3" />
        <circle cx="25" cy="13.5" r="3" />
        <circle cx="39" cy="37" r="3" />
      </g>
    </svg>
  )
}

function PavoMascot({
  activeCard,
  canBlink,
}: {
  activeCard: number
  canBlink: boolean
}): ReactElement {
  return (
    <div
      className="pointer-events-none absolute right-2 bottom-[calc(100%-18px)] z-20 w-[58%]"
      aria-hidden="true"
    >
      <Image
        src="/figma/personalized-learning/pavo-peeking.png"
        alt=""
        width={1561}
        height={1007}
        quality={85}
        sizes="(min-width: 1024px) 256px, (min-width: 768px) 200px, 60vw"
        className="h-auto w-full"
      />
      {/* Coordinates match the source PNG; only the eyes close, leaving the face still. */}
      <motion.svg
        key={activeCard}
        viewBox="0 0 1561 1007"
        className="absolute inset-0 size-full"
        initial={{ opacity: 0 }}
        animate={canBlink ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
        transition={{
          duration: 0.22,
          delay: 0.25,
          times: [0, 0.28, 0.62, 1],
          ease: "easeInOut",
        }}
      >
        <g fill="#35bdfc">
          <path d="M496 733C438 690 448 603 489 550C527 500 584 487 635 503C690 519 715 572 701 632C695 697 655 743 608 755C569 766 528 756 496 733Z" />
          <path d="M876 820C834 796 809 748 813 696C818 640 861 590 911 576C964 562 1016 590 1045 634C1076 689 1074 748 1044 792C1014 838 935 852 876 820Z" />
        </g>
        <g fill="none" stroke="#0066c7" strokeWidth="18" strokeLinecap="round">
          <path d="M485 625Q565 700 683 639" />
          <path d="M832 689Q908 779 1041 716" />
        </g>
      </motion.svg>
    </div>
  )
}

export function PersonalizedLearningCards(): ReactElement {
  const figureRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const isInView = useInView(figureRef, { amount: 0.25 })
  const { scrollYProgress } = useScroll({
    target: figureRef,
    offset: ["start 0.65", "end 0.6"],
  })
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["60%", "92%"])
  const subscribeToScroll = useCallback(
    (onChange: () => void): (() => void) =>
      scrollYProgress.on("change", onChange),
    [scrollYProgress]
  )
  // Reading the current value also catches anchor jumps that happen before hydration.
  const progress = useSyncExternalStore(
    subscribeToScroll,
    () => Math.round(scrollYProgress.get() * 100),
    () => 0
  )
  const visibleProgress = prefersReducedMotion ? 0 : progress
  const visibleCard = visibleProgress < 34 ? 0 : visibleProgress < 67 ? 1 : 2
  const visibleCompletion = Math.round(60 + visibleProgress * 0.32)
  const canAnimate = isInView && !prefersReducedMotion
  return (
    <figure
      ref={figureRef}
      aria-label="Example personalized learning suggestions"
      className="@container relative isolate mx-auto w-[calc(100%-1rem)] max-w-[440px] py-8 sm:w-[calc(100%-2rem)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 500 520"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -inset-x-5 top-0 -z-10 h-full w-[calc(100%+2.5rem)] sm:-inset-x-8 sm:w-[calc(100%+4rem)]"
      >
        <path
          d="M48 159C67 65 164 17 284 29S476 113 481 265S443 478 301 493S35 487 21 377S23 228 48 159Z"
          fill="#eaf8f0"
        />
        <path
          d="M61 223C49 293 49 369 93 415"
          fill="none"
          stroke="#c4e9d5"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M83 133L91 115M61 149L43 143"
          fill="none"
          stroke="#6dcca6"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <ol className="relative space-y-5 pt-[32%]">
        <li
          data-active={visibleCard === 0}
          className={`${motionStyles.card} relative z-10 -rotate-[2deg] rounded-[24px] border-[3px] p-3 sm:p-4`}
        >
          {/* Pavo and the active card share a transform, keeping the hands on its edge. */}
          <PavoMascot activeCard={visibleCard} canBlink={canAnimate} />
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-[clamp(3rem,14cqw,3.75rem)] shrink-0 items-center justify-center rounded-[18px] border-b-4 border-[#c2e6ff] bg-white text-[#0066c7]"
            >
              <Calculator className="size-[70%] stroke-[2.6]" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-x-1 gap-y-1">
                <h3
                  className={`${motionStyles.cardTitle} text-[clamp(0.9375rem,4.5cqw,1.25rem)] leading-tight font-extrabold tracking-[-0.035em]`}
                >
                  Calculus Assignment
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary-hover px-1.5 py-1 text-[10px] leading-none font-bold text-white">
                  <Clock3 aria-hidden="true" className="size-3" /> Due Tomorrow
                </span>
              </div>
              <div
                role="progressbar"
                aria-label="Example Calculus assignment completion"
                aria-valuenow={visibleCompletion}
                aria-valuemin={0}
                aria-valuemax={100}
                className="mt-3 h-4 overflow-hidden rounded-full bg-[#e3f0ff]"
              >
                <motion.div
                  style={{
                    width: canAnimate ? progressWidth : `${visibleCompletion}%`,
                  }}
                  className="flex h-full items-center rounded-full bg-[#98ed65] pl-2 text-[11px] leading-none font-extrabold text-[#176329]"
                >
                  {visibleCompletion}%
                </motion.div>
              </div>
            </div>
          </div>
        </li>
        <li
          data-active={visibleCard === 1}
          className={`${motionStyles.card} ${motionStyles.reviewCard} relative ml-3 w-[calc(100%-0.75rem)] rotate-[1.5deg] rounded-[22px] border-2 p-3 sm:ml-5 sm:w-[calc(100%-1.25rem)]`}
        >
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="size-[clamp(2.75rem,13cqw,3.25rem)] shrink-0 rounded-[14px] border-b-[3px] border-[#91dcb9] bg-[#c1f8df] p-1.5"
            >
              <QuadraticIcon />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3
                  className={`${motionStyles.cardTitle} text-[clamp(0.9375rem,4.5cqw,1.125rem)] leading-tight font-extrabold tracking-[-0.045em]`}
                >
                  Quadratic Functions
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#ffed9b] px-2 py-1 text-[10px] leading-none font-extrabold text-[#984300]">
                  <BookOpen aria-hidden="true" className="size-3" /> Review
                </span>
              </div>
              <p
                className={`${motionStyles.cardDescription} mt-1 text-[clamp(0.6875rem,3cqw,0.75rem)] leading-snug`}
              >
                You struggled with this yesterday.
              </p>
            </div>
          </div>
        </li>
        <li
          data-active={visibleCard === 2}
          className={`${motionStyles.card} relative mr-3 w-[calc(100%-0.75rem)] -rotate-[1deg] rounded-[22px] border-2 p-3 sm:mr-5 sm:w-[calc(100%-1.25rem)]`}
        >
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex size-[clamp(2.75rem,13cqw,3.25rem)] shrink-0 items-center justify-center rounded-[14px] border-b-[3px] border-[#83d2ef] bg-[#b6ecfc] text-[#0066bb]"
            >
              <Atom className="size-[80%] stroke-[1.8]" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3
                  className={`${motionStyles.cardTitle} text-[clamp(0.9375rem,4.5cqw,1.125rem)] leading-tight font-extrabold tracking-[-0.045em]`}
                >
                  Physics: Momentum
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#e1d6ff] px-2 py-1 text-[10px] leading-none font-extrabold text-[#6220c4]">
                  <Zap aria-hidden="true" className="size-3 fill-current" />{" "}
                  Study Jam
                </span>
              </div>
              <p
                className={`${motionStyles.cardDescription} mt-1 text-[clamp(0.6875rem,3cqw,0.75rem)] leading-snug`}
              >
                12 min recommended.
              </p>
            </div>
          </div>
        </li>
      </ol>
    </figure>
  )
}
