"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Rocket, Zap, Shield, Globe, Play } from "lucide-react"
import { useTheme } from "../theme-provider"
import Link from "next/link"

export function HeroSection() {
  const { t } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full quantum-glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              {t("جميع الأنظمة تعمل بكفاءة", "All Systems Operational")}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <motion.span
              className="inline-block text-cosmic-gradient"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0, 102, 255, 0.5)",
                  "0 0 40px rgba(0, 102, 255, 0.8)",
                  "0 0 20px rgba(0, 102, 255, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              X-Host
            </motion.span>
            <br />
            <span className="text-foreground">{t("كون رقمي للاستضافة", "Digital Hosting Universe")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t(
              "نحن لا نستضيف فقط... نحن نُشغّل المستقبل. سيرفراتك تبدأ هنا، في عالم من القوة والسرعة والتحكم الكامل.",
              "We don't just host... we power the future. Your servers start here, in a world of power, speed, and complete control.",
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://x-host.cloud/"
                target="_blank"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg overflow-hidden shadow-lg shadow-primary/25"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {t("ابدأ رحلتك الكونية", "Start Your Cosmic Journey")}
                </span>
              </Link>
            </motion.div>

            <Link
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full font-medium hover:bg-secondary/50 transition-colors"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {t("اكتشف الخدمات", "Explore Services")}
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Zap,
                titleAr: "سرعة فائقة",
                titleEn: "Ultra Fast",
                descAr: "أداء صاروخي يتفوق على المنافسين",
                descEn: "Rocket performance that beats competitors",
                color: "#ffcc00",
              },
              {
                icon: Shield,
                titleAr: "حماية كونية",
                titleEn: "Cosmic Protection",
                descAr: "أمان متعدد الطبقات لبياناتك",
                descEn: "Multi-layer security for your data",
                color: "#00ffcc",
              },
              {
                icon: Globe,
                titleAr: "انتشار عالمي",
                titleEn: "Global Reach",
                descAr: "خوادم موزعة حول العالم",
                descEn: "Servers distributed worldwide",
                color: "#0066ff",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="quantum-glass rounded-2xl p-6 text-center group cursor-pointer"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors"
                  style={{ backgroundColor: `${feature.color}15` }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {t(feature.titleAr, feature.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground">{t(feature.descAr, feature.descEn)}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trusted By Section */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-20">
            <p className="text-sm text-muted-foreground mb-6">
              {t("موثوق من آلاف المطورين", "Trusted by thousands of developers")}
            </p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-20 h-8 bg-muted rounded" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ["20%", "40%", "20%"] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 bg-muted-foreground/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
