"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"

type Theme = "dark" | "light"
type Language = "ar" | "en"

interface ThemeContextType {
  theme: Theme
  language: Language
  toggleTheme: () => void
  toggleLanguage: () => void
  t: (ar: string, en: string) => string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [language, setLanguage] = useState<Language>("ar")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved preferences
    const savedTheme = localStorage.getItem("x-host-theme") as Theme
    const savedLanguage = localStorage.getItem("x-host-language") as Language
    if (savedTheme) setTheme(savedTheme)
    if (savedLanguage) setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Apply theme to document
    const root = document.documentElement
    root.classList.remove("dark", "light")
    root.classList.add(theme)
    localStorage.setItem("x-host-theme", theme)
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return

    // Apply language direction
    const root = document.documentElement
    root.setAttribute("lang", language)
    root.setAttribute("dir", language === "ar" ? "rtl" : "ltr")
    localStorage.setItem("x-host-language", language)
  }, [language, mounted])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"))
  }, [])

  const t = useCallback(
    (ar: string, en: string) => {
      return language === "ar" ? ar : en
    },
    [language],
  )

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, language, toggleTheme, toggleLanguage, t }}>
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
