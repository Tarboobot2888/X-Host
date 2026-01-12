"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CosmicIntroProps {
  onComplete: () => void
}

const messages = ["نحن لا نستضيف… نحن نُشغّل المستقبل", "سيرفرك يبدأ هنا", "قوة – سرعة – تحكم كامل"]

type Phase = "logo" | "messages" | "portal"

export function CosmicIntro({ onComplete }: CosmicIntroProps) {
  const [phase, setPhase] = useState<Phase>("logo")
  const [messageIndex, setMessageIndex] = useState(0)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  useEffect(() => {
    const timeline = [
      { delay: 2000, action: () => setPhase("messages") },
      { delay: 4000, action: () => setMessageIndex(1) },
      { delay: 6000, action: () => setMessageIndex(2) },
      { delay: 8000, action: () => setPhase("portal") },
      { delay: 8500, action: handleComplete },
    ]

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay))
    return () => timers.forEach(clearTimeout)
  }, [handleComplete])

  // Create optimized particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    delay: i * 0.2,
  }))

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-900 to-slate-950 z-50 overflow-hidden">
      {/* Enhanced 3D Background with subtle gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, rgba(0, 102, 255, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(102, 0, 255, 0.05) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Static grid pattern for depth */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
      </div>

      {/* Optimized Particles with reduced count */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `subtle-pulse 3s ease-in-out ${particle.delay}s infinite`,
              willChange: 'opacity, transform'
            }}
          />
        ))}
      </div>

      {/* Logo Phase - Enhanced 3D effect */}
      <AnimatePresence mode="wait">
        {phase === "logo" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* 3D Background Effect with fewer layers */}
            <motion.div
              className="absolute w-64 h-64 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
                filter: 'blur(20px)',
                willChange: 'transform, opacity'
              }}
            />

            {/* Single rotating ring for better performance */}
            <motion.div
              className="absolute w-56 h-56 rounded-full border border-blue-500/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ willChange: 'transform' }}
            />

            {/* Main Logo Container */}
            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 0.2
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* 3D Logo Container */}
              <div className="relative">
                {/* Back Glow */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 60px rgba(0, 102, 255, 0.4)',
                      '0 0 80px rgba(0, 102, 255, 0.6)',
                      '0 0 60px rgba(0, 102, 255, 0.4)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ willChange: 'box-shadow' }}
                />
                
                {/* Logo with 3D Perspective */}
                <motion.div
                  className="relative"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                  animate={{ 
                    rotateY: [0, 5, -5, 0],
                    rotateX: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src="https://a.top4top.io/p_3605ck8qd0.png"
                    alt="X-Host Logo"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
                    style={{
                      filter: 'drop-shadow(0 10px 30px rgba(0, 102, 255, 0.5))',
                      transform: 'translateZ(20px)',
                      willChange: 'transform'
                    }}
                  />
                  
                  {/* Reflection effect */}
                  <div 
                    className="absolute inset-0 -z-5 opacity-20"
                    style={{
                      background: 'linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.2) 50%, transparent 60%)',
                      maskImage: 'url(https://a.top4top.io/p_3605ck8qd0.png)',
                      maskSize: '100% 100%',
                      transform: 'translateZ(-10px) rotateX(60deg) scaleY(-1)',
                      transformOrigin: 'center'
                    }}
                  />
                </motion.div>

                {/* Floating orb effects - reduced count */}
                {[0, 90, 180, 270].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(70px)`,
                      transformOrigin: 'center',
                      willChange: 'transform'
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Brand Name with 3D text effect */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
                      X-Host
                    </span>
                    {/* 3D text shadow effect */}
                    <span 
                      className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600/40 via-cyan-600/40 to-blue-600/40 blur-sm"
                      style={{ transform: 'translateZ(-10px)' }}
                    >
                      X-Host
                    </span>
                  </span>
                </h1>
                
                <motion.p
                  className="text-sm text-cyan-400/80 tracking-wider uppercase font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  Digital Universe
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages Phase - Optimized */}
      <AnimatePresence mode="wait">
        {phase === "messages" && (
          <motion.div
            key={messageIndex}
            className="absolute inset-0 flex items-center justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Subtle background pulse */}
            <motion.div
              className="absolute w-64 h-64 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 60%)',
                willChange: 'transform, opacity'
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-relaxed max-w-3xl px-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                background: 'linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                willChange: 'transform, opacity'
              }}
            >
              {messages[messageIndex]}
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portal Transition Phase - Optimized */}
      <AnimatePresence>
        {phase === "portal" && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute rounded-full"
              initial={{ width: 4, height: 4, opacity: 1 }}
              animate={{
                width: 2000,
                height: 2000,
                opacity: [1, 0.9, 0]
              }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(0, 102, 255, 0.4) 30%, transparent 70%)',
                willChange: 'transform, opacity'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Progress Indicator */}
      <motion.div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-48 ${phase === "portal" ? "opacity-0" : "opacity-100"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="h-1 bg-slate-700/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #0066ff, #33ccff, #00ffcc)',
              willChange: 'width'
            }}
            initial={{ width: "0%" }}
            animate={{
              width: phase === "logo" ? "25%" : phase === "messages" ? `${25 + (messageIndex + 1) * 25}%` : "100%"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <p className="text-center text-xs text-slate-400 mt-2 tracking-wide">
          {phase === "logo" && "جاري التهيئة..."}
          {phase === "messages" && `مرحلة ${messageIndex + 1} من 3`}
        </p>
      </motion.div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes subtle-pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}