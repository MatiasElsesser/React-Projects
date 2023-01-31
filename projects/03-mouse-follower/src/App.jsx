import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // useEffect ejecuta una funcion cada vez que se renderiza el elemento que se coloca en el array de dependencias, si queremos que solo se ejecute una sola vez al montar la app ponemos el array vacio (similar a componentDidMount)
  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanUp
    // el return se ejecuta cuando se desmonta el componente, y se encarga de limpiar las subscripciones a los eventos. Y tambien cada vez que cambia la dependencia
    return () => {
      window.removeEventListener('pointermove', handleMove)
      // en la consola podemos usar el metodo getEventListener(window) para verificar cuantas veces se esta subcribiendo a un evento en caso de haber errores
    }
  }, [enabled])

  // En un componente de React NUNCA debemos poner un addEvventListener del objeto window, ya que se ejecutaria cada vez que se renderiza dicho componente, por eso lo ponemos en el useEffect, para poder controlar cuando se ejecuta
  return (
    <main>
      <h3> Proyecto 3</h3>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09dddf',
        borderRadius: ' 0 50% 50% 50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -15,
        top: -15,
        width: 30,
        height: 30,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

function App () {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}> Toggle mounted FollowMouse component
      </button>
    </main>
  )
}

export default App
