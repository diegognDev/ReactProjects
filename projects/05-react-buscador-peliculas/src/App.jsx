import './App.css'
import { useRef, useState } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import Spinner from './components/Spinner.jsx'

function App() {
  const inputRef = useRef()
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const value = inputRef.current.value
  //   console.log(value)
  // } <--- Funcion usando el hook useRef() para manejar el input del formulario

  //Forma no controlada
  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   const { query } = Object.fromEntries(new window.FormData(evt.target))
  //   console.log(query)
  // }

  //Forma controlada. Se ve en cada momento que se introduce en el formulario
  const handleSubmit = (evt) => {
    evt.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} id="formularioBusqueda" className="form">
          <input
            onChange={handleChange}
            value={search}
            name="query"
            ref={inputRef}
            id="searchBar"
            placeholder="Avengers, Star Wars..."
          />
          <input type="checkbox" onChange={handleSort} />
          <button id="searchButton" type="submit">
            Buscar
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>{loading ? <Spinner /> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
