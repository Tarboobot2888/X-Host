import { create } from "zustand"

export type QualityTier = "low" | "medium" | "high"

interface PerformanceState {
  qualityTier: QualityTier
  prefersReducedMotion: boolean
  setQualityTier: (tier: QualityTier) => void
  setPrefersReducedMotion: (prefers: boolean) => void
}

export const usePerformanceStore = create<PerformanceState>((set) => ({
  qualityTier: "medium",
  prefersReducedMotion: false,
  setQualityTier: (tier) => set({ qualityTier: tier }),
  setPrefersReducedMotion: (prefers) => set({ prefersReducedMotion: prefers }),
}))
