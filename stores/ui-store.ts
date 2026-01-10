import { create } from "zustand"
import { persist } from "zustand/middleware"

export type ThemeMode = "midnight" | "solar" | "auto"
export type Language = "ar" | "en"

interface UIState {
  theme: ThemeMode
  language: Language
  audioOn: boolean
  introSeenVersion: string | null
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  setAudioOn: (audioOn: boolean) => void
  setIntroSeenVersion: (version: string | null) => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: "midnight",
      language: "ar",
      audioOn: true,
      introSeenVersion: null,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "midnight" ? "solar" : state.theme === "solar" ? "auto" : "midnight" })),
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => set((state) => ({ language: state.language === "ar" ? "en" : "ar" })),
      setAudioOn: (audioOn) => set({ audioOn }),
      setIntroSeenVersion: (version) => set({ introSeenVersion: version }),
    }),
    {
      name: "x-host-ui",
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        audioOn: state.audioOn,
        introSeenVersion: state.introSeenVersion,
      }),
    },
  ),
)
