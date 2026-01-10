"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Zap, Clock, Users, Award, Headphones } from "lucide-react"
import { useTheme } from "../theme-provider"
import { cosmicCopy } from "@/data/cosmic.copy"

const stats = [
  { value: 10000, suffix: "+", id: "clients" },
  { value: 50000, suffix: "+", id: "servers" },
  { value: 99.9, suffix: "%", id: "uptime" },
  { value: 24, suffix: "/7", id: "support" },
]

const featureMap = {
  performance: { icon: Zap, color: "#ffcc00" },
  protection: { icon: Shield, color: "#00ffcc" },
  uptime: { icon: Clock, color: "#0066ff" },
  support: { icon: Headphones, color: "#ff3366" },
  community: { icon: Users, color: "#a855f7" },
  quality: { icon: Award, color: "#06b6d4" },
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="text-3xl md:text-4xl font-bold text-cosmic-gradient"
    >
      {isInView && (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {value.toLocaleString()}
          {suffix}
        </motion.span>
      )}
    </motion.span>
  )
}

export function AboutSection() {
  const { t } = useTheme()

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full quantum-glass text-sm text-primary mb-4">
            {t(cosmicCopy.about.badge)}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t(cosmicCopy.about.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(cosmicCopy.about.description)}
          </p>
        </motion.div>

        {/* Stats with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="quantum-glass rounded-2xl p-6 text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-muted-foreground mt-2">
                {t(cosmicCopy.about.stats.find((item) => item.id === stat.id)!.label)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cosmicCopy.about.features.map((feature, index) => {
            const { icon: Icon, color } = featureMap[feature.id]
            return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="quantum-glass rounded-2xl p-6 group cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${color}15` }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-7 h-7" style={{ color }} />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {t(feature.title)}
              </h3>
              <p className="text-muted-foreground">{t(feature.description)}</p>
            </motion.div>
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 quantum-glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(0, 102, 255, 0.5), transparent 50%), radial-gradient(circle at 70% 70%, rgba(102, 0, 255, 0.5), transparent 50%)",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cosmic-gradient">
              {t(cosmicCopy.about.missionTitle)}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t(cosmicCopy.about.missionQuote)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
