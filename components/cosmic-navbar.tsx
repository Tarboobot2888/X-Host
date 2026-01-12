"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User, Home, Package, CreditCard, Users, Phone, Globe, Server } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { ar: "الرئيسية", href: "/", icon: <Home className="w-4 h-4" /> },
  { ar: "الخدمات", href: "/services", icon: <Package className="w-4 h-4" /> },
  { ar: "الباقات", href: "/plans", icon: <CreditCard className="w-4 h-4" /> },
  { ar: "من نحن", href: "/about", icon: <Users className="w-4 h-4" /> },
  { ar: "تواصل معنا", href: "/contact", icon: <Phone className="w-4 h-4" /> },
]

export function CosmicNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest(".mobile-menu")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [mobileMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-b from-blue-900/95 via-blue-900/95 to-blue-950/95 backdrop-blur-xl border-b border-blue-800/40 shadow-2xl"
            : "bg-gradient-to-b from-blue-900/80 via-blue-900/80 to-blue-950/80 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative w-16 h-12 rounded-xl flex items-center justify-center shadow-xl">
                  {/* Logo Image */}
                  <div className="relative w-16 h-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl"></div>
                    <div className="absolute inset-1 bg-blue-900 rounded-lg flex items-center justify-center">
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-cyan-300" />
                        <div className="absolute top-1 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">Fast Host</span>
                <span className="text-xs text-cyan-300 tracking-wide font-medium">Ultimate Hosting Solution</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0">
              {navItems.map((item) => (
                <motion.div key={item.href} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className="relative px-5 py-3 text-sm font-medium text-blue-100 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-cyan-400/70 group-hover:text-cyan-300 transition-colors duration-300">{item.icon}</div>
                      <span className="tracking-wide">{item.ar}</span>
                    </div>
                    <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Server Status */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <div className="px-4 py-2.5 text-sm font-medium text-blue-100 hover:text-white transition-colors duration-200 rounded-xl bg-gradient-to-b from-blue-800/30 to-blue-900/20 border border-blue-700/40 hover:border-cyan-500/40 flex items-center gap-2">
                  <Server className="w-4 h-4 text-green-400" />
                  <div className="flex flex-col">
                    <span className="text-xs">الحالة</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-green-400">100%</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* User Dashboard */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <Link
                  href="https://x-host.cloud/home"
                  target="_blank"
                  className="px-5 py-2.5 text-sm font-medium text-blue-100 hover:text-white transition-colors duration-200 rounded-xl bg-gradient-to-b from-blue-800/30 to-blue-900/20 border border-blue-700/40 hover:border-cyan-500/40 flex items-center gap-2"
                >
                  <User className="w-4 h-4 text-cyan-400/70 group-hover:text-cyan-300 transition-colors duration-300" />
                  لوحة التحكم
                </Link>
              </motion.div>

              {/* تسجيل الدخول */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <Link
                  href="https://x-host.cloud/login"
                  target="_blank"
                  className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-cyan-600/90 via-blue-600/90 to-blue-700/90 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="relative z-10">تسجيل دخول</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3 mobile-menu">
              {/* Server Status - Mobile */}
              <motion.div whileTap={{ scale: 0.95 }} className="group">
                <div className="p-2.5 rounded-xl bg-gradient-to-b from-blue-800/30 to-blue-900/20 border border-blue-700/40 hover:border-cyan-500/40 transition-all duration-300 flex items-center gap-2">
                  <Server className="w-4 h-4 text-green-400" />
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </motion.div>

              {/* Menu Toggle */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-3 rounded-xl bg-gradient-to-b from-blue-800/30 to-blue-900/20 border border-blue-700/40 hover:border-cyan-500/40 transition-all duration-300 relative z-60 group"
                whileTap={{ scale: 0.95 }}
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-blue-100 group-hover:text-red-300 transition-colors duration-300" />
                ) : (
                  <Menu className="w-5 h-5 text-blue-100 group-hover:text-cyan-300 transition-colors duration-300" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Glass Dropdown Menu */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.3,
              }}
              className="fixed top-20 right-4 left-4 z-50 lg:hidden mobile-menu"
            >
              {/* Glass Container */}
              <div className="bg-gradient-to-b from-blue-800/95 via-blue-900/95 to-blue-950/95 backdrop-blur-xl rounded-2xl border border-blue-700/40 shadow-2xl overflow-hidden">
                {/* User Info */}
                <div className="p-5 border-b border-blue-700/40 bg-gradient-to-r from-blue-800/50 to-blue-900/50">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center"
                    >
                      <User className="w-6 h-6 text-cyan-300" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-white">مرحباً بك!</p>
                      <p className="text-xs text-blue-200 mt-1">قم بتسجيل الدخول للوصول إلى حسابك</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="py-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-4 px-6 py-4 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200 border-b border-blue-700/30 last:border-b-0"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="text-cyan-400/70">{item.icon}</div>
                        <span>{item.ar}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Server Status */}
                <div className="p-4 border-t border-blue-700/40">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-b from-blue-800/30 to-blue-900/20 border border-blue-700/40">
                    <div className="flex items-center gap-3">
                      <Server className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-sm font-medium text-white">حالة الخوادم</p>
                        <p className="text-xs text-blue-200">جميع الأنظمة تعمل بشكل طبيعي</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-green-400">100%</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="p-4 border-t border-blue-700/40">
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      <Link
                        href="https://x-host.cloud/home"
                        target="_blank"
                        className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-gradient-to-b from-blue-800/40 to-blue-900/30 text-blue-100 border border-blue-700/40 hover:border-cyan-500/40 rounded-xl transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        لوحة التحكم
                      </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                      <Link
                        href="/status"
                        className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-gradient-to-b from-blue-800/40 to-blue-900/30 text-blue-100 border border-blue-700/40 hover:border-cyan-500/40 rounded-xl transition-all duration-200 w-full"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        حالة الخدمة
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Auth Buttons */}
                <div className="p-4 bg-gradient-to-b from-transparent to-blue-900/50 border-t border-blue-700/40">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-3"
                  >
                    <Link
                      href="https://x-host.cloud/login"
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium bg-gradient-to-r from-cyan-600/90 via-blue-600/90 to-blue-700/90 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                      تسجيل دخول
                    </Link>

                    <Link
                      href="https://x-host.cloud/register"
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium bg-gradient-to-b from-blue-800/40 to-blue-900/30 text-blue-100 border border-blue-700/40 hover:border-cyan-500/40 rounded-xl transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                      إنشاء حساب
                    </Link>
                  </motion.div>
                </div>

                {/* Support Link */}
                <div className="p-4 border-t border-blue-700/40">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 text-sm text-blue-200 hover:text-cyan-300 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>الدعم الفني</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
