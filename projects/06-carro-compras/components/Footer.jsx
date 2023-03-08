import { useFilters } from '../src/hooks/useFilters'
import './Footer.css'

export function Footer () {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      {JSON.stringify(filters, null, 2)}
      {/* <h4>Practica de React
        <span>Matias Elsesser</span>
      </h4>
      <h5>Shopping Cart con useContext y useReducer</h5> */}
    </footer>
  )
}
