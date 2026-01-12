import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: string
  name: string
  nameAr: string
  price: number
  quantity: number
  image?: string
  category: string
}

interface CartState {
  items: CartItem[]
  totalPrice: number
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalPrice: 0,

      addItem: (item: CartItem) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          let newItems: CartItem[]

          if (existingItem) {
            newItems = state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
          } else {
            newItems = [...state.items, item]
          }

          const totalPrice = newItems.reduce((acc, i) => acc + i.price * i.quantity, 0)
          return { items: newItems, totalPrice }
        })
      },

      removeItem: (id: string) => {
        set((state) => {
          const newItems = state.items.filter((i) => i.id !== id)
          const totalPrice = newItems.reduce((acc, i) => acc + i.price * i.quantity, 0)
          return { items: newItems, totalPrice }
        })
      },

      updateQuantity: (id: string, quantity: number) => {
        set((state) => {
          if (quantity <= 0) {
            return get().removeItem(id) as any
          }

          const newItems = state.items.map((i) => (i.id === id ? { ...i, quantity } : i))
          const totalPrice = newItems.reduce((acc, i) => acc + i.price * i.quantity, 0)
          return { items: newItems, totalPrice }
        })
      },

      clearCart: () => {
        set({ items: [], totalPrice: 0 })
      },

      getTotalItems: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0)
      },
    }),
    {
      name: "x-host-cart",
      version: 1,
    },
  ),
)
