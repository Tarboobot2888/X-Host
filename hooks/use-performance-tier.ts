import { useEffect } from "react"
import { usePerformanceStore } from "@/stores/performance-store"

export function usePerformanceTier() {
  const setQualityTier = usePerformanceStore((state) => state.setQualityTier)
  const setPrefersReducedMotion = usePerformanceStore((state) => state.setPrefersReducedMotion)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const applyReducedMotion = (matches: boolean) => {
      setPrefersReducedMotion(matches)
      if (matches) {
        setQualityTier("low")
      }
    }

    applyReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => applyReducedMotion(event.matches)
    mediaQuery.addEventListener("change", handleChange)

    if (!mediaQuery.matches) {
      let frames = 0
      let start = performance.now()
      let rafId = 0
      const measure = (time: number) => {
        frames += 1
        const elapsed = time - start
        if (elapsed >= 900) {
          const fps = (frames / elapsed) * 1000
          if (fps >= 55) setQualityTier("high")
          else if (fps >= 35) setQualityTier("medium")
          else setQualityTier("low")
          return
        }
        rafId = requestAnimationFrame(measure)
      }
      rafId = requestAnimationFrame(measure)
      return () => {
        cancelAnimationFrame(rafId)
        mediaQuery.removeEventListener("change", handleChange)
      }
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [setQualityTier, setPrefersReducedMotion])
}
