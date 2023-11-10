import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UsersList'

const END_POINT = 'https://randomuser.me/api/?results=100'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  const toggleColor = () => {
    setShowColors(!showColors)
  }
  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  // toSorted no muta el array original, por ende no muta el estado, en caso de usar sort() hacerlo asi: [... state].sort()
  const sortedUsers = sortByCountry 
    ? users.toSorted((a, b) => {
    return a.location.country.localeCompare(b.location.country)
  })
  : users

  useEffect(() => {
    fetch(END_POINT)
      .then(data => data.json())
      .then(res => setUsers(res.results))
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <h1>Prueba técnica</h1>
      <header>
        <button onClick={toggleColor}>
          Colorear filas
        </button>
        <button onClick={toggleSortByCountry}>
          {sortByCountry ? 'Ordenar por defecto' : 'Ordenar por país'}
        </button>
      </header>

      <main>
        <UsersList users={sortedUsers} showColors={showColors}/>
      </main>
    </div>
  )
}

export default App
