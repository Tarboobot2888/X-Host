"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { xhostServiceTypes } from "@/lib/data/xhost-service-types"
import { redirectToServerCreation } from "@/lib/utils/redirect"

export default function WebServersPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  
  const services = xhostServiceTypes.filter((s) => s.categoryId === "web-server")

  const features = [
    {
      title: "أداء عالي السرعة",
      description: "خوادم مخصصة مع معالجات سريعة وذاكرة SSD",
      icon: "⚡",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "حماية متقدمة",
      description: "جدران حماية، SSL، ونظام حماية من الهجمات",
      icon: "🛡️",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "نسخ احتياطي آلي",
      description: "نسخ يومية احتياطية مع استعادة سريعة",
      icon: "💾",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "دعم متكامل",
      description: "دعم فني متخصص في خوادم الويب",
      icon: "👨‍💻",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const stackOptions = [
    {
      name: "NGINX",
      description: "خادم ويب عالي الأداء للتحميل المتوازن",
      idealFor: "المواقع عالية الزيارات والتطبيقات",
      icon: "🟢"
    },
    {
      name: "WordPress",
      description: "بيئة متكاملة مدعومة لمواقع WordPress",
      idealFor: "المدونات والمواقع الإلكترونية",
      icon: "🔵"
    },
    {
      name: "LumenWEB",
      description: "حزمة متكاملة لتطوير تطبيقات الويب",
      idealFor: "المطورين والتطبيقات الحديثة",
      icon: "🟣"
    }
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
          
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-amber-900/3 to-orange-900/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-900/3 to-slate-800/2 rounded-full blur-3xl"></div>
          
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
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                <span className="text-amber-400 font-medium tracking-wider">خوادم الويب</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                خوادم ويب <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">عالية الأداء</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                استضافة احترافية لمواقع الويب مع أداء فائق واستقرار كامل. من NGINX إلى WordPress، نقدم الحل الأنسب لمشروعك
              </p>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl text-center"
                >
                  <div className={`text-3xl mb-4`}>{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Web Server Stacks */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">
                اختر <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">حزمة الخادم</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                حزم متكاملة مصممة خصيصاً لتلبية احتياجات مشاريع الويب المختلفة
              </p>
            </div>

            {/* Stack Options Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              {stackOptions.map((stack, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl hover:border-slate-600/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl">{stack.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{stack.name}</h3>
                      <div className="text-sm text-blue-400 font-medium">Web Server Stack</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {stack.description}
                  </p>
                  
                  <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg mb-6">
                    <div className="text-xs text-slate-500 mb-2">مثالي لـ</div>
                    <div className="text-sm text-slate-300">{stack.idealFor}</div>
                  </div>
                  
                  <button
                    onClick={redirectToServerCreation}
                    className="w-full py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-medium border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                  >
                    اختيار الحزمة
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Web Services Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">
                خدمات <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">خوادم الويب</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                دعم كامل لجميع أنواع خوادم الويب مع إمكانية تخصيص الإعدادات
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
                      ? "border-amber-500/30 shadow-lg shadow-amber-500/10"
                      : "border-slate-700/20 hover:border-slate-600/30"
                  }`}
                >
                  {/* Service Icon/Image */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center justify-center">
                      <div className="text-2xl">{service.icon}</div>
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="text-xl font-bold text-slate-100 mb-1">{service.name}</h3>
                      <div className="text-sm text-amber-400 font-medium">Web Server</div>
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
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                          : "bg-slate-800/30 text-slate-300 hover:bg-slate-700/30"
                      }`}
                    >
                      اختيار
                    </button>
                    <div className="text-xs text-slate-500">
                      دعم فني متوفر
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  {selectedService === service.id && (
                    <motion.div
                      layoutId="serviceSelection"
                      className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">
                أداء <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">متفوق</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                مقاييس أداء توضح كفاءة خوادم الويب لدينا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "سرعة التحميل", value: "< 1s", icon: "⚡", description: "متوسط وقت تحميل الصفحة" },
                { metric: "نسبة التوفر", value: "99.98%", icon: "📈", description: "متوسط توفر الخدمة" },
                { metric: "سعة التخزين", value: "SSD NVMe", icon: "💾", description: "تخزين فائق السرعة" },
                { metric: "حماية متقدمة", value: "DDoS", icon: "🛡️", description: "حماية من الهجمات" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl text-center"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <div className="text-2xl font-bold text-slate-100 mb-2">{item.value}</div>
                  <h3 className="font-semibold text-slate-100 mb-2">{item.metric}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
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
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                  <div className="text-2xl">🌐</div>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                  هل تحتاج إلى خادم ويب مخصص؟
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  يمكننا تخصيص خادم ويب حسب احتياجات مشروعك الخاصة مع إعدادات متقدمة ودعم تقني شامل
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={redirectToServerCreation}
                    className="px-8 py-3 bg-gradient-to-r from-amber-500/80 to-orange-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                  >
                    إنشاء خادم ويب
                  </button>
                  <button
                    onClick={redirectToServerCreation}
                    className="px-8 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-semibold border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                  >
                    طلب استشارة مجانية
                  </button>
                </div>
                
                <p className="text-slate-400 text-sm mt-8">
                  تجربة مجانية لمدة 7 أيام • دعم فني متخصص في خوادم الويب
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