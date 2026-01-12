"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart, User, Home, Package, CreditCard, Users, Phone } from "lucide-react"
import Link from "next/link"

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
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border-b border-slate-800/30 shadow-xl" 
            : "bg-gradient-to-b from-slate-900/80 to-slate-950/80 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/30 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    XH
                  </span>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-100">X-Host</span>
                <span className="text-xs text-slate-400">استضافة متطورة</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-blue-300 transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.ar}</span>
                    </div>
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-lg bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300"
              >
                <ShoppingCart className="w-4 h-4 text-slate-300" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>

              {/* User Dashboard */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://x-host.cloud/home"
                  target="_blank"
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-blue-300 transition-colors duration-200 rounded-lg bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/30 hover:border-slate-600/50 flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  لوحة التحكم
                </Link>
              </motion.div>

              {/* تسجيل الدخول */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://x-host.cloud/login"
                  target="_blank"
                  className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  تسجيل دخول
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3 mobile-menu">
              {/* Cart - Mobile */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 text-slate-300" />
              </motion.button>

              {/* Menu Toggle */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 relative z-60"
                whileTap={{ scale: 0.95 }}
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-300" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-300" />
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
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
                duration: 0.3 
              }}
              className="fixed top-20 right-4 left-4 z-50 lg:hidden mobile-menu"
            >
              {/* Glass Container */}
              <div className="bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/30 shadow-2xl overflow-hidden">
                {/* User Info */}
                <div className="p-4 border-b border-slate-700/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-100">مرحباً بك!</p>
                      <p className="text-xs text-slate-400">قم بتسجيل الدخول للوصول إلى حسابك</p>
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
                        className="flex items-center gap-3 px-6 py-3 text-base font-medium text-slate-300 hover:text-blue-300 hover:bg-slate-800/50 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.icon}
                        {item.ar}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="p-4 border-t border-slate-700/30">
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        href="https://x-host.cloud/home"
                        target="_blank"
                        className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 border border-slate-700/30 hover:border-blue-500/30 rounded-lg transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        لوحة التحكم
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 border border-slate-700/30 hover:border-blue-500/30 rounded-lg transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        الطلب السريع
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Auth Buttons */}
                <div className="p-4 bg-gradient-to-b from-transparent to-slate-900/50">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-3"
                  >
                    <Link
                      href="https://x-host.cloud/login"
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      تسجيل دخول
                    </Link>

                    <Link
                      href="https://x-host.cloud/register"
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 border border-slate-700/30 hover:border-blue-500/30 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      إنشاء حساب
                    </Link>
                  </motion.div>
                </div>

                {/* Support Link */}
                <div className="p-4 border-t border-slate-700/30">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
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