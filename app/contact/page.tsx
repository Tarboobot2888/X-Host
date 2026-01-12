"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "البريد الإلكتروني",
      value: "support@x-host.site",
      action: () => {
        const subject = encodeURIComponent("استفسار - موقع X-Host")
        const body = encodeURIComponent("مرحباً،\n\nأود الاستفسار عن:\n\n")
        window.open(`mailto:support@x-host.site?subject=${subject}&body=${body}`, '_blank')
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "الهاتف",
      value: "+201016948771",
      action: () => window.open('tel:+201016948771', '_blank'),
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      label: "الموقع",
      value: "x-host.cloud",
      action: () => window.open('https://x-host.cloud', '_blank'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      label: "WhatsApp",
      value: "تواصل مباشر",
      action: () => window.open('https://wa.me/201016948771?text=مرحباً،%20أود%20الاستفسار%20عن%20خدمات%20الاستضافة', '_blank'),
      color: "from-green-500 to-emerald-500"
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("الرجاء ملء جميع الحقول المطلوبة")
      return
    }

    setIsSubmitting(true)

    // إنشاء محتوى البريد الإلكتروني
    const subject = encodeURIComponent(`رسالة من ${formData.name} - موقع X-Host`)
    
    // إنشاء نص البريد بتنسيق جميل
    const emailBody = `
مرحباً فريق دعم X-Host،

أنا ${formData.name} وأود التواصل معكم بشأن:

${formData.message}

---
معلومات الاتصال:
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}

---
تم إرسال هذه الرسالة من خلال نموذج الاتصال في موقع x-host.cloud
    `.trim()

    // تشفير نص البريد بشكل صحيح
    const body = encodeURIComponent(emailBody)

    // محاولة فتح تطبيق Gmail على الهاتف أو الويب
    // رابط mailto يعمل على الأجهزة المحمولة لفتح تطبيق Gmail المثبت
    // على أجهزة الكمبيوتر يفتح برنامج البريد الافتراضي
    const mailtoLink = `mailto:support@x-host.site?subject=${subject}&body=${body}`

    // إنشاء رابط Gmail الويب كبديل
    const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=support@x-host.site&su=${subject}&body=${body}`

    // محاولة فتح mailto (ينجح مع تطبيقات البريد المثبتة)
    const mailtoWindow = window.open(mailtoLink, '_blank')

    // التحقق مما إذا فتح mailto بنجاح (على الجوال)
    setTimeout(() => {
      // إذا لم يفتح mailto بنجاح (على المتصفحات التي تمنع popups)، نفتح رابط Gmail الويب
      if (!mailtoWindow || mailtoWindow.closed || typeof mailtoWindow.closed == 'undefined') {
        window.open(gmailWebLink, '_blank')
      }

      setIsSubmitting(false)
      
      // عرض رسالة إرشادية
      alert(`
تم إعداد رسالتك جاهزة للإرسال!

سيتم الآن فتح تطبيق البريد الإلكتروني (Gmail) مع:
- المرسل: بريدك الإلكتروني
- المستلم: support@x-host.site
- الموضوع: ${formData.name} - موقع X-Host
- الرسالة: ${formData.message.substring(0, 50)}...

يرجى مراجعة الرسالة وإكمال عملية الإرسال.
      `)

      // إعادة تعيين النموذج
      setFormData({ name: "", email: "", message: "" })
    }, 1000)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.4 }} 
      className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-950"
    >
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <StarField intensity={0.15} />
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>
          
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/5 to-cyan-900/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/5 to-slate-800/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <CosmicNavbar />

      <main className="relative z-10">
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <span className="text-blue-400 font-medium tracking-wider">تواصل معنا</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                نحن هنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">لخدمتك</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                فريق الدعم الفني لدينا متاح على مدار الساعة للإجابة على استفساراتك ومساعدتك في رحلتك الرقمية
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border border-slate-700/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100">أرسل رسالتك</h2>
                  </div>
                  
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/10 rounded-lg">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-slate-300">
                        سيتم فتح تطبيق Gmail على جهازك مع رسالتك جاهزة للإرسال. فقط اضغط إرسال!
                      </p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        الاسم الكامل
                        <span className="text-red-400 mr-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/30 border border-slate-700/30 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        البريد الإلكتروني
                        <span className="text-red-400 mr-1">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/30 border border-slate-700/30 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                        placeholder="example@email.com"
                      />
                      <p className="text-xs text-slate-400 mt-2">
                        هذا البريد سيتم استخدامه كمرسل في رسالتك
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        الرسالة
                        <span className="text-red-400 mr-1">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-slate-800/30 border border-slate-700/30 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 resize-none transition-all duration-300"
                        placeholder="اكتب رسالتك هنا..."
                      />
                      <p className="text-xs text-slate-400 mt-2">
                        سيتم إرسال هذه الرسالة إلى support@x-host.site
                      </p>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          جاري فتح Gmail...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          إرسال عبر Gmail
                        </>
                      )}
                    </motion.button>
                    
                    <div className="p-3 bg-gradient-to-r from-slate-800/30 to-slate-900/20 border border-slate-700/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-sm text-slate-300 font-medium mb-1">كيف يعمل؟</p>
                          <p className="text-xs text-slate-400">
                            1. املأ النموذج ← 2. اضغط "إرسال عبر Gmail" ← 3. سيتم فتح تطبيق Gmail مع رسالتك جاهزة ← 4. اضغط إرسال في Gmail
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border border-slate-700/20 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-100">معلومات التواصل</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {contactInfo.map((info, idx) => (
                        <motion.button
                          key={idx}
                          onClick={info.action}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full text-left"
                        >
                          <div className="p-4 rounded-xl bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}/10 border ${info.color.split(' ')[1]}/20 group-hover:scale-110 transition-transform duration-300`}>
                                <div className={`${info.color.split(' ')[1].replace('to-', 'text-')}`}>
                                  {info.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                                <p className="text-lg font-semibold text-slate-100 group-hover:text-blue-300 transition-colors duration-300">
                                  {info.value}
                                </p>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Support Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border border-slate-700/20 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ساعات العمل
                      </h3>
                      <div className="space-y-3">
                        {[
                          { day: "الأحد - الخميس", time: "9:00 صباحاً - 6:00 مساءً" },
                          { day: "الجمعة - السبت", time: "دعم فني مستمر" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-700/20 last:border-0">
                            <span className="text-slate-300 text-sm">{item.day}</span>
                            <span className="text-slate-400 text-sm">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border border-slate-700/20 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        استجابة سريعة
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-3">
                        نضمن الرد خلال 24 ساعة عمل
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-slate-700/30 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-4/5"></div>
                        </div>
                        <span className="text-xs text-slate-400">80% خلال 4 ساعات</span>
                      </div>
                    </div>
                  </div>

                  {/* Gmail Instructions */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-100 mb-2">استخدام Gmail</h4>
                        <ul className="text-slate-300 text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>يجب أن يكون Gmail مثبتاً على جهازك</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>يمكنك المراجعة والتعديل قبل الإرسال</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>الرسالة موجهة إلى support@x-host.site</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <CosmicFooter />
    </motion.div>
  )
}