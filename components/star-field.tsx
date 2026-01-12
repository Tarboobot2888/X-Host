"use client"

import type React from "react"
import { useEffect, useState, memo } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

const StarPoint = memo(({ x, y, size, delay, duration }: Omit<Star, "id">) => (
  <div
    className="absolute rounded-full bg-white star-twinkle"
    style={
      {
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        "--delay": `${delay}s`,
        "--duration": `${duration}s`,
      } as React.CSSProperties
    }
  />
))
StarPoint.displayName = "StarPoint"

const generateStars = (count: number): Star[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 2 + 2.5,
  }))

const staticStars = generateStars(60)

export function StarField() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Nebula Gradients */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 15% 25%, rgba(0, 102, 255, 0.2), transparent 45%),
            radial-gradient(ellipse at 85% 75%, rgba(102, 0, 255, 0.15), transparent 45%),
            radial-gradient(ellipse at 50% 50%, rgba(0, 204, 255, 0.05), transparent 60%)
          `,
        }}
      />

      {/* Stars */}
      {staticStars.map((star) => (
        <StarPoint key={star.id} x={star.x} y={star.y} size={star.size} delay={star.delay} duration={star.duration} />
      ))}

      <ShootingStar />
    </div>
  )
}

function ShootingStar() {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 20, y: 10 })

  useEffect(() => {
    const triggerStar = () => {
      setPosition({
        x: Math.random() * 50 + 10,
        y: Math.random() * 25 + 5,
      })
      setVisible(true)
      setTimeout(() => setVisible(false), 1000)
    }

    const initialTimeout = setTimeout(triggerStar, 3000)
    const interval = setInterval(triggerStar, 8000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="absolute w-1 h-1 bg-white rounded-full shooting-star"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        boxShadow: "0 0 4px 2px rgba(255, 255, 255, 0.7)",
      }}
    />
  )
}
