"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CosmicIntroProps {
  onComplete: () => void
}

type Phase = "entrance" | "logo" | "portal"

const messages = [
  "نحن لا نستضيف… نحن نُشغّل المستقبل",
  "سيرفرك يبدأ هنا",
  "قوة – سرعة – تحكم كامل"
]

export function CosmicIntro({ onComplete }: CosmicIntroProps) {
  const [phase, setPhase] = useState<Phase>("entrance")
  const [messageIndex, setMessageIndex] = useState(0)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  useEffect(() => {
    const timeline = [
      { delay: 2000, action: () => setPhase("logo") },
      { delay: 3000, action: () => setMessageIndex(1) },
      { delay: 4000, action: () => setMessageIndex(2) },
      { delay: 5000, action: () => setPhase("portal") },
      { delay: 5500, action: handleComplete },
    ]

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay))
    return () => timers.forEach(clearTimeout)
  }, [handleComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden z-50">
      {/* 3D Background Effect */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-cyan-900/5"></div>
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* 3D Logo Entrance */}
      <AnimatePresence mode="wait">
        {phase === "entrance" && (
          <motion.div
            key="entrance"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              initial={{ 
                rotateY: -180,
                rotateX: 45,
                scale: 0.5,
                opacity: 0 
              }}
              animate={{ 
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                opacity: 1 
              }}
              transition={{ 
                rotateY: { 
                  duration: 1.2,
                  ease: [0.34, 1.56, 0.64, 1]
                },
                rotateX: { 
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.3
                },
                scale: { 
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.3
                }
              }}
              className="relative"
              style={{ 
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Logo Container with 3D Depth */}
              <div 
                className="relative"
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front Layer - Main Logo */}
                <motion.div
                  className="relative"
                  style={{ 
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.img
                    src="https://a.top4top.io/p_3605ck8qd0.png"
                    alt="X-Host Logo"
                    className="w-40 h-40 md:w-56 md:h-56 object-contain"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(0, 102, 255, 0.5))',
                    }}
                  />
                  
                  {/* 3D Edge Glow */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(0, 102, 255, 0.3), transparent 70%)',
                      filter: 'blur(20px)',
                    }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* 3D Shadow Layer */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.5) 100%)',
                    filter: 'blur(10px)',
                    transform: 'translateZ(-20px)',
                  }}
                />
              </div>

              {/* Floating Particles (Subtle) */}
              <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                    style={{
                      left: `${50 + Math.sin(i * Math.PI * 2 / 4) * 40}%`,
                      top: `${50 + Math.cos(i * Math.PI * 2 / 4) * 40}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Phase with Text */}
      <AnimatePresence mode="wait">
        {phase === "logo" && (
          <motion.div
            key="logo"
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 3D Logo Display */}
            <div className="relative mb-8" style={{ perspective: '1000px' }}>
              <motion.div
                animate={{ 
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.img
                  src="https://a.top4top.io/p_3605ck8qd0.png"
                  alt="X-Host Logo"
                  className="w-32 h-32 md:w-44 md:h-44 object-contain"
                  style={{
                    filter: 'drop-shadow(0 15px 30px rgba(0, 102, 255, 0.4))',
                  }}
                />
                
                {/* Ambient Glow */}
                <div 
                  className="absolute inset-0 -z-10"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(0, 102, 255, 0.2), transparent 60%)',
                    filter: 'blur(30px)',
                  }}
                />
              </motion.div>
            </div>

            {/* Brand Name with 3D Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ 
                background: 'linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 5px 20px rgba(0, 102, 255, 0.3)',
                transformStyle: 'preserve-3d',
              }}
            >
              X-Host
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm text-cyan-300/70 tracking-wider uppercase"
            >
              Digital Universe
            </motion.p>

            {/* Rotating Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border border-blue-500/20 rounded-full"
                  style={{
                    width: `${160 + i * 100}px`,
                    height: `${160 + i * 100}px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20 + i * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Messages */}
      <AnimatePresence mode="wait">
        {phase === "logo" && (
          <motion.div
            key={`message-${messageIndex}`}
            className="absolute bottom-32 left-0 right-0 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Message Background */}
              <div className="absolute inset-0 -m-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-xl rounded-lg"></div>
              
              <motion.h2
                className="text-xl md:text-2xl font-medium text-center px-8 py-4 relative"
                style={{ 
                  background: 'linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {messages[messageIndex]}
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portal Transition */}
      <AnimatePresence>
        {phase === "portal" && (
          <motion.div
            key="portal"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Expanding Portal */}
            <motion.div
              className="absolute rounded-full"
              initial={{ 
                width: 0,
                height: 0,
                opacity: 1,
                scale: 0.5 
              }}
              animate={{ 
                width: 2000,
                height: 2000,
                opacity: [1, 0.9, 0],
                scale: 1
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut" 
              }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(0, 102, 255, 0.6) 30%, transparent 70%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
        phase === "portal" ? "opacity-0" : "opacity-100"
      }`}>
        <div className="w-48 h-1 bg-slate-800/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #0066ff, #33ccff, #00ffcc)',
            }}
            initial={{ width: "0%" }}
            animate={{
              width: phase === "entrance" ? "20%" : 
                     phase === "logo" ? `${20 + (messageIndex + 1) * 26}%` : "100%"
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xs text-slate-400 mt-2 tracking-wider"
        >
          {phase === "logo" ? `${messageIndex + 1} / ${messages.length}` : "جاري التحميل..."}
        </motion.p>
      </div>
    </div>
  )
}
