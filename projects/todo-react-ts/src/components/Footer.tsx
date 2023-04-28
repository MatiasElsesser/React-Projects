export const Footer: React.FC<Props> = ({ todos, onClearCompleted }) => {
  return (
    <footer className='footer'>
      <span className='todo.count'>
        <strong>{todos.length}</strong> tareas pendientes
      </span>

    <Filters 
        filterSelected={}
        onFilterChange={()=>{}}
    </footer>
  )
}
