import { useState, useEffect } from 'react'

export const useSearchPokemons = ({ search }) => {
  const [pokemonSearch, setPokemonSearch] = useState([])
  const [error, setError] = useState(null)
  const [historySearch, setHistorySearch] = useState([''])

  useEffect(() => {
    if (search === '') {
      setError('La busqueda no contiene nada')
      return
    }
    if (historySearch.includes(search.toLowerCase())) {
      setError(`${search} ya esta entre tus busquedas`)
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar un Pokemon con un número')
      return
    }

    setError(null)
    setHistorySearch(prev => [...prev, search])

    fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then(res => res.json())
      .then(json => {
        const newPoke = {
          name: json.name,
          id: json.id,
          img: json.sprites.front_default,
          types: json.types,
          stats: json.stats
        }
        setPokemonSearch(poke => [...poke, newPoke])
      })
  }, [search])

  return { setPokemonSearch, setHistorySearch, pokemonSearch, error }
}
