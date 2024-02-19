import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'

function App() {
  const { movies } = useMovies()
  const inputRef = useRef()
  const { search, setSearch, error } = useSearch()

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
    console.log({ search })
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
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
          <button id="searchButton" type="submit">
            Buscar
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
