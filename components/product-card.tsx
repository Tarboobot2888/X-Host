"use client"

import { motion } from "framer-motion"
import { useCartStore } from "@/lib/utils/cart-store"
import { useTheme } from "./theme-provider"
import { ShoppingCart, Check } from "lucide-react"
import { useState } from "react"

interface ProductCardProps {
  id: string
  name: string
  nameAr: string
  price: number
  category: string
  description?: string
  descriptionAr?: string
  image?: string
  onAddToCart?: () => void
}

export function ProductCard({
  id,
  name,
  nameAr,
  price,
  category,
  description,
  descriptionAr,
  image,
  onAddToCart,
}: ProductCardProps) {
  const { t } = useTheme()
  const { addItem } = useCartStore()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      nameAr,
      price,
      quantity: 1,
      image,
      category,
    })
    setIsAdded(true)
    onAddToCart?.()

    // Reset button state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div whileHover={{ y: -5 }} className="quantum-glass p-6 rounded-lg flex flex-col h-full">
      {/* Image */}
      {image && (
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      )}

      {/* Category Badge */}
      <span className="inline-block px-2.5 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary/70 mb-3 w-fit">
        {category}
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-2">{t(nameAr, name)}</h3>

      {/* Description */}
      {description && <p className="text-sm text-muted-foreground mb-4 flex-1">{t(descriptionAr, description)}</p>}

      {/* Price */}
      <p className="text-2xl font-bold text-primary mb-4">${price}</p>

      {/* Add to Cart Button */}
      <motion.button
        onClick={handleAddToCart}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
          isAdded
            ? "bg-green-500 text-white"
            : "bg-gradient-to-r from-primary to-stellar-bright text-white hover:shadow-lg hover:shadow-primary/50"
        }`}
      >
        {isAdded ? (
          <>
            <Check className="w-4 h-4" />
            {t("تم الإضافة", "Added")}
          </>
        ) : (
          <>
            <ShoppingCart className="w-4 h-4" />
            {t("أضف للسلة", "Add to Cart")}
          </>
        )}
      </motion.button>
    </motion.div>
  )
}
