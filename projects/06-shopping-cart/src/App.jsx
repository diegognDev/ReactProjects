import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { IS_DEVELOPMENT } from './config'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
  const { products, filterProducts } = useFilters()

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(products)} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
