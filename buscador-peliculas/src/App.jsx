import { useRef } from 'react'
import './App.css'
import useMovies from './hooks/useMovies.js'
import Movies from './components/Movies.jsx'

function App() {
  const { movies } = useMovies() // minúscula
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault() // prevenir submit del form
    const value = inputRef.current.value
    console.log(value)
  }


  return (
    <div className='page'>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder='Avengers, Star Wars, Matrix...' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main className='main'>
        <Movies  movies={movies}/>
      </main>
    </div>
  )
}

export default App
