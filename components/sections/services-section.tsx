"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Globe, Monitor, Bot, Server, Settings, ChevronRight } from "lucide-react"
import { useTheme } from "../theme-provider"
import Link from "next/link"

const services = [
  {
    id: "dev-stack",
    icon: Code2,
    titleAr: "بيئات التطوير",
    titleEn: "Dev Stack",
    descAr: "بيئات تطوير متكاملة لجميع اللغات",
    descEn: "Complete development environments for all languages",
    color: "#00ffcc",
    subServices: [
      { nameAr: "Node.js", nameEn: "Node.js", icon: "🟢" },
      { nameAr: "Python", nameEn: "Python", icon: "🐍" },
      { nameAr: "Java", nameEn: "Java", icon: "☕" },
      { nameAr: "NextJS", nameEn: "NextJS", icon: "▲" },
      { nameAr: "سكربتات مخصصة", nameEn: "Custom Scripts", icon: "📜" },
    ],
  },
  {
    id: "web-servers",
    icon: Globe,
    titleAr: "خوادم الويب",
    titleEn: "Web Servers",
    descAr: "استضافة ويب سريعة وموثوقة",
    descEn: "Fast and reliable web hosting",
    color: "#0066ff",
    subServices: [
      { nameAr: "LumenWEB", nameEn: "LumenWEB", icon: "💡" },
      { nameAr: "Nginx", nameEn: "Nginx", icon: "🌐" },
      { nameAr: "WordPress", nameEn: "WordPress", icon: "📝" },
    ],
  },
  {
    id: "vps",
    icon: Monitor,
    titleAr: "الآلات الافتراضية",
    titleEn: "Virtual Machines",
    descAr: "VPS قوي بأنظمة متعددة",
    descEn: "Powerful VPS with multiple OS options",
    color: "#6600ff",
    subServices: [
      { nameAr: "Ubuntu", nameEn: "Ubuntu", icon: "🐧" },
      { nameAr: "Debian", nameEn: "Debian", icon: "🔴" },
      { nameAr: "Alpine", nameEn: "Alpine", icon: "🏔️" },
      { nameAr: "Fedora", nameEn: "Fedora", icon: "🎩" },
    ],
  },
  {
    id: "rdp",
    icon: Server,
    titleAr: "سطح المكتب البعيد",
    titleEn: "Remote Desktop",
    descAr: "وصول آمن لسطح المكتب",
    descEn: "Secure desktop access",
    color: "#ff3366",
    subServices: [
      { nameAr: "Windows 10", nameEn: "Windows 10", icon: "🪟" },
      { nameAr: "Windows Server", nameEn: "Windows Server", icon: "🖥️" },
      { nameAr: "Ubuntu Desktop", nameEn: "Ubuntu Desktop", icon: "🖱️" },
    ],
  },
  {
    id: "bots",
    icon: Bot,
    titleAr: "استضافة البوتات",
    titleEn: "Bot Hosting",
    descAr: "تشغيل بوتاتك على مدار الساعة",
    descEn: "Run your bots 24/7",
    color: "#ffcc00",
    subServices: [
      { nameAr: "Discord Bots", nameEn: "Discord Bots", icon: "🤖" },
      { nameAr: "Telegram Bots", nameEn: "Telegram Bots", icon: "📱" },
      { nameAr: "Custom Bots", nameEn: "Custom Bots", icon: "⚙️" },
    ],
  },
  {
    id: "custom",
    icon: Settings,
    titleAr: "حلول مخصصة",
    titleEn: "Custom Solutions",
    descAr: "حلول مصممة خصيصاً لك",
    descEn: "Solutions tailored just for you",
    color: "#00ccff",
    subServices: [
      { nameAr: "خوادم ألعاب", nameEn: "Game Servers", icon: "🎮" },
      { nameAr: "قواعد بيانات", nameEn: "Databases", icon: "🗄️" },
      { nameAr: "حلول مؤسسية", nameEn: "Enterprise", icon: "🏢" },
    ],
  },
]

export function ServicesSection() {
  const { t } = useTheme()
  const [activeService, setActiveService] = useState<string | null>(null)

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
            {t("خدماتنا الكونية", "Our Cosmic Services")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("اختر مجرتك الرقمية", "Choose Your Digital Galaxy")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "مجموعة متكاملة من الخدمات السحابية لتشغيل مشاريعك بكفاءة",
              "A complete suite of cloud services to power your projects efficiently",
            )}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-semibold mb-2">{t(service.titleAr, service.titleEn)}</h3>
                <p className="text-muted-foreground mb-4">{t(service.descAr, service.descEn)}</p>

                {/* Expand Button */}
                <div className="flex items-center gap-2 text-sm text-primary">
                  <span>{t("عرض الخيارات", "View Options")}</span>
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
                        {service.subServices.map((sub, i) => (
                          <Link
                            key={i}
                            href="https://x-host.cloud/"
                            target="_blank"
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                          >
                            <span className="text-lg">{sub.icon}</span>
                            <span>{t(sub.nameAr, sub.nameEn)}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
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
              {t("عرض حصري", "Exclusive Offer")}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t("🚀 جرّب مجاناً لمدة 7 أيام!", "🚀 Try Free for 7 Days!")}
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t(
                "استخدم الكود: X-Host-Free واحصل على سيرفر كوني يدوم 7 أيام مكتملة",
                "Use code: X-Host-Free and get a cosmic server for 7 full days",
              )}
            </p>
            <Link
              href="https://x-host.cloud/"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              {t("ابدأ الآن مجاناً", "Start Free Now")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
