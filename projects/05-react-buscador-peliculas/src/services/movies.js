const API_KEY = '47053ba8'

export const searchMovies = async ({ search }) => {
  if (search === '') return
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
    )
    const data = await response.json()
    const movies = data.Search
    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }))
    return mappedMovies
  } catch (e) {
    throw new Error('Error al buscar la pelicula')
  }
}
