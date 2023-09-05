import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux_state__', JSON.stringify(store.getState()))
}

// store es el sitio donde vamos a guardar nuestro estado
// luego en el archivo main.tsx envolvemos el elemento App en un provider, para que tenga acceso al estado que guardamos en store
export const store = configureStore({
  reducer: {
    // le decimos que una parte de los reducer viene del slice user
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware]
})
// le decimos que de la funcion getState de store, el tipo que devuelva va a ser el tipo que tenga RootState
export type RootState = ReturnType<typeof store.getState>
// lo mismo que arriba pero con el dispatch
export type AppDispatch = typeof store.dispatch
