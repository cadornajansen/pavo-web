"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { useRef, type ReactElement } from "react"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { usePrefersReducedMotion } from "@/components/use-reduced-motion"
import styles from "@/components/feature-scenes.module.css"

export function QrSharingScene(): ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = usePrefersReducedMotion()
  const inView = useInView(ref, { amount: 0.45 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const separation = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 1, 1, 0]
  )
  const blueX = useTransform(separation, [0, 1], ["0%", "-4%"])
  const blueY = useTransform(separation, [0, 1], ["0%", "3%"])
  const blueRotate = useTransform(separation, [0, 1], [0, -3])
  const blackX = useTransform(separation, [0, 1], ["0%", "5%"])
  const blackY = useTransform(separation, [0, 1], ["0%", "-2%"])
  const blackRotate = useTransform(separation, [0, 1], [0, 3])

  return (
    <div
      ref={ref}
      data-qr-scene
      className="pointer-events-none relative isolate mx-auto mt-10 mb-8 aspect-[645/696] w-[90%] max-w-[440px]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 500 500"
        className="absolute -inset-x-[12%] top-[3%] -z-10 w-[124%]"
      >
        <path
          d="M94 87Q246 17 407 101Q481 153 443 319Q415 456 254 464Q53 465 44 312Q14 169 94 87Z"
          fill="#eff9ff"
        />
        <path
          d="M80 175V137Q80 112 105 112H146M358 384H393Q420 384 420 357V325"
          fill="none"
          stroke="#b7e8fa"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M390 77L394 59M412 90L430 84"
          fill="none"
          stroke="#ffc93d"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <motion.div
        style={
          reduceMotion ? undefined : { x: blueX, y: blueY, rotate: blueRotate }
        }
        data-qr-phone="blue"
        className="absolute top-[24.713%] left-0 w-[65.116%]"
      >
        <Image
          src="/figma/qr-sharing/blue-phone.png"
          alt="PAVO learner profile illustration showing a student QR code."
          width={1122}
          height={1402}
          quality={85}
          sizes="(min-width: 640px) 287px, 59vw"
          className="h-auto w-full"
        />
      </motion.div>
      <motion.div
        style={
          reduceMotion
            ? undefined
            : { x: blackX, y: blackY, rotate: blackRotate }
        }
        data-qr-phone="black"
        className="absolute top-0 left-[20.465%] z-10 w-[79.535%]"
      >
        <Image
          src="/figma/qr-sharing/black-phone-clean.png"
          alt="Phone illustration with a QR scanner positioned over a code."
          width={1122}
          height={1402}
          quality={85}
          sizes="(min-width: 640px) 350px, 72vw"
          className="h-auto w-full"
        />
        <div
          aria-hidden="true"
          className={styles.scannerPlane}
          data-scanning={inView && !reduceMotion}
        >
          <span className={styles.scanLine} />
        </div>
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute -bottom-5 -left-3 z-20 flex -rotate-[4deg] items-center gap-2.5 rounded-2xl border-2 border-b-4 border-[#bee6d6] bg-white px-3 py-2.5 sm:-left-10 sm:px-4"
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-[#dcf5e8] text-[#008a66]">
          <Check className="size-5" strokeWidth={3} />
        </span>
        <div>
          <p className="text-[10px] font-bold tracking-wide text-[#547269]">
            EXAMPLE PREVIEW
          </p>
          <p className="text-sm font-extrabold text-[#153550]">
            Ready to share!
          </p>
        </div>
      </div>
    </div>
  )
}
