"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Zap, Clock, Users, Award, Headphones } from "lucide-react"
import { useTheme } from "../theme-provider"

const features = [
  {
    icon: Zap,
    titleAr: "أداء فائق السرعة",
    titleEn: "Lightning Fast Performance",
    descAr: "خوادم SSD NVMe مع شبكة 10Gbps لأقصى سرعة",
    descEn: "SSD NVMe servers with 10Gbps network for maximum speed",
    color: "#ffcc00",
  },
  {
    icon: Shield,
    titleAr: "حماية متقدمة",
    titleEn: "Advanced Protection",
    descAr: "حماية DDoS متعددة الطبقات وجدار حماية ذكي",
    descEn: "Multi-layer DDoS protection and intelligent firewall",
    color: "#00ffcc",
  },
  {
    icon: Clock,
    titleAr: "وقت تشغيل 99.9%",
    titleEn: "99.9% Uptime",
    descAr: "ضمان استمرارية الخدمة على مدار الساعة",
    descEn: "Guaranteed service continuity around the clock",
    color: "#0066ff",
  },
  {
    icon: Headphones,
    titleAr: "دعم فني 24/7",
    titleEn: "24/7 Support",
    descAr: "فريق دعم متاح دائماً لمساعدتك",
    descEn: "Support team always available to help you",
    color: "#ff3366",
  },
  {
    icon: Users,
    titleAr: "مجتمع نشط",
    titleEn: "Active Community",
    descAr: "انضم لمجتمع من المطورين والمبدعين",
    descEn: "Join a community of developers and creators",
    color: "#a855f7",
  },
  {
    icon: Award,
    titleAr: "جودة مضمونة",
    titleEn: "Guaranteed Quality",
    descAr: "أعلى معايير الجودة في الصناعة",
    descEn: "Highest quality standards in the industry",
    color: "#06b6d4",
  },
]

const stats = [
  { value: 10000, suffix: "+", labelAr: "عميل سعيد", labelEn: "Happy Clients" },
  { value: 50000, suffix: "+", labelAr: "سيرفر نشط", labelEn: "Active Servers" },
  { value: 99.9, suffix: "%", labelAr: "وقت التشغيل", labelEn: "Uptime" },
  { value: 24, suffix: "/7", labelAr: "دعم فني", labelEn: "Support" },
]

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
            {t("من نحن", "About Us")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("نحن نُشغّل المستقبل", "We Power The Future")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "X-Host ليست مجرد شركة استضافة، بل هي كون رقمي كامل حيث تتحول أفكارك إلى واقع",
              "X-Host isn't just a hosting company, it's a complete digital universe where your ideas become reality",
            )}
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
              <div className="text-sm text-muted-foreground mt-2">{t(stat.labelAr, stat.labelEn)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="quantum-glass rounded-2xl p-6 group cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}15` }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {t(feature.titleAr, feature.titleEn)}
              </h3>
              <p className="text-muted-foreground">{t(feature.descAr, feature.descEn)}</p>
            </motion.div>
          ))}
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
              {t("رؤيتنا الكونية", "Our Cosmic Vision")}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t(
                '"حيث يلتقي الخيال بالواقع، والأحلام بالتكنولوجيا، والمستقبل بالحاضر... في رحلة كونية واحدة، نحو آفاق لا محدودة."',
                '"Where imagination meets reality, dreams meet technology, and the future meets the present... in one cosmic journey, towards unlimited horizons."',
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
