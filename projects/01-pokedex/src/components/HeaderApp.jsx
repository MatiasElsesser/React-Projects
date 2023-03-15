import { useId, useState, useRef } from 'react'
import { useSearchPokemons } from '../services/searchPokemons'
// import { Pokecard } from './Pokecard'
import './HeaderApp.css'

export const HeaderApp = () => {
  const inputSearchPokemon = useId()
  const inputRef = useRef()
  const [search, setSearch] = useState('')
  const { pokemon } = useSearchPokemons(search)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(inputRef.current.value)
    const value = inputRef.current.value
    setSearch(value)
    console.log(pokemon)
  }

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
        {/* {search &&
          <Pokecard
            key={search.id}
            img={search.img}
            name={search.name}
            id={search.id}
            types={search.types}
            stats={search.stats}
          />} */}
      </div>
    </header>
  )
}
