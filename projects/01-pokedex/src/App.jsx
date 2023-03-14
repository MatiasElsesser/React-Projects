import { useState, useEffect } from 'react'
import { Pokecard } from './components/Pokecard'
import './App.css'

const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

function App () {
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
              console.log(json)
              const pokemon = {
                name: json.name,
                id: json.id,
                img: json.sprites.front_default
              }
              setPokemons((poke) => [...poke, pokemon])
            })
        })
      })
  }, [])

  return (
    <main className='main'>
      <h1> Pokedex </h1>
      <section className='cardsDefault'>
        {pokemons.map((el) => {
          return (
            <Pokecard
              key={el.id}
              img={el.img}
              name={el.name}
              id={el.id}
            />
          )
        })}
      </section>
    </main>
  )
}

export default App
