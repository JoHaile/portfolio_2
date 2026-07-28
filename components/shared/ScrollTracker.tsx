"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useLenis } from "@/components/shared/SmoothScroll"

const sections = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const DOT_SIZE = 8
const DOT_SIZE_ACTIVE = 10
const GAP = 80
const VISUAL_GAP = 60
const TOTAL = sections.length

export default function ScrollTracker() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const offsetsRef = useRef<number[]>([])
  const lenis = useLenis()

  const measureOffsets = useCallback(() => {
    const ids = sections.map((s) => s.href.replace("#", ""))
    offsetsRef.current = ids.map((id) => {
      const el = document.getElementById(id)
      return el ? el.getBoundingClientRect().top + window.scrollY : 0
    })
  }, [])

  useEffect(() => {
    measureOffsets()
    window.addEventListener("resize", measureOffsets)
    return () => window.removeEventListener("resize", measureOffsets)
  }, [measureOffsets])

  useEffect(() => {
    if (!lenis) return

    const onScroll = (e: { scroll: number; limit: number }) => {
      const offsets = offsetsRef.current
      if (offsets.length === 0) return

      const scrollY = e.scroll + window.innerHeight * 0.4

      let idx = 0
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i]) {
          idx = i
          break
        }
      }

      setActiveIndex(idx)

      if (idx >= offsets.length - 1) {
        setProgress(1)
      } else {
        const current = offsets[idx]
        const next = offsets[idx + 1]
        const range = next - current
        if (range > 0) {
          const raw = (scrollY - current) / range
          setProgress(Math.max(0, Math.min(1, (idx + raw) / (TOTAL - 1))))
        } else {
          setProgress(idx / (TOTAL - 1))
        }
      }
    }

    lenis.on("scroll", onScroll)
    return () => lenis.off("scroll", onScroll)
  }, [lenis])

  const handleClick = (href: string) => {
    const el = document.querySelector(href)
    const currentLenis = useLenis()
    if (el && currentLenis) {
      const y = el.getBoundingClientRect().top + window.scrollY
      currentLenis.scrollTo(y, { offset: 0, duration: 1.6 })
    }
  }

  const totalHeight = (TOTAL - 1) * GAP + DOT_SIZE
  const fillHeight = Math.max(0, Math.min(1, progress)) * ((TOTAL - 1) * GAP)

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-[100px] lg:block">
      <div className="absolute left-[28px] top-1/2 -translate-y-1/2">
        <nav className="relative" aria-label="Section navigation">
          {/* Track line */}
          <div
            className="absolute left-[3px] top-[3px] w-px"
            style={{
              height: `${totalHeight}px`,
              background: "var(--border)",
            }}
          />

          {/* Progress fill */}
          <div
            className="absolute left-[3px] top-[3px] w-px"
            style={{
              height: `${fillHeight}px`,
              background: "var(--primary)",
            }}
          />

          {/* Items */}
          <div className="relative flex flex-col" style={{ gap: `${VISUAL_GAP}px` }}>
            {sections.map((section, i) => {
              const isActive = i === activeIndex
              const isPast = i < activeIndex

              return (
                <div key={section.label} className="relative flex items-center">
                  {/* Dot */}
                  <button
                    onClick={() => handleClick(section.href)}
                    className="pointer-events-auto relative z-10 flex items-center justify-center rounded-full transition-all duration-200"
                    style={{
                      width: isActive ? DOT_SIZE_ACTIVE : DOT_SIZE,
                      height: isActive ? DOT_SIZE_ACTIVE : DOT_SIZE,
                      background: isActive
                        ? "var(--primary)"
                        : isPast
                        ? "var(--primary)"
                        : "var(--muted-foreground)",
                      opacity: isActive ? 1 : isPast ? 0.4 : 0.3,
                      boxShadow: isActive ? "0 0 0 3px color-mix(in srgb, var(--primary) 25%, transparent)" : "none",
                    }}
                    aria-label={`Go to ${section.label}`}
                  />

                  {/* Label */}
                  <button
                    onClick={() => handleClick(section.href)}
                    className={`pointer-events-auto ml-4 whitespace-nowrap rounded-sm transition-all duration-200 ${
                      isActive
                        ? "text-[13px] font-medium text-foreground"
                        : "text-[13px] font-normal text-muted-foreground/60 hover:text-muted-foreground"
                    }`}
                  >
                    {section.label}
                  </button>
                </div>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}