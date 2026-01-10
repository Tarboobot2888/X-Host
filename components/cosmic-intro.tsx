"use client"

import type React from "react"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cosmicCopy } from "@/data/cosmic.copy"
import { usePerformanceStore } from "@/stores/performance-store"
import { useUIStore } from "@/stores/ui-store"

interface CosmicIntroProps {
  onComplete: () => void
}

type Phase = "pre" | "creation" | "logo" | "messages" | "portal"

const PHASE_SEQUENCE: Phase[] = ["pre", "creation", "logo", "messages", "portal"]

const phaseDurations = {
  pre: 800,
  creation: 1800,
  logo: 3500,
  messages: 4200,
  portal: 1400,
}

const reducedDurations = {
  pre: 200,
  creation: 350,
  logo: 700,
  messages: 1200,
  portal: 400,
}

function useIntroTimeline(onComplete: () => void, prefersReducedMotion: boolean) {
  const [phase, setPhase] = useState<Phase>("pre")
  const [messageIndex, setMessageIndex] = useState(0)
  const timeoutsRef = useRef<number[]>([])

  const clearTimers = useCallback(() => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id))
    timeoutsRef.current = []
  }, [])

  useEffect(() => {
    const durations = prefersReducedMotion ? reducedDurations : phaseDurations
    let accumulated = 0

    const schedulePhase = (phaseName: Phase) => {
      timeoutsRef.current.push(
        window.setTimeout(() => {
          setPhase(phaseName)
        }, accumulated),
      )
      accumulated += durations[phaseName]
    }

    PHASE_SEQUENCE.forEach(schedulePhase)

    if (durations.messages > 0) {
      const messageDuration = durations.messages / 3
      const messageStart = durations.pre + durations.creation + durations.logo
      for (let index = 0; index < 3; index += 1) {
        timeoutsRef.current.push(
          window.setTimeout(() => {
            setMessageIndex(index)
          }, messageStart + messageDuration * index),
        )
      }
    }

    timeoutsRef.current.push(
      window.setTimeout(() => {
        onComplete()
      }, accumulated),
    )

    return clearTimers
  }, [clearTimers, onComplete, prefersReducedMotion])

  return { phase, messageIndex, clearTimers }
}

const ParticleCanvas = ({ phase }: { phase: Phase }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { qualityTier, prefersReducedMotion } = usePerformanceStore()

  const particleCount = useMemo(() => {
    if (qualityTier === "high") return 2048
    if (qualityTier === "medium") return 1024
    return 256
  }, [qualityTier])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    let animationFrame = 0
    let start = performance.now()

    const particles = Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 1.5 + 0.5
      return {
        angle,
        speed,
        radius: Math.random() * 1,
        alpha: Math.random() * 0.6 + 0.2,
      }
    })

    const resize = () => {
      const { innerWidth, innerHeight } = window
      canvas.width = innerWidth
      canvas.height = innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const render = (time: number) => {
      const elapsed = time - start
      context.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const phaseBoost = phase === "creation" ? Math.min(elapsed / 900, 1) : phase === "portal" ? 1.5 : 1
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.2

      particles.forEach((particle) => {
        const radius = baseRadius * (particle.radius + phaseBoost) * (prefersReducedMotion ? 0.6 : 1)
        const x = centerX + Math.cos(particle.angle + elapsed * 0.0004) * radius
        const y = centerY + Math.sin(particle.angle + elapsed * 0.0004) * radius
        const size = qualityTier === "low" ? 1 : 1.5

        context.beginPath()
        context.fillStyle = `rgba(51, 204, 255, ${particle.alpha})`
        context.arc(x, y, size, 0, Math.PI * 2)
        context.fill()
      })

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(render)
      }
    }

    animationFrame = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [particleCount, phase, prefersReducedMotion, qualityTier])

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />
}

export function CosmicIntro({ onComplete }: CosmicIntroProps) {
  const language = useUIStore((state) => state.language)
  const prefersReducedMotion = usePerformanceStore((state) => state.prefersReducedMotion)
  const setPrefersReducedMotion = usePerformanceStore((state) => state.setPrefersReducedMotion)
  const { phase, messageIndex, clearTimers } = useIntroTimeline(onComplete, prefersReducedMotion)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [setPrefersReducedMotion])

  const t = useCallback(
    (text: { ar: string; en: string }) => (language === "ar" ? text.ar : text.en),
    [language],
  )

  const handleSkip = useCallback(() => {
    clearTimers()
    onComplete()
  }, [clearTimers, onComplete])

  return (
    <div className="fixed inset-0 bg-[#050510] overflow-hidden z-50">
      <ParticleCanvas phase={phase} />

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(0, 102, 255, 0.15), transparent 55%),
            radial-gradient(ellipse at 70% 80%, rgba(102, 0, 255, 0.12), transparent 55%),
            #050510
          `,
        }}
      />

      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 px-3 py-1.5 text-xs rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/60 transition"
      >
        {t(cosmicCopy.intro.skip)}
      </button>

      <AnimatePresence mode="wait">
        {phase === "pre" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-white/40">{t(cosmicCopy.brand.name)}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {phase === "creation" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-48 h-48 rounded-full border border-cyan-300/30"
              animate={{ scale: [0.6, 1.1], opacity: [0.3, 1] }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {phase === "logo" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute w-56 h-56 rounded-full border border-blue-500/30 animate-cosmic-rotate" />
            <div
              className="absolute w-44 h-44 rounded-full border border-cyan-400/20"
              style={{ animation: "cosmic-rotate 8s linear infinite reverse" }}
            />

            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.2 }}
            >
              <motion.div
                className="w-36 h-36 md:w-44 md:h-44 relative"
                animate={{
                  filter: [
                    "drop-shadow(0 0 40px rgba(0, 102, 255, 0.6)) drop-shadow(0 0 80px rgba(0, 102, 255, 0.3))",
                    "drop-shadow(0 0 60px rgba(0, 102, 255, 0.8)) drop-shadow(0 0 120px rgba(0, 102, 255, 0.5))",
                    "drop-shadow(0 0 40px rgba(0, 102, 255, 0.6)) drop-shadow(0 0 80px rgba(0, 102, 255, 0.3))",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Image
                  src="/x-host-logo.svg"
                  alt={t(cosmicCopy.brand.logoAlt)}
                  fill
                  sizes="180px"
                  className="object-contain"
                  priority
                />
              </motion.div>

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
                {t(cosmicCopy.brand.name)}
              </motion.h1>
              <motion.p
                className="mt-3 text-sm md:text-base text-cyan-300/70 tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {t(cosmicCopy.intro.tagline)}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <motion.div
              className="absolute w-[520px] h-[520px] rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 60%)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
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
              {t(cosmicCopy.intro.messages[messageIndex])}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

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
              transition={{ duration: 0.8, ease: "easeIn" }}
              style={{
                background: "radial-gradient(circle, #ffffff 0%, rgba(0, 102, 255, 0.5) 50%, transparent 70%)",
                boxShadow: "0 0 100px 50px rgba(255, 255, 255, 0.3)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-44 transition-opacity duration-300 ${
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
              width:
                phase === "pre"
                  ? "12%"
                  : phase === "creation"
                    ? "28%"
                    : phase === "logo"
                      ? "52%"
                      : phase === "messages"
                        ? `${52 + (messageIndex + 1) * 14}%`
                        : "100%",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <p className="text-center text-xs text-cyan-300/50 mt-2 tracking-wider">{t(cosmicCopy.intro.loading)}</p>
      </div>
    </div>
  )
}
