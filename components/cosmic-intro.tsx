"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CosmicIntroProps {
  onComplete: () => void
}

type Phase = "init" | "logo-3d" | "reveal" | "transition" | "complete"

export function CosmicIntro({ onComplete }: CosmicIntroProps) {
  const [phase, setPhase] = useState<Phase>("init")
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Detect client-side for 3D effects
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Timeline sequence
  useEffect(() => {
    const timeline = [
      { delay: 1000, action: () => setPhase("logo-3d") },
      { delay: 3500, action: () => setPhase("reveal") },
      { delay: 6000, action: () => setPhase("transition") },
      { delay: 7000, action: () => onComplete() },
    ]

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay))
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Nebula Effect */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-full h-full"
            animate={{
              background: [
                "radial-gradient(circle at 30% 20%, rgba(0, 102, 255, 0.1) 0%, transparent 40%)",
                "radial-gradient(circle at 70% 80%, rgba(0, 102, 255, 0.1) 0%, transparent 40%)",
                "radial-gradient(circle at 30% 20%, rgba(0, 102, 255, 0.1) 0%, transparent 40%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Subtle Grid for Depth */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* 3D Logo Scene */}
      <AnimatePresence mode="wait">
        {phase === "init" && (
          <motion.div
            key="init"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.5, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              {/* 3D Cube Container */}
              <div className="relative w-64 h-64 perspective-1000">
                {/* Front Face */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ 
                    rotateX: [0, 5, -5, 0],
                    rotateY: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center"
                  >
                    <motion.div
                      className="text-4xl font-bold mb-2"
                      animate={{ 
                        color: ["#0066ff", "#33ccff", "#00ffcc", "#0066ff"]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      X
                    </motion.div>
                    <div className="text-sm text-cyan-300/70 tracking-widest">HOST</div>
                  </motion.div>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(0, 102, 255, 0.3)",
                      "0 0 60px rgba(0, 102, 255, 0.5)",
                      "0 0 40px rgba(0, 102, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Orbiting Rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-blue-400/20"
                  style={{
                    top: `-${(i + 1) * 20}px`,
                    left: `-${(i + 1) * 20}px`,
                    right: `-${(i + 1) * 20}px`,
                    bottom: `-${(i + 1) * 20}px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 12 + i * 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {phase === "logo-3d" && (
          <motion.div
            key="logo-3d"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-96 h-96 perspective-1000">
              {/* 3D Logo Transformation */}
              <motion.div
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ scale: 0.8, rotateY: 0 }}
                animate={{ 
                  scale: 1,
                  rotateY: 360,
                  rotateX: [0, 15, 0, -15, 0],
                }}
                transition={{ 
                  rotateY: { duration: 6, ease: "linear" },
                  rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 1, ease: "easeOut" }
                }}
              >
                {/* Main 3D Logo */}
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-blue-600/30 backdrop-blur-md border-2 border-blue-400/40 rounded-3xl"
                    animate={{ 
                      boxShadow: [
                        "inset 0 0 60px rgba(0, 102, 255, 0.2), 0 0 80px rgba(0, 102, 255, 0.3)",
                        "inset 0 0 80px rgba(0, 102, 255, 0.3), 0 0 100px rgba(0, 102, 255, 0.4)",
                        "inset 0 0 60px rgba(0, 102, 255, 0.2), 0 0 80px rgba(0, 102, 255, 0.3)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {/* Inner 3D Detail */}
                    <div className="absolute inset-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-transparent to-blue-500/10" />
                    
                    {/* Logo Mark */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="relative">
                        <motion.div
                          className="text-7xl md:text-8xl font-bold tracking-tighter"
                          animate={{ 
                            color: ["#0066ff", "#33ccff", "#00ffcc", "#0066ff"]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          X
                        </motion.div>
                        <motion.div
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xl text-cyan-300/70 tracking-widest"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          HOST
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                  style={{
                    left: `${50 + Math.cos((i * Math.PI * 2) / 12) * 45}%`,
                    top: `${50 + Math.sin((i * Math.PI * 2) / 12) * 45}%`,
                  }}
                  animate={{
                    x: [0, Math.cos((i * Math.PI * 2) / 12) * 20, 0],
                    y: [0, Math.sin((i * Math.PI * 2) / 12) * 20, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {phase === "reveal" && (
          <motion.div
            key="reveal"
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tagline Reveal */}
            <motion.div
              className="text-center space-y-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                animate={{ 
                  background: [
                    "linear-gradient(135deg, #0066ff 0%, #33ccff 100%)",
                    "linear-gradient(135deg, #33ccff 0%, #00ffcc 100%)",
                    "linear-gradient(135deg, #00ffcc 0%, #0066ff 100%)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                استضافة <span className="block">بمفهوم جديد</span>
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-cyan-300/80 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                حيث يلتقي الإبداع بالتكنولوجيا المتقدمة
              </motion.p>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-48"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-1 bg-blue-500/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
              <motion.p
                className="text-center text-sm text-cyan-300/60 mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                تجهيز النظام...
              </motion.p>
            </motion.div>
          </motion.div>
        )}

        {phase === "transition" && (
          <motion.div
            key="transition"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Portal Effect */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1.5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className="w-4 h-4 rounded-full bg-white"
                animate={{
                  scale: [1, 200, 1],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                style={{
                  background: "radial-gradient(circle, #ffffff 0%, rgba(0, 102, 255, 0.8) 50%, transparent 70%)",
                  boxShadow: "0 0 100px 50px rgba(255, 255, 255, 0.2)",
                }}
              />
            </motion.div>

            {/* Final Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-blue-500/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Audio Indicator (optional) */}
      {isClient && phase === "transition" && (
        <audio autoPlay>
          <source src="/sounds/transition.mp3" type="audio/mpeg" />
        </audio>
      )}
    </div>
  )
}
