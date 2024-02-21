import { useState } from 'react'
export function Filters({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChange = (event) => {
    setMinPrice(event.target.value)
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleCategoryChange = (event) => {
    changeFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio minimo: </label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChange}
        />
        <span>{minPrice} </span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Moviles</option>
        </select>
      </div>
    </section>
  )
}
