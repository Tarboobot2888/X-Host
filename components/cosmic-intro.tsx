"use client"

import type React from "react"
import { useEffect, useState, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CosmicIntroProps {
  onComplete: () => void
}

const messages = [
  "نحن لا نستضيف… نحن نُشغّل المستقبل",
  "سيرفرك يبدأ هنا",
  "قوة – سرعة – تحكم كامل"
]

type Phase = "logo" | "messages" | "portal"

const Particle = memo(({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <div
    className="absolute rounded-full bg-cyan-400/30"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      animation: `float 3s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      opacity: 0.4,
      filter: "blur(0.5px)"
    } as React.CSSProperties}
  />
))
Particle.displayName = "Particle"

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  delay: i * 0.2,
}))

export function CosmicIntro({ onComplete }: CosmicIntroProps) {
  const [phase, setPhase] = useState<Phase>("logo")
  const [messageIndex, setMessageIndex] = useState(0)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  useEffect(() => {
    const timeline: { delay: number; action: () => void }[] = [
      { delay: 2500, action: () => setPhase("messages") },
      { delay: 4000, action: () => setMessageIndex(1) },
      { delay: 5500, action: () => setMessageIndex(2) },
      { delay: 7000, action: () => setPhase("portal") },
      { delay: 7500, action: handleComplete },
    ]

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay))
    return () => timers.forEach(clearTimeout)
  }, [handleComplete])

  return (
    <div className="fixed inset-0 bg-[#050510] overflow-hidden z-50">
      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateZ(0);
          }
          50% {
            transform: translateY(-15px) translateZ(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 30px rgba(0, 102, 255, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 50px rgba(0, 102, 255, 0.8));
          }
        }
        
        @keyframes rotate-3d {
          0% {
            transform: rotateY(0deg) rotateX(0deg) translateZ(0);
          }
          25% {
            transform: rotateY(90deg) rotateX(15deg) translateZ(20px);
          }
          50% {
            transform: rotateY(180deg) rotateX(0deg) translateZ(0);
          }
          75% {
            transform: rotateY(270deg) rotateX(-15deg) translateZ(-20px);
          }
          100% {
            transform: rotateY(360deg) rotateX(0deg) translateZ(0);
          }
        }
        
        @keyframes portal-expand {
          0% {
            transform: scale(0.1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(20) rotate(180deg);
            opacity: 0;
          }
        }
        
        .logo-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
      `}</style>

      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0a1a] to-[#050510]" />
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-r from-cyan-900/10 to-blue-900/10 rounded-full blur-3xl" />
      </div>

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
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* 3D Container */}
            <div className="logo-3d relative">
              {/* Outer Orbital Rings */}
              <motion.div
                className="absolute -inset-20 rounded-full border border-blue-500/10"
                initial={{ scale: 0.5, rotateX: 90 }}
                animate={{ 
                  scale: 1,
                  rotateX: 0,
                  rotateY: 360
                }}
                transition={{ 
                  duration: 8,
                  ease: "linear",
                  rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              />
              
              <motion.div
                className="absolute -inset-16 rounded-full border border-cyan-400/15"
                initial={{ scale: 0.5, rotateX: -90 }}
                animate={{ 
                  scale: 1,
                  rotateX: 0,
                  rotateY: -360
                }}
                transition={{ 
                  duration: 6,
                  ease: "linear",
                  rotateY: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
              />

              {/* Main Logo Container */}
              <motion.div
                className="relative z-10"
                initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  rotateY: 0
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.2
                }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-12 rounded-full"
                  animate={{
                    background: [
                      "radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(0, 102, 255, 0.5) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, transparent 70%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ filter: "blur(20px)" }}
                />

                {/* Logo Image with 3D Rotation */}
                <motion.div
                  className="relative"
                  animate={{
                    rotateY: [0, 180, 360],
                    rotateX: [0, 15, 0]
                  }}
                  transition={{
                    rotateY: {
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    rotateX: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <img
                    src="https://a.top4top.io/p_3605ck8qd0.png"
                    alt="X-Host Logo"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
                    style={{
                      filter: "drop-shadow(0 0 40px rgba(0, 102, 255, 0.5))",
                      animation: "pulse-glow 3s ease-in-out infinite"
                    }}
                  />
                  
                  {/* Inner Glow */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full blur-xl"
                    style={{ transform: "translateZ(-10px)" }}
                  />
                </motion.div>

                {/* Orbiting Dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400"
                    style={{
                      top: `calc(50% - 1px)`,
                      left: `calc(50% - 1px)`,
                      transform: `rotate(${i * 45}deg) translateX(60px) rotate(-${i * 45}deg)`,
                      boxShadow: "0 0 10px rgba(0, 200, 255, 0.7)"
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Brand Name */}
            <motion.h1
              className="mt-8 text-4xl md:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                background: "linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto"
              }}
            >
              X-Host
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="mt-3 text-sm text-cyan-300/60 tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Digital Universe
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages Phase */}
      <AnimatePresence mode="wait">
        {phase === "messages" && (
          <motion.div
            key={messageIndex}
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            {/* Message Background */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, transparent 70%)"
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-2xl leading-relaxed"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                background: "linear-gradient(135deg, #0066ff 0%, #33ccff 60%, #00ffcc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto"
              }}
            >
              {messages[messageIndex]}
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portal Phase */}
      <AnimatePresence>
        {phase === "portal" && (
          <motion.div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative rounded-full"
              initial={{ width: 4, height: 4, opacity: 1 }}
              animate={{
                width: 4000,
                height: 4000,
                opacity: [1, 0.8, 0]
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeIn"
              }}
              style={{
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(0, 102, 255, 0.6) 20%, transparent 60%)"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${phase === "portal" ? "opacity-0" : "opacity-100"}`}>
        <div className="flex items-center gap-3">
          {/* Progress Dots */}
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  (phase === "logo" && i === 0) || 
                  (phase === "messages" && i <= messageIndex) 
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400" 
                    : "bg-slate-600/30"
                }`}
                animate={phase === "messages" && i === messageIndex ? {
                  scale: [1, 1.3, 1]
                } : {}}
                transition={{
                  scale: {
                    duration: 1,
                    repeat: Infinity
                  }
                }}
              />
            ))}
          </div>
          
          {/* Status Text */}
          <motion.span 
            className="text-xs text-cyan-300/50 tracking-wider"
            key={`${phase}-${messageIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {phase === "logo" ? "جاري الإعداد..." : 
             phase === "messages" ? `رسالة ${messageIndex + 1} من 3` : 
             "جاري الإنتقال..."}
          </motion.span>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-2 w-48 h-0.5 bg-slate-700/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
            initial={{ width: "0%" }}
            animate={{
              width: phase === "logo" ? "33%" : 
                     phase === "messages" ? `${33 + (messageIndex + 1) * 22}%` : 
                     "100%"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  )
                    }
