"use client"

import { motion } from "framer-motion"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      title: "الابتكار المستمر",
      description: "نطور باستمرار حلولاً جديدة تلبي متطلبات العصر الرقمي المتغير",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "الموثوقية",
      description: "ضمان 99.9% وقت تشغيل مع بنية تحتية عالية الجودة",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "الدعم المتفاني",
      description: "فريق دعم فني متخصص متوفر على مدار الساعة",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    }
  ]

  const stats = [
    { value: "10,000+", label: "عميل راضٍ", color: "text-blue-400" },
    { value: "99.95%", label: "نسبة التوفر", color: "text-cyan-400" },
    { value: "5,000+", label: "سيرفر نشط", color: "text-emerald-400" },
    { value: "10+", label: "سنوات خبرة", color: "text-purple-400" }
  ]

  const team = [
    {
      name: "أحمد محمد",
      role: "رئيس التقنية",
      description: "خبرة 15 سنة في إدارة البنى التحتية السحابية",
      color: "border-blue-500/30"
    },
    {
      name: "سارة أحمد",
      role: "مديرة الدعم الفني",
      description: "خبرة 10 سنوات في إدارة فرق الدعم التقني",
      color: "border-purple-500/30"
    },
    {
      name: "خالد علي",
      role: "مهندس أمن معلومات",
      description: "متخصص في أمن الشبكات والبيانات",
      color: "border-emerald-500/30"
    },
    {
      name: "فاطمة حسن",
      role: "مهندسة أنظمة",
      description: "متخصصة في تحسين أداء السيرفرات",
      color: "border-cyan-500/30"
    }
  ]

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
          {/* Subtle Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>
          
          {/* Orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/5 to-cyan-900/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/5 to-slate-800/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <CosmicNavbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4">
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
                <span className="text-blue-400 font-medium tracking-wider">من نحن</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                نبني <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">المستقبل</span> الرقمي
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                نتميز بتقديم حلول استضافة متكاملة تجمع بين القوة التقنية والابتكار لتحقيق أقصى استفادة من عالم الرقمنة
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border border-slate-700/20 rounded-xl p-6 text-center hover:border-slate-600/30 transition-all duration-300"
                >
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20`}>
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-100">رسالتنا</h2>
                </div>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  نهدف إلى تمكين الأفراد والمؤسسات من تحقيق طموحاتهم الرقمية من خلال تقديم حلول استضافة مبتكرة وموثوقة، 
                  مع التركيز على توفير تجربة استثنائية تضمن النمو المستمر والنجاح الدائم.
                </p>
                
                <div className="mt-8">
                  <Link 
                    href="/services" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <span>اكتشف خدماتنا</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20`}>
                    <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-100">رؤيتنا</h2>
                </div>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  أن نكون الرائدين في تحويل الأفكار الرقمية إلى واقع ملموس، وأن نساهم في بناء اقتصاد رقمي قوي ومستدام 
                  من خلال تقديم خدمات استضافة استثنائية تلهم الابتكار وتدفع عجلة التطور التكنولوجي.
                </p>
                
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-medium border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                  >
                    <span>تواصل معنا</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">قيمنا</span> الأساسية
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  المبادئ التي توجه كل قرار نتخذه وكل خدمة نقدمها
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border border-slate-700/20 rounded-xl p-6 hover:border-slate-600/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${value.color}/10 border ${value.color.split(' ')[1]}/20`}>
                        <div className={`${value.color.split(' ')[1].replace('to-', 'text-')}`}>
                          {value.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 mt-2">{value.title}</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Team Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                  فريقنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">المتميز</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  نخبة من الخبراء والمختصين الذين يعملون بجد لضمان نجاح مشاريعكم
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border ${member.color} rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-300">
                        {member.name.split(' ')[0].charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 mb-2">{member.name}</h3>
                    <div className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-medium mb-3">
                      {member.role}
                    </div>
                    <p className="text-sm text-slate-400">{member.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-slate-900/15 to-slate-800/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[linear-gradient(30deg,#33415508_25%,transparent_25%),linear-gradient(-30deg,#33415508_25%,transparent_25%),linear-gradient(30deg,transparent_75%,#33415508_75%),linear-gradient(-30deg,transparent_75%,#33415508_75%)] bg-[size:40px_40px]"></div>
              </div>
              
              <div className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                  هل أنت مستعد لبدء رحلتك الرقمية؟
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  انضم إلى آلاف العملاء الذين وثقوا بخبرتنا وقدراتنا في تحقيق أهدافهم الرقمية
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/services"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    استكشاف الخدمات
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-semibold border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                  >
                    طلب استشارة مجانية
                  </Link>
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