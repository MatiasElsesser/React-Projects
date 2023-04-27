import { type Todo as TodoType, TodoId, type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({ id }:TodoId) => void
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => {
        return (
          <li
            key={todo.id}
            className={`${todo.completed
                ? 'completed'
                : ''}`}
          >
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggleCompleteTodo={onToggleCompleteTodo}
              onRemoveTodo={onRemoveTodo}
            />
          </li>
        )
      })}
    </ul>
  )
}
