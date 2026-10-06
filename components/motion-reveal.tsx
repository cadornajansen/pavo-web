"use client"

import {
  useCallback,
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
} from "react"
import { motion, useAnimationControls } from "motion/react"
import { usePrefersReducedMotion } from "@/components/use-reduced-motion"

type MotionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps): ReactElement {
  const controls = useAnimationControls()
  const shouldReduceMotion = usePrefersReducedMotion()
  const hasRevealed = useRef(false)

  const reveal = useCallback((): void => {
    // Viewport observers can reconnect; never restart a completed entrance.
    if (hasRevealed.current) return
    hasRevealed.current = true

    if (shouldReduceMotion !== false) return

    void controls.start({
      y: [18, 0],
      transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
    })
  }, [controls, delay, shouldReduceMotion])

  useEffect(() => {
    if (!shouldReduceMotion) return

    controls.stop()
    controls.set({ y: 0 })
  }, [controls, shouldReduceMotion])

  // Never fade visible content back to zero when the viewport observer fires.
  return (
    <motion.div
      className={className}
      initial={false}
      animate={controls}
      onViewportEnter={reveal}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}
