"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "./theme-provider"
import Link from "next/link"

const navItems = [
  { ar: "الرئيسية", en: "Home", href: "#home" },
  { ar: "خدماتنا", en: "Services", href: "#services" },
  { ar: "الباقات", en: "Pricing", href: "#pricing" },
  { ar: "من نحن", en: "About", href: "#about" },
  { ar: "تواصل معنا", en: "Contact", href: "#contact" },
]

export function CosmicNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, language, toggleTheme, toggleLanguage, t } = useTheme()

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
            <motion.img
              src="https://a.top4top.io/p_3605ck8qd0.png"
              alt="X-Host"
              className="w-12 h-12 object-contain"
              whileHover={{ scale: 1.1, rotate: 10 }}
            />
            <span className="text-2xl font-bold text-cosmic-gradient">X-Host</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors group"
              >
                {t(item.ar, item.en)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{language === "ar" ? "EN" : "ع"}</span>
            </motion.button>

            {/* Auth Buttons */}
            <Link
              href="https://x-host.cloud/login"
              target="_blank"
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              {t("تسجيل الدخول", "Login")}
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://x-host.cloud/register"
                target="_blank"
                className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors animate-pulse-glow"
              >
                {t("إنشاء حساب", "Sign Up")}
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-lg hover:text-primary transition-colors"
                >
                  {t(item.ar, item.en)}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <button onClick={toggleTheme} className="p-2">
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button onClick={toggleLanguage} className="p-2 flex items-center gap-1">
                  <Globe className="w-5 h-5" />
                  <span>{language === "ar" ? "EN" : "ع"}</span>
                </button>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="https://x-host.cloud/login"
                  target="_blank"
                  className="text-center py-2 border border-primary rounded-full"
                >
                  {t("تسجيل الدخول", "Login")}
                </Link>
                <Link
                  href="https://x-host.cloud/register"
                  target="_blank"
                  className="text-center py-2 bg-primary text-primary-foreground rounded-full"
                >
                  {t("إنشاء حساب", "Sign Up")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
