import { NoMovies } from "./NoMovies"

function ListOfMovies ({ movies }) {
return (   
    <ul>
                {movies.map(movie => (
                  <li key={movie.imdbID}> 
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <img alt={movie.Title} src={movie.Poster} />
                  </li>
                ))}

              </ul> 
    )
}

export function Movies ({movies}) {
  
  const movies =responsemovies.Search
  const hasMovies = movies?.length > 0

    return (
      hasMovies
        ? <Movies movies={movies} />
        : <NoMovies />
    )
}
