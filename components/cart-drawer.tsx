"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useCartStore } from "@/lib/utils/cart-store"
import { useState } from "react"
import { ShoppingCart, Trash2, Plus, Minus, X, ArrowRight } from "lucide-react"

export function CartDrawer() {
  const { items, totalPrice, removeItem, updateQuantity, getTotalItems, clearCart } = useCartStore()
  const [isOpen, setIsOpen] = useState(false)
  const totalItems = getTotalItems()

  const handleCheckout = () => {
    localStorage.setItem("x-host-cart-checkout", JSON.stringify(items))
    setIsOpen(false)
    window.location.href = "https://x-host.cloud/login?redirect=/servers/create"
  }

  return (
    <>
      {/* Cart Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative p-2.5 rounded-lg bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="عرض سلة التسوق"
      >
        <ShoppingCart className="w-5 h-5 text-slate-300" />
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {totalItems}
          </motion.span>
        )}
      </motion.button>

      {/* Cart Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-md z-50"
            >
              <div className="h-full bg-gradient-to-b from-slate-900 to-slate-950 border-r border-slate-700/30 shadow-2xl flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-slate-700/30 bg-gradient-to-b from-slate-800/20 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                        <ShoppingCart className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-100">سلة التسوق</h2>
                        <p className="text-sm text-slate-400">
                          {totalItems} {totalItems === 1 ? "منتج" : "منتجاً"}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300"
                    >
                      <X className="w-5 h-5 text-slate-400" />
                    </button>
                  </div>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center h-full gap-4 text-center"
                    >
                      <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20">
                        <ShoppingCart className="w-16 h-16 text-slate-400/50" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">سلة التسوق فارغة</h3>
                        <p className="text-slate-400">أضف خدمات من صفحة الباقات لتبدأ</p>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                      >
                        استكشاف الخدمات
                      </button>
                    </motion.div>
                  ) : (
                    <AnimatePresence>
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="group p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl hover:border-slate-600/30 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            {/* Item Image/Icon */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                              <span className="text-xl">🖥️</span>
                            </div>

                            {/* Item Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-slate-100 truncate">{item.nameAr}</h4>
                                  <p className="text-xs text-slate-400 mt-1">{item.category}</p>
                                </div>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="p-1.5 rounded-lg bg-gradient-to-b from-red-500/10 to-red-600/5 border border-red-500/20 hover:border-red-500/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                >
                                  <Trash2 className="w-4 h-4 text-red-400" />
                                </button>
                              </div>

                              {/* Price and Quantity */}
                              <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                  <span className="text-lg font-bold text-blue-400">${item.price}</span>
                                  <div className="flex items-center gap-1 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-lg">
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      className="p-1.5 hover:bg-slate-800/30 transition-colors rounded-l"
                                      disabled={item.quantity === 1}
                                    >
                                      <Minus className="w-3 h-3 text-slate-400" />
                                    </button>
                                    <span className="px-3 text-sm font-bold text-slate-100 min-w-[40px] text-center">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="p-1.5 hover:bg-slate-800/30 transition-colors rounded-r"
                                    >
                                      <Plus className="w-3 h-3 text-slate-400" />
                                    </button>
                                  </div>
                                </div>
                                <div className="text-sm text-slate-400">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  )}
                </div>

                {/* Footer - Total and Actions */}
                {items.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 border-t border-slate-700/30 bg-gradient-to-b from-slate-800/20 to-transparent"
                  >
                    {/* Order Summary */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">عدد المنتجات:</span>
                        <span className="font-medium text-slate-100">{totalItems}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">المجموع الفرعي:</span>
                        <span className="font-medium text-slate-100">${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
                        <span className="text-lg font-semibold text-slate-100">المجموع الكلي:</span>
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={handleCheckout}
                        className="w-full py-3.5 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>متابعة الدفع</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <div className="flex gap-3">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="flex-1 py-3 bg-gradient-to-b from-slate-800/20 to-slate-900/10 text-slate-300 rounded-lg font-medium border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                        >
                          مواصلة التسوق
                        </button>
                        <button
                          onClick={clearCart}
                          className="flex-1 py-3 bg-gradient-to-b from-red-500/10 to-red-600/5 text-red-400 rounded-lg font-medium border border-red-500/20 hover:border-red-500/30 transition-all duration-300"
                        >
                          تفريغ السلة
                        </button>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 pt-6 border-t border-slate-700/30">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span>شحن فوري للمنتجات الرقمية</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span>ضمان استرجاع لمدة 7 أيام</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}