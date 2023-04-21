import { useEffect } from 'react'
import { Link } from '../Link'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Has Buscado ${routeParams.query}`
  }, [])

  return (
    <>
      <h1>Has buscado {routeParams.query}</h1>
      <Link to='/'>Regresar a Home</Link>
    </>
  )
}
