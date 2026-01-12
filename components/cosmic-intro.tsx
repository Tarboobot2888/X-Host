"use client"

import type React from "react"
import { useEffect, useState, useCallback, memo, useRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"

interface CosmicIntroProps {
  onComplete: () => void
}

const messages = [
  "حيث تلتقي التكنولوجيا بالإبداع",
  "استضافة المستقبل تبدأ هنا",
  "قوة - سرعة - موثوقية"
]

type Phase = "entrance" | "logo3d" | "messages" | "transition" | "complete"

const StarParticle = memo(({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => {
  const controls = useAnimation()
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0.5, 1.2, 0.8, 1.1, 0.5],
        transition: {
          duration: 3,
          delay: delay,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })
    }
    sequence()
  }, [controls, delay])

  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-blue-300/80 via-cyan-300/60 to-white/90"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        filter: "blur(0.5px)",
      }}
      animate={controls}
    />
  )
})
StarParticle.displayName = "StarParticle"

// Create dynamic particles for stars
const starParticles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  delay: Math.random() * 2,
}))

// Nebula particles
const nebulaParticles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 80 + 40,
  color: i % 3 === 0 ? "rgba(0, 102, 255, 0.1)" : 
         i % 3 === 1 ? "rgba(102, 0, 255, 0.08)" : 
         "rgba(0, 204, 255, 0.06)",
  blur: Math.random() * 60 + 40,
}))

export function CosmicIntro({ onComplete }: CosmicIntroProps) {
  const [phase, setPhase] = useState<Phase>("entrance")
  const [messageIndex, setMessageIndex] = useState(0)
  const [cameraAngle, setCameraAngle] = useState({ x: 0, y: 0 })
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  // Handle camera movement on mouse move
  useEffect(() => {
    if (phase === "logo3d") {
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10
        const y = (e.clientY / window.innerHeight - 0.5) * 10
        setCameraAngle({ x, y })
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [phase])

  useEffect(() => {
    const timeline: { delay: number; action: () => void }[] = [
      { delay: 1000, action: () => setPhase("logo3d") },
      { delay: 3000, action: () => setPhase("messages") },
      { delay: 3500, action: () => setMessageIndex(1) },
      { delay: 4500, action: () => setMessageIndex(2) },
      { delay: 5500, action: () => setPhase("transition") },
      { delay: 6500, action: () => setPhase("complete") },
      { delay: 7000, action: handleComplete },
    ]

    const timers = timeline.map(({ delay, action }) => setTimeout(action, delay))
    return () => timers.forEach(clearTimeout)
  }, [handleComplete])

  // Play video when in logo3d phase
  useEffect(() => {
    if (videoRef.current && phase === "logo3d") {
      videoRef.current.play().catch(console.error)
    }
  }, [phase])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden z-50">
      {/* Cinematic Black Bars */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black/80 z-40"></div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/80 z-40"></div>

      {/* Animated cosmic background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 20%, rgba(0, 102, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(102, 0, 255, 0.15) 0%, transparent 50%), linear-gradient(135deg, #050510 0%, #0a0a1a 100%)",
            "radial-gradient(circle at 70% 30%, rgba(0, 102, 255, 0.25) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(102, 0, 255, 0.2) 0%, transparent 50%), linear-gradient(135deg, #050510 0%, #0a0a1a 100%)",
            "radial-gradient(circle at 30% 20%, rgba(0, 102, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(102, 0, 255, 0.15) 0%, transparent 50%), linear-gradient(135deg, #050510 0%, #0a0a1a 100%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Nebula clouds */}
      <div className="absolute inset-0">
        {nebulaParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              background: particle.color,
              filter: `blur(${particle.blur}px)`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Star particles */}
      <div className="absolute inset-0">
        {starParticles.map((particle) => (
          <StarParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Shooting stars */}
      <AnimatePresence>
        {phase === "logo3d" && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`shooting-${i}`}
                className="absolute w-1 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: 0,
                }}
                animate={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* 3D Camera Container */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: cameraAngle.y,
          rotateY: cameraAngle.x,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {/* Entrance Phase - Camera Zoom In */}
          {phase === "entrance" && (
            <motion.div
              key="entrance"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Light rays */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`ray-${i}`}
                    className="absolute w-1 h-40 origin-center"
                    style={{
                      background: "linear-gradient(to bottom, transparent, rgba(0, 102, 255, 0.5), transparent)",
                      transform: `rotate(${i * 45}deg)`,
                      left: "50%",
                      top: "50%",
                      marginLeft: "-0.5px",
                      marginTop: "-20px",
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Logo 3D Phase */}
          {phase === "logo3d" && (
            <motion.div
              key="logo3d"
              className="relative flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 3D Logo Container */}
              <motion.div
                className="relative"
                animate={{
                  rotateY: [0, 10, -10, 0],
                  rotateX: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glowing Orb behind logo */}
                <motion.div
                  className="absolute -inset-20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: "radial-gradient(circle, rgba(0, 102, 255, 0.6) 0%, rgba(0, 102, 255, 0.2) 40%, transparent 70%)",
                  }}
                />

                {/* Animated Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute rounded-full border"
                    style={{
                      width: 200 + i * 100,
                      height: 200 + i * 100,
                      borderColor: `rgba(0, ${150 + i * 50}, 255, ${0.2 - i * 0.05})`,
                      top: "50%",
                      left: "50%",
                      marginTop: -(100 + i * 50),
                      marginLeft: -(100 + i * 50),
                    }}
                    animate={{ rotateY: 360 }}
                    transition={{
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}

                {/* Logo Container with Depth */}
                <motion.div
                  className="relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Logo Shadow/Depth Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl blur-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 102, 255, 0.8) 0%, rgba(102, 0, 255, 0.6) 100%)",
                      transform: "translateZ(-30px)",
                    }}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Main Logo Image */}
                  <motion.div
                    className="relative z-10"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.img
                      src="https://a.top4top.io/p_3605ck8qd0.png"
                      alt="X-Host Logo"
                      className="w-64 h-64 object-contain"
                      style={{
                        filter: `
                          drop-shadow(0 0 40px rgba(0, 102, 255, 0.8))
                          drop-shadow(0 0 80px rgba(0, 102, 255, 0.4))
                          drop-shadow(0 0 120px rgba(0, 102, 255, 0.2))
                        `,
                      }}
                      animate={{
                        filter: [
                          "drop-shadow(0 0 40px rgba(0, 102, 255, 0.8)) drop-shadow(0 0 80px rgba(0, 102, 255, 0.4)) drop-shadow(0 0 120px rgba(0, 102, 255, 0.2))",
                          "drop-shadow(0 0 60px rgba(0, 102, 255, 1)) drop-shadow(0 0 100px rgba(0, 102, 255, 0.6)) drop-shadow(0 0 140px rgba(0, 102, 255, 0.3))",
                          "drop-shadow(0 0 40px rgba(0, 102, 255, 0.8)) drop-shadow(0 0 80px rgba(0, 102, 255, 0.4)) drop-shadow(0 0 120px rgba(0, 102, 255, 0.2))",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Brand Name with 3D Effect */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.h1
                  className="text-6xl md:text-7xl font-bold tracking-tighter"
                  style={{
                    background: "linear-gradient(135deg, #0066ff 0%, #33ccff 40%, #00ffcc 80%, #6600ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(0, 102, 255, 0.5)",
                  }}
                  animate={{
                    textShadow: [
                      "0 0 30px rgba(0, 102, 255, 0.5)",
                      "0 0 50px rgba(0, 102, 255, 0.8)",
                      "0 0 30px rgba(0, 102, 255, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  X-Host
                </motion.h1>
                <motion.p
                  className="mt-4 text-lg text-cyan-300/80 tracking-widest uppercase font-light"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Premium Hosting Solutions
                </motion.p>
              </motion.div>

              {/* Floating tech elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`tech-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                  style={{
                    top: `${30 + Math.cos((i * Math.PI * 2) / 6) * 25}%`,
                    left: `${50 + Math.sin((i * Math.PI * 2) / 6) * 25}%`,
                  }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 0.9, 0.4],
                    y: [0, -10, 0],
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
          )}

          {/* Messages Phase */}
          {phase === "messages" && (
            <motion.div
              key="messages"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={messageIndex}
                  className="text-center px-8 max-w-4xl"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Message background pulse */}
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      background: "radial-gradient(circle, rgba(0, 102, 255, 0.4) 0%, transparent 70%)",
                    }}
                  />

                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug"
                    style={{
                      background: "linear-gradient(135deg, #0066ff 0%, #33ccff 40%, #00ffcc 80%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 50px rgba(0, 102, 255, 0.4)",
                    }}
                  >
                    {messages[messageIndex]}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* Transition Phase - Camera Zoom Out */}
          {phase === "transition" && (
            <motion.div
              key="transition"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 50 }}
                transition={{ duration: 1, ease: "easeIn" }}
                style={{
                  background: "radial-gradient(circle, white 0%, rgba(0, 102, 255, 0.8) 30%, transparent 70%)",
                  boxShadow: "0 0 200px 100px rgba(255, 255, 255, 0.4)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Cinematic Frame Counter (Optional) */}
      <div className="absolute bottom-4 right-4 text-xs text-white/30 font-mono tracking-wider">
        24FPS
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="h-1 w-64 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: phase === "entrance" ? "15%" :
                     phase === "logo3d" ? "45%" :
                     phase === "messages" ? `${45 + (messageIndex + 1) * 18}%` :
                     phase === "transition" ? "100%" : "100%"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              background: "linear-gradient(90deg, #0066ff, #33ccff, #00ffcc, #6600ff)",
            }}
          />
        </div>
        <motion.p 
          className="text-center text-xs text-cyan-300/60 mt-2 tracking-wider"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {phase === "entrance" ? "جاري التهيئة..." :
           phase === "logo3d" ? "تحميل الكون الرقمي..." :
           phase === "messages" ? `الرسالة ${messageIndex + 1} من 3` :
           "جاري الانتقال..."}
        </motion.p>
      </div>
    </div>
  )
              }
