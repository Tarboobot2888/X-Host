"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { CopyText } from "@/data/cosmic.copy"
import { useUIStore } from "@/stores/ui-store"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  themeMode: "midnight" | "solar" | "auto"
  language: "ar" | "en"
  toggleTheme: () => void
  toggleLanguage: () => void
  setTheme: (theme: "midnight" | "solar" | "auto") => void
  t: (text: CopyText) => string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeMode = useUIStore((state) => state.theme)
  const language = useUIStore((state) => state.language)
  const toggleTheme = useUIStore((state) => state.toggleTheme)
  const toggleLanguage = useUIStore((state) => state.toggleLanguage)
  const setTheme = useUIStore((state) => state.setTheme)
  const [mounted, setMounted] = useState(false)
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false)
  const [systemTheme, setSystemTheme] = useState<Theme>("dark")

  useEffect(() => {
    if (themeMode !== "auto") return
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)")
    const updateSystemTheme = () => setSystemTheme(mediaQuery.matches ? "light" : "dark")
    updateSystemTheme()
    mediaQuery.addEventListener("change", updateSystemTheme)
    return () => mediaQuery.removeEventListener("change", updateSystemTheme)
  }, [themeMode])

  const resolvedTheme: Theme = useMemo(() => {
    if (themeMode === "auto") {
      return systemTheme
    }
    return themeMode === "solar" ? "light" : "dark"
  }, [themeMode, systemTheme])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.classList.remove("dark", "light")
    root.classList.add(resolvedTheme)
    root.setAttribute("data-theme", themeMode)

    setIsThemeTransitioning(true)
    const timer = window.setTimeout(() => setIsThemeTransitioning(false), 1200)
    return () => window.clearTimeout(timer)
  }, [resolvedTheme, themeMode, mounted])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.setAttribute("lang", language)
    root.setAttribute("dir", language === "ar" ? "rtl" : "ltr")
    root.classList.add("lang-switching")
    const timer = window.setTimeout(() => root.classList.remove("lang-switching"), 800)
    return () => window.clearTimeout(timer)
  }, [language, mounted])

  const t = useMemo(() => {
    return (text: CopyText) => (language === "ar" ? text.ar : text.en)
  }, [language])

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, themeMode, language, toggleTheme, toggleLanguage, setTheme, t }}>
      {isThemeTransitioning && <div className="theme-transition-overlay" aria-hidden="true" />}
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
