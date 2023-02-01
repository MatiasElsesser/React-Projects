import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'
//  con createRoot creamos el punto de entrada de la app

// se lo asignamos a una variable
const root = createRoot(document.getElementById('app'))

// usamos el metodo render para levantar la app ( no olvidar que para que transpile el codigo el archivo debe ser JSX)
root.render(
  <App />
)
