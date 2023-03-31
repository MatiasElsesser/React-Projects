import { Link } from '../Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p> Este es un ejemplo de un react router desde cero</p>
      <Link to='/about'> Ir a Sobre nosotros</Link>
    </>
  )
}
