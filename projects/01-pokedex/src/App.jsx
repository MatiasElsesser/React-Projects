import { Pokecard } from './components/Pokecard'
import { usePokemons } from './hooks/usePokemons'
import { HeaderApp } from './components/HeaderApp'
import { useState } from 'react'
import './App.css'
import { ButtonsFooter } from './components/ButtonsFooter'

function App () {
  const { pokemons, setOffset, offset, setPokemons } = usePokemons()
  const [count, setCount] = useState(0)
  const [valueSelect, setValueSelect] = useState('default')

  const handleClickAfter = () => {
    setPokemons([])
    setCount(prev => ++prev)
    setOffset(prev => prev + 20)
  }

  const handleClickBefore = () => {
    setPokemons([])
    setCount(prev => --prev)
    setOffset(prev => prev - 20)
  }

  const handleSelected = (e) => {
    setValueSelect(e.target.value)
  }

  const filteredPokemons = valueSelect === 'default'
    ? pokemons
    : pokemons.filter(e => {
      return (e.types[0].type.name === valueSelect || e.types[1]?.type.name === valueSelect)
    })

  return (
    <>
      <HeaderApp />
      <h2>Listado de Pokemons</h2>
      <div className='filter-container'>
        <label htmlFor='filterInput'>
          Filtrar por tipo:
        </label>
        <select
          id='filterInput'
          value={valueSelect}
          onChange={handleSelected}
        >
          <option value='default'>Default</option>
          <option value='grass'>Grass</option>
          <option value='bug'>Bug</option>
          <option value='flying'>Flying</option>
          <option value='fire'>Fire</option>
          <option value='normal'>Normal</option>
          <option value='water'>Water</option>
          <option value='poison'>Poison</option>
          <option value='electric'>Electric</option>
          <option value='ground'>Ground</option>
          <option value='fighting'>Fighting</option>
          <option value='dragon'>Dragon</option>
          <option value='ghost'>Ghost</option>
          <option value='rock'>Rock</option>
          <option value='ice'>Ice</option>
          <option value='steel'>Steel</option>
          <option value='psychic'>Psychic</option>
        </select>
      </div>
      <main className='main'>

        <section className='cardsDefault'>
          {
            filteredPokemons.length > 0 && filteredPokemons.map((el) => {
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
            })
          }
        </section>

        <ButtonsFooter
          offset={offset}
          clickAfter={handleClickAfter}
          clickBefore={handleClickBefore}
          count={count}
        />
      </main>
    </>
  )
}

export default App
