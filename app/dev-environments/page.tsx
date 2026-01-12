"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { xhostServiceTypes } from "@/lib/data/xhost-service-types"
import { redirectToServerCreation } from "@/lib/utils/redirect"

export default function DevEnvironmentsPage() {
  const services = xhostServiceTypes.filter((s) => s.categoryId === "dev-stack")
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const features = [
    {
      icon: "⚡",
      title: "أداء فائق",
      description: "خوادم سريعة ومحسنة لتطوير الأكواد",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "🔧",
      title: "أدوات متكاملة",
      description: "جميع أدوات المطورين في مكان واحد",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: "🛡️",
      title: "بيئة آمنة",
      description: "حماية كاملة لمشاريعك وبياناتك",
      color: "from-emerald-500/20 to-green-500/20"
    },
    {
      icon: "📈",
      title: "مرونة كاملة",
      description: "قابلية التوسع حسب احتياجات المشروع",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ]

  const techStack = [
    { name: "Node.js", icon: "🟢", description: "بيئة تشغيل JavaScript" },
    { name: "Python", icon: "🐍", description: "لغة برمجة متعددة الاستخدامات" },
    { name: "PHP", icon: "🐘", description: "لتطوير تطبيقات الويب" },
    { name: "Java", icon: "☕", description: "للتطبيقات واسعة النطاق" },
    { name: "Ruby", icon: "💎", description: "للتطوير السريع" },
    { name: "Go", icon: "🐹", description: "للتطبيقات عالية الأداء" }
  ]

  const developmentTools = [
    { name: "Git", description: "نظام التحكم بالإصدارات" },
    { name: "Docker", description: "حاويات التطبيقات" },
    { name: "VS Code", description: "محرر الأكواد" },
    { name: "PostgreSQL", description: "قواعد البيانات" },
    { name: "Redis", description: "ذاكرة التخزين المؤقت" },
    { name: "Nginx", description: "خادم الويب" }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.4, ease: "easeOut" }} 
      className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-950"
    >
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <StarField intensity={0.1} />
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950"></div>
          
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-900/3 to-purple-900/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-900/3 to-slate-800/2 rounded-full blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>
        </div>
      </div>

      <CosmicNavbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <span className="text-blue-400 font-medium tracking-wider">بيئات التطوير</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                بيئات <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">تطوير متكاملة</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                احصل على بيئات تطوير احترافية واختبر أحدث التقنيات. نوفر جميع أدوات المطورين التي تحتاجها
              </p>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">
                  التقنيات <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">المدعومة</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-xl text-center"
                  >
                    <div className="text-2xl mb-3">{tech.icon}</div>
                    <h3 className="font-semibold text-slate-100 mb-1">{tech.name}</h3>
                    <div className="text-xs text-slate-400">{tech.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl text-center"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Services Grid Section */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">
                بيئات <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">التطوير المتاحة</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                اختر البيئة الأنسب لمشروعك مع إمكانية التخصيص الكامل
              </p>
            </div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => {
                    setSelectedService(service.id)
                    redirectToServerCreation()
                  }}
                  onMouseEnter={() => setSelectedService(service.id)}
                  onMouseLeave={() => setSelectedService(null)}
                  className={`relative p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedService === service.id
                      ? "border-blue-500/30 shadow-lg shadow-blue-500/10"
                      : "border-slate-700/20 hover:border-slate-600/30"
                  }`}
                >
                  {/* Service Icon/Image */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center">
                      <div className="text-2xl">{service.icon}</div>
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="text-xl font-bold text-slate-100 mb-1">{service.name}</h3>
                      <div className="text-sm text-blue-400 font-medium">بيئة تطوير</div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        redirectToServerCreation()
                      }}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedService === service.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                          : "bg-slate-800/30 text-slate-300 hover:bg-slate-700/30"
                      }`}
                    >
                      اختيار البيئة
                    </button>
                    <div className="text-xs text-slate-500">
                      دعم تقني شامل
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  {selectedService === service.id && (
                    <motion.div
                      layoutId="serviceSelection"
                      className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Development Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">
                  أدوات <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">التطوير المتكاملة</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  نوفر جميع الأدوات الأساسية لإنجاح مشاريعك
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {developmentTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl text-center"
                  >
                    <h3 className="font-semibold text-slate-100 mb-2">{tool.name}</h3>
                    <div className="text-xs text-slate-400">{tool.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-32 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 via-slate-900/5 to-slate-800/10">
                <div className="absolute inset-0 bg-[linear-gradient(30deg,#33415505_25%,transparent_25%),linear-gradient(-30deg,#33415505_25%,transparent_25%),linear-gradient(30deg,transparent_75%,#33415505_75%),linear-gradient(-30deg,transparent_75%,#33415505_75%)] bg-[size:40px_40px]"></div>
              </div>
              
              <div className="relative z-10 p-8 md:p-12 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <div className="text-2xl">💻</div>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                  هل تحتاج إلى بيئة تطوير مخصصة؟
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  يمكننا تخصيص بيئة التطوير حسب متطلبات مشروعك مع إعدادات متقدمة وأدوات شاملة
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={redirectToServerCreation}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    ابدأ التطوير الآن
                  </button>
                  <button
                    onClick={redirectToServerCreation}
                    className="px-8 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-semibold border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                  >
                    طلب استشارة تقنية
                  </button>
                </div>
                
                <p className="text-slate-400 text-sm mt-8">
                  تجربة مجانية لمدة 14 يوم • دعم فني متخصص في التطوير
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <CosmicFooter />
    </motion.div>
  )
}