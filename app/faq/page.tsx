"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { xhostFAQs } from "@/lib/data/xhost-faqs"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(xhostFAQs.map((faq) => faq.category)))
  }, [])

  // Filter FAQs
  const filteredFAQs = useMemo(() => {
    return xhostFAQs.filter((faq) => {
      const matchesSearch =
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === null || faq.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

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
                <span className="text-blue-400 font-medium tracking-wider">الأسئلة الشائعة</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                كيف يمكننا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">مساعدتك؟</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                ابحث عن إجابات لأكثر الأسئلة شيوعاً حول خدماتنا واستضافتنا
              </p>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="relative">
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="ابحث عن سؤال..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12 pl-6 py-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center mb-12"
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === null
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 hover:text-white border border-slate-700/30 hover:border-slate-600/40"
                }`}
              >
                جميع الفئات
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      : "bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 hover:text-white border border-slate-700/30 hover:border-slate-600/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Search Results Info */}
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-8"
              >
                <p className="text-slate-400">
                  {filteredFAQs.length > 0 
                    ? `عثرنا على ${filteredFAQs.length} نتيجة لـ "${searchQuery}"`
                    : `لم نعثر على نتائج لـ "${searchQuery}"`
                  }
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* FAQs Section */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* FAQs List */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, idx) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* FAQ Card */}
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className={`w-full text-right p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border rounded-xl transition-all duration-300 ${
                        openIndex === idx
                          ? "border-blue-500/30 shadow-lg shadow-blue-500/10"
                          : "border-slate-700/20 hover:border-slate-600/30"
                      }`}
                    >
                      <div className="flex justify-between items-start gap-6">
                        <div className="flex-1">
                          {/* Category Badge */}
                          <div className="inline-flex items-center gap-2 mb-3">
                            <div className={`w-2 h-2 rounded-full ${
                              faq.category === "الحسابات" ? "bg-blue-500" :
                              faq.category === "الفواتير" ? "bg-emerald-500" :
                              faq.category === "الدعم الفني" ? "bg-purple-500" :
                              "bg-cyan-500"
                            }`}></div>
                            <span className="text-xs font-medium text-slate-400">
                              {faq.category}
                            </span>
                          </div>
                          
                          {/* Question */}
                          <h3 className="text-lg font-semibold text-slate-100 mb-4 leading-relaxed">
                            {faq.q}
                          </h3>
                        </div>
                        
                        {/* Toggle Icon */}
                        <div className="flex-shrink-0">
                          <svg 
                            className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${
                              openIndex === idx ? "rotate-180" : ""
                            }`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Answer */}
                      {openIndex === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-slate-700/30"
                        >
                          <p className="text-slate-300 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </button>

                    {/* Connection Line (except for last item) */}
                    {idx < filteredFAQs.length - 1 && openIndex === idx && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-blue-500 to-transparent"
                      ></motion.div>
                    )}
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/30 mb-6">
                    <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">لم نعثر على نتائج</h3>
                  <p className="text-slate-400 mb-6">حاول البحث بكلمات أخرى أو تصفح جميع الفئات</p>
                  <button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory(null)
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    عرض جميع الأسئلة
                  </button>
                </motion.div>
              )}
            </div>

            {/* FAQs Count */}
            {filteredFAQs.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-12"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-slate-400">
                    عرض {filteredFAQs.length} من {xhostFAQs.length} سؤالاً
                  </span>
                </div>
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
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                  هل لديك سؤال آخر؟
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  فريق الدعم الفني لدينا مستعد للإجابة على جميع استفساراتك على مدار الساعة
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => window.location.href = "/contact"}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    تواصل مع الدعم
                  </button>
                  <button
                    onClick={() => window.location.href = "/services"}
                    className="px-8 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-semibold border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                  >
                    استكشاف الخدمات
                  </button>
                </div>
                
                <p className="text-slate-400 text-sm mt-8">
                  وقت استجابة متوسط: 15 دقيقة • متوفر 24/7
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