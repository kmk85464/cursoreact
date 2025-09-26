import { NoMovies } from "./NoMovies"
import responsemovies from '../mocks/conresultados.json'
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

export function Movies ({}) {
  
  const fetchmovies =responsemovies.Search
   console.log('Películas cargadas:', fetchmovies)
  const hasMovies = fetchmovies?.length > 0

    return (
      hasMovies
        ? <ListOfMovies movies={fetchmovies} />
        : <NoMovies />
    )
}
