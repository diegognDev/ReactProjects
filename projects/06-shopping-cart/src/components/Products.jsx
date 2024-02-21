import './Products.css'
import { AddToCartIcon } from './Icons'

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
              </div>
              <p>Price: ${product.price}</p>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
