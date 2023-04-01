import '../components/Pokecard.css'

const colorStats = {
  low: '#EE7261',
  averange: '#F5C247',
  good: '#4ABAA0'
}

const typeColors = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F'
}

export const Pokecard = ({ name, id, img, types, stats }) => {
  const firstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1)
  }
  return (
    <div className='pokecard'>
      <div className='pokecard-header'>

        <div className='pokecard-name'>
          <h3>{firstLetterUpperCase(name)}</h3>
          <p> N° {id}</p>
        </div>

        <img src={img} />
      </div>

      <section className='types'>
        {types.map((el) => {
          return (
            <p
              key={el.slot}
              style={{ backgroundColor: `${typeColors[el.type.name]}` }}
            >
              {firstLetterUpperCase(el.type.name)}
            </p>
          )
        })}
      </section>

      <section className='stats-container'>
        {stats.map((stat) => {
          const barWidth = (stat.base_stat > 150) ? '100%' : `${stat.base_stat * 100 / 150}%`

          let colorPick = ''
          if (stat.base_stat > 100) {
            colorPick = colorStats.good
          } else if (stat.base_stat > 70) {
            colorPick = colorStats.averange
          } else {
            colorPick = colorStats.low
          }

          return (
            <div key={stat.stat.url} className='stats-content'>
              <p> {firstLetterUpperCase(stat.stat.name)}</p>
              <div className='bar'>
                <div
                  className='progress-bar'
                  style={

                    {
                      width: `${barWidth}`,
                      backgroundColor: `${colorPick}`
                    }
                    }
                />
              </div>
              <p> {stat.base_stat}</p>
            </div>
          )
        })}
      </section>

    </div>
  )
}
