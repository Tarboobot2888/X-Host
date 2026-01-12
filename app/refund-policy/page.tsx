"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"

export default function RefundPolicyPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  const sections = [
    {
      id: "scope",
      title: "1. نطاق السياسة",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            تغطي هذه السياسة جميع خدمات الاستضافة والسيرفرات المقدمة من X-Host، بما في ذلك:
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">خطط السيرفرات المدعومة:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "X-Host Free (أسبوعي)",
                  "X-Host Spark (شهري)",
                  "X-Host Core (شهري)",
                  "X-Host Rise (شهري)",
                  "X-Host Drive (شهري)",
                  "X-Host Boost (شهري)",
                  "X-Host Scale (شهري)",
                  "X-Host Power (شهري)",
                  "X-Host Elite (شهري)",
                  "X-Host Titan (شهري)",
                  "X-Host Apex (شهري)",
                  "X-Host Infinity (شهري)",
                ].map((plan, idx) => (
                  <div key={idx} className="text-sm text-slate-400 bg-slate-800/30 rounded px-3 py-2">
                    {plan}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">أنواع السيرفرات:</h4>
              <div className="flex flex-wrap gap-2">
                {["Dev Stack", "Web Server", "Virtual Machines", "VPS - SSH", "Remote Desktop", "Bot WhatsApp EN"].map(
                  (type, idx) => (
                    <span key={idx} className="text-sm text-slate-400 bg-slate-800/30 rounded-full px-3 py-1">
                      {type}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed pt-4">
            تستثنى من هذه السياسة أي خدمات استثنائية أو عقود خاصة لم تتم الموافقة عليها كتابةً من قبل إدارة X-Host.
          </p>
        </div>
      ),
    },
    {
      id: "definitions",
      title: "2. التعريفات المهمة",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { term: "العميل", def: "الشخص الطبيعي أو الاعتباري الذي يشترك في خدمات X-Host." },
            { term: "الخدمة", def: "السيرفر أو الخطة المستأجرة من X-Host بموجب العقد بين الطرفين." },
            { term: "فترة الضمان", def: "المدة الزمنية المسموحة للعميل لطلب استرجاع المبلغ دون الاستفادة الفعلية من الخدمة." },
            { term: "الرصيد", def: "المبالغ المالية المشحونة في محفظة حسابك على X-Host." },
            { term: "الفاتورة", def: "الوثيقة الرسمية الصادرة عن X-Host تفصيل الخدمة والرسوم." },
            { term: "الاستخدام الفعلي", def: "أي استهلاك ملموس للموارد أو الخدمات خلال فترة الاشتراك." },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-2">{item.term}</h4>
              <p className="text-sm text-slate-300">{item.def}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "3. أهلية الاسترجاع والشروط",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-2">✓ استرجاع كامل (Full Refund):</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• إذا فشل تفعيل السيرفر أو تعذر تقديم الخدمة بسبب خطأ تقني من جانب X-Host</li>
              <li>• في حالة عدم توفر الموارد أو المواصفات المطلوبة حسب الخطة المشتراة</li>
              <li>• إذا لم يتم تفعيل الخدمة خلال 24 ساعة من وقت الدفع</li>
            </ul>
          </div>

          <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg">
            <h4 className="font-semibold text-emerald-400 mb-2">⏰ المهل الزمنية:</h4>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-slate-300">خطة X-Host Free:</span>
                <p className="text-sm text-slate-400">مهلة استرجاع 24 ساعة من وقت الدفع</p>
              </div>
              <div>
                <span className="font-semibold text-slate-300">خطط شهرية (Spark إلى Infinity):</span>
                <p className="text-sm text-slate-400">مهلة تقديم طلب الاسترجاع 48 ساعة من وقت الدفع</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "prorated",
      title: "4. الاسترجاع الجزئي والرصيد",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-2">التحويل لرصيد الحساب:</h4>
            <p className="text-slate-300 text-sm">
              يمكن تحويل المبلغ المستحق للاسترجاع إلى رصيد (Credit) في محفظة الحساب بدلاً من استرجاعه مباشرة.
            </p>
          </div>
          <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
            <div className="bg-slate-800/30 p-3 rounded border border-slate-700/30">
              <p className="text-cyan-400 font-mono text-sm">الحساب: (عدد الأيام المتبقية / إجمالي أيام الفترة) × المبلغ المدفوع</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "non-refundable",
      title: "5. البنود غير القابلة للاسترجاع",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "رسوم البوابات والعمولات", desc: "جميع رسوم بوابات الدفع ورسوم المعالجة البنكية" },
            { title: "التراخيص والخدمات الإضافية", desc: "أي تراخيص طرف ثالث مثل أنظمة Windows داخل RDP" },
            { title: "الخدمات المستخدمة فعلياً", desc: "أي مبلغ يتعلق بخدمة تم استخدامها بشكل فعلي" },
            { title: "إساءة الاستخدام والمخالفات", desc: "المدفوعات المرتبطة بخدمات لم تُستخدم في أنشطة مصرح بها" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gradient-to-b from-red-500/10 to-red-600/5 border border-red-500/20 rounded-lg">
              <h4 className="font-semibold text-red-400 mb-2">✗ {item.title}</h4>
              <p className="text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "wallet",
      title: "6. سياسة الرصيد والمحفظة",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-2">شحن الرصيد:</h4>
            <p className="text-slate-300 text-sm">
              يمكن استرداد المبلغ الكامل إذا كان غير مستخدم خلال 7 أيام من تاريخ الشحن.
            </p>
          </div>
          <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-2">الرصيد المستخدم جزئياً:</h4>
            <p className="text-slate-300 text-sm">
              يتم رد المبلغ غير المستخدم فقط، مع خصم رسوم بوابة الدفع (إن وجدت).
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "rejection",
      title: "7. حالات رفض الاسترجاع",
      content: (
        <div className="space-y-3">
          {[
            "استخدام الخدمة في أنشطة Spam أو البريد العشوائي",
            "استخدام الخدمة في تعدين العملات الرقمية بدون ترخيص",
            "شن هجمات سيبرانية أو اختراقات أو أي نشاط تخريبي",
            "استضافة محتوى غير قانوني أو محظور",
            "الاحتيال أو محاولة الحصول على خدمات بطرق مخادعة",
            "تقديم Chargeback بدون التواصل مع فريق الدعم أولاً",
            "تقديم طلب استرجاع بعد انتهاء فترة الضمان المحددة",
          ].map((reason, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-b from-red-500/5 to-red-600/5 border border-red-500/10 rounded-lg">
              <span className="text-red-400 font-bold mt-1">✗</span>
              <span className="text-slate-300 text-sm">{reason}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "process",
      title: "8. عملية طلب الاسترجاع",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-2">طرق التقديم:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-300 text-sm">
                <span className="text-green-400">✓</span>
                <span>تقديم تذكرة عبر نظام الدعم الرسمي على لوحة التحكم</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300 text-sm">
                <span className="text-green-400">✓</span>
                <span>إرسال بريد إلى البريد الرسمي: support@x-host.site</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-2">البيانات المطلوبة:</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm">
              <li>رقم الفاتورة أو رقم المعاملة</li>
              <li>اسم الخدمة أو السيرفر المراد استرجاع مبلغها</li>
              <li>سبب الطلب بشكل واضح وموجز</li>
              <li>تاريخ وقت الشراء/الدفع</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "timeline",
      title: "9. مدة المعالجة والإرجاع",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-b from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-1">مراجعة الطلب:</h4>
              <p className="text-2xl font-bold text-slate-100">1-3 أيام</p>
              <p className="text-xs text-slate-400 mt-1">يتم التحقق من أهلية الطلب ومراجعة الشروط</p>
            </div>
            <div className="p-4 bg-gradient-to-b from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-lg">
              <h4 className="font-semibold text-cyan-400 mb-1">معالجة الاسترجاع:</h4>
              <p className="text-2xl font-bold text-slate-100">5-15 يوم</p>
              <p className="text-xs text-slate-400 mt-1">للظهور في حسابك البنكي</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      title: "10. بيانات التواصل والدعم",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-b from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg">
            <p className="font-semibold text-blue-400 mb-1">البريد الإلكتروني الرسمي:</p>
            <p className="text-slate-100 font-mono text-lg">support@x-host.site</p>
          </div>
          <div className="p-4 bg-gradient-to-b from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg">
            <p className="font-semibold text-blue-400 mb-1">نظام تقديم التذاكر:</p>
            <p className="text-slate-300">متاح عبر لوحة التحكم الخاصة بك على X-Host</p>
          </div>
        </div>
      ),
    },
  ]

  const tableOfContents = [
    "نطاق السياسة",
    "التعريفات المهمة",
    "أهلية الاسترجاع والشروط",
    "الاسترجاع الجزئي والرصيد",
    "البنود غير القابلة للاسترجاع",
    "سياسة الرصيد والمحفظة",
    "حالات رفض الاسترجاع",
    "عملية طلب الاسترجاع",
    "مدة المعالجة والإرجاع",
    "بيانات التواصل والدعم",
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
                <span className="text-blue-400 font-medium tracking-wider">السياسات والشروط</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                سياسة <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">الاسترجاع والتعويضات</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                ضمانات واضحة وشفافة لجميع خدمات الاستضافة والسيرفرات
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-slate-400">آخر تحديث: 11 يناير 2026</span>
              </div>
            </div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-12 p-8 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-2xl"
            >
              <p className="text-lg text-slate-300 leading-relaxed text-center">
                تلتزم شركة X-Host بضمان رضا عملائنا عن الخدمات المقدمة. تحدد هذه السياسة الشروط والأحكام الكاملة لعملية
                الاسترجاع والتعويضات، والتي تطبق على جميع خدمات الاستضافة والسيرفرات المقدمة من الشركة.
              </p>
            </motion.div>

            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">محتويات السياسة</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tableOfContents.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${sections[idx].id}`}
                    className="group p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-400">{idx + 1}</span>
                      </div>
                      <div className="text-right flex-1">
                        <span className="text-slate-300 group-hover:text-blue-400 transition-colors">{item}</span>
                      </div>
                      <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Policy Sections */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.5, duration: 0.4 }}
                  className="relative"
                >
                  {/* Section Card */}
                  <div className="border border-slate-700/20 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/10 to-slate-900/5">
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-6 flex items-center justify-between hover:bg-slate-800/20 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                          <span className="text-lg font-bold text-blue-400">{idx + 1}</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-100 text-right">{section.title}</h2>
                      </div>
                      <svg 
                        className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${expandedSections[section.id] ? "rotate-180" : ""}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Section Content */}
                    {expandedSections[section.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t border-slate-700/20"
                      >
                        {section.content}
                      </motion.div>
                    )}
                  </div>

                  {/* Connection Line (except for last item) */}
                  {idx < sections.length - 1 && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-slate-700/20 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* General Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-16 p-8 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-slate-100 mb-6 text-center">بنود عامة مهمة</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/20 rounded-xl">
                  <h4 className="font-semibold text-blue-400 mb-2">طبيعة الخدمة الرقمية:</h4>
                  <p className="text-slate-300 text-sm">
                    خدمات X-Host رقمية بطبيعتها، وتخصيص الموارد والتفعيل يتم بشكل فوري عند استكمال عملية الدفع. لذا فإن أي
                    استخدام (حتى ولو بسيط) يعتبر استفادة من الخدمة.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/20 rounded-xl">
                  <h4 className="font-semibold text-blue-400 mb-2">تعديل السياسة:</h4>
                  <p className="text-slate-300 text-sm">
                    يحق لـ X-Host تعديل هذه السياسة في أي وقت بدون إشعار مسبق. ستكون النسخة الأخيرة من السياسة هي النافذة.
                    يوصى بمراجعة هذه السياسة بشكل دوري.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/20 rounded-xl">
                  <h4 className="font-semibold text-blue-400 mb-2">القانون الواجب التطبيق:</h4>
                  <p className="text-slate-300 text-sm">
                    تخضع هذه السياسة لأحكام القوانين السارية. أي نزاع ينشأ عن تطبيق هذه السياسة يتم حله من خلال التواصل
                    الودي أولاً.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-12"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 via-slate-900/5 to-slate-800/10">
                  <div className="absolute inset-0 bg-[linear-gradient(30deg,#33415505_25%,transparent_25%),linear-gradient(-30deg,#33415505_25%,transparent_25%),linear-gradient(30deg,transparent_75%,#33415505_75%),linear-gradient(-30deg,transparent_75%,#33415505_75%)] bg-[size:40px_40px]"></div>
                </div>
                
                <div className="relative z-10 p-8 md:p-12 text-center">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                    هل لديك استفسار آخر؟
                  </h2>
                  
                  <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    فريق الدعم الفني لدينا مستعد للإجابة على جميع استفساراتك المتعلقة بالسياسات
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="mailto:support@x-host.site"
                      className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                    >
                      تواصل عبر البريد الإلكتروني
                    </a>
                    <Link
                      href="/faq"
                      className="px-8 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-semibold border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                    >
                      تصفح الأسئلة الشائعة
                    </Link>
                  </div>
                  
                  <p className="text-slate-400 text-sm mt-8">
                    البريد الرسمي: support@x-host.site • آخر تحديث: 11 يناير 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <CosmicFooter />
    </motion.div>
  )
}