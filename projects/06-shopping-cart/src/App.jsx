import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { IS_DEVELOPMENT } from './config'

function App() {
  const { filters, products, filterProducts } = useFilters()

  return (
    <>
      <Header />
      <Products products={filterProducts(products)} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
