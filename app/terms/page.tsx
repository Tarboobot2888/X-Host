"use client"

import { motion } from "framer-motion"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { useState } from "react"

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<number | null>(null)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const sections = [
    {
      title: "الشروط العامة",
      content: "باستخدامك لموقع X-Host، أنت توافق على جميع الشروط والأحكام التالية. إذا لم توافق على أي من هذه الشروط، لا تستخدم الموقع.",
      icon: "📋",
      color: "from-blue-500/20 to-cyan-500/20",
      important: true
    },
    {
      title: "الاستخدام المسموح به",
      content: "تتعهد باستخدام الخدمات فقط للأغراض القانونية والبناءة، وتحظر جميع الأنشطة غير القانونية أو الضارة.",
      icon: "✅",
      color: "from-emerald-500/20 to-green-500/20",
      important: true
    },
    {
      title: "الملكية الفكرية",
      content: "جميع المحتويات والعلامات التجارية على الموقع ملك لـ X-Host ولا يمكن استخدامها بدون إذن كتابي.",
      icon: "©️",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "تحديد المسؤولية",
      content: "X-Host غير مسؤولة عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الخدمات.",
      icon: "⚖️",
      color: "from-amber-500/20 to-orange-500/20",
      important: true
    },
    {
      title: "إنهاء الخدمة",
      content: "نحتفظ بالحق في إنهاء الخدمة لأي مستخدم ينتهك هذه الشروط أو يشكل تهديداً للنظام أو المستخدمين الآخرين.",
      icon: "⛔",
      color: "from-rose-500/20 to-red-500/20"
    },
    {
      title: "التعديلات",
      content: "نحتفظ بحق تعديل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية.",
      icon: "🔄",
      color: "from-indigo-500/20 to-blue-500/20"
    },
  ]

  const lastUpdated = "يناير 2026"

  const quickPoints = [
    { text: "استخدام الخدمات يعني موافقتك على جميع الشروط", icon: "✓" },
    { text: "الالتزام بالاستخدام القانوني والبنّاء", icon: "⚖️" },
    { text: "احترام حقوق الملكية الفكرية", icon: "©️" },
    { text: "حقنا في تعديل الشروط عند الحاجة", icon: "📝" },
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
          
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-900/3 to-indigo-900/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-amber-900/3 to-slate-800/2 rounded-full blur-3xl"></div>
          
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
                <span className="text-blue-400 font-medium tracking-wider">الشروط القانونية</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                الشروط و<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">الأحكام</span>
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-lg text-slate-300">آخر تحديث:</div>
                <div className="px-4 py-2 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/30 rounded-lg">
                  <div className="text-blue-400 font-medium">{lastUpdated}</div>
                </div>
              </div>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                هذه الشروط تحكم استخدامك لخدمات X-Host. يرجى قراءتها بعناية قبل استخدام أي من خدماتنا.
              </p>
              
              {/* Quick Important Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <div className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-blue-500/20 rounded-xl mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-slate-100">نقاط مهمة</h3>
                  </div>
                  <div className="space-y-2">
                    {quickPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm text-blue-400">{point.icon}</span>
                        </div>
                        <span className="text-slate-300 text-sm flex-1">{point.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Terms Sections */}
        <section className="pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex gap-8 mb-12">
              <div className="w-64 space-y-2 flex-shrink-0">
                {sections.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSection(idx)
                      const element = document.getElementById(`section-${idx}`)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === idx
                        ? "bg-gradient-to-r from-blue-500/20 to-amber-500/20 text-blue-300"
                        : "text-slate-400 hover:text-slate-300 hover:bg-slate-800/10"
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium">{section.title}</span>
                      {section.important && (
                        <span className="text-xs text-amber-400 mt-1">هام</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile Category Tabs */}
              <div className="lg:hidden w-full mb-8">
                <div className="flex overflow-x-auto gap-2 pb-2">
                  {sections.map((section, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveSection(idx)
                        const element = document.getElementById(`section-${idx}`)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === idx
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                          : "bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 hover:text-white border border-slate-700/30"
                      }`}
                    >
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  id={`section-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  onViewportEnter={() => setActiveSection(idx)}
                  className="relative"
                >
                  {/* Section Card */}
                  <div className={`p-8 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border rounded-2xl transition-all duration-300 ${
                    activeSection === idx
                      ? "border-blue-500/30 shadow-lg shadow-blue-500/10"
                      : "border-slate-700/20 hover:border-slate-600/30"
                  }`}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${section.color}`}>
                        <span className="text-2xl">{section.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-2xl font-bold text-slate-100">{section.title}</h2>
                          {section.important && (
                            <div className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full">
                              <span className="text-xs font-medium text-amber-400">هام</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                          <div className="text-sm text-slate-500">البند {idx + 1}.{section.important ? "1" : "0"}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg text-slate-300 leading-relaxed">
                        {section.content}
                      </p>
                      
                      {/* Additional Info based on section */}
                      {idx === 0 && (
                        <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm text-slate-300">
                              مواصلة استخدامك للخدمات يعني موافقتك على أي تحديثات مستقبلية لهذه الشروط.
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {idx === 1 && (
                        <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm text-slate-300">
                              يشمل ذلك الامتناع عن نشر محتوى غير قانوني، إساءة استخدام الأنظمة، أو انتهاك خصوصية الآخرين.
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {idx === 3 && (
                        <div className="p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.768 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <p className="text-sm text-slate-300">
                              يشمل ذلك أضرار فقدان البيانات، فقدان الأرباح، أو أي أضرار غير مباشرة أخرى.
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {idx === 4 && (
                        <div className="p-4 bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/20 rounded-lg">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                            <p className="text-sm text-slate-300">
                              قد يشمل ذلك الأنشطة غير القانونية، انتهاك الخصوصية، أو إساءة استخدام الموارد.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Connection Line (except for last item) */}
                  {idx < sections.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Acceptance Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="p-8 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/30 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">الإقرار والموافقة</h3>
                    <p className="text-slate-400">
                      باستخدامك لخدمات X-Host، فإنك تقر بأنك قد قرأت وفهمت هذه الشروط وتوافق على الالتزام بها.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setAcceptedTerms(!acceptedTerms)}
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-300 ${
                      acceptedTerms
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-500"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    {acceptedTerms && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <label className="text-slate-300 cursor-pointer select-none">
                    أوافق على الشروط والأحكام المذكورة أعلاه
                  </label>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-700/30">
                  <p className="text-sm text-slate-400">
                    لمزيد من التفاصيل أو الاستفسارات، يرجى الرجوع إلى <a href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">سياسة الخصوصية</a> أو <a href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">الاتصال بنا</a>.
                  </p>
                </div>
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
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                  مستعد للبدء؟
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  بعد قراءة الشروط والأحكام، يمكنك الآن البدء في استخدام خدمات X-Host بأمان وثقة
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => window.location.href = "/services"}
                    disabled={!acceptedTerms}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      acceptedTerms
                        ? "bg-gradient-to-r from-blue-500/80 to-emerald-500/80 text-white hover:shadow-lg hover:shadow-blue-500/20"
                        : "bg-gradient-to-b from-slate-800/20 to-slate-900/10 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    {acceptedTerms ? "استكشاف الخدمات" : "يرجى الموافقة على الشروط أولاً"}
                  </button>
                  <button
                    onClick={() => window.location.href = "/privacy-policy"}
                    className="px-8 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-semibold border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                  >
                    سياسة الخصوصية
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>آخر تحديث: {lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>توافق قانوني</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <CosmicFooter />
    </motion.div>
  )
}