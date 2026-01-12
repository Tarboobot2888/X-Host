"use client"

import { motion, AnimatePresence } from "framer-motion"
import { getCart, removeFromCart, calculateCartTotals, clearCart } from "@/lib/utils/cart"
import { redirectToServerCreation } from "@/lib/utils/redirect"
import { useState, useEffect } from "react"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
}

export const CartSidebar = ({ isOpen, onClose, onToggle }: CartSidebarProps) => {
  const [cart, setCart] = useState(getCart())
  const [mounted, setMounted] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleStorageChange = () => {
      const newCart = getCart()
      setCart(newCart)
      if (newCart.items.length > cart.items.length) {
        showCartNotification()
      }
    }
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  useEffect(() => {
    setCart(getCart())
  }, [isOpen])

  const showCartNotification = () => {
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  if (!mounted) return null

  const totals = calculateCartTotals(cart)
  const isEmpty = cart.items.length === 0
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0)

  // Floating Cart Icon (Always visible when items in cart)
  const FloatingCartIcon = () => {
    if (isEmpty) return null

    return (
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="fixed bottom-24 left-6 z-40"
      >
        <div className="relative">
          {/* Cart Icon */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/90 to-cyan-500/90 shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 flex items-center justify-center transition-all duration-300 group">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            
            {/* Price Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-3 py-2 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-xl">
                <div className="text-xs font-semibold text-slate-300 whitespace-nowrap">
                  {totals.grandTotal} EGP
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800/90 border-r border-b border-slate-700/50"></div>
            </div>
          </div>

          {/* Items Count Badge */}
          <motion.div
            key={totalItems}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg"
          >
            {totalItems}
          </motion.div>

          {/* Pulse Animation */}
          {!isOpen && (
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20"
            />
          )}
        </div>
      </motion.button>
    )
  }

  // Cart Notification
  const CartNotification = () => {
    if (!showNotification || isEmpty) return null

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed top-24 left-6 z-50"
      >
        <div className="p-3 bg-gradient-to-r from-emerald-500/90 to-green-500/90 backdrop-blur-sm text-white rounded-xl shadow-2xl shadow-emerald-500/30">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div className="text-xs">
              <p className="font-semibold">تمت الإضافة إلى السلة</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <>
      {/* Cart Notification */}
      <AnimatePresence>
        <CartNotification />
      </AnimatePresence>

      {/* Floating Cart Icon */}
      <AnimatePresence>
        <FloatingCartIcon />
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Cart Panel (Bottom Sheet on mobile, Right Sidebar on desktop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 h-[85vh] lg:h-screen lg:inset-y-0 lg:right-0 lg:w-96 z-50"
          >
            <div className="relative h-full flex flex-col bg-gradient-to-b from-slate-900 to-slate-950 lg:border-l border-slate-700/30 shadow-2xl">
              {/* Header */}
              <div className="p-6 border-b border-slate-700/30 flex justify-between items-center bg-gradient-to-b from-slate-800/50 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-100">سلة التسوق</h2>
                    <p className="text-sm text-slate-400">{totalItems} عنصر</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/30 hover:border-slate-600/40 text-slate-400 hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-4">
                {isEmpty ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center p-8"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/30 flex items-center justify-center mb-6">
                      <svg className="w-12 h-12 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">سلة التسوق فارغة</h3>
                    <p className="text-slate-400 mb-6">ابدأ بإضافة خدمات لتظهر هنا</p>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                    >
                      استكشاف الخدمات
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    {cart.items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="p-4 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-xl"
                      >
                        <div className="mb-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="text-xs text-slate-400 mb-1">{item.categoryName}</p>
                              <p className="font-semibold text-slate-100">{item.serviceTypeName}</p>
                            </div>
                            <span className="font-bold text-blue-400">{item.price * item.quantity} EGP</span>
                          </div>
                          <p className="text-sm text-slate-300 mb-2">{item.planName}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <span>الكمية: {item.quantity}</span>
                            <span>•</span>
                            <span>{item.billing === "weekly" ? "أسبوعي" : "شهري"}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            removeFromCart(item.id)
                            setCart(getCart())
                          }}
                          className="w-full py-2 text-sm font-semibold rounded-lg bg-gradient-to-b from-red-500/10 to-red-600/5 text-red-400 border border-red-500/20 hover:border-red-500/30 hover:bg-red-500/20 transition-all"
                        >
                          إزالة من السلة
                        </button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              {!isEmpty && (
                <div className="border-t border-slate-700/30 p-6 bg-gradient-to-b from-slate-900/80 to-slate-950/80 backdrop-blur-sm">
                  <div className="space-y-4">
                    {/* Totals */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">المجموع الأسبوعي:</span>
                        <span className="font-semibold text-slate-300">{totals.weeklyTotal} EGP</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">المجموع الشهري:</span>
                        <span className="font-semibold text-slate-300">{totals.monthlyTotal} EGP</span>
                      </div>
                      <div className="pt-3 border-t border-slate-700/30">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-lg font-bold text-slate-100">الإجمالي</span>
                            <p className="text-xs text-slate-400">يشمل جميع الضرائب</p>
                          </div>
                          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            {totals.grandTotal} EGP
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          redirectToServerCreation()
                          onClose()
                        }}
                        className="w-full py-3 bg-gradient-to-r from-blue-500/90 to-cyan-500/90 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>إتمام الطلب</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => {
                            clearCart()
                            setCart(getCart())
                          }}
                          className="py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 border border-slate-700/30 hover:border-slate-600/40 hover:text-white transition-all"
                        >
                          مسح السلة
                        </button>
                        <button
                          onClick={onClose}
                          className="py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-300 border border-slate-700/30 hover:border-slate-600/40 hover:text-white transition-all"
                        >
                          مواصلة التسوق
                        </button>
                      </div>
                    </div>

                    {/* Security Badge */}
                    <div className="pt-4 border-t border-slate-700/30">
                      <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>دفع آمن ومشفر • 30 يوم ضمان استرجاع</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}