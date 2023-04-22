import { Suspense, lazy } from 'react'
import './App.css'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Route } from './Route'
import { Router } from './Router'

// import Dinamico
// importamos el componente AboutPage de forma dinamica, para que se importe solo cuando se necesite
// Envolvemos la app en la etiqueta <Suspense>  para avisarle a React que parte de la UI no estara disponible ni bien carga la pagina
// <Suspense> recibe un parametro fallback, que se utiliza para mostrar algo mientras se carga el recurso que queremos mostrar
// esto lo hacemos para mejorar el rendimiento de la app, importando solo lo que necesitemos
const AboutPage = lazy(() => import('./pages/About.jsx'))
const HomePage = lazy(() => import('./pages/Home.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router
          routes={appRoutes}
          defaulltComponent={Page404}
        >
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
