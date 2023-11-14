import { useEffect, useRef, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UsersList'

const END_POINT = 'https://randomuser.me/api/?results=100'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  // useRef guarda un valor que se comparte entre renderizados
  // pero que al cambiar no vuelva a renderizar el componente
  // useReff si cambia el componente no se vuelve a renderizar, y para cambiarlo tenemos que acceder a el a travez del .current
  const originalUsers = useRef<User[]>([])

  const toggleColor = () => {
    setShowColors(!showColors)
  }
  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => {
      return user.email !== email
    })
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
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
      .then(res =>{
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <h1>Prueba técnica</h1>
      <header>
        <p>Usuarios: {users.length}</p>
        <button onClick={toggleColor}>
          Colorear filas
        </button>
        <button onClick={toggleSortByCountry}>
          {sortByCountry ? 'Ordenar por defecto' : 'Ordenar por país'}
        </button>
        <button onClick={handleReset}>
          Resetear usuarios
        </button>
      </header>

      <main>
        <UsersList
          users={sortedUsers} 
          showColors={showColors}
          handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App
