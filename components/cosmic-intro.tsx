"use client"

import type React from "react"
import { useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

interface CosmicIntroProps {
  onComplete: () => void
}

const messages = ["حلول استضافة متكاملة", "بنية تحتية متطورة", "دعم فني على مدار الساعة"]

type Phase = "initial" | "logo" | "messages" | "transition" | "complete"

export function CosmicIntro({ onComplete }: CosmicIntroProps) {
  const [phase, setPhase] = useState<Phase>("initial")
  const [messageIndex, setMessageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 30 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40
    mouseX.set(x)
    mouseY.set(y)
  }, [mouseX, mouseY])

  const handleComplete = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onComplete()
    }, 300)
  }, [onComplete])

  // Optimized animation timeline with smooth transitions
  useEffect(() => {
    const timeline = [
      { delay: 100, action: () => setPhase("logo") },
      { delay: 2500, action: () => setPhase("messages") },
      { delay: 4500, action: () => setMessageIndex(1) },
      { delay: 6500, action: () => setMessageIndex(2) },
      { delay: 8200, action: () => setPhase("transition") },
      { delay: 9200, action: handleComplete },
    ]

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay))
    return () => timers.forEach(clearTimeout)
  }, [handleComplete])

  // Subtle floating animation values
  const floatingY = useTransform(smoothY, [-20, 20], [-5, 5])
  const floatingX = useTransform(smoothX, [-20, 20], [-5, 5])

  // Black overlay for smooth fade transitions
  const [overlayOpacity, setOverlayOpacity] = useState(0)

  useEffect(() => {
    if (phase === "transition") {
      const timer = setTimeout(() => {
        setOverlayOpacity(1)
      }, 100)
      return () => clearTimeout(timer)
    } else if (phase === "logo") {
      setOverlayOpacity(0)
    }
  }, [phase])

  // Optimized background layers with smooth transitions
  const BackgroundLayer = ({ index, opacity = 0.2 }: { index: number; opacity?: number }) => (
    <motion.div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(circle at ${30 + index * 20}% ${20 + index * 10}%, 
          rgba(${index * 20 + 50}, ${index * 30 + 100}, 255, ${opacity}) 0%, 
          transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.02, 1],
        opacity: [opacity * 0.8, opacity, opacity * 0.8],
      }}
      transition={{
        duration: 5 + index,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.3,
      }}
    />
  )

  // Optimized particles with reduced count for performance
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    duration: 4 + Math.random() * 3,
    delay: i * 0.4,
  }))

  if (!isVisible) return null

  return (
    <>
      {/* Black Overlay for smooth fade transitions */}
      <motion.div
        className="fixed inset-0 bg-black z-40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: overlayOpacity }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      
      <motion.div
        ref={containerRef}
        className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden z-50"
        onMouseMove={handleMouseMove}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Background layers */}
        {[1, 2, 3].map((index) => (
          <BackgroundLayer key={index} index={index} opacity={0.12 - index * 0.03} />
        ))}

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Optimized Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/10"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Smooth Phase Transitions */}
        <AnimatePresence mode="wait">
          {/* Logo Phase */}
          {phase === "logo" && (
            <motion.div
              key="logo"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ 
                opacity: 0, 
                scale: 0.98,
                transition: { 
                  duration: 0.6, 
                  ease: "easeInOut",
                  opacity: { duration: 0.4 }
                } 
              }}
              transition={{ 
                duration: 0.7, 
                ease: [0.43, 0.13, 0.23, 0.96] 
              }}
              style={{
                x: floatingX,
                y: floatingY,
              }}
            >
              {/* Glow effect behind logo */}
              <motion.div
                className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, transparent 65%)`,
                  filter: "blur(50px)",
                }}
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.25, 0.35, 0.25],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute rounded-full border"
                  style={{
                    width: 180 + ring * 60,
                    height: 180 + ring * 60,
                    borderColor: `rgba(${100 - ring * 20}, ${150 + ring * 30}, 255, ${0.15 - ring * 0.04})`,
                    borderWidth: '1px',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25 + ring * 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Logo container */}
              <motion.div
                className="relative z-10 flex flex-col items-center"
                initial={{ scale: 0.85, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  delay: 0.1,
                  duration: 0.8
                }}
              >
                {/* Logo with enhanced glow */}
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 50px rgba(0, 102, 255, 0.25)",
                        "0 0 70px rgba(0, 102, 255, 0.4)",
                        "0 0 50px rgba(0, 102, 255, 0.25)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="https://a.top4top.io/p_3605ck8qd0.png"
                    alt="X-Host Logo"
                    className="relative w-32 h-32 md:w-44 md:h-44 lg:w-48 lg:h-48 object-contain"
                    style={{
                      filter: "drop-shadow(0 0 25px rgba(0, 102, 255, 0.35))",
                    }}
                    animate={{
                      scale: [1, 1.015, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Brand name */}
                <motion.h1
                  className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  style={{
                    background: "linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  X-Host
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  className="mt-3 text-sm md:text-base text-slate-300/70 tracking-widest uppercase font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    delay: 0.5, 
                    duration: 0.5 
                  }}
                >
                  Digital Solutions
                </motion.p>
              </motion.div>
            </motion.div>
          )}

          {/* Messages Phase */}
          {phase === "messages" && (
            <motion.div
              key={`message-container-${messageIndex}`}
              className="absolute inset-0 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ 
                opacity: 0,
                transition: { duration: 0.4 }
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut" 
              }}
            >
              {/* Dynamic message background */}
              <motion.div
                className="absolute w-[90vw] max-w-[600px] h-[90vw] max-h-[600px] rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 65%)`,
                  filter: "blur(40px)",
                }}
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.08, 0.12, 0.08],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={`message-${messageIndex}`}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ 
                    opacity: 0, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeOut" 
                  }}
                >
                  <motion.h2
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-center leading-relaxed max-w-4xl px-4"
                    style={{
                      background: "linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {messages[messageIndex]}
                    <motion.div
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-px"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2,
                        ease: "easeOut" 
                      }}
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.6), transparent)",
                      }}
                    />
                  </motion.h2>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* Transition Phase with Enhanced Fade Effect */}
          {phase === "transition" && (
            <motion.div
              key="transition"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Expanding portal effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                {/* Multiple expanding rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute rounded-full border"
                    style={{
                      width: "100vmax",
                      height: "100vmax",
                      borderColor: `rgba(0, 102, 255, ${0.15 - ring * 0.04})`,
                      borderWidth: '1px',
                    }}
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ 
                      scale: 3, 
                      opacity: 0 
                    }}
                    transition={{
                      duration: 0.8,
                      delay: ring * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Center pulse effect */}
                <motion.div
                  className="absolute rounded-full bg-gradient-to-r from-blue-400/40 to-cyan-400/30"
                  style={{ 
                    width: "100px", 
                    height: "100px",
                    filter: "blur(30px)" 
                  }}
                  initial={{ scale: 0, opacity: 0.7 }}
                  animate={{ 
                    scale: 40, 
                    opacity: 0 
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Indicator */}
        {phase !== "transition" && phase !== "complete" && (
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((dot) => (
                <motion.div
                  key={dot}
                  className={`w-2 h-2 rounded-full ${
                    (phase === "logo" && dot === 1) ||
                    (phase === "messages" && dot <= messageIndex + 1)
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                      : "bg-slate-600"
                  }`}
                  animate={{
                    scale:
                      (phase === "logo" && dot === 1) ||
                      (phase === "messages" && dot === messageIndex + 1)
                        ? [1, 1.3, 1]
                        : 1,
                    opacity:
                      (phase === "logo" && dot === 1) ||
                      (phase === "messages" && dot <= messageIndex + 1)
                        ? 1
                        : 0.4,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: dot * 0.1,
                  }}
                />
              ))}
            </div>
            <motion.p
              className="text-xs text-slate-400/80 mt-3 text-center tracking-wide font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {phase === "logo" ? "جاري التهيئة..." : "جاري التحميل..."}
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </>
  )
}