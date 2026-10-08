"use client"

import Image from "next/image"
import { useId, useRef, type ReactElement, type ReactNode } from "react"
import { useInView } from "motion/react"
import { usePrefersReducedMotion } from "@/components/use-reduced-motion"
import styles from "@/components/teacher/teacher-motion.module.css"

export function TeacherMotion({
  children,
  className,
}: {
  children: ReactNode
  className: string
}): ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.25 })
  const reduceMotion = usePrefersReducedMotion()

  return (
    <div
      ref={ref}
      className={`${styles.stage} ${className}`}
      data-active={inView && !reduceMotion}
    >
      {children}
    </div>
  )
}

export function TeacherMascot(): ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.6 })
  const reduceMotion = usePrefersReducedMotion()
  const wingClip = useId()

  return (
    <div
      ref={ref}
      data-teacher-layer="mascot"
      data-active={inView && !reduceMotion}
      className={`${styles.mascot} absolute bottom-[5%] left-[12%] w-[70%]`}
    >
      <div className={styles.mascotBody}>
        <Image
          src="/figma/teacher/pavo-working-base.png"
          alt=""
          width={1254}
          height={1254}
          quality={85}
          sizes="(min-width: 1280px) 364px, (min-width: 640px) 336px, 70vw"
          className="h-auto w-full"
        />
        <svg aria-hidden="true" width="0" height="0" className="absolute">
          <defs>
            <clipPath id={wingClip} clipPathUnits="objectBoundingBox">
              <path d="M.337 .738C.395 .688 .47 .642 .518 .652C.58 .66 .555 .719 .522 .76C.578 .759 .642 .783 .65 .838C.67 .901 .617 .92 .567 .902C.573 .946 .511 .956 .451 .938C.4 .925 .35 .919 .333 .878C.314 .855 .315 .788 .337 .738Z" />
            </clipPath>
          </defs>
        </svg>
        <div className={styles.typingWing}>
          <div style={{ clipPath: `url(#${wingClip})` }}>
            <Image
              src="/figma/teacher/pavo-working.png"
              alt=""
              width={1254}
              height={1254}
              quality={85}
              sizes="(min-width: 1280px) 364px, (min-width: 640px) 336px, 70vw"
              className="h-auto w-full"
            />
          </div>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 1254 1254"
          className={`${styles.eyelids} absolute inset-0 size-full`}
        >
          <path
            d="M626 711C594 645 625 571 684 548C750 521 815 552 840 607C866 664 834 725 787 750C728 779 653 766 626 711Z"
            fill="#49bffb"
          />
          <path
            d="M929 654C902 599 925 540 973 521C1026 498 1080 520 1101 564C1128 617 1108 673 1067 701C1011 733 951 706 929 654Z"
            fill="#48bffb"
          />
          <g
            fill="none"
            stroke="#0067c8"
            strokeWidth="15"
            strokeLinecap="round"
          >
            <path d="M646 651Q731 715 817 646" />
            <path d="M943 605Q1019 665 1090 605" />
          </g>
        </svg>
      </div>
    </div>
  )
}
