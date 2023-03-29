import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  // crear evento para avisar que se cambio la pag
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p> Este es un ejemplo de un react router desde cero</p>
      <button onClick={() => navigate('/about')}> Ir a Sobre nosotros</button>
    </>
  )
}

function AboutPage () {
  return (
    <main>
      <h1>About</h1>
      <div>
        <img src='https://media.licdn.com/dms/image/C4D03AQENl7TfMM-ORg/profile-displayphoto-shrink_800_800/0/1647885656694?e=1685577600&v=beta&t=6n0_FXpteSsWVaTBChuA48T5k6On0gWdly1tpHJdMcA' />
      </div>
      <p>Mi nombre es Elsesser Matias y estoy aprendiendo React</p>
      <button onClick={() => navigate('/')}>r a home</button>
    </main>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
