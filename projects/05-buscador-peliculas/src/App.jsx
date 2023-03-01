import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

// useRef es un hook de React que nos permite crear una referencia mutable a un elemento del DOM o a un valor cualquiera que persiste entre renderizados

function App () {
  const { movies } = useMovies()
  const inputRef = useRef() // pasamos la constante como propiedad "ref" en el input

  const handleSubmit = (event) => {
    event.preventDefault()

    // // current es una propiedad nativa de react, se utiliza para acceder al valor actual del elemento
    // const value = inputRef.current.value
    // console.log(value)

    const { query } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(query)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' ref={inputRef} placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit'> Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
