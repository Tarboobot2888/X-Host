import { create } from "zustand"
import { persist } from "zustand/middleware"

interface SelectionState {
  servicePath: string[]
  selectedPlan: string | null
  ts: number | null
  setServicePath: (path: string[]) => void
  setSelectedPlan: (planId: string | null) => void
  touch: () => void
  clearSelection: () => void
}

export const useSelectionStore = create<SelectionState>()(
  persist(
    (set) => ({
      servicePath: [],
      selectedPlan: null,
      ts: null,
      setServicePath: (path) => set({ servicePath: path }),
      setSelectedPlan: (planId) => set({ selectedPlan: planId }),
      touch: () => set({ ts: Date.now() }),
      clearSelection: () => set({ servicePath: [], selectedPlan: null, ts: null }),
    }),
    {
      name: "x-host-selection",
      partialize: (state) => ({
        servicePath: state.servicePath,
        selectedPlan: state.selectedPlan,
        ts: state.ts ?? Date.now(),
      }),
    },
  ),
)
