export default function useMovies(responseMovies = {}) {
  const movies = responseMovies.Search
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title, // typo corregido
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
