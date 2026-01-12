"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"

export default function SupportPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const supportMethods = [
    {
      id: "email",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "البريد الإلكتروني",
      description: "راسلنا على البريد الإلكتروني للأسئلة المفصلة",
      contact: "support@x-host.site",
      action: "mailto:support@x-host.site",
      color: "from-blue-500 to-cyan-500",
      time: "رد خلال 4 ساعات"
    },
    {
      id: "whatsapp",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "WhatsApp",
      description: "تواصل مباشر مع فريق الدعم على الواتساب",
      contact: "+201016948771",
      action: "https://wa.me/201016948771",
      color: "from-green-500 to-emerald-500",
      time: "رد فوري"
    },
    {
      id: "phone",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "الهاتف",
      description: "اتصل بنا مباشرة للاستفسارات الفورية",
      contact: "+201016948771",
      action: "tel:+201016948771",
      color: "from-purple-500 to-pink-500",
      time: "متوفر خلال 9 صباحًا - 12 مساءً"
    },
    {
      id: "website",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "الموقع الإلكتروني",
      description: "لوحة التحكم ونظام التذاكر",
      contact: "x-host.cloud",
      action: "https://x-host.cloud",
      color: "from-amber-500 to-orange-500",
      time: "متوفر 24/7"
    },
  ]

  const commonIssues = [
    {
      title: "كيفية إعادة تعيين كلمة المرور؟",
      solution: "استخدم ميزة \"نسيت كلمة المرور\" في صفحة تسجيل الدخول",
      link: "/faq#reset-password"
    },
    {
      title: "مشاكل في تفعيل السيرفر؟",
      solution: "تحقق من صفحة حالة النظام أولاً",
      link: "/status"
    },
    {
      title: "أسئلة حول الفواتير؟",
      solution: "راجع سياسة الاسترجاع وشروط الدفع",
      link: "/refund-policy"
    },
    {
      title: "تحسين أداء السيرفر؟",
      solution: "استكشاف إرشادات التحسين في مركز المساعدة",
      link: "/help-center"
    }
  ]

  const workingHours = [
    { day: "السبت - الخميس", hours: "9:00 صباحًا - 12:00 مساءً", status: "متوفر" },
    { day: "الجمعة", hours: "10:00 صباحًا - 11:00 مساءً", status: "متوفر" },
    { day: "الدعم الفوري", hours: "24/7 عبر البريد والواتساب", status: "متوشر" },
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
          
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-900/3 to-cyan-900/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-900/3 to-slate-800/2 rounded-full blur-3xl"></div>
          
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
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <span className="text-blue-400 font-medium tracking-wider">الدعم الفني</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                كيف يمكننا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">مساعدتك؟</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                فريق الدعم الفني لدينا مستعد لمساعدتك على مدار الساعة. اختر طريقة التواصل الأنسب لك
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            >
              {[
                { value: "15 دقيقة", label: "متوسط وقت الرد" },
                { value: "24/7", label: "دعم متواصل" },
                { value: "98%", label: "رضا العملاء" },
                { value: "< 1 ساعة", label: "حل المشاكل" },
              ].map((stat, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">
                طرق <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">التواصل</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                تواصل معنا بأي طريقة تناسبك. فريق الدعم جاهز للإجابة على استفساراتك
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {supportMethods.map((method, idx) => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className={`p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl hover:border-slate-600/30 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color}/20 border ${method.color.split(' ')[1]}/30 flex items-center justify-center`}>
                        <div className={`${method.color.split(' ')[1].replace('to-', 'text-')}`}>
                          {method.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100 mb-1">{method.title}</h3>
                        <p className="text-sm text-slate-400">{method.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">معلومات التواصل:</span>
                      <button
                        onClick={() => copyToClipboard(method.contact, method.id)}
                        className="text-xs text-slate-500 hover:text-blue-400 transition-colors"
                      >
                        {copied === method.id ? "تم النسخ!" : "نسخ"}
                      </button>
                    </div>
                    <div className="relative group">
                      <a
                        href={method.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/30 rounded-lg hover:border-slate-600/50 transition-all duration-300"
                      >
                        <p className="text-lg font-semibold text-slate-100 font-mono">{method.contact}</p>
                      </a>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/20">
                    <span className="text-sm text-slate-500">{method.time}</span>
                    <a
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      التواصل الآن →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Working Hours & Common Issues */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">أوقات العمل</h3>
                </div>

                <div className="space-y-4">
                  {workingHours.map((schedule, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-lg">
                      <div>
                        <div className="font-semibold text-slate-100 mb-1">{schedule.day}</div>
                        <div className="text-sm text-slate-400">{schedule.hours}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        schedule.status === "متوفر" 
                          ? "bg-emerald-500/20 text-emerald-400" 
                          : "bg-blue-500/20 text-blue-400"
                      }`}>
                        {schedule.status}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700/20">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>فريق الدعم متوفر الآن للرد على استفساراتك</span>
                  </div>
                </div>
              </motion.div>

              {/* Common Issues */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">أسئلة شائعة</h3>
                </div>

                <div className="space-y-4">
                  {commonIssues.map((issue, idx) => (
                    <a
                      key={idx}
                      href={issue.link}
                      className="block p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-lg hover:border-slate-600/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                            {issue.title}
                          </h4>
                          <p className="text-sm text-slate-400">{issue.solution}</p>
                        </div>
                        <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700/20">
                  <a
                    href="/faq"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>استكشاف جميع الأسئلة الشائعة</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-32 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                  هل تحتاج إلى مساعدة فورية؟
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  فريق الدعم الفني لدينا مستعد للرد على استفساراتك في أي وقت. لا تتردد في التواصل معنا
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:support@x-host.site"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    إرسال بريد إلكتروني
                  </a>
                  <a
                    href="https://wa.me/201016948771"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-green-500/80 to-emerald-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                  >
                    تواصل عبر الواتساب
                  </a>
                </div>
                
                <p className="text-slate-400 text-sm mt-8">
                  وقت استجابة: أقل من 15 دقيقة • متوفر 24/7 • فريق دعم متخصص
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