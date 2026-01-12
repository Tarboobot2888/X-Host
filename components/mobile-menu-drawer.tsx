"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "./theme-provider"

interface MobileMenuDrawerProps {
  navItems: Array<{
    ar: string
    href: string
  }>
  onMenuOpen?: (isOpen: boolean) => void
}

export function MobileMenuDrawer({ navItems, onMenuOpen }: MobileMenuDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    onMenuOpen?.(isOpen)
  }, [isOpen, onMenuOpen])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
        aria-label="Open menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </motion.button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with strong blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
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
              className="fixed top-20 right-4 left-4 z-50"
            >
              {/* Glass Container */}
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl overflow-hidden">
                {/* Header with Logo & Close Button */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                  <Link href="/" className="flex items-center gap-3" onClick={handleNavClick}>
                    <motion.img
                      src="https://a.top4top.io/p_3605ck8qd0.png"
                      alt="X-Host"
                      className="w-10 h-10 object-contain"
                      whileHover={{ scale: 1.1 }}
                    />
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                      X-Host
                    </span>
                  </Link>

                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
                    className="space-y-2"
                  >
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={handleNavClick}
                          className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group relative overflow-hidden"
                        >
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Content */}
                          <span className="relative font-medium text-sm">{item.ar}</span>

                          {/* Right border indicator on hover */}
                          <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </nav>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-700/50 to-transparent" />

                {/* Theme Toggle */}
                <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-800">
                  <motion.button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          الوضع الفاتح
                        </span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          الوضع الداكن
                        </span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Auth Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="p-4 space-y-3 bg-gradient-to-b from-transparent to-gray-50/30 dark:to-gray-900/30"
                >
                  <Link
                    href="https://x-host.cloud/login"
                    target="_blank"
                    onClick={handleNavClick}
                    className="block w-full px-4 py-3 text-center text-sm font-medium rounded-lg border border-blue-500/50 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                  >
                    تسجيل الدخول
                  </Link>

                  <Link
                    href="https://x-host.cloud/login?redirect=/servers/create"
                    target="_blank"
                    onClick={handleNavClick}
                    className="block w-full px-4 py-3 text-center text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    إنشاء حساب
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}