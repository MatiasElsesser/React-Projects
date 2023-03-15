import { useId, useState, useRef, useEffect } from 'react'
// import { useSearchPokemons } from '../services/searchPokemons'
import { Pokecard } from './Pokecard'
import './HeaderApp.css'

export const HeaderApp = () => {
  const inputSearchPokemon = useId()
  const inputRef = useRef()
  const [search, setSearch] = useState('')
  // const { pokemon } = useSearchPokemons(search)
  const [pokemonSearch, setPokemonSearch] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch('')
    // console.log(inputRef.current.value)
    const value = inputRef.current.value
    setSearch(value)
  }

  useEffect(() => {
    if (pokemonSearch.includes(inputRef.current.value)) return

    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
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

  return (
    <header className='header'>
      <h1> Pokedex </h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor={inputSearchPokemon}> Buscar Pokemon por nombre:</label>
        <input type='text' id={inputSearchPokemon} ref={inputRef} />
        <button type='submit'>Buscar</button>
      </form>
      <div className='header-results'>
        <p>Resultados:</p>
        <div className='results-container'>
          {pokemonSearch.length > 0 &&
        pokemonSearch.map((el) => {
          return (
            <Pokecard
              key={el.id}
              img={el.img}
              name={el.name}
              id={el.id}
              types={el.types}
              stats={el.stats}
            />
          )
        })}
        </div>
      </div>
    </header>
  )
}
