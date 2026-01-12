"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useCartStore } from "@/lib/utils/cart-store"
import { useTheme } from "./theme-provider"
import { ShoppingCart } from "lucide-react"

export function FloatingCartButton() {
  const { t } = useTheme()
  const { items, getTotalItems } = useCartStore()
  const [showButton, setShowButton] = useState(false)
  const [showPulse, setShowPulse] = useState(false)
  const totalItems = getTotalItems()

  // Show floating button after first item is added
  useEffect(() => {
    setShowButton(totalItems > 0)
    if (totalItems > 0) {
      setShowPulse(true)
      const timer = setTimeout(() => setShowPulse(false), 600)
      return () => clearTimeout(timer)
    }
  }, [totalItems])

  const handleClick = () => {
    // Trigger cart drawer opening via custom event
    const event = new CustomEvent("openCart")
    window.dispatchEvent(event)
  }

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary to-stellar-bright text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow group md:hidden"
          aria-label="Open shopping cart"
        >
          <motion.div
            animate={showPulse ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-destructive text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </motion.div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute bottom-full right-0 mb-3 whitespace-nowrap bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground pointer-events-none"
          >
            {t(`${totalItems} عنصر في السلة`, `${totalItems} item${totalItems > 1 ? "s" : ""} in cart`)}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
