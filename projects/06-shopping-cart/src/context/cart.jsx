import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })

  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  const reduceQuantity = (product) =>
    dispatch({
      type: 'REDUCE_QUANTITY',
      payload: product,
    })

  // const addToCart = (product) => {
  //   const productInCart = cart.findIndex((item) => item.id === product.id)
  //   if (productInCart >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCart].quantity += 1
  //     return setCart(newCart)
  //   }

  //   setCart((prevState) => [...prevState, { ...product, quantity: 1 }])
  // }
  // const clearCart = () => {
  //   setCart([])
  // }

  // const removeFromCart = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  // }
  // const removeItem = (product) => {
  //   const productInCart = cart.findIndex((item) => item.id === product.id)
  //   if (productInCart >= 0) {
  //     const newCart = structuredClone(cart)
  //     if (newCart[productInCart].quantity <= 1) {
  //       return removeFromCart(product)
  //     } else {
  //       newCart[productInCart].quantity -= 1
  //     }
  //     return setCart(newCart)
  //   }
  // }

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
        removeItem: reduceQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
