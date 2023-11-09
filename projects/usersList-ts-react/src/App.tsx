import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UsersList'

const END_POINT = 'https://randomuser.me/api/?results=100'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)

  const toggleColor = () => {
    setShowColors(!showColors)
  }

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
      </header>

      <main>
        <UsersList users={users} showColors={showColors}/>
      </main>
    </div>
  )
}

export default App
