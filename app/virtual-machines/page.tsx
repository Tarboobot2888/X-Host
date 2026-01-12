"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { xhostServiceTypes } from "@/lib/data/xhost-service-types"
import { redirectToServerCreation } from "@/lib/utils/redirect"

export default function VirtualMachinesPage() {
  const vpsServices = xhostServiceTypes.filter((s) => s.categoryId === "virtual-machines")
  const rdpServices = xhostServiceTypes.filter((s) => s.categoryId === "remote-desktop")
  
  const [selectedType, setSelectedType] = useState<"vps" | "rdp">("vps")
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const features = [
    {
      icon: "⚡",
      title: "أداء فائق",
      description: "معالجات سريعة وذاكرة عالية",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "🔒",
      title: "أمان كامل",
      description: "عزل كامل وحماية متقدمة",
      color: "from-emerald-500/20 to-green-500/20"
    },
    {
      icon: "📊",
      title: "مراقبة حية",
      description: "إحصائيات أداء مفصلة",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: "🔄",
      title: "نسخ احتياطي",
      description: "نسخ تلقائية للحماية",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ]

  const osInfo = {
    "linux": { description: "مفتوح المصدر، خفيف وآمن", color: "from-amber-500/10 to-orange-500/10" },
    "windows": { description: "واجهة رسومية متكاملة", color: "from-blue-500/10 to-cyan-500/10" },
    "ubuntu": { description: "توزيعة لينكس شائعة", color: "from-orange-500/10 to-red-500/10" },
    "debian": { description: "مستقر وموثوق", color: "from-red-500/10 to-pink-500/10" }
  }

  const vpsSpecs = [
    { spec: "1-8 CPUs", description: "معالجات متعددة النواة" },
    { spec: "2-16 GB RAM", description: "ذاكرة وصول عشوائي" },
    { spec: "20-200 GB SSD", description: "تخزين سريع SSD" },
    { spec: "1 Gbps", description: "سرعة شبكة عالية" }
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
          
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-900/3 to-emerald-900/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-900/3 to-slate-800/2 rounded-full blur-3xl"></div>
          
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
                <span className="text-blue-400 font-medium tracking-wider">الآلات الافتراضية</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                خوادم <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">افتراضية متكاملة</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                خوادم افتراضية مع تحكم كامل. اختر من بين أنظمة تشغيل متعددة واحصل على أداء عالي وموثوقية
              </p>
            </div>

            {/* Service Type Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-16"
            >
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <button
                  onClick={() => setSelectedType("vps")}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedType === "vps"
                      ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 hover:text-white border border-slate-700/30 hover:border-slate-600/40"
                  }`}
                >
                  خوادم VPS
                </button>
                <button
                  onClick={() => setSelectedType("rdp")}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedType === "rdp"
                      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30"
                      : "bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 hover:text-white border border-slate-700/30 hover:border-slate-600/40"
                  }`}
                >
                  سطح مكتب بعيد RDP
                </button>
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

            {/* VPS Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">
                  مواصفات <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">VPS</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {vpsSpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold text-blue-400 mb-2">{spec.spec}</div>
                    <div className="text-sm text-slate-400">{spec.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Operating Systems Section */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">
                أنظمة <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">التشغيل المتاحة</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                اختر نظام التشغيل المناسب لمتطلبات مشروعك
              </p>
            </div>

            {/* VPS Systems Grid */}
            {selectedType === "vps" && (
              <motion.div
                key="vps"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {vpsServices.map((service, idx) => {
                  const osKey = service.name.toLowerCase().replace(/\s+/g, '')
                  const info = osInfo[osKey as keyof typeof osInfo] || { description: "نظام تشغيل متكامل", color: "from-slate-500/10 to-slate-600/10" }
                  
                  return (
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
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-slate-100 mb-2">{service.name}</h3>
                        <p className="text-sm text-slate-400">{info.description}</p>
                      </div>

                      {/* Action Button */}
                      <div className="text-center">
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
                          اختيار النظام
                        </button>
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
                  )
                })}
              </motion.div>
            )}

            {/* RDP Systems Grid */}
            {selectedType === "rdp" && (
              <motion.div
                key="rdp"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {rdpServices.map((service, idx) => (
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
                        ? "border-purple-500/30 shadow-lg shadow-purple-500/10"
                        : "border-slate-700/20 hover:border-slate-600/30"
                    }`}
                  >
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-slate-100 mb-2">{service.name}</h3>
                      <p className="text-sm text-slate-400">{service.description}</p>
                    </div>

                    {/* Action Button */}
                    <div className="text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          redirectToServerCreation()
                        }}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          selectedService === service.id
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                            : "bg-slate-800/30 text-slate-300 hover:bg-slate-700/30"
                        }`}
                      >
                        اختيار RDP
                      </button>
                    </div>

                    {/* Hover Indicator */}
                    {selectedService === service.id && (
                      <motion.div
                        layoutId="serviceSelection"
                        className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
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
                  هل تحتاج إلى خادم مخصص؟
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  يمكننا تخصيص خادم VPS أو RDP حسب متطلبات مشروعك مع إعدادات متقدمة وأداء ممتاز
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={redirectToServerCreation}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    ابدأ مع VPS
                  </button>
                  <button
                    onClick={redirectToServerCreation}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    ابدأ مع RDP
                  </button>
                </div>
                
                <p className="text-slate-400 text-sm mt-8">
                  تجربة مجانية لمدة 7 أيام • دعم فني متوفر 24/7 • ترقيات سريعة
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