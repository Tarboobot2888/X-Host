"use client"

import { motion } from "framer-motion"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { xhostPlans } from "@/lib/data/xhost-plans"
import { formatPrice, formatCPU, formatRAM, formatDisk } from "@/lib/utils/format"
import { redirectToServerCreation } from "@/lib/utils/redirect"
import { useState } from "react"

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "weekly">("monthly")
  
  const monthlyPlans = xhostPlans.filter((p) => p.billing === "monthly")
  const weeklyPlans = xhostPlans.filter((p) => p.billing === "weekly")

  const plans = billingCycle === "monthly" ? monthlyPlans : weeklyPlans

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
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-900/5 to-slate-800/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <CosmicNavbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <span className="text-blue-400 font-medium tracking-wider">خطط الاستضافة</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
                اختر <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">الباقة</span> المناسبة
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                باقات استضافة متكاملة تلبي جميع احتياجاتك، من المشاريع الصغيرة إلى التطبيقات الكبيرة
              </p>
            </div>

            {/* Billing Cycle Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-b from-slate-800/30 to-slate-900/20 backdrop-blur-sm border border-slate-700/20 rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle("weekly")}
                  className={`px-6 py-3 rounded-md transition-all duration-300 ${
                    billingCycle === "weekly"
                      ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300"
                      : "text-slate-400 hover:text-slate-300"
                  }`}
                >
                  أسبوعي
                </button>
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-3 rounded-md transition-all duration-300 ${
                    billingCycle === "monthly"
                      ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300"
                      : "text-slate-400 hover:text-slate-300"
                  }`}
                >
                  شهري
                </button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Plans Section */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Plans Grid */}
            <motion.div
              key={billingCycle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 -top-8 flex justify-center">
                <div className="w-1 h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                {plans.map((plan, idx) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    custom={idx}
                    whileHover={{ y: -10 }}
                    className="relative"
                  >
                    {/* Recommended Badge */}
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg">
                          الأكثر طلباً
                        </div>
                      </div>
                    )}

                    <PlanCard plan={plan} index={idx} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">مقارنة</span> بين الباقات
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  قارن بين جميع المميزات لتختار الباقة الأنسب لمشروعك
                </p>
              </div>

              <div className="bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border border-slate-700/20 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700/20">
                      <th className="p-6 text-right text-slate-300 font-semibold">الميزة</th>
                      {plans.map((plan) => (
                        <th key={plan.id} className="p-6 text-center">
                          <div className="space-y-2">
                            <div className="text-lg font-bold text-slate-100">{plan.name}</div>
                            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                              {formatPrice(plan.price)}
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/10">
                      <td className="p-4 text-slate-400 font-medium">المعالج</td>
                      {plans.map((plan) => (
                        <td key={plan.id} className="p-4 text-center text-slate-300">
                          {formatCPU(plan.cpu)}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/10">
                      <td className="p-4 text-slate-400 font-medium">الذاكرة</td>
                      {plans.map((plan) => (
                        <td key={plan.id} className="p-4 text-center text-slate-300">
                          {formatRAM(plan.ram)}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/10">
                      <td className="p-4 text-slate-400 font-medium">التخزين</td>
                      {plans.map((plan) => (
                        <td key={plan.id} className="p-4 text-center text-slate-300">
                          {formatDisk(plan.disk)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 text-slate-400 font-medium">قواعد البيانات</td>
                      {plans.map((plan) => (
                        <td key={plan.id} className="p-4 text-center text-slate-300">
                          {plan.mysql} MySQL
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-slate-900/15 to-slate-800/20 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-[linear-gradient(30deg,#33415508_25%,transparent_25%),linear-gradient(-30deg,#33415508_25%,transparent_25%),linear-gradient(30deg,transparent_75%,#33415508_75%),linear-gradient(-30deg,transparent_75%,#33415508_75%)] bg-[size:40px_40px]"></div>
                </div>
                
                <div className="relative z-10 p-8 md:p-12 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                    هل تحتاج إلى باقة مخصصة؟
                  </h3>
                  <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    يمكننا تصميم باقة استضافة خاصة بمتطلبات مشروعك، مع خصائص مخصصة تلبي احتياجاتك بالضبط
                  </p>
                  
                  <button
                    onClick={redirectToServerCreation}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <span>إنشاء سيرفر مخصص</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
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

function PlanCard({ plan, index }: { plan: (typeof xhostPlans)[0]; index: number }) {
  const specs = [
    { label: "المعالج", value: formatCPU(plan.cpu), icon: "⚡" },
    { label: "الذاكرة", value: formatRAM(plan.ram), icon: "💾" },
    { label: "التخزين", value: formatDisk(plan.disk), icon: "🗂️" },
    { label: "قواعد البيانات", value: `${plan.mysql} MySQL`, icon: "🗄️" },
  ]

  return (
    <div
      className={`h-full bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border rounded-2xl p-8 flex flex-col transition-all duration-300 ${
        plan.highlighted
          ? "border-blue-500/30 shadow-2xl shadow-blue-500/10 lg:scale-105"
          : "border-slate-700/20 hover:border-slate-600/30 hover:shadow-xl"
      }`}
    >
      {/* Plan Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-100">{plan.name}</h3>
            <p className="text-slate-400 text-sm mt-1">
              {plan.billing === "weekly" ? "باقة أسبوعية" : "باقة شهرية"}
            </p>
          </div>
          {plan.highlighted && (
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </motion.div>
          )}
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            {formatPrice(plan.price)}
          </div>
          <p className="text-slate-400 text-sm mt-2">
            {plan.billing === "weekly" ? "للأسبوع" : "للشهر"}
          </p>
        </div>
      </div>

      {/* Specifications */}
      <div className="space-y-4 mb-8 flex-grow">
        {specs.map((spec, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-slate-800/20 to-slate-900/10 border border-slate-700/10"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{spec.icon}</span>
              <span className="text-slate-400 text-sm">{spec.label}</span>
            </div>
            <span className="text-slate-200 font-semibold">{spec.value}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={redirectToServerCreation}
        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
          plan.highlighted
            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            : "bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 border border-slate-700/30 hover:border-slate-600/40"
        }`}
      >
        {plan.highlighted ? "ابدأ الآن" : "اختر الباقة"}
      </motion.button>
    </div>
  )
}