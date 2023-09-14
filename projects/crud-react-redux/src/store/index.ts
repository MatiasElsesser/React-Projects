import { configureStore, Middleware } from '@reduxjs/toolkit'
import usersReducer from './users/slice'
import { toast } from 'sonner'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux_state__', JSON.stringify(store.getState()))
}

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  console.log(store)
  next(action)

  if (type === 'users/deleteUsersById') {
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          console.log(res)
          toast.success(`Usuario ${payload} eliminado correctamente`)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  if (type === 'users/addNewUser') {
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: 'POST',
      body: JSON.stringify({
        // pendiente (recuperar datos del formulario y llenar el cuerpo de la peticion con id, title y body)
        title: `${payload.name}`,
        body: `${payload.email}`,
        userId: `${payload}`
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(res => {
        if (res.ok) {
          console.log(res)
          toast.success(`Usuario ${payload.name} creado correctamente`)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// store es el sitio donde vamos a guardar nuestro estado
// luego en el archivo main.tsx envolvemos el elemento App en un provider, para que tenga acceso al estado que guardamos en store
export const store = configureStore({
  reducer: {
    // le decimos que una parte de los reducer viene del slice user
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDatabase]
})
// le decimos que de la funcion getState de store, el tipo que devuelva va a ser el tipo que tenga RootState
export type RootState = ReturnType<typeof store.getState>
// lo mismo que arriba pero con el dispatch
export type AppDispatch = typeof store.dispatch
