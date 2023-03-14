import { useState, useEffect } from 'react'

const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch(URL_API)
      .then(res => res.json())
      .then(json => {
      // console.log(json)
        json.results.forEach(element => {
        // console.log(element)
          fetch(element.url)
            .then(res => res.json())
            .then(json => {
              // console.log(json)
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
  }, [])

  return { pokemons }
}
