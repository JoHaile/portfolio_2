"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

function ThemeSwitcher({ className }: { className?: string }) {
  const darkRef = useRef(true)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const prefersDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    darkRef.current = prefersDark
    document.documentElement.classList.toggle("dark", prefersDark)
  }, [])

  function toggle() {
    const next = !darkRef.current
    darkRef.current = next
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "group relative flex size-9 items-center justify-center rounded-xl border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted",
        className
      )}
    >
      {/* Sun */}
      <svg
        className="size-[18px] text-foreground transition-all duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100 rotate-90 scale-0 opacity-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      {/* Moon */}
      <svg
        className="absolute size-[18px] text-foreground transition-all duration-300 dark:-rotate-90 dark:scale-0 dark:opacity-0 rotate-0 scale-100 opacity-100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  )
}

export { ThemeSwitcher }
