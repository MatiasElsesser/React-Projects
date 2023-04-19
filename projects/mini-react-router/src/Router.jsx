import { EVENTS } from './const'
import { useState, useEffect } from 'react'

export function Router ({ routes = [], defaulltComponent: DefaultComponent = () => <h1> 404 </h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    // popstate es el evento cuando en el navegador le damos al boton de atras
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const Page = routes.find(({ path }) => path === currentPath)?.Component

  return Page ? <Page /> : <DefaultComponent />
}
