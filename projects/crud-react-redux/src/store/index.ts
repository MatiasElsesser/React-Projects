import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

// store es el sitio donde vamos a guardar nuestro estado
// luego en el archivo main.tsx envolvemos el elemento App en un provider, para que tenga acceso al estado que guardamos en store
export const store = configureStore({
  reducer: {
    // le decimos que una parte de los reducer viene del slice user
    users: usersReducer
  }
})
// le decimos que de la funcion getState de store, el tipo que devuelva va a ser el tipo que tenga RootState
export type RootState = ReturnType<typeof store.getState>
// lo mismo que arriba pero con el dispatch
export type AppDispatch = typeof store.dispatch
