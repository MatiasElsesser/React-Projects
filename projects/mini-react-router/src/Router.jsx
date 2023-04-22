import { EVENTS } from './const'
import { useState, useEffect, Children } from 'react'
import { match } from 'path-to-regexp'

export function Router ({ children, routes = [], defaulltComponent: DefaultComponent = () => <h1> 404 </h1> }) {
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

  let routeParams = {}

  // añadimos las rutas que vienen del children <Route /> component
  // Children, es una manera de iterar los hijos, lo proporciona React, por eso lo importamos
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })
  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // usando path-to-regexp para detectar rutas dinamicas
    // como /search/:query <-- :query es una ruta dinamica
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // guardo los parametros la utrl que eran dinamicos extraidos con path-to-regexp
    // si la ruta es /searcg/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routeParams = matched.params // { query: 'javascript' } /search/javascript
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
