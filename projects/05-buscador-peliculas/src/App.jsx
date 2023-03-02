import './App.css'
import { useRef, useState, useEffect } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

// useRef es un hook de React que nos permite crear una referencia mutable a un elemento del DOM o a un valor cualquiera que persiste entre renderizados

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App () {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })
  // const inputRef = useRef() 'pasamos la constante como propiedad "ref" en el input'

  const handleSubmit = (event) => {
    // esta es la forma no controlada
    event.preventDefault()

    // // current es una propiedad nativa de react, se utiliza para acceder al valor actual del elemento
    // const value = inputRef.current.value
    // console.log(value)

    // const { query } = Object.fromEntries(
    //   new window.FormData(event.target)
    // )
    getMovies()
  }

  const handleChange = (event) => {
    // esta es la forma controlada, asignandole un estado
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit'> Buscar</button>
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
