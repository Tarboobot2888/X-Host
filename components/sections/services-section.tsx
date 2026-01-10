"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Globe, Monitor, Bot, Server, Settings, ChevronRight } from "lucide-react"
import { useTheme } from "../theme-provider"
import Link from "next/link"
import { cosmicCopy } from "@/data/cosmic.copy"
import { cosmicLinks } from "@/data/cosmic.links"
import { cosmicServices } from "@/data/cosmic.services"
import { useSelectionStore } from "@/stores/selection-store"

export function ServicesSection() {
  const { t } = useTheme()
  const [activeService, setActiveService] = useState<string | null>(null)
  const setServicePath = useSelectionStore((state) => state.setServicePath)
  const setSelectedPlan = useSelectionStore((state) => state.setSelectedPlan)
  const touchSelection = useSelectionStore((state) => state.touch)

  const serviceIcons = {
    code: Code2,
    globe: Globe,
    monitor: Monitor,
    bot: Bot,
    server: Server,
    settings: Settings,
  }

  const handleSubServiceClick = (path: string) => {
    setServicePath(path.split("/"))
    setSelectedPlan(null)
    touchSelection()
  }

  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full quantum-glass text-sm text-primary mb-4">
            {t(cosmicCopy.services.badge)}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t(cosmicCopy.services.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(cosmicCopy.services.description)}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cosmicServices.map((service, index) => {
            const Icon = serviceIcons[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  whileHover={{ y: -5 }}
                  className="quantum-glass rounded-2xl p-6 cursor-pointer h-full"
                  style={{
                    borderColor: activeService === service.id ? service.color : undefined,
                    borderWidth: activeService === service.id ? "2px" : undefined,
                  }}
                >
                  {/* Service Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-semibold mb-2">{t(service.title)}</h3>
                  <p className="text-muted-foreground mb-4">{t(service.description)}</p>

                  {/* Expand Button */}
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span>{t(cosmicCopy.services.viewOptions)}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${activeService === service.id ? "rotate-90" : ""}`}
                    />
                  </div>

                  {/* Sub Services */}
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-border"
                      >
                        <div className="space-y-2">
                          {service.subServices.map((sub) => (
                            <Link
                              key={sub.id}
                              href={`${cosmicLinks.cloud}?service=${encodeURIComponent(sub.path)}`}
                              target="_blank"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                              onClick={() => handleSubServiceClick(sub.path)}
                            >
                              <span className="text-lg">{sub.icon}</span>
                              <span>{t(sub.label)}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Promo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 quantum-glass rounded-3xl p-8 md:p-12 text-center overflow-hidden relative"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at center, rgba(0, 102, 255, 0.5), transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium mb-4">
              {t(cosmicCopy.services.promoBadge)}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t(cosmicCopy.services.promoTitle)}
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t(cosmicCopy.services.promoDescription)}
            </p>
            <Link
              href={cosmicLinks.cloud}
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              {t(cosmicCopy.services.promoCta)}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
