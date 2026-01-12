"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CosmicIntroProps {
  onComplete: () => void
}

const messages = [
  "نقدم عالماً من الاستضافة المتقدمة",
  "حيث تلتقي السرعة بالموثوقية",
  "وابدأ رحلتك الرقمية معنا"
]

type Phase = "loading" | "logo-3d" | "messages" | "transition"

export function CosmicIntro({ onComplete }: CosmicIntroProps) {
  const [phase, setPhase] = useState<Phase>("loading")
  const [messageIndex, setMessageIndex] = useState(0)
  const logoRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle window resize for 3D effect
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && logoRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const centerX = containerRect.width / 2
        const centerY = containerRect.height / 2
        
        // Update CSS variables for 3D effect
        containerRef.current.style.setProperty('--center-x', `${centerX}px`)
        containerRef.current.style.setProperty('--center-y', `${centerY}px`)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation timeline
  useEffect(() => {
    const timeline = [
      { delay: 1000, action: () => setPhase("logo-3d") },
      { delay: 3500, action: () => setPhase("messages") },
      { delay: 4500, action: () => setMessageIndex(1) },
      { delay: 5500, action: () => setMessageIndex(2) },
      { delay: 7000, action: () => setPhase("transition") },
      { delay: 7500, action: onComplete }
    ]

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay))
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 z-[100] overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Ambient Light */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-900/10 to-cyan-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-900/10 to-slate-800/5 rounded-full blur-3xl"></div>
      </div>

      {/* Loading Phase */}
      <AnimatePresence mode="wait">
        {phase === "loading" && (
          <motion.div
            key="loading"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Loading Rings */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 border-2 border-cyan-500/15 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
                <motion.div
                  className="absolute inset-8 border-2 border-purple-500/10 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                />
                
                {/* Center Dot */}
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Logo Phase */}
      <AnimatePresence mode="wait">
        {phase === "logo-3d" && (
          <motion.div
            key="logo-3d"
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 3D Container */}
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* 3D Logo Wrapper */}
              <motion.div
                ref={logoRef}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{
                  rotateY: [0, 180, 360],
                  rotateX: [0, 10, 0],
                  scale: [0.8, 1, 1]
                }}
                transition={{
                  rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 1, ease: "easeOut" }
                }}
              >
                {/* Logo Glow */}
                <motion.div
                  className="absolute -inset-20 bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Logo Image with 3D Effect */}
                <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                  <motion.img
                    src="https://a.top4top.io/p_3605ck8qd0.png"
                    alt="X-Host Logo"
                    className="w-48 h-48 md:w-56 md:h-56 object-contain relative z-10"
                    style={{
                      filter: 'drop-shadow(0 0 60px rgba(0, 102, 255, 0.4))',
                      transform: 'translateZ(50px)'
                    }}
                    animate={{
                      filter: [
                        'drop-shadow(0 0 60px rgba(0, 102, 255, 0.4))',
                        'drop-shadow(0 0 80px rgba(0, 102, 255, 0.6))',
                        'drop-shadow(0 0 60px rgba(0, 102, 255, 0.4))'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* 3D Depth Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-3xl blur-xl"
                    style={{ transform: 'translateZ(-20px)' }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Floating Orbs around Logo */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: '4px',
                      height: '4px',
                      background: 'linear-gradient(to right, #0066ff, #33ccff)',
                      borderRadius: '50%',
                      transform: `rotateY(${i * 45}deg) translateZ(120px)`
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>

              {/* Reflection Effect */}
              <motion.div
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-8"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 102, 255, 0.2), transparent)',
                  transform: 'rotateX(60deg)',
                  filter: 'blur(10px)'
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Brand Name with 3D Text */}
            <motion.div
              className="mt-12 relative"
              style={{ transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: '0 0 80px rgba(0, 102, 255, 0.3)',
                  transform: 'translateZ(30px)'
                }}
                animate={{
                  textShadow: [
                    '0 0 80px rgba(0, 102, 255, 0.3)',
                    '0 0 100px rgba(0, 102, 255, 0.5)',
                    '0 0 80px rgba(0, 102, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                X-Host
              </motion.h1>

              {/* 3D Text Shadow */}
              <div
                className="absolute inset-0 text-5xl md:text-6xl font-bold tracking-tight opacity-20 blur-sm"
                style={{
                  background: "linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  transform: 'translateY(4px) translateZ(-20px)'
                }}
              >
                X-Host
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-6 text-lg text-slate-300/80 tracking-wider uppercase font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              استضافة المستقبل الرقمي
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages Phase */}
      <AnimatePresence mode="wait">
        {phase === "messages" && (
          <motion.div
            key={`message-${messageIndex}`}
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Background Glow */}
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 60%)'
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-relaxed max-w-3xl"
              style={{
                background: "linear-gradient(135deg, #0066ff 0%, #33ccff 50%, #00ffcc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {messages[messageIndex]}
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition Phase */}
      <AnimatePresence>
        {phase === "transition" && (
          <motion.div
            key="transition"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0 }}
              animate={{ scale: 50 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #ffffff 0%, rgba(0, 102, 255, 0.8) 50%, transparent 70%)',
                  boxShadow: '0 0 100px 50px rgba(255, 255, 255, 0.2)'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          {/* Progress Dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  (phase === "loading" && dot === 0) ||
                  (phase === "logo-3d" && dot === 1) ||
                  (phase === "messages" && dot >= 2 && dot <= 2 + messageIndex) ||
                  (phase === "transition" && dot === 3)
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-slate-700"
                }`}
                animate={{
                  scale: (phase === "logo-3d" && dot === 1) ||
                         (phase === "messages" && dot === 2 + messageIndex) ||
                         (phase === "transition" && dot === 3)
                    ? [1, 1.2, 1]
                    : 1
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            ))}
          </div>

          {/* Progress Text */}
          <motion.p
            className="text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {phase === "loading" && "جاري التهيئة..."}
            {phase === "logo-3d" && "X-Host"}
            {phase === "messages" && `${messageIndex + 1}/${messages.length}`}
            {phase === "transition" && "جارٍ التحويل..."}
          </motion.p>
        </div>
      </div>
    </div>
  )
                      }
