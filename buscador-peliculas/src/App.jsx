import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { NoMovies } from './components/NoMovies'
function App() {

  return (
    <>
      <div className='page'>
        <header>
            <form className='form'>
              <input placeholder='Avenders, Star Wars, Matrix...' />
              <button type='submit'>Search</button>
            </form>
        </header>
        <main className='main'>
          {
            <Movies  />
            
          }
  
        </main>

      </div>
    </>
  )
}

export default App
