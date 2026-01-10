"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { cosmicCopy } from "@/data/cosmic.copy"

export function WormholeLoader() {
  const { t } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-6">
      <div className="relative w-12 h-12">
        {[0, 1, 2].map((ring) => (
          <motion.span
            key={ring}
            className="absolute inset-0 rounded-full border border-primary/40"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: ring * 0.15 }}
          />
        ))}
        <motion.span
          className="absolute inset-3 rounded-full bg-primary/70"
          animate={{ scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
      <span className="text-xs text-muted-foreground tracking-wide">{t(cosmicCopy.loader.label)}</span>
    </div>
  )
}
