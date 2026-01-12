"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { StoreWizard } from "@/components/services-store/store-wizard"
import { Suspense, useState, useEffect } from "react"

// SVG Icon Components
const ServiceIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const SupportIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const AvailabilityIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const ServicesCenterIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const stats = [
    { value: "50+", label: "خدمة متاحة", icon: <ServiceIcon /> },
    { value: "24/7", label: "دعم فني", icon: <SupportIcon /> },
    { value: "99.9%", label: "نسبة توفر", icon: <AvailabilityIcon /> },
  ]

  const faqs = [
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
  ]

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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950"></div>
          
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-900/3 to-cyan-900/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-900/3 to-slate-800/2 rounded-full blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          </div>
        </div>
      </div>

      <CosmicNavbar />

      <main className="relative z-10">
        {/* Hero Intro Section */}
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-3 mb-8"
                >
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <ServicesCenterIcon />
                    </div>
                    <span className="text-blue-400 font-medium tracking-wider">مركز الخدمات</span>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mb-8"
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                    مركز <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">الخدمات المتكاملة</span>
                  </h1>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
                  
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    اكتشف عالمًا من الخدمات التقنية المتقدمة
                  </p>
                </motion.div>
                
                {/* Stats Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="max-w-3xl mx-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl text-center hover:border-slate-600/30 transition-all duration-300"
                      >
                        <div className="flex flex-col items-center">
                          <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-4">
                            <div className="text-blue-400">
                              {stat.icon}
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                          <div className="text-sm text-slate-400">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Main StoreWizard Section */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
              
              {/* Container */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800/10 to-slate-900/5 backdrop-blur-sm border border-slate-700/20"></div>
                
                <div className="relative z-10">
                  <Suspense
                    fallback={
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="min-h-[600px] flex flex-col items-center justify-center"
                      >
                        <div className="relative mb-6">
                          <div className="w-12 h-12 border-3 border-blue-500/30 rounded-full"></div>
                          <div className="absolute top-0 left-0 w-12 h-12 border-3 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                        </div>
                        <motion.p
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-slate-400"
                        >
                          جاري تحميل الخدمات...
                        </motion.p>
                      </motion.div>
                    }
                  >
                    <StoreWizard />
                  </Suspense>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </motion.div>
              
              <h3 className="text-3xl font-bold text-slate-100 mb-4">
                أسئلة <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">متكررة</span>
              </h3>
              
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
              </p>
            </div>

            {/* FAQs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl hover:border-slate-600/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-100 mb-2">{faq.q}</h4>
                      <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="text-sm text-slate-400">لم تجد إجابتك؟</span>
                <a 
                  href="/contact" 
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  تواصل مع الدعم
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <CosmicFooter />
    </motion.div>
  )
}