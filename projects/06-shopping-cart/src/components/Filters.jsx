export function Filters() {
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" id="price" min="0" max="10000" />
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category">
          <option value="all">All</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Moviles</option>
        </select>
      </div>
    </section>
  )
}
