import { SortBy, type User } from "../types.d"
import './UsersList.css'

interface Props {
  handleDelete: (email: string) => void
  changeSorting: (sort: SortBy) => void
  showColors: boolean
  users: User[]
}

export const UsersList =({users, showColors, handleDelete, changeSorting}: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th className="pointer" onClick={ () => changeSorting(SortBy.NAME)}>Name</th>
          <th className="pointer" onClick={ () => changeSorting(SortBy.LAST)}>Last name</th>
          <th className="pointer" onClick={ () => changeSorting(SortBy.COUNTRY)}>Country</th>
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