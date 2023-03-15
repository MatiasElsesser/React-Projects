import { useState, useEffect } from 'react'

export const useSearchPokemons = (search) => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then(res => res.json())
      .then(json => {
        const pokemon = {
          name: json.name,
          id: json.id,
          img: json.sprites.front_default,
          types: json.types,
          stats: json.stats
        }
        setPokemon({ pokemon })
      })
  }, [search])
  return pokemon
}

// export const searchPokemons = async (search) => {
//   try {
//     const searchLowerCase = search.toLowerCase()
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchLowerCase}`)
//     const json = await res.json()

//     const pokemon = {
//       name: json.name,
//       id: json.id,
//       img: json.sprites.front_default,
//       types: json.types,
//       stats: json.stats
//     }
//     return pokemon
//   } catch (e) {
//     console.log(e)
//   }
// }
