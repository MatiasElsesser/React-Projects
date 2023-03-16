import { Pokecard } from './components/Pokecard'
import { usePokemons } from './hooks/usePokemons'
import { HeaderApp } from './components/HeaderApp'
import './App.css'

function App () {
  const { pokemons, setOffset, setPokemons } = usePokemons()

  const handleClick = () => {
    setPokemons([])
    setOffset(prev => prev + 20)
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
          <button> Anterior </button>
          <button onClick={handleClick}> Siguiente </button>
        </div>
      </main>
    </>
  )
}

export default App
