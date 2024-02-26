import { RemoveFromCartIcon } from './Icons'

export function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  removeItem,
  removeFromCart,
}) {
  const updateQuantity = (quantity) => {
    if (quantity <= 1) {
      removeFromCart()
    } else {
      removeItem()
    }
  }
  return (
    <li>
      <img src={thumbnail} alt="product" />
      <div>
        <h3>
          {title} - ${price}
        </h3>
      </div>
      <footer>
        <button onClick={() => updateQuantity(quantity)}>-</button>
        <small> Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}>
          <RemoveFromCartIcon />{' '}
        </button>
      </footer>
    </li>
  )
}
