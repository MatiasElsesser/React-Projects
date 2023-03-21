import { useId, useState, useRef } from 'react'
import { Pokecard } from './Pokecard'
import './HeaderApp.css'
import { useSearchPokemons } from '../hooks/useSearchPokemons'

export const HeaderApp = () => {
  const inputSearchPokemon = useId()
  const inputRef = useRef()
  const [search, setSearch] = useState('')
  const { pokemonSearch, setPokemonSearch, error, setHistorySearch } = useSearchPokemons({ search })

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    setSearch(value)
  }
  const handleReset = () => {
    setHistorySearch([])
    setPokemonSearch([])
  }

  return (
    <header className='header'>
      <h1> Pokedex </h1>

      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor={inputSearchPokemon}> Buscar Pokemon por nombre:</label>
        <input type='text' id={inputSearchPokemon} ref={inputRef} />
        <button type='submit'>Buscar</button>
        <button onClick={handleReset}> Reset </button>
      </form>

      <div className='header-results'>
        <p>Resultados:</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}

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
