"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Shield, 
  Zap, 
  Clock, 
  Users, 
  Award, 
  Headphones,
  Server,
  Cpu,
  Database,
  Globe,
  ShieldCheck,
  Rocket
} from "lucide-react"

const features = [
  {
    icon: Cpu,
    titleAr: "بنية تحتية متطورة",
    titleEn: "Advanced Infrastructure",
    descAr: "خوادم معالجة سحابية متطورة بمواصفات عالية الجودة",
    descEn: "Advanced cloud processing servers with high-quality specifications",
    color: "#3B82F6", // Blue
  },
  {
    icon: ShieldCheck,
    titleAr: "أمن رقمي كامل",
    titleEn: "Complete Digital Security",
    descAr: "نظام حماية متعدد الطبقات مع تشفير من الدرجة الأولى",
    descEn: "Multi-layer protection system with first-class encryption",
    color: "#10B981", // Emerald
  },
  {
    icon: Server,
    titleAr: "توازن تحميل ذكي",
    titleEn: "Smart Load Balancing",
    descAr: "توزيع حركة المرور بين السيرفرات لضمان الأداء الأمثل",
    descEn: "Traffic distribution across servers for optimal performance",
    color: "#8B5CF6", // Violet
  },
  {
    icon: Database,
    titleAr: "نسخ احتياطي تلقائي",
    titleEn: "Automatic Backup",
    descAr: "حفظ بياناتك آلياً مع إمكانية الاستعادة الفورية",
    descEn: "Automatic data backup with instant recovery capabilities",
    color: "#F59E0B", // Amber
  },
  {
    icon: Globe,
    titleAr: "تغطية عالمية",
    titleEn: "Global Coverage",
    descAr: "مراكز بيانات موزعة في 30 موقعاً حول العالم",
    descEn: "Data centers distributed across 30 global locations",
    color: "#EC4899", // Pink
  },
  {
    icon: Rocket,
    titleAr: "تطوير مستمر",
    titleEn: "Continuous Development",
    descAr: "نطور خدماتنا باستمرار لتلبية احتياجات المستقبل",
    descEn: "We continuously develop our services to meet future needs",
    color: "#06B6D4", // Cyan
  },
]

const stats = [
  { 
    value: 15, 
    suffix: "K+", 
    labelAr: "عميل حول العالم", 
    labelEn: "Global Clients",
    icon: Users 
  },
  { 
    value: 45, 
    suffix: "+", 
    labelAr: "مركز بيانات", 
    labelEn: "Data Centers",
    icon: Server 
  },
  { 
    value: 99.95, 
    suffix: "%", 
    labelAr: "وقت التشغيل", 
    labelEn: "Uptime",
    icon: Clock 
  },
  { 
    value: 24, 
    suffix: "/7", 
    labelAr: "دعم فني", 
    labelEn: "Technical Support",
    icon: Headphones 
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let start = 0
        const end = value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setDisplayValue(end)
            clearInterval(timer)
          } else {
            setDisplayValue(Math.floor(start))
          }
        }, 16)
      }}
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
    >
      {suffix === "%" || suffix === "/7" 
        ? `${displayValue.toFixed(suffix === "%" ? 2 : 0)}${suffix}`
        : `${displayValue.toLocaleString()}${suffix}`}
    </motion.span>
  )
}

export function AboutSection() {
  const [activeStat, setActiveStat] = useState(0)
  const [language, setLanguage] = useState("ar") // Default to Arabic

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Language Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-xl bg-gradient-to-b from-slate-800/30 to-slate-900/20 backdrop-blur-sm border border-slate-700/30">
              <button
                onClick={() => setLanguage("ar")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  language === "ar" 
                    ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  language === "en" 
                    ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-300 text-sm font-medium mb-6 border border-blue-500/20">
              {language === "ar" ? "من نحن" : "About Us"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-slate-100">
                {language === "ar" ? "نحن نبني" : "We Build"}
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                {language === "ar" ? "المستقبل الرقمي" : "The Digital Future"}
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {language === "ar" 
              ? "X-Host ليست مجرد شركة استضافة، بل هي منظومة متكاملة تدفع حدود التكنولوجيا لتخلق فضاءً رقمياً يتجاوز التوقعات"
              : "X-Host isn't just a hosting company, it's an integrated system that pushes the boundaries of technology to create a digital space that exceeds expectations"
            }
          </motion.p>
        </motion.div>

        {/* Animated Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          <AnimatePresence mode="wait">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setActiveStat(index)}
                className={`relative cursor-pointer rounded-2xl p-8 transition-all duration-300 ${
                  activeStat === index
                    ? "bg-gradient-to-br from-slate-800/40 to-slate-900/20 border border-blue-500/30 shadow-xl shadow-blue-500/10"
                    : "bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 hover:border-slate-600/30"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>
                <div className="text-sm text-slate-400 mt-2">
                  {language === "ar" ? stat.labelAr : stat.labelEn}
                </div>
                
                {activeStat === index && (
                  <motion.div
                    layoutId="activeStat"
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border border-slate-700/20 rounded-2xl p-8 transition-all duration-300 group-hover:border-slate-600/30 group-hover:shadow-xl">
                {/* Icon Container */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl blur-sm opacity-50"></div>
                  <div 
                    className="relative w-16 h-16 rounded-xl flex items-center justify-center border border-slate-700/50"
                    style={{ 
                      backgroundColor: `${feature.color}15`,
                      boxShadow: `0 0 20px ${feature.color}20`
                    }}
                  >
                    <feature.icon 
                      className="w-8 h-8" 
                      style={{ color: feature.color }} 
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors">
                  {language === "ar" ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {language === "ar" ? feature.descAr : feature.descEn}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-indigo-500/10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#33415512_25%,transparent_25%),linear-gradient(-45deg,#33415512_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#33415512_75%),linear-gradient(-45deg,transparent_75%,#33415512_75%)] bg-[size:30px_30px]"></div>
          </div>

          {/* Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-blue-500/20 blur-xl opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-8"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
              </motion.div>

              {/* Quote */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-slate-100 mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {language === "ar" ? "رؤيتنا" : "Our Vision"}
                </span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 italic"
              >
                {language === "ar"
                  ? "نؤمن بأن التكنولوجيا يجب أن تخدم الإنسانية، لا أن تعقدها. نخلق مساحة رقمية حيث الإبداع لا يعرف حدوداً، والأفكار تتطور إلى واقع، والمستقبل يبدأ اليوم."
                  : "We believe technology should serve humanity, not complicate it. We create a digital space where creativity knows no bounds, ideas evolve into reality, and the future begins today."
                }
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold">XH</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-100">X-Host Team</div>
                  <div className="text-sm text-slate-400">
                    {language === "ar" ? "فريق العمل المؤسس" : "Founding Team"}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}