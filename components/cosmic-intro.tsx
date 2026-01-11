"use client"

import type React from "react"
import { useEffect, useState, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CosmicIntroProps {
  onComplete: () => void
}

const messages = ["نحن لا نستضيف… نحن نُشغّل المستقبل", "سيرفرك يبدأ هنا", "قوة – سرعة – تحكم كامل"]

type Phase = "logo" | "messages" | "portal"

const Particle = memo(({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <div
    className="absolute rounded-full bg-cyan-400/40 star-twinkle"
    style={
      {
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        "--delay": `${delay}s`,
        "--duration": "3s",
      } as React.CSSProperties
    }
  />
))
Particle.displayName = "Particle"

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: i * 0.15,
}))

export function CosmicIntro({ onComplete }: CosmicIntroProps) {
  const [phase, setPhase] = useState<Phase>("logo")
  const [messageIndex, setMessageIndex] = useState(0)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  useEffect(() => {
    const timeline: { delay: number; action: () => void }[] = [
      { delay: 2800, action: () => setPhase("messages") },
      { delay: 4800, action: () => setMessageIndex(1) },
      { delay: 6800, action: () => setMessageIndex(2) },
      { delay: 8800, action: () => setPhase("portal") },
      { delay: 9600, action: handleComplete },
    ]

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay))
    return () => timers.forEach(clearTimeout)
  }, [handleComplete])

  return (
    <div className="fixed inset-0 bg-[#050510] overflow-hidden z-50">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(0, 102, 255, 0.12), transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(102, 0, 255, 0.08), transparent 50%),
            #050510
          `,
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Logo Phase */}
      <AnimatePresence mode="wait">
        {phase === "logo" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {/* Outer glow */}
            <div
              className="absolute w-80 h-80 rounded-full opacity-60"
              style={{
                background: `radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 70%)`,
              }}
            />

            {/* Rotating rings */}
            <div className="absolute w-56 h-56 rounded-full border border-blue-500/20 animate-cosmic-rotate" />
            <div
              className="absolute w-44 h-44 rounded-full border border-cyan-400/15"
              style={{ animation: "cosmic-rotate 8s linear infinite reverse" }}
            />
            <div
              className="absolute w-64 h-64 rounded-full border border-purple-500/10 animate-cosmic-rotate"
              style={{ animationDuration: "25s" }}
            />

            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            >
              {/* Logo Image */}
              <motion.img
                src="https://a.top4top.io/p_3605ck8qd0.png"
                alt="X-Host Logo"
                className="w-36 h-36 md:w-44 md:h-44 object-contain"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(0, 102, 255, 0.6)) drop-shadow(0 0 80px rgba(0, 102, 255, 0.3))",
                }}
                animate={{
                  filter: [
                    "drop-shadow(0 0 40px rgba(0, 102, 255, 0.6)) drop-shadow(0 0 80px rgba(0, 102, 255, 0.3))",
                    "drop-shadow(0 0 60px rgba(0, 102, 255, 0.8)) drop-shadow(0 0 100px rgba(0, 102, 255, 0.5))",
                    "drop-shadow(0 0 40px rgba(0, 102, 255, 0.6)) drop-shadow(0 0 80px rgba(0, 102, 255, 0.3))",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Brand Name */}
              <motion.h1
                className="mt-6 text-4xl md:text-5xl font-bold tracking-wide"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  background: "linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 60px rgba(0, 102, 255, 0.5)",
                }}
              >
                X-Host
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="mt-3 text-sm md:text-base text-cyan-300/70 tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Digital Universe
              </motion.p>
            </motion.div>

            {/* Floating dots around logo */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/60"
                style={{
                  top: `${45 + Math.cos((i * Math.PI * 2) / 6) * 25}%`,
                  left: `${50 + Math.sin((i * Math.PI * 2) / 6) * 25}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages Phase */}
      <AnimatePresence mode="wait">
        {phase === "messages" && (
          <motion.div
            key={messageIndex}
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Background pulse for messages */}
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full opacity-30"
              style={{
                background: `radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 60%)`,
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />

            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-relaxed max-w-4xl"
              style={{
                background: "linear-gradient(135deg, #0066ff 0%, #33ccff 40%, #00ffcc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {messages[messageIndex]}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portal Phase */}
      <AnimatePresence>
        {phase === "portal" && (
          <motion.div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute rounded-full"
              initial={{ width: 4, height: 4, opacity: 1 }}
              animate={{
                width: [4, 3000],
                height: [4, 3000],
                opacity: [1, 0.9],
              }}
              transition={{ duration: 0.6, ease: "easeIn" }}
              style={{
                background: "radial-gradient(circle, #ffffff 0%, rgba(0, 102, 255, 0.5) 50%, transparent 70%)",
                boxShadow: "0 0 100px 50px rgba(255, 255, 255, 0.3)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-40 transition-opacity duration-300 ${
          phase === "portal" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #0066ff, #33ccff, #00ffcc)",
            }}
            initial={{ width: "0%" }}
            animate={{
              width: phase === "logo" ? "28%" : phase === "messages" ? `${28 + (messageIndex + 1) * 22}%` : "100%",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <p className="text-center text-xs text-cyan-300/50 mt-2 tracking-wider">
          {phase === "logo" ? "جاري التحميل..." : phase === "messages" ? `${messageIndex + 1}/3` : ""}
        </p>
      </div>
    </div>
  )
}
