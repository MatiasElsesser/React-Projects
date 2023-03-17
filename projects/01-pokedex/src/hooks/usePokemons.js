import { useState, useEffect } from 'react'

const URL_API = 'https://pokeapi.co/api/v2/pokemon/?offset='

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetch(`${URL_API}${offset}`)
      .then(res => res.json())
      .then(json => {
        json.results.forEach(element => {
          fetch(element.url)
            .then(res => res.json())
            .then(json => {
              const pokemon = {
                name: json.name,
                id: json.id,
                img: json.sprites.front_default,
                types: json.types,
                stats: json.stats
              }
              setPokemons((poke) => [...poke, pokemon])
            })
        })
      })
  }, [offset])

  return { pokemons, setOffset, setPokemons, offset }
}
