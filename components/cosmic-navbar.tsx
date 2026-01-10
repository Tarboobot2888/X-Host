"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, Globe, Sparkles } from "lucide-react"
import { useTheme } from "./theme-provider"
import Link from "next/link"
import Image from "next/image"
import { cosmicCopy } from "@/data/cosmic.copy"
import { cosmicLinks } from "@/data/cosmic.links"

export function CosmicNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, themeMode, language, toggleTheme, toggleLanguage, setTheme, t } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "quantum-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="relative w-12 h-12">
              <Image src="/x-host-logo.svg" alt={t(cosmicCopy.brand.logoAlt)} fill sizes="48px" className="object-contain" />
            </motion.div>
            <span className="text-2xl font-bold text-cosmic-gradient">{t(cosmicCopy.brand.name)}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {cosmicCopy.nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors group"
              >
                {t(item.label)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <div className="flex items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {themeMode === "auto" ? (
                  <Sparkles className="w-5 h-5 text-primary" />
                ) : theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600" />
                )}
              </motion.button>
              <motion.button
                onClick={() => setTheme("auto")}
                className={`px-2 py-1 rounded-full text-xs border transition-colors ${
                  themeMode === "auto" ? "border-primary text-primary" : "border-border text-muted-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(cosmicCopy.nav.autoTheme)}
              </motion.button>
            </div>

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">
                {language === "ar" ? cosmicCopy.nav.languageToggle.en : cosmicCopy.nav.languageToggle.ar}
              </span>
            </motion.button>

            {/* Auth Buttons */}
            <Link
              href={cosmicLinks.login}
              target="_blank"
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              {t(cosmicCopy.nav.login)}
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={cosmicLinks.register}
                target="_blank"
                className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors animate-pulse-glow"
              >
                {t(cosmicCopy.nav.signUp)}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-primary/10">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden quantum-glass border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {cosmicCopy.nav.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-lg hover:text-primary transition-colors"
                >
                  {t(item.label)}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <button onClick={toggleTheme} className="p-2" aria-label="Toggle theme">
                  {themeMode === "auto" ? <Sparkles className="w-5 h-5" /> : theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button onClick={toggleLanguage} className="p-2 flex items-center gap-1">
                  <Globe className="w-5 h-5" />
                  <span>{language === "ar" ? cosmicCopy.nav.languageToggle.en : cosmicCopy.nav.languageToggle.ar}</span>
                </button>
                <button
                  onClick={() => setTheme("auto")}
                  className={`px-2 py-1 rounded-full text-xs border ${themeMode === "auto" ? "border-primary" : "border-border"}`}
                >
                  {t(cosmicCopy.nav.autoTheme)}
                </button>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href={cosmicLinks.login}
                  target="_blank"
                  className="text-center py-2 border border-primary rounded-full"
                >
                  {t(cosmicCopy.nav.login)}
                </Link>
                <Link
                  href={cosmicLinks.register}
                  target="_blank"
                  className="text-center py-2 bg-primary text-primary-foreground rounded-full"
                >
                  {t(cosmicCopy.nav.signUp)}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
