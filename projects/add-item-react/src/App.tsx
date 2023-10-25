import { useState } from 'react'
import './App.css'

type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemId
  timestamp: number
  text: string
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Videojuegos'
  }, 
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Libros'
  }
]

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const {elements} = event.currentTarget
    // const input = elements.namedItem('item') as HTMLInputElement <--- NO RECOMENDABLE
    const input = elements.namedItem('item')
    const isIntput = input instanceof HTMLInputElement
    if (!isIntput || input == null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now()
    }

    setItems((prevItems) => {
      return [...prevItems, newItem]
    })
    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemId) => () => {
    setItems((prevItems) =>{
      return prevItems.filter(currentItem => currentItem.id !== id)
    })
  }

  return (
    <main>
      <aside>
        <h1>Prueba tecnica React</h1>
        <h2>  Añadir y eliminar elementos </h2>

        <form onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input 
              name='item'
              required
              type='text'
              placeholder='Videojuegos'/>
          </label>
          <button> Añadir elemento a la lista</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {
            items.map(item => {
              return(
                <li
                  key={item.id}
                >
                  {item.text}
                  <button
                    onClick={createHandleRemoveItem(item.id)}>
                    Eliminar elemento
                  </button>
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  )
}

export default App
