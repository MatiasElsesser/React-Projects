import { type User } from "../types"
import './UsersList.css'

interface Props {
  handleDelete: (email: string) => void
  showColors: boolean
  users: User[]
}

export const UsersList =({users, showColors, handleDelete}: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Last name</th>
          <th>Country</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className={showColors ? 'table--showColors' : ''}>
        {
        users.map((user) => {
          return (
            <tr key={user.email}>
              <th>
                <img src={user.picture.thumbnail} />
              </th>
              <th>{user.name.first}</th>
              <th>{user.name.last}</th>
              <th>{user.location.country}</th>
              <th>
                <button onClick={ () => handleDelete(user.email) }>Delete</button>
              </th>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}