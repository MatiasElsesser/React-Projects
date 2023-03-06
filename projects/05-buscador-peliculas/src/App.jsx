import './App.css'
import { useRef, useState, useEffect, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'
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
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { loading, movies, getMovies } = useMovies({ search, sort })
  // const inputRef = useRef() 'pasamos la constante como propiedad "ref" en el input'

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies])

  const handleSubmit = (event) => {
    // esta es la forma no controlada
    event.preventDefault()

    // // current es una propiedad nativa de react, se utiliza para acceder al valor actual del elemento
    // const value = inputRef.current.value
    // console.log(value)

    // const { query } = Object.fromEntries(
    //   new window.FormData(event.target)
    // )
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    // esta es la forma controlada, asignandole un estado
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>

      <header className='header'>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix ...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'> Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <hr />
      <main>
        {
        loading ? <p> Cargando... </p> : <Movies movies={movies} />
      }

      </main>
    </div>
  )
}

export default App
