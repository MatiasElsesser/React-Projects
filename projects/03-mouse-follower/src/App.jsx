import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // useEffect ejecuta una funcion cada vez que se renderiza el elemento que se coloca en el array de dependencias, si queremos que solo se ejecute una sola vez al montar la app ponemos el array vacio (similar a componentDidMount)
  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // En un componente de React NUNCA debemos poner un addEvventListener del objeto window, ya que se ejecutaria cada vez que se renderiza dicho componente, por eso lo ponemos en el useEffect, para poder controlar cuando se ejecuta
  return (
    <main>
      <h3> Proyecto 3</h3>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}, ${position.y})`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
