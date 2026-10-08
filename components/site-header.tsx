"use client"

import Image from "next/image"
import { ThumbsUp } from "lucide-react"
import { useSyncExternalStore } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import styles from "@/components/site-header.module.css"

const supportStorageKey = "pavo-idea-liked"
const supportChangeEvent = "pavo-support-change"
let sessionLiked = false
let storageUnavailable = false

function readLiked(): boolean {
  if (storageUnavailable) return sessionLiked
  try {
    return window.localStorage.getItem(supportStorageKey) === "true"
  } catch {
    storageUnavailable = true
    return sessionLiked
  }
}

function subscribeToSupport(onChange: () => void): () => void {
  window.addEventListener("storage", onChange)
  window.addEventListener(supportChangeEvent, onChange)
  return () => {
    window.removeEventListener("storage", onChange)
    window.removeEventListener(supportChangeEvent, onChange)
  }
}

function readScrolled(): boolean {
  return window.scrollY > 40
}

function subscribeToScroll(onChange: () => void): () => void {
  let wasScrolled = readScrolled()
  function onScroll(): void {
    const isScrolled = readScrolled()
    if (isScrolled === wasScrolled) return
    wasScrolled = isScrolled
    onChange()
  }
  window.addEventListener("scroll", onScroll, { passive: true })
  return () => window.removeEventListener("scroll", onScroll)
}

function readServerFlag(): boolean {
  return false
}

export function SiteHeader(): React.JSX.Element {
  const liked = useSyncExternalStore(
    subscribeToSupport,
    readLiked,
    readServerFlag
  )
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    readScrolled,
    readServerFlag
  )

  function toggleSupport(): void {
    sessionLiked = !liked
    try {
      window.localStorage.setItem(supportStorageKey, String(sessionLiked))
    } catch {
      // The toggle still works for this visit when browser storage is blocked.
      storageUnavailable = true
    }
    window.dispatchEvent(new Event(supportChangeEvent))
  }

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[76px]"
      >
        <a
          href="#top"
          aria-label="PAVO home"
          className="flex min-h-11 shrink-0 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
        >
          <Image
            src="/figma/hero/wordmark.png"
            alt="PAVO"
            width={4096}
            height={1076}
            sizes="(min-width: 640px) 114px, 94px"
            className="h-auto w-[94px] sm:w-[114px]"
          />
        </a>
        <button
          type="button"
          aria-label="Like this idea"
          aria-pressed={liked}
          onClick={toggleSupport}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "min-h-11 min-w-[150px] gap-2 rounded-[14px] border-2 border-b-4 px-4 text-sm font-extrabold focus-visible:ring-offset-4 motion-reduce:transition-none sm:min-w-[168px] sm:px-5 sm:text-base",
            liked
              ? "border-[#a4daca] bg-[#e5f6f0] text-[#007c68] hover:bg-[#d6f0e6] hover:text-[#007c68]"
              : "border-[#0057a9] bg-[#006dcb] text-white hover:bg-[#005fb5] hover:text-white"
          )}
        >
          <ThumbsUp
            aria-hidden="true"
            className="size-[18px]"
            strokeWidth={2.5}
          />
          {liked ? "Liked!" : "Like this idea"}
        </button>
        <span role="status" className="sr-only">
          {liked ? "Thanks for supporting PAVO!" : ""}
        </span>
      </nav>
    </header>
  )
}
