import { Pokecard } from './components/Pokecard'
import './App.css'
import { usePokemons } from './hooks/usePokemons'

function App () {
  const { pokemons } = usePokemons()

  return (
    <main className='main'>
      <h1> Pokedex </h1>
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
    </main>
  )
}

export default App
