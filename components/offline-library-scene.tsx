"use client"

import Image from "next/image"
import { useRef, type ReactElement } from "react"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { usePrefersReducedMotion } from "@/components/use-reduced-motion"
import styles from "@/components/feature-scenes.module.css"

const closedFront =
  "M25 68H427Q447 68 445 90L430 373Q429 394 408 394H44Q22 394 21 373L6 90Q4 68 25 68Z"
const openFront =
  "M18 160H434Q454 160 451 181L430 373Q429 394 408 394H44Q22 394 21 373L0 181Q-3 160 18 160Z"

export function OfflineLibraryScene(): ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const folderRef = useRef<HTMLDivElement>(null)
  const reduceMotion = usePrefersReducedMotion()
  const inView = useInView(ref, { amount: 0.5 })
  const { scrollYProgress } = useScroll({
    target: folderRef,
    offset: ["start end", "end start"],
  })
  // Open while the scene is centered; reverse the same motion on either exit.
  const opening = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0, 1, 1, 0]
  )
  const front = useTransform(opening, [0, 1], [closedFront, openFront])
  const paperY = useTransform(opening, [0, 1], [0, -22])
  const paperRotate = useTransform(opening, [0, 1], [0, -3])

  return (
    <div
      ref={ref}
      data-library-scene
      className="pointer-events-none relative isolate mx-auto aspect-[574/710] w-full max-w-[464px]"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-x-4 top-[5%] bottom-[1%] -z-10 rounded-[46%_48%_38%_40%] bg-[#edf8ff]"
      />
      <Image
        src="/figma/offline-library/phone-mockup-cropped.png"
        alt="PAVO lesson reader showing Cells as Basic Units of Life, Science Grade 5, available offline."
        width={415}
        height={546}
        quality={85}
        sizes="(min-width: 1024px) 336px, (min-width: 768px) 35vw, 73vw"
        className="absolute top-0 left-[13.85%] h-auto w-[72.3%] md:left-[3.136%]"
      />
      <div
        ref={folderRef}
        className="absolute top-[41.268%] left-[10.7%] w-[78.746%] md:left-0"
      >
        <svg
          aria-hidden="true"
          data-folder
          viewBox="0 0 452 417"
          className="w-full overflow-visible"
        >
          <path
            d="M31 48Q31 24 55 24H167Q190 24 190 48V53H398Q422 53 422 78V365Q422 390 398 390H55Q31 390 31 365Z"
            fill="#2077b7"
          />
          <motion.g
            data-folder-papers
            style={{
              y: reduceMotion ? -14 : paperY,
              rotate: reduceMotion ? -2 : paperRotate,
              transformOrigin: "50% 100%",
            }}
          >
            <rect
              x="50"
              y="68"
              width="351"
              height="282"
              rx="5"
              fill="#fffdf0"
            />
            <rect x="50" y="88" width="351" height="262" fill="#e8e6d5" />
            <rect
              x="59"
              y="91"
              width="333"
              height="257"
              rx="5"
              fill="#fffef8"
            />
            <rect x="78" y="108" width="72" height="21" rx="7" fill="#caf0df" />
            <rect
              x="160"
              y="108"
              width="59"
              height="21"
              rx="7"
              fill="#ffe9a0"
            />
            <path
              d="M79 148H267M79 166H335M79 184H310"
              fill="none"
              stroke="#d7e8ec"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </motion.g>
          <motion.path
            data-folder-front
            d={reduceMotion ? openFront : front}
            fill="#31abdb"
          />
          <path
            d="M44 384H408"
            stroke="#148bbb"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.25"
          />
        </svg>
      </div>
      <div
        aria-hidden="true"
        data-tapping={inView && !reduceMotion}
        className={`${styles.phoneMascot} absolute bottom-[2%] left-[61.3%] w-[38%] md:left-[57.317%] md:w-[42.683%]`}
      >
        <span className="absolute bottom-0 left-[20%] -z-10 h-[5%] w-[51%] rounded-[50%] bg-[#12608e]/20 blur-[2px]" />
        <Image
          src="/figma/offline-library/pavo-with-phone-base.png"
          alt=""
          width={1254}
          height={1254}
          quality={85}
          sizes="(min-width: 1024px) 198px, (min-width: 768px) 21vw, 43vw"
          className="h-auto w-full"
        />
        <div className={styles.tappingWing}>
          <Image
            src="/figma/offline-library/pavo-with-phone.png"
            alt=""
            width={980}
            height={980}
            quality={85}
            sizes="(min-width: 1024px) 198px, (min-width: 768px) 21vw, 43vw"
            className="h-auto w-full"
          />
        </div>
        <span className={styles.tapRing} />
      </div>
    </div>
  )
}
