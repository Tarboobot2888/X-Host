"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, X } from "lucide-react"
import { useTheme } from "./theme-provider"
import Link from "next/link"
import { cosmicCopy } from "@/data/cosmic.copy"
import { cosmicLinks } from "@/data/cosmic.links"

export function FloatingCTA() {
  const { t } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>

            <Link
              href={cosmicLinks.cloud}
              target="_blank"
              className="flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow animate-pulse-glow"
            >
              <Rocket className="w-5 h-5" />
              <span>{t(cosmicCopy.floatingCta.label)}</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
