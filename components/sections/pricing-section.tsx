"use client"

import { useMemo, useState, memo } from "react"
import { motion } from "framer-motion"
import { Cpu, HardDrive, Database, Zap, Infinity, Rocket, Star } from "lucide-react"
import { useTheme } from "../theme-provider"
import Link from "next/link"
import { cosmicCopy } from "@/data/cosmic.copy"
import { cosmicLinks } from "@/data/cosmic.links"
import { cosmicPlans } from "@/data/cosmic.plans"
import { useSelectionStore } from "@/stores/selection-store"

interface PlanCardProps {
  plan: (typeof cosmicPlans)[0]
  index: number
  t: (text: { ar: string; en: string }) => string
}

const PlanCard = memo(function PlanCard({ plan, index, t }: PlanCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLaunching, setIsLaunching] = useState(false)
  const selectedServicePath = useSelectionStore((state) => state.servicePath)
  const setSelectedPlan = useSelectionStore((state) => state.setSelectedPlan)
  const touchSelection = useSelectionStore((state) => state.touch)

  const redirectUrl = useMemo(() => {
    const url = new URL(cosmicLinks.cloud)
    url.searchParams.set("plan", plan.id)
    if (selectedServicePath.length > 0) {
      url.searchParams.set("service", selectedServicePath.join("/"))
    }
    return url.toString()
  }, [plan.id, selectedServicePath])

  const handleLaunch = () => {
    setIsLaunching(true)
    setSelectedPlan(plan.id)
    touchSelection()
    setTimeout(() => {
      window.open(redirectUrl, "_blank")
      setIsLaunching(false)
    }, 600)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
            <Star className="w-3 h-3" />
            {t(cosmicCopy.pricing.popular)}
          </span>
        </div>
      )}

      <div
        className={`quantum-glass rounded-2xl p-5 h-full flex flex-col relative overflow-hidden transition-transform duration-300 ${
          plan.popular ? "ring-2 ring-primary" : ""
        } ${isHovered ? "-translate-y-2" : ""}`}
      >
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${plan.color}15, transparent 70%)`,
            }}
          />
        )}

        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center relative"
            style={{ backgroundColor: `${plan.color}25` }}
          >
            {plan.infinity ? (
              <Infinity className="w-5 h-5" style={{ color: plan.color }} />
            ) : (
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: plan.color }} />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-sm">{t(plan.name)}</h3>
            <p className="text-xs text-muted-foreground">{t(plan.subtitle)}</p>
          </div>
        </div>

        <div className="mb-5 relative z-10">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{plan.price}</span>
            <span className="text-sm text-muted-foreground">{t(cosmicCopy.pricing.currency)}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            / {plan.period === "week" ? t(cosmicCopy.pricing.periodWeek) : t(cosmicCopy.pricing.periodMonth)}
          </span>
        </div>

        <div className="space-y-2.5 flex-1 mb-5 relative z-10">
          <div className="flex items-center gap-2 text-sm" title={t(cosmicCopy.pricing.tooltipCpu)}>
            <Cpu className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">
              {plan.specs.cpu === 0 ? t(cosmicCopy.pricing.unlimited) : `${plan.specs.cpu} ${t(cosmicCopy.pricing.cpuUnit)}`}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm" title={t(cosmicCopy.pricing.tooltipRam)}>
            <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-muted-foreground">
              {plan.specs.ram} {t(cosmicCopy.pricing.ramUnit)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm" title={t(cosmicCopy.pricing.tooltipDisk)}>
            <HardDrive className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span className="text-muted-foreground">
              {plan.specs.disk} {t(cosmicCopy.pricing.diskUnit)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm" title={t(cosmicCopy.pricing.tooltipDb)}>
            <Database className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span className="text-muted-foreground">
              {plan.specs.db} {t(cosmicCopy.pricing.dbUnit)}
            </span>
          </div>
        </div>

        <button
          onClick={handleLaunch}
          disabled={isLaunching}
          className={`relative w-full py-2.5 rounded-xl font-medium text-sm transition-all ${
            plan.popular
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <Rocket className={`w-4 h-4 ${isLaunching ? "animate-bounce" : ""}`} />
            {isLaunching ? t(cosmicCopy.pricing.launching) : t(cosmicCopy.pricing.launch)}
          </span>
        </button>
      </div>
    </motion.div>
  )
})

export function PricingSection() {
  const { t } = useTheme()

  return (
    <section id="pricing" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full quantum-glass text-sm text-primary mb-4">
            {t(cosmicCopy.pricing.badge)}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t(cosmicCopy.pricing.title)}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(cosmicCopy.pricing.description)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cosmicPlans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} t={t} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href={cosmicLinks.cloud}
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
          >
            {t(cosmicCopy.pricing.viewAll)}
            <span>←</span>
          </Link>
          <p className="text-xs text-muted-foreground mt-2">{t(cosmicCopy.pricing.compareHint)}</p>
        </motion.div>
      </div>
    </section>
  )
}
