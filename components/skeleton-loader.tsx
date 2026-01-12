"use client"

import { motion } from "framer-motion"

interface SkeletonLoaderProps {
  count?: number
  type?: "card" | "text" | "image"
}

export function SkeletonLoader({ count = 3, type = "card" }: SkeletonLoaderProps) {
  const skeleton = (
    <motion.div
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      className="bg-muted rounded-lg"
    />
  )

  if (type === "card") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-video rounded-lg bg-muted" />
            <div className="h-6 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="flex gap-2">
              <div className="h-10 flex-1 bg-muted rounded-lg" />
              <div className="h-10 flex-1 bg-muted rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === "text") {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-6 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-5/6" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-full h-48 bg-muted rounded-lg" />
      ))}
    </div>
  )
}
