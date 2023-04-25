export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type ListOfTodos = Todo[] // esto tambien se puede hacer asi Array<Todo>
