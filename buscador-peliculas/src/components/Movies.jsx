import NoMovies from './NoMovies'
import responseMovies from '../mocks/conresultados.json'

function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
            alt={movie.Title}
            onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
          />
        </li>
      ))}
    </ul>
  )
}

export default function Movies() {
  const fetchedMovies = responseMovies.Search
  const hasMovies = fetchedMovies?.length > 0

  return hasMovies ? <ListOfMovies movies={fetchedMovies} /> : <NoMovies />
}
