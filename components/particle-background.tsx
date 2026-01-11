"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Array<Particle>>([])

  const init = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const count = Math.min(40, Math.floor((canvas.width * canvas.height) / 30000))

    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.2,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    init()

    const animate = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > width) p.speedX *= -1
        if (p.y < 0 || p.y > height) p.speedY *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 200, 255, ${p.opacity})`
        ctx.fill()
      }

      ctx.strokeStyle = "rgba(100, 200, 255, 0.08)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy

          if (distSq < 20000) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => init()
    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [init])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1] opacity-25" />
}
