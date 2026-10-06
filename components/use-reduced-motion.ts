"use client"

import { useSyncExternalStore } from "react"

const reducedMotionQuery = "(prefers-reduced-motion: reduce)"

function subscribe(onChange: () => void): () => void {
  const query = window.matchMedia(reducedMotionQuery)
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}

function getSnapshot(): boolean {
  return window.matchMedia(reducedMotionQuery).matches
}

function getServerSnapshot(): boolean {
  // Render the static experience until the browser supplies its preference.
  return true
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
