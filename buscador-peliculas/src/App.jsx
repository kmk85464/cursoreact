import { useEffect, useRef, useState } from 'react'
import './App.css'
import useMovies from './hooks/useMovies.js'
import Movies from './components/Movies.jsx'

function App() {
  const { movies } = useMovies() // minúscula
  const inputRef = useRef()
  //creamos un estado
  const [query, setQuery]= useState('')
  //creamos estado para si la query esta vacia
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault() // prevenir submit del form
    console.log({query})
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  //useefect para validacion
  useEffect (()=>{
    if (query === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (query.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (query.length<3){
      setError('la busqueda debe tener al menos 3 caracteres')
      return
    }

  },[query])

  return (
    <div className='page'>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange}value={query}ref={inputRef} placeholder='Avengers, Star Wars, Matrix...' />
          <button type='submit'>Search</button>
        </form>
        {
          error && <p style={{color:'red'}} >{error}</p>
        }
      </header>
      <main className='main'>
        <Movies  movies={movies}/>
      </main>
    </div>
  )
}

export default App
