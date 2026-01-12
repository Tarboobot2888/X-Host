export interface CartItem {
  id: string
  categoryId: string
  categoryName: string
  serviceTypeId: string
  serviceTypeName: string
  planId: string
  planName: string
  price: number
  billing: "weekly" | "monthly"
  quantity: number
  addedAt: number
}

export interface Cart {
  items: CartItem[]
  lastUpdated: number
}

const CART_STORAGE_KEY = "xhost_cart_v1"

export const getCart = (): Cart => {
  if (typeof window === "undefined") return { items: [], lastUpdated: Date.now() }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : { items: [], lastUpdated: Date.now() }
  } catch {
    return { items: [], lastUpdated: Date.now() }
  }
}

export const saveCart = (cart: Cart) => {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ ...cart, lastUpdated: Date.now() }))
  } catch {
    console.error("Failed to save cart")
  }
}

export const addToCart = (item: Omit<CartItem, "id" | "addedAt" | "quantity">): CartItem => {
  const cart = getCart()
  const existingItem = cart.items.find(
    (i) => i.categoryId === item.categoryId && i.serviceTypeId === item.serviceTypeId && i.planId === item.planId,
  )

  let cartItem: CartItem

  if (existingItem) {
    existingItem.quantity += 1
    cartItem = existingItem
  } else {
    cartItem = {
      ...item,
      id: `item_${Date.now()}_${Math.random()}`,
      quantity: 1,
      addedAt: Date.now(),
    }
    cart.items.push(cartItem)
  }

  saveCart(cart)
  return cartItem
}

export const removeFromCart = (itemId: string) => {
  const cart = getCart()
  cart.items = cart.items.filter((item) => item.id !== itemId)
  saveCart(cart)
}

export const updateCartItemQuantity = (itemId: string, quantity: number) => {
  const cart = getCart()
  const item = cart.items.find((i) => i.id === itemId)
  if (item) {
    item.quantity = Math.max(1, quantity)
    saveCart(cart)
  }
}

export const clearCart = () => {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(CART_STORAGE_KEY)
  } catch {
    console.error("Failed to clear cart")
  }
}

export const calculateCartTotals = (cart: Cart) => {
  const weeklyItems = cart.items.filter((item) => item.billing === "weekly")
  const monthlyItems = cart.items.filter((item) => item.billing === "monthly")

  const weeklyTotal = weeklyItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const monthlyTotal = monthlyItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return {
    weeklyTotal,
    monthlyTotal,
    grandTotal: weeklyTotal + monthlyTotal,
    itemCount: cart.items.reduce((sum, item) => sum + item.quantity, 0),
  }
}
