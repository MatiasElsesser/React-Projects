export const ButtonsFooter = ({ count, offset, clickAfter, clickBefore }) => {
  return (
    <div className='buttons-container'>
      {(offset === 0)
        ? <button disabled> Anterior </button>
        : <button onClick={clickBefore}> Anterior</button>}
      <button> {count}</button>
      <button onClick={clickAfter}> Siguiente </button>
    </div>
  )
}
