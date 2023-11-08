import { type User } from "../types"

interface Props {
  users: User[]
}

export const UsersList =({users}: Props) => {
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
        users.map((user) => {
          return (
            <tr key={user.id.value}>
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