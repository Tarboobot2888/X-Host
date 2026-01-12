"use client"

import { motion } from "framer-motion"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { useState } from "react"

export default function PrivacyPolicyPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  const sections = [
    {
      id: "intro",
      title: "1. مقدمة وسياسة الخصوصية",
      icon: "📄",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            نحن في <span className="text-blue-400 font-semibold">X-Host</span> نولي أهمية قصوى لخصوصيتك وأمان بياناتك. 
            تُعد سياسة الخصوصية هذه جزءًا أساسيًا من التزامنا بحماية معلوماتك الشخصية وحقوقك الرقمية.
          </p>
          <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-slate-300">
              توضح هذه الوثيقة بالتفصيل كيفية جمعنا، واستخدامنا، وحماية بيانات المستخدمين، 
              بالإضافة إلى حقوقك الكاملة فيما يتعلق ببياناتك الشخصية.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "data-collection",
      title: "2. البيانات التي نجمعها",
      icon: "📊",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            نجمع أنواعًا محددة من البيانات لتقديم خدماتنا وتحسين تجربتك:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "البيانات الشخصية الأساسية",
                items: ["الاسم الكامل", "البريد الإلكتروني", "رقم الهاتف", "العنوان"]
              },
              {
                title: "بيانات الحساب والاستخدام",
                items: ["اسم المستخدم", "كلمة المرور (مشفرة)", "سجل النشاط", "تفضيلات الإعدادات"]
              },
              {
                title: "بيانات الخدمة والتقنية",
                items: ["عنوان IP", "نوع المتصفح", "نظام التشغيل", "سجلات الوصول"]
              },
              {
                title: "بيانات الدفع",
                items: ["طرق الدفع", "تواريخ المعاملات", "معلومات الفواتير", "الرصيد المتاح"]
              }
            ].map((category, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-3">{category.title}</h4>
                <ul className="space-y-1">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "data-usage",
      title: "3. كيفية استخدام البيانات",
      icon: "⚙️",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            نستخدم البيانات التي نجمعها للأغراض التالية:
          </p>
          <div className="space-y-3">
            {[
              {
                purpose: "تقديم وتحسين الخدمات",
                description: "تخصيص تجربتك وتقديم الخدمات التي تطلبها"
              },
              {
                purpose: "الأمان والحماية",
                description: "منع الاحتيال والأنشطة غير القانونية وحماية حسابك"
              },
              {
                purpose: "التواصل والدعم",
                description: "الرد على استفساراتك وإرسال تحديثات مهمة"
              },
              {
                purpose: "التحليل والتطوير",
                description: "تحسين أداء الموقع وتطوير ميزات جديدة"
              },
              {
                purpose: "الامتثال القانوني",
                description: "الالتزام باللوائح والقوانين المعمول بها"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-lg">{["✅", "🛡️", "💬", "📈", "⚖️"][idx]}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100 mb-1">{item.purpose}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "data-protection",
      title: "4. حماية البيانات والأمان",
      icon: "🔒",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            نستخدم أحدث التقنيات والإجراءات لحماية بياناتك:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "التشفير المتقدم",
                description: "SSL/TLS 256-bit لتشفير جميع الاتصالات"
              },
              {
                title: "جدران الحماية",
                description: "أنظمة متطورة لمنع الوصول غير المصرح به"
              },
              {
                title: "النسخ الاحتياطي",
                description: "نسخ احتياطية دورية ومشفرة للبيانات"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg text-center">
                <div className="text-2xl mb-3">{["🔐", "🛡️", "💾"][idx]}</div>
                <h4 className="font-semibold text-blue-400 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg">
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-emerald-400">ملاحظة هامة:</span> 
              {" "}لا يتم تخزين بيانات الدفع الحساسة (مثل أرقام البطاقات) على خوادمنا. 
              تتم جميع عمليات الدفع عبر بوابات دفع معتمدة ومؤمنة.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "data-sharing",
      title: "5. مشاركة البيانات مع أطراف ثالثة",
      icon: "🤝",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            نحن نلتزم بعدم مشاركة بياناتك الشخصية إلا في الحالات التالية:
          </p>
          <div className="space-y-3">
            {[
              {
                scenario: "بموافقتك الصريحة",
                description: "عند الموافقة على مشاركة بيانات محددة لغرض محدد"
              },
              {
                scenario: "للتزامات قانونية",
                description: "عندما يقتضي القانون أو النظام القضائي ذلك"
              },
              {
                scenario: "مزودي الخدمات الأساسية",
                description: "شركات الدفع والمعالجة الأساسية اللازمة لتقديم الخدمات"
              },
              {
                scenario: "حماية الحقوق",
                description: "لحماية حقوقنا أو سلامة المستخدمين أو منع الاحتيال"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-lg">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${idx === 0 ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}>
                  {idx === 0 ? "✓" : "ℹ️"}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100 mb-1">{item.scenario}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "user-rights",
      title: "6. حقوقك كـمستخدم",
      icon: "👤",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            تمتلك حقوقًا كاملة فيما يتعلق ببياناتك الشخصية:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                right: "حق الوصول",
                description: "طلب نسخة من بياناتك الشخصية"
              },
              {
                right: "حق التصحيح",
                description: "طلب تصحيح البيانات غير الدقيقة"
              },
              {
                right: "حق الحذف",
                description: "طلب حذف بياناتك الشخصية"
              },
              {
                right: "حق الاعتراض",
                description: "الاعتراض على معالجة بياناتك"
              },
              {
                right: "حق التنقلية",
                description: "الحصول على بياناتك في صيغة رقمية"
              },
              {
                right: "حق سحب الموافقة",
                description: "سحب موافقتك على معالجة البيانات"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                    <span className="text-sm">🏛️</span>
                  </div>
                  <h4 className="font-semibold text-blue-400">{item.right}</h4>
                </div>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "7. سياسة ملفات تعريف الارتباط (Cookies)",
      icon: "🍪",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا:
          </p>
          <div className="space-y-3">
            {[
              {
                type: "الضرورية",
                purpose: "تشغيل الموقع والخدمات الأساسية",
                example: "جلسات تسجيل الدخول"
              },
              {
                type: "الأداء",
                purpose: "تحليل استخدام الموقع وتحسين الأداء",
                example: "تحليلات Google"
              },
              {
                type: "التخصيص",
                purpose: "تذكر تفضيلاتك وإعداداتك",
                example: "تحديد اللغة والموضوع"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-100">{item.type}</h4>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">مفعلة افتراضيًا</span>
                </div>
                <p className="text-sm text-slate-400 mb-2">{item.purpose}</p>
                <p className="text-xs text-slate-500">مثال: {item.example}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
            <p className="text-sm text-slate-300">
              يمكنك إدارة ملفات تعريف الارتباط عبر إعدادات المتصفح. 
              لكن ضع في اعتبارك أن تعطيل بعضها قد يؤثر على وظائف الموقع.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "updates",
      title: "8. تحديثات سياسة الخصوصية",
      icon: "🔄",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            نحتفظ بالحق في تحديث سياسة الخصوصية هذه عندما يكون ذلك ضروريًا:
          </p>
          <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-lg">📢</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">إخطارات التحديث</h4>
                <p className="text-sm text-slate-400">
                  سنقوم بإعلامك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار في الموقع.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-lg">📅</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">تاريخ السريان</h4>
                <p className="text-sm text-slate-400">
                  تصبح التحديثات سارية المفعول فور نشرها على موقعنا الإلكتروني.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      title: "9. التواصل والاستفسارات",
      icon: "📞",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            يمكنك التواصل معنا لأي استفسارات أو ممارسة حقوقك:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-3">البريد الإلكتروني</h4>
              <a 
                href="mailto:privacy@x-host.site" 
                className="text-lg text-slate-100 hover:text-blue-400 transition-colors font-mono"
              >
                privacy@x-host.site
              </a>
              <p className="text-sm text-slate-400 mt-2">للأسئلة المتعلقة بالخصوصية وحقوق البيانات</p>
            </div>
            <div className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-3">الدعم العام</h4>
              <a 
                href="mailto:support@x-host.site" 
                className="text-lg text-slate-100 hover:text-blue-400 transition-colors font-mono"
              >
                support@x-host.site
              </a>
              <p className="text-sm text-slate-400 mt-2">لجميع استفسارات الدعم الفني</p>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-slate-300">
              نلتزم بالرد على جميع استفسارات الخصوصية خلال <span className="font-semibold text-blue-400">72 ساعة عمل</span> 
              {" "}كحد أقصى.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const tableOfContents = [
    "مقدمة وسياسة الخصوصية",
    "البيانات التي نجمعها",
    "كيفية استخدام البيانات",
    "حماية البيانات والأمان",
    "مشاركة البيانات مع أطراف ثالثة",
    "حقوقك كـمستخدم",
    "سياسة ملفات تعريف الارتباط",
    "تحديثات سياسة الخصوصية",
    "التواصل والاستفسارات",
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
                <span className="text-blue-400 font-medium tracking-wider">سياسة الخصوصية</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                خصوصيتك <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">أولاً</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                نلتزم بحماية بياناتك وضمان شفافية كاملة في كيفية جمع واستخدام معلوماتك الشخصية
              </p>
              
              <div className="inline-flex items-center gap-4 px-4 py-2 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-slate-400">آخر تحديث: يناير 2026</span>
              </div>
            </div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-12 p-8 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-2xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100 mb-4">التزامنا بحماية خصوصيتك</h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    في X-Host، نؤمن بأن الخصوصية حق أساسي من حقوق المستخدم. 
                    توضح هذه السياسة تفاصيل شاملة حول كيفية جمعنا وحمايتنا واستخدامنا لبياناتك، 
                    بالإضافة إلى حقوقك الكاملة فيما يتعلق بمعلوماتك الشخصية.
                  </p>
                </div>
              </div>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tableOfContents.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${sections[idx].id}`}
                    className="group p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                        <span className="text-lg">{sections[idx].icon}</span>
                      </div>
                      <div className="text-right flex-1">
                        <span className="text-slate-300 group-hover:text-blue-400 transition-colors text-sm font-medium">
                          {item}
                        </span>
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
            <div className="space-y-8">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.5, duration: 0.4 }}
                  className="relative"
                >
                  {/* Section Card */}
                  <div className="border border-slate-700/20 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/10 to-slate-900/5">
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-6 flex items-center justify-between hover:bg-slate-800/20 transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                          <span className="text-xl">{section.icon}</span>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-lg font-bold text-blue-400">الجزء {idx + 1}</span>
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          </div>
                          <h2 className="text-2xl font-bold text-slate-100">{section.title}</h2>
                        </div>
                      </div>
                      <svg 
                        className={`w-8 h-8 text-blue-400 transition-transform duration-300 ${expandedSections[section.id] ? "rotate-180" : ""}`}
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
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-slate-700/20 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Summary CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-16"
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
                    هل لديك استفسار حول الخصوصية؟
                  </h2>
                  
                  <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    فريق الخصوصية وحماية البيانات لدينا مستعد للإجابة على جميع أسئلتك وممارسة حقوقك
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="mailto:privacy@x-host.site"
                      className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                    >
                      تواصل مع فريق الخصوصية
                    </a>
                    <a
                      href="/contact"
                      className="px-8 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-semibold border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                    >
                      صفحة التواصل العامة
                    </a>
                  </div>
                  
                  <p className="text-slate-400 text-sm mt-8">
                    نلتزم بالرد خلال 72 ساعة عمل • البريد الرسمي للخصوصية: privacy@x-host.site
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