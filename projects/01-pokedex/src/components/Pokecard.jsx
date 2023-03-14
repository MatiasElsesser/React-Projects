export const Pokecard = ({ name, id, img }) => {
  return (
    <div className='pokecard'>
      <h3>{name[0].toUpperCase() + name.slice(1)}</h3>
      <hr />
      <p> N° {id}</p>
      <img src={img} />
    </div>
  )
}
