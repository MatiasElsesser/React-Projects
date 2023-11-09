import { type User } from "../types"
import './UsersList.css'

interface Props {
  showColors: boolean
  users: User[]
}

export const UsersList =({users, showColors}: Props) => {
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
      <tbody>
        {
        users.map((user, index) => {
          const bgColor = index % 2 === 0 ? '#333' : '#555'
          const color = showColors ? bgColor : 'transparent'
          return (
            <tr key={index} style={{backgroundColor: color}}>
              <th>
                <img src={user.picture.thumbnail} />
              </th>
              <th>{user.name.first}</th>
              <th>{user.name.last}</th>
              <th>{user.location.country}</th>
              <th>
                <button>Delete</button>
              </th>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}