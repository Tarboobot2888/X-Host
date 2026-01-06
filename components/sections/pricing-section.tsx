"use client"

import { useState, memo } from "react"
import { motion } from "framer-motion"
import { Cpu, HardDrive, Database, Zap, Infinity, Rocket, Star } from "lucide-react"
import { useTheme } from "../theme-provider"
import Link from "next/link"

const plans = [
  {
    id: "free",
    nameAr: "X-Host Free",
    nameEn: "X-Host Free",
    subtitleAr: "الكوكب التجريبي",
    subtitleEn: "Trial Planet",
    price: 25,
    period: "week",
    color: "#22c55e",
    popular: false,
    specs: { cpu: 100, ram: 1000, disk: 1500, db: 1 },
  },
  {
    id: "spark",
    nameAr: "X-Host Spark",
    nameEn: "X-Host Spark",
    subtitleAr: "كوكب الشرارة",
    subtitleEn: "Spark Planet",
    price: 50,
    period: "month",
    color: "#94a3b8",
    popular: false,
    specs: { cpu: 200, ram: 2000, disk: 2500, db: 1 },
  },
  {
    id: "rise",
    nameAr: "X-Host Rise",
    nameEn: "X-Host Rise",
    subtitleAr: "كوكب الصعود",
    subtitleEn: "Rise Planet",
    price: 100,
    period: "month",
    color: "#a16207",
    popular: false,
    specs: { cpu: 400, ram: 6000, disk: 7000, db: 1 },
  },
  {
    id: "drive",
    nameAr: "X-Host Drive",
    nameEn: "X-Host Drive",
    subtitleAr: "كوكب الدفع",
    subtitleEn: "Drive Planet",
    price: 125,
    period: "month",
    color: "#3b82f6",
    popular: true,
    specs: { cpu: 500, ram: 8000, disk: 10000, db: 1 },
  },
  {
    id: "boost",
    nameAr: "X-Host Boost",
    nameEn: "X-Host Boost",
    subtitleAr: "كوكب التسارع",
    subtitleEn: "Boost Planet",
    price: 150,
    period: "month",
    color: "#1f2937",
    popular: false,
    specs: { cpu: 600, ram: 10000, disk: 12000, db: 1 },
  },
  {
    id: "scale",
    nameAr: "X-Host Scale",
    nameEn: "X-Host Scale",
    subtitleAr: "كوكب التوسع",
    subtitleEn: "Scale Planet",
    price: 175,
    period: "month",
    color: "#eab308",
    popular: false,
    specs: { cpu: 700, ram: 12000, disk: 14000, db: 1 },
  },
  {
    id: "power",
    nameAr: "X-Host Power",
    nameEn: "X-Host Power",
    subtitleAr: "كوكب القوة",
    subtitleEn: "Power Planet",
    price: 200,
    period: "month",
    color: "#ef4444",
    popular: false,
    specs: { cpu: 800, ram: 14000, disk: 16000, db: 1 },
  },
  {
    id: "elite",
    nameAr: "X-Host Elite",
    nameEn: "X-Host Elite",
    subtitleAr: "كوكب النخبة",
    subtitleEn: "Elite Planet",
    price: 225,
    period: "month",
    color: "#a855f7",
    popular: false,
    specs: { cpu: 800, ram: 18000, disk: 20000, db: 1 },
  },
  {
    id: "titan",
    nameAr: "X-Host Titan",
    nameEn: "X-Host Titan",
    subtitleAr: "كوكب العملاق",
    subtitleEn: "Titan Planet",
    price: 250,
    period: "month",
    color: "#f8fafc",
    popular: false,
    specs: { cpu: 1000, ram: 20000, disk: 25000, db: 1 },
  },
  {
    id: "apex",
    nameAr: "X-Host Apex",
    nameEn: "X-Host Apex",
    subtitleAr: "كوكب القمة",
    subtitleEn: "Apex Planet",
    price: 275,
    period: "month",
    color: "#dc2626",
    popular: false,
    specs: { cpu: 1100, ram: 25000, disk: 30000, db: 1 },
  },
  {
    id: "infinity",
    nameAr: "X-Host Infinity",
    nameEn: "X-Host Infinity",
    subtitleAr: "كوكب اللانهائية",
    subtitleEn: "Infinity Planet",
    price: 300,
    period: "month",
    color: "#06b6d4",
    popular: false,
    infinity: true,
    specs: { cpu: 0, ram: 30000, disk: 50000, db: 1 },
  },
]

interface PlanCardProps {
  plan: (typeof plans)[0]
  index: number
  t: (ar: string, en: string) => string
}

const PlanCard = memo(function PlanCard({ plan, index, t }: PlanCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLaunching, setIsLaunching] = useState(false)

  const handleLaunch = () => {
    setIsLaunching(true)
    setTimeout(() => {
      window.open("https://x-host.cloud/", "_blank")
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
            {t("الأكثر طلباً", "Popular")}
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
            <h3 className="font-semibold text-sm">{t(plan.nameAr, plan.nameEn)}</h3>
            <p className="text-xs text-muted-foreground">{t(plan.subtitleAr, plan.subtitleEn)}</p>
          </div>
        </div>

        <div className="mb-5 relative z-10">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{plan.price}</span>
            <span className="text-sm text-muted-foreground">EGP</span>
          </div>
          <span className="text-xs text-muted-foreground">
            / {plan.period === "week" ? t("أسبوع", "week") : t("شهر", "month")}
          </span>
        </div>

        <div className="space-y-2.5 flex-1 mb-5 relative z-10">
          <div className="flex items-center gap-2 text-sm">
            <Cpu className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">
              {plan.specs.cpu === 0 ? t("غير محدود", "Unlimited") : `${plan.specs.cpu} vCores`}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-muted-foreground">{plan.specs.ram} MB RAM</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <HardDrive className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span className="text-muted-foreground">{plan.specs.disk} MB Disk</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Database className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span className="text-muted-foreground">{plan.specs.db} MySQL</span>
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
            {isLaunching ? t("جاري الإطلاق...", "Launching...") : t("إنشاء سيرفر", "Create Server")}
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
            {t("باقات الاستضافة", "Hosting Plans")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("اختر كوكبك الرقمي", "Choose Your Digital Planet")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("كل باقة مصممة لتناسب احتياجات مشروعك", "Every plan designed to fit your project needs")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {plans.map((plan, index) => (
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
            href="https://x-host.cloud/"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
          >
            {t("عرض جميع الباقات والمقارنة", "View all plans and compare")}
            <span>←</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
