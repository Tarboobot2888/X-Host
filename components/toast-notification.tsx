"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Check, AlertCircle, Info, X } from "lucide-react"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info" | "warning"
  duration?: number
  onClose?: () => void
}

export function Toast({ message, type = "info", duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => onClose?.(), duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  const icons = {
    success: <Check className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
  }

  const colors = {
    success: "bg-green-500/20 border-green-500/50 text-green-400",
    error: "bg-red-500/20 border-red-500/50 text-red-400",
    info: "bg-blue-500/20 border-blue-500/50 text-blue-400",
    warning: "bg-yellow-500/20 border-yellow-500/50 text-yellow-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 20, x: 20 }}
      className={`fixed bottom-6 right-6 max-w-sm p-4 rounded-lg border flex items-center gap-3 ${colors[type]} backdrop-blur-sm`}
    >
      {icons[type]}
      <span className="flex-1 text-sm font-medium">{message}</span>
      <button onClick={onClose} className="p-1 hover:opacity-70 transition-opacity" aria-label="Close notification">
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}
