"use client"

import type { FC } from "react"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { xhostCategories } from "@/lib/data/xhost-categories"
import { getServiceTypesByCategory, xhostServiceTypes } from "@/lib/data/xhost-service-types"
import { xhostPlans } from "@/lib/data/xhost-plans"
import { addToCart } from "@/lib/utils/cart"
import { CartSidebar } from "./cart-sidebar"

type Step = "category" | "type" | "plan" | "review"

interface Selection {
  categoryId: string | null
  serviceTypeId: string | null
  planId: string | null
}

// SVG Icons Components
const DevStackIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)

const WebServerIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const VirtualMachineIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
)

const WhatsappBotIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
)

const NetworkIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
)

const SecurityIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const StorageIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const LoadingSpinner = () => (
  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
)

export const StoreWizard: FC = () => {
  const [step, setStep] = useState<Step>("category")
  const [selection, setSelection] = useState<Selection>({
    categoryId: null,
    serviceTypeId: null,
    planId: null,
  })
  const [cartOpen, setCartOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const selectedCategory = useMemo(
    () => xhostCategories.find((c) => c.id === selection.categoryId),
    [selection.categoryId],
  )

  const selectedServiceType = useMemo(
    () => xhostServiceTypes.find((t) => t.id === selection.serviceTypeId),
    [selection.serviceTypeId],
  )

  const selectedPlan = useMemo(() => xhostPlans.find((p) => p.id === selection.planId), [selection.planId])

  const availableServiceTypes = useMemo(
    () => (selection.categoryId ? getServiceTypesByCategory(selection.categoryId) : []),
    [selection.categoryId],
  )

  const handleCategorySelect = (categoryId: string) => {
    setSelection({ categoryId, serviceTypeId: null, planId: null })
    setStep("type")
  }

  const handleServiceTypeSelect = (serviceTypeId: string) => {
    setSelection((prev) => ({ ...prev, serviceTypeId }))
    setStep("plan")
  }

  const handlePlanSelect = (planId: string) => {
    setSelection((prev) => ({ ...prev, planId }))
    setStep("review")
  }

  const handleAddToCart = async () => {
    if (!selection.categoryId || !selection.serviceTypeId || !selection.planId) return

    setIsLoading(true)

    const category = xhostCategories.find((c) => c.id === selection.categoryId)!
    const serviceType = xhostServiceTypes.find((t) => t.id === selection.serviceTypeId)!
    const plan = xhostPlans.find((p) => p.id === selection.planId)!

    addToCart({
      categoryId: category.id,
      categoryName: category.name,
      serviceTypeId: serviceType.id,
      serviceTypeName: serviceType.name,
      planId: plan.id,
      planName: plan.name,
      price: plan.price,
      billing: plan.billing,
    })

    setTimeout(() => {
      setIsLoading(false)
      setToastMessage("تمت إضافة الخدمة إلى السلة")
      setTimeout(() => setToastMessage(""), 3000)

      setSelection({ categoryId: null, serviceTypeId: null, planId: null })
      setStep("category")
    }, 500)
  }

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "dev-stack":
        return <DevStackIcon />
      case "web-server":
        return <WebServerIcon />
      case "virtual-machines":
        return <VirtualMachineIcon />
      case "bot-hosting":
        return <WhatsappBotIcon />
      default:
        return <DevStackIcon />
    }
  }

  const getServiceTypeIcon = (serviceTypeId: string) => {
    switch (serviceTypeId) {
      case "dev-stack":
        return <DatabaseIcon />
      case "web-server":
        return <WebServerIcon />
      case "vps":
        return <VirtualMachineIcon />
      case "rdp":
        return <NetworkIcon />
      case "security":
        return <SecurityIcon />
      case "storage":
        return <StorageIcon />
      default:
        return <DatabaseIcon />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <div className={`transition-all duration-500 ${cartOpen ? "lg:mr-96" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-4 mb-8"
              >
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase">XHOST Store</span>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                Service Wizard
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                اختر خدمات الاستضافة المتكاملة التي تناسب مشروعك عبر واجهة متطورة وسلسة
              </p>
            </div>

            {/* Progress Steps */}
            <div className="relative mb-16">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-800/30 via-gray-700/20 to-gray-800/30 transform -translate-y-1/2"></div>
              
              <div className="relative flex justify-between items-center">
                {["category", "type", "plan", "review"].map((s, idx) => {
                  const isActive = step === s
                  const isCompleted = ["category", "type", "plan", "review"].indexOf(step) > idx
                  
                  return (
                    <div key={s} className="relative flex flex-col items-center z-10">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 backdrop-blur-sm ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/50 shadow-2xl shadow-blue-500/30"
                            : isCompleted
                            ? "bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-400/30"
                            : "bg-gray-800/30 border border-gray-700/50"
                        }`}
                      >
                        {isCompleted ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center"
                          >
                            <CheckIcon />
                          </motion.div>
                        ) : (
                          <span className={`text-xl font-bold ${
                            isActive ? "text-blue-300" : "text-gray-400"
                          }`}>
                            {idx + 1}
                          </span>
                        )}
                      </motion.div>
                      
                      <span className={`text-sm font-medium ${
                        isActive ? "text-blue-400" : isCompleted ? "text-emerald-400" : "text-gray-500"
                      }`}>
                        {s === "category" && "الفئة"}
                        {s === "type" && "نوع الخدمة"}
                        {s === "plan" && "الباقة"}
                        {s === "review" && "التأكيد"}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Steps Content */}
          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
              {step === "category" && (
                <CategoryStep 
                  key="category" 
                  categories={xhostCategories} 
                  onSelect={handleCategorySelect}
                  getIcon={getCategoryIcon}
                />
              )}
              {step === "type" && (
                <TypeStep 
                  key="type" 
                  serviceTypes={availableServiceTypes} 
                  onSelect={handleServiceTypeSelect}
                  getIcon={getServiceTypeIcon}
                />
              )}
              {step === "plan" && (
                <PlanStep 
                  key="plan" 
                  plans={xhostPlans} 
                  onSelect={handlePlanSelect} 
                  selection={selection}
                  categoryId={selection.categoryId}
                />
              )}
              {step === "review" && (
                <ReviewStep
                  key="review"
                  selection={selection}
                  category={selectedCategory}
                  serviceType={selectedServiceType}
                  plan={selectedPlan}
                  onAddToCart={handleAddToCart}
                  onPrevious={() => setStep("plan")}
                  isLoading={isLoading}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-16 flex justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              {step !== "category" && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (step === "type") setStep("category")
                    else if (step === "plan") setStep("type")
                    else if (step === "review") setStep("plan")
                  }}
                  className="flex items-center gap-3 px-8 py-3.5 bg-gray-800/40 text-gray-300 rounded-xl font-semibold border border-gray-700/50 hover:border-gray-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRightIcon className="rotate-180" />
                  <span>العودة</span>
                </motion.button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCartOpen(true)}
                className="flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 rounded-xl font-semibold border border-blue-500/30 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300 backdrop-blur-sm"
              >
                <span>عرض السلة</span>
                <ChevronRightIcon />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="px-6 py-4 bg-gradient-to-r from-emerald-500/90 to-green-500/90 backdrop-blur-sm text-white rounded-xl shadow-2xl shadow-emerald-500/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckIcon />
                </div>
                <div>
                  <p className="font-bold text-lg">{toastMessage}</p>
                  <p className="text-sm opacity-90 mt-1">تم حفظ اختيارك في سلة التسوق</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CategoryStep({
  categories,
  onSelect,
  getIcon,
}: { 
  categories: typeof xhostCategories
  onSelect: (id: string) => void
  getIcon: (id: string) => JSX.Element
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          اختر <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">الفئة</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          ابدأ باختيار الفئة المناسبة لاحتياجات مشروعك من مجموعتنا المتخصصة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, idx) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(category.id)}
            className="group relative p-8 bg-gradient-to-b from-gray-800/20 to-gray-900/10 border border-gray-700/30 rounded-2xl text-center hover:border-blue-500/40 transition-all duration-500 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {getIcon(category.id)}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{category.description}</p>
              
              <div className="pt-6 border-t border-gray-700/30 group-hover:border-blue-500/30 transition-colors duration-300">
                <div className="inline-flex items-center gap-3 text-blue-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                  <span>استعرض الخدمات</span>
                  <ChevronRightIcon className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

function TypeStep({
  serviceTypes,
  onSelect,
  getIcon,
}: { 
  serviceTypes: typeof xhostServiceTypes
  onSelect: (id: string) => void
  getIcon: (id: string) => JSX.Element
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          حدد <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">نوع الخدمة</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          اختر نوع الخدمة الدقيقة التي تناسب متطلباتك التقنية
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceTypes.map((type, idx) => (
          <motion.button
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(type.id)}
            className="group p-8 bg-gradient-to-b from-gray-800/20 to-gray-900/10 border border-gray-700/30 rounded-xl text-center hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <div className="text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {getIcon(type.id)}
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
              {type.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{type.description}</p>
            
            <div className="pt-6 border-t border-gray-700/30 group-hover:border-blue-500/30 transition-colors duration-300">
              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors duration-300">
                <span>اختيار</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

function PlanStep({
  plans,
  onSelect,
  selection,
  categoryId,
}: {
  plans: typeof xhostPlans
  onSelect: (id: string) => void
  selection: Selection
  categoryId: string | null
}) {
  const relevantPlans = categoryId
    ? plans.filter((p) => {
        if (categoryId === "dev-stack") return p.billing === "monthly"
        if (categoryId === "virtual-machines") return true
        if (categoryId === "web-server") return p.billing === "monthly"
        return true
      })
    : plans

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          اختر <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">الباقة</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          قارن بين الباقات واختر الأنسب من حيث المواصفات والسعر
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {relevantPlans.map((plan, idx) => {
          const isHighlighted = plan.highlighted
          
          return (
            <motion.button
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: isHighlighted ? 1.08 : 1.03, y: isHighlighted ? -12 : -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(plan.id)}
              className={`group relative p-8 bg-gradient-to-b from-gray-800/20 to-gray-900/10 border rounded-2xl text-right transition-all duration-500 backdrop-blur-sm overflow-hidden ${
                isHighlighted
                  ? "border-blue-400/50 shadow-2xl shadow-blue-500/30"
                  : "border-gray-700/30 hover:border-blue-500/40"
              }`}
            >
              {isHighlighted && (
                <div className="absolute -top-3 right-1/2 transform translate-x-1/2 z-20">
                  <div className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-2xl">
                    الأكثر طلباً
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <div className="text-sm text-gray-500 mt-2">
                      {plan.billing === "weekly" ? "باقة أسبوعية" : "باقة شهرية"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                      {plan.price} EGP
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {plan.billing === "weekly" ? "للأسبوع" : "للشهر"}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-b from-gray-800/30 to-gray-900/20 border border-gray-700/30 rounded-xl group-hover:border-blue-500/30 transition-colors duration-300">
                    <span className="text-sm text-gray-400">المعالج</span>
                    <span className="text-sm font-semibold text-white">
                      {typeof plan.cpu === "string" ? plan.cpu : plan.cpu + " vCores"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-b from-gray-800/30 to-gray-900/20 border border-gray-700/30 rounded-xl group-hover:border-blue-500/30 transition-colors duration-300">
                    <span className="text-sm text-gray-400">الذاكرة</span>
                    <span className="text-sm font-semibold text-white">{plan.ram} MB</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-b from-gray-800/30 to-gray-900/20 border border-gray-700/30 rounded-xl group-hover:border-blue-500/30 transition-colors duration-300">
                    <span className="text-sm text-gray-400">التخزين</span>
                    <span className="text-sm font-semibold text-white">{plan.disk} MB</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700/30 group-hover:border-blue-500/30 transition-colors duration-300">
                  <div className={`px-6 py-3 rounded-xl text-center text-sm font-semibold transition-all duration-300 ${
                    isHighlighted
                      ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 group-hover:text-cyan-300"
                      : "bg-gradient-to-b from-gray-800/30 to-gray-900/20 text-gray-300 group-hover:text-blue-400"
                  }`}>
                    اختيار هذه الباقة
                  </div>
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}

function ReviewStep({
  selection,
  category,
  serviceType,
  plan,
  onAddToCart,
  onPrevious,
  isLoading,
}: {
  selection: Selection
  category: (typeof xhostCategories)[0] | undefined
  serviceType: (typeof xhostServiceTypes)[0] | undefined
  plan: (typeof xhostPlans)[0] | undefined
  onAddToCart: () => void
  onPrevious: () => void
  isLoading: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          تأكيد <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">الطلبية</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          راجع تفاصيل طلبيتك قبل إضافتها إلى سلة التسوق
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="p-10 bg-gradient-to-b from-gray-800/20 to-gray-900/10 border border-gray-700/30 rounded-3xl backdrop-blur-sm">
          {/* Selection Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-b from-gray-800/20 to-gray-900/10 border border-gray-700/30 rounded-2xl">
              <div className="text-sm text-gray-400 mb-4 uppercase tracking-wider">الفئة المختارة</div>
              <div className="text-2xl font-bold text-white mb-3">{category?.name}</div>
              <div className="text-gray-500 text-sm leading-relaxed">{category?.description}</div>
            </div>
            
            <div className="p-8 bg-gradient-to-b from-gray-800/20 to-gray-900/10 border border-gray-700/30 rounded-2xl">
              <div className="text-sm text-gray-400 mb-4 uppercase tracking-wider">نوع الخدمة</div>
              <div className="text-2xl font-bold text-white mb-3">{serviceType?.name}</div>
              <div className="text-gray-500 text-sm leading-relaxed">{serviceType?.description}</div>
            </div>
            
            <div className="p-8 bg-gradient-to-b from-gray-800/20 to-gray-900/10 border border-gray-700/30 rounded-2xl">
              <div className="text-sm text-gray-400 mb-4 uppercase tracking-wider">الباقة المختارة</div>
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                {plan?.name}
              </div>
              <div className="text-2xl font-semibold text-white mb-1">{plan?.price} EGP</div>
              <div className="text-gray-500 text-sm">
                {plan?.billing === "weekly" ? "للأسبوع" : "للشهر"}
              </div>
            </div>
          </div>

          {/* Plan Details */}
          <div className="p-8 bg-gradient-to-b from-gray-800/20 to-gray-900/10 border border-gray-700/30 rounded-2xl mb-12">
            <h4 className="text-2xl font-bold text-white mb-8">تفاصيل الباقة التقنية</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-b from-gray-800/30 to-gray-900/20 border border-gray-700/30 rounded-xl">
                <div className="text-sm text-gray-400 mb-3">المعالج</div>
                <div className="text-xl font-semibold text-white">
                  {typeof plan?.cpu === "string" ? plan.cpu : plan?.cpu + " vCores"}
                </div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-b from-gray-800/30 to-gray-900/20 border border-gray-700/30 rounded-xl">
                <div className="text-sm text-gray-400 mb-3">الذاكرة</div>
                <div className="text-xl font-semibold text-white">{plan?.ram} MB</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-b from-gray-800/30 to-gray-900/20 border border-gray-700/30 rounded-xl">
                <div className="text-sm text-gray-400 mb-3">التخزين</div>
                <div className="text-xl font-semibold text-white">{plan?.disk} MB</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-b from-gray-800/30 to-gray-900/20 border border-gray-700/30 rounded-xl">
                <div className="text-sm text-gray-400 mb-3">نوع الفوترة</div>
                <div className="text-xl font-semibold text-white">
                  {plan?.billing === "weekly" ? "أسبوعي" : "شهري"}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPrevious}
              className="flex-1 px-8 py-4 bg-gradient-to-b from-gray-800/30 to-gray-900/20 text-gray-300 rounded-xl font-semibold border border-gray-700/30 hover:border-gray-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              تعديل الاختيارات
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAddToCart}
              disabled={isLoading}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold border border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span>جاري الإضافة...</span>
                </>
              ) : (
                <>
                  <span>أضف إلى السلة</span>
                  <ChevronRightIcon />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}