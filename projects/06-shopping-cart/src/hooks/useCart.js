import { useContext } from 'react'
import { CartContext } from '../context/cart'
export function useCart() {
  const context = useContext(CartContext)

  const { cart } = context

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return { context, checkProductInCart }
}
