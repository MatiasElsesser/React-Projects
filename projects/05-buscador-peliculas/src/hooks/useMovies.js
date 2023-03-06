import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // guardamos la referencia anterior para evitar que se haga la misma peticion dos veces, recordar que la referencia persiste al renderizado, por eso la actualizamos mas abajo
  const previousSearch = useRef(search)

  // useCallback funciona exactamente igual que useMemo, solo que se simplifico para que nos permita guardar funciones
  // en lugar de pasar un callback que retorne una funcion pasamos directamente la funcion
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  , [search])

  // useMemo() guarda en memoria un proceso y no lo vuelve a realizar a menos que cambien las dependencias que le pasamos,
  // esto lo hacemos porque al estar en el cuerpo de la funcion App el metodo sort se ejecutaria cada vez que se renderice, lo que consumiria recursos
  // se utiliza cuando se quiere guardar un calculo costoso en terminos de rendimiento
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, error }
}
