"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState<string>("")
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const updateTime = () => {
    const now = new Date()
    const timeString = now.toLocaleTimeString('ar-SA', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
    setLastUpdated(`آخر تحديث: ${timeString}`)
  }

  const refreshStatus = () => {
    setRefreshing(true)
    updateTime()
    setTimeout(() => setRefreshing(false), 1000)
  }

  const services = [
    { 
      name: "خوادم الويب", 
      status: "operational" as const,
      description: "جميع خوادم الويب والاستضافة تعمل بشكل طبيعي",
      icon: "🌐",
      uptime: "99.98%"
    },
    { 
      name: "الآلات الافتراضية", 
      status: "operational" as const,
      description: "خدمات VPS والسيرفرات الافتراضية متاحة",
      icon: "💻",
      uptime: "99.95%"
    },
    { 
      name: "لوحة التحكم", 
      status: "operational" as const,
      description: "لوحة التحكم الرئيسية تعمل بدون مشاكل",
      icon: "🎛️",
      uptime: "100%"
    },
    { 
      name: "شبكة التوصيل", 
      status: "operational" as const,
      description: "اتصالات الشبكة مستقرة وسريعة",
      icon: "📡",
      uptime: "99.99%"
    },
    { 
      name: "النسخ الاحتياطي", 
      status: "operational" as const,
      description: "نظام النسخ الاحتياطي يعمل تلقائياً",
      icon: "💾",
      uptime: "99.9%"
    },
    { 
      name: "الدعم الفني", 
      status: "operational" as const,
      description: "فريق الدعم متاح على مدار الساعة",
      icon: "👨‍💻",
      uptime: "100%"
    },
    { 
      name: "بوابات الدفع", 
      status: "operational" as const,
      description: "جميع بوابات الدفع تعمل بشكل طبيعي",
      icon: "💳",
      uptime: "99.97%"
    },
    { 
      name: "مركز البيانات", 
      status: "operational" as const,
      description: "مركز البيانات يعمل بأقصى كفاءة",
      icon: "🏢",
      uptime: "99.99%"
    },
  ]

  const incidents = [
    {
      title: "صيانة مجدولة",
      description: "صيانة روتينية لتحسين الأداء",
      time: "قبل 2 ساعة",
      status: "resolved",
      impact: "منخفض"
    }
  ]

  const getStatusConfig = (status: "operational" | "maintenance" | "degraded" | "outage") => {
    switch (status) {
      case "operational":
        return {
          color: "text-emerald-400",
          bgColor: "bg-emerald-500/20",
          borderColor: "border-emerald-500/30",
          label: "تعمل بشكل طبيعي",
          icon: "✅"
        }
      case "maintenance":
        return {
          color: "text-amber-400",
          bgColor: "bg-amber-500/20",
          borderColor: "border-amber-500/30",
          label: "تحت الصيانة",
          icon: "🛠️"
        }
      case "degraded":
        return {
          color: "text-yellow-400",
          bgColor: "bg-yellow-500/20",
          borderColor: "border-yellow-500/30",
          label: "أداء منخفض",
          icon: "⚠️"
        }
      case "outage":
        return {
          color: "text-red-400",
          bgColor: "bg-red-500/20",
          borderColor: "border-red-500/30",
          label: "غير متاحة",
          icon: "🔴"
        }
    }
  }

  const getOverallStatus = () => {
    const allOperational = services.every(s => s.status === "operational")
    return allOperational ? "operational" : "degraded"
  }

  const overallStatus = getOverallStatus()
  const statusConfig = getStatusConfig(overallStatus)

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
          
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-900/3 to-blue-900/2 rounded-full blur-3xl"></div>
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
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                <span className="text-emerald-400 font-medium tracking-wider">حالة النظام</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                حالة <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">الخدمات</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                مراقبة مباشرة لأداء جميع خدمات الاستضافة والسيرفرات
              </p>
            </div>

            {/* Overall Status Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-12"
            >
              <div className={`p-8 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border ${statusConfig.borderColor} rounded-2xl`}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className={`w-20 h-20 rounded-xl ${statusConfig.bgColor} border ${statusConfig.borderColor} flex items-center justify-center`}>
                      <span className="text-3xl">{statusConfig.icon}</span>
                    </div>
                    <div className="text-right">
                      <h2 className="text-2xl font-bold text-slate-100 mb-2">الحالة العامة للنظام</h2>
                      <div className="flex items-center gap-3">
                        <span className={`text-xl font-bold ${statusConfig.color}`}>{statusConfig.label}</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-100">99.98%</div>
                      <div className="text-sm text-slate-400">متوسط التوفر</div>
                    </div>
                    
                    <button
                      onClick={refreshStatus}
                      disabled={refreshing}
                      className="p-3 rounded-lg bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300 disabled:opacity-50"
                    >
                      <svg 
                        className={`w-5 h-5 text-slate-400 ${refreshing ? "animate-spin" : ""}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-700/30">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-slate-400">{lastUpdated}</span>
                    </div>
                    <div className="text-sm text-slate-400">
                      <span className="text-emerald-400">✓</span> جميع الأنظمة تعمل بشكل طبيعي
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Status Grid */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">
                حالة <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">الخدمات</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                مراقبة مباشرة لأداء جميع مكونات النظام الأساسية
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {services.map((service, idx) => {
                const config = getStatusConfig(service.status)
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.05, duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    className={`p-5 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl hover:border-slate-600/30 transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-2xl mb-2">{service.icon}</div>
                        <h3 className="font-semibold text-slate-100">{service.name}</h3>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bgColor} ${config.color}`}>
                        {config.label}
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/20">
                      <div className="text-xs text-slate-500">نسبة التوفر</div>
                      <div className="text-sm font-semibold text-emerald-400">{service.uptime}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">
                الحوادث <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">المؤثرة</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                سجل للحوادث والصيانة المجدولة التي أثرت على الخدمات
              </p>
            </div>

            {incidents.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {incidents.map((incident, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center justify-center">
                          <span className="text-xl">📋</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-100 text-lg">{incident.title}</h3>
                          <p className="text-sm text-slate-400">{incident.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold">
                          {incident.impact} التأثير
                        </div>
                        <div className="text-sm text-slate-400">{incident.time}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="text-sm text-slate-400">تم حل المشكلة</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center p-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/30 mb-6">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">لا توجد حوادث حالية</h3>
                <p className="text-slate-400 mb-6">جميع الأنظمة تعمل بشكل طبيعي بدون أي مشاكل مؤثرة</p>
              </motion.div>
            )}

            {/* System Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { metric: "متوسط وقت الاستجابة", value: "45ms", change: "+2ms", icon: "⚡" },
                { metric: "عدد الطلبات اليومية", value: "2.4M", change: "+12%", icon: "📈" },
                { metric: "معدل الأخطاء", value: "0.02%", change: "-0.01%", icon: "📊" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div className={`text-sm font-semibold ${item.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                      {item.change}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-100 mb-2">{item.value}</div>
                  <div className="text-sm text-slate-400">{item.metric}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-32 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 via-slate-900/5 to-slate-800/10">
                <div className="absolute inset-0 bg-[linear-gradient(30deg,#33415505_25%,transparent_25%),linear-gradient(-30deg,#33415505_25%,transparent_25%),linear-gradient(30deg,transparent_75%,#33415505_75%),linear-gradient(-30deg,transparent_75%,#33415505_75%)] bg-[size:40px_40px]"></div>
              </div>
              
              <div className="relative z-10 p-8 md:p-12 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                  هل تواجه مشكلة في الخدمة؟
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  إذا كانت حالتك تختلف عن ما تراه هنا، يرجى التواصل مع فريق الدعم الفني لدينا
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    الإبلاغ عن مشكلة
                  </a>
                  <a
                    href="/faq"
                    className="px-8 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-semibold border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                  >
                    الأسئلة الشائعة
                  </a>
                </div>
                
                <p className="text-slate-400 text-sm mt-8">
                  وقت استجابة الدعم: أقل من 15 دقيقة • متوفر 24/7
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