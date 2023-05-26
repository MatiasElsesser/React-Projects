import { createSlice } from '@reduxjs/toolkit'

// un slice es como un pedazo de la store, se usa para mantener ordenado el estado. Asi lo dividimos en varios elementos

// el slice necesita su nombre, su estado inicial y el reducer que va  autilizar

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWhitId extends User {
  id: string
}

const initialState: Array<UserWhitId> = [
  {
    id: '1',
    name: 'Peter Doe',
    email: 'peter@gmail.com',
    github: 'petDoe'
  },
  {
    id: '2',
    name: 'Patrice Ferrell',
    email: 'p_ferrell@gmail.com',
    github: 'ferri'
  },
  {
    id: '3',
    name: 'Daniel Atlas',
    email: 'daniatlas@gmail.com',
    github: 'danielAtlas'
  },
  {
    id: '4',
    name: 'Doroty Mikado',
    email: 'mikado@gmail.com',
    github: 'Doromika'
  },
  {
    id: '5',
    name: 'Matias Elsesser',
    email: 'elsesser3@gmail.com',
    github: 'matiaselsesser'
  },
  {
    id: '6',
    name: 'Giulia Beckembauer',
    email: 'beckGiulia@gmail.com',
    github: 'beck'
  }
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

// exportamos solo el reducer porque seguramente va a ser lo que necesitemos
// un reducer es como lo que usamos en el hook "useReducer", en el cual le pasamos la accion a realizar y este tranforma el estado
export default usersSlice.reducer
