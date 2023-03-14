export const Pokecard = ({ name, id, img, types, stats }) => {
  return (
    <div className='pokecard'>
      <h3>{firstLetterUpperCase(name)}</h3>
      <p> N° {id}</p>
      <img src={img} />

      <section className='types'>
        {types.map((el) => {
          return (
            <p key={el.slot}> {firstLetterUpperCase(el.type.name)}</p>
          )
        })}
      </section>

      <section className='stats-container'>
        {stats.map((stat) => {
          return (
            <div key={stat.stat.url} className='stats-content'>
              <p> {firstLetterUpperCase(stat.stat.name)}</p>
              <p> {stat.base_stat}</p>
            </div>
          )
        })}
      </section>

    </div>
  )
}

function firstLetterUpperCase (string) {
  return string[0].toUpperCase() + string.slice(1)
}
