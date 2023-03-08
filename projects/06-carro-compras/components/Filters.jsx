import { useId } from 'react'
import { useFilters } from '../src/hooks/useFilters'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  // React guarda el orden en que se llaman los componentes y a su vez los elementos de cada componente, asi le otorga un valor unico a cada elemento
  // esta id creada va a ser unica y va  aservir tanto como para el servidor como para el cliente
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  // aqui usamos el estado global en lugar de un estado local, ya que sino tendriamos dos fuentes de la verdad
  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>

    </section>
  )
}
