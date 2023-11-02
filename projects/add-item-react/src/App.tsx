import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId
  timestamp: number
  text: string
}

function App() {
  const { addItem, items, removeItem } = useItems()
  useSEO({
    title: `[${items.length}] Prueba tecnica de React`,
    description: 'Añadir o eliminar elementos de una lista'
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const {elements} = event.currentTarget
    // const input = elements.namedItem('item') as HTMLInputElement <--- NO RECOMENDABLE
    const input = elements.namedItem('item')
    const isIntput = input instanceof HTMLInputElement
    if (!isIntput || input == null) return

    addItem(input.value)

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemId) => () => {
      removeItem(id)
    }
  

  return (
    <main>
      <aside>
        <h1>Prueba tecnica React</h1>
        <h2>  Añadir y eliminar elementos </h2>

        <form onSubmit={handleSubmit} aria-label='Añadir elementos a la lista'>
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
          {
            items.length === 0
              ? (<p><strong>No hay elementos en la lista</strong></p>)
              : (
                <ul>
                  {
                    items.map(item => {
                      return(
                        <Item 
                          handleClick={createHandleRemoveItem(item.id)}
                          {... item} key={item.id}
                        />
                      )
                    })
                  }
              </ul>
                )
          }
      </section>
    </main>
  )
}


export default App
