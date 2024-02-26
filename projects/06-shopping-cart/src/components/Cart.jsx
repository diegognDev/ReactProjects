import { useId } from 'react'
import { CartItem } from './CartItem'
import { ClearCartIcon, CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Cart() {
  const cartCheckboxId = useId()
  const { context } = useCart()
  const { cart, clearCart, addToCart, removeItem, removeFromCart } = context
  return (
    <section>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              removeItem={() => removeItem(product)}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </section>
  )
}
