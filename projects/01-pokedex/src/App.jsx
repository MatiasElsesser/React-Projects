import { Pokecard } from './components/Pokecard'
import { usePokemons } from './hooks/usePokemons'
import { HeaderApp } from './components/HeaderApp'
import './App.css'

function App () {
  const { pokemons, setOffset, offset, setPokemons } = usePokemons()

  const handleClickAfter = () => {
    setPokemons([])
    setOffset(prev => prev + 20)
  }

  const handleClickBefore = () => {
    setPokemons([])
    setOffset(prev => prev - 20)
  }

  return (
    <>
      <HeaderApp />
      <main className='main'>
        <section className='cardsDefault'>
          {pokemons.length > 0 && pokemons.map((el) => {
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
        </section>
        <div className='buttons-container'>
          {(offset === 0)
            ? <button disabled> Anterior </button>
            : <button onClick={handleClickBefore}> Anterior</button>}
          <button onClick={handleClickAfter}> Siguiente </button>
        </div>
      </main>
    </>
  )
}

export default App
