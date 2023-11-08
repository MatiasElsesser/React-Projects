import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UsersList'

const END_POINT = 'https://randomuser.me/api/?results=100'

function App () {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch(END_POINT)
      .then(data => data.json())
      .then(res => setUsers(res.results))
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <UsersList />
  )
}

export default App
