import { TODO_FILTERS } from './consts'

export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
// export type TodoId = Omit<Todo, 'completed' | 'title> este es otro selector de Ts
export type TodoCompleted = Pick<Todo, 'completed'>
export type TodoTitle = Pick<Todo, 'title'> // Todo['title'] es igual a esto

export type ListOfTodos = Todo[] // esto tambien se puede hacer asi Array<Todo>

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
