import { useContext, useState } from 'react'
import { products as initialProducts } from '../mocks/products.json'
import { FiltersContext } from '../context/filters'
export function useFilters() {
  const [products] = useState(initialProducts)
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0,
  // })

  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { products, setFilters, filterProducts, filters }
}
