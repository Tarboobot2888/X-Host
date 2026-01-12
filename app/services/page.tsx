"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { StoreWizard } from "@/components/services-store/store-wizard"
import { Suspense, useState, useEffect } from "react"

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.4, ease: "easeOut" }} 
      className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-950"
    >
      {/* Optimized Fixed Background */}
      <div className="fixed inset-0 z-0">
        <StarField intensity={0.1} />
        
        <div className="absolute inset-0">
          {/* Static Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950"></div>
          
          {/* Static Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-900/3 to-cyan-900/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-900/3 to-slate-800/2 rounded-full blur-3xl"></div>
          
          {/* Static Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          </div>
        </div>
      </div>

      <CosmicNavbar />

      <main className="relative z-10">
        {/* Hero Intro Section - Optimized Animations */}
        <AnimatePresence>
          {isLoaded && (
            <motion.section
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="pt-24 pb-16 px-4"
            >
              <div className="max-w-6xl mx-auto text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                  <span className="text-blue-400 font-medium tracking-wider text-sm">مركز الخدمات</span>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                </div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100"
                >
                  مركز <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">الخدمات المتكاملة</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
                >
                  اكتشف عالمًا من الخدمات التقنية المتقدمة
                </motion.p>
                
                {/* Simple Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex justify-center gap-8 flex-wrap"
                >
                  {[
                    { value: "50+", label: "خدمة متاحة" },
                    { value: "24/7", label: "دعم فني" },
                    { value: "99.9%", label: "نسبة توفر" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Main StoreWizard Component */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Simplified Container */}
            <div className="relative">
              {/* Static Container Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/10 to-slate-900/5 backdrop-blur-sm rounded-2xl border border-slate-700/20"></div>
              
              {/* Content Container */}
              <div className="relative z-10">
                <Suspense
                  fallback={
                    <div className="min-h-[600px] flex items-center justify-center">
                      {/* Simplified Loading */}
                      <div className="relative">
                        <div className="w-12 h-12 border-3 border-blue-500/30 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-12 h-12 border-3 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                      </div>
                    </div>
                  }
                >
                  <StoreWizard />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Simple FAQ Section */}
        <section className="pb-32 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                أسئلة <span className="text-blue-400">متكررة</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  q: "هل يمكنني الترقية من باقة إلى أخرى؟",
                  a: "نعم، يمكنك الترقية في أي وقت دون أي تعطيل للخدمة."
                },
                {
                  q: "ما هو وقت استجابة الدعم الفني؟",
                  a: "نضمن وقت استجابة لا يتجاوز 15 دقيقة على مدار الساعة."
                },
                {
                  q: "هل توجد فترة تجريبية مجانية؟",
                  a: "نعم، نقدم فترة تجريبية مدتها 14 يومًا."
                },
                {
                  q: "كيف أحمي بياناتي وسيرفراتي؟",
                  a: "نوفر جدران حماية متقدمة ونظام نسخ احتياطي تلقائي."
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl text-right"
                >
                  <h4 className="text-lg font-semibold text-slate-100 mb-3">{faq.q}</h4>
                  <p className="text-slate-400 text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CosmicFooter />
    </motion.div>
  )
}