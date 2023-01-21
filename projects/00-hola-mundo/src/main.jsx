import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

const root =  ReactDOM.createRoot(document.getElementById("root"))

root.render(
  // Esto es lo mismo que poner <React.fragment>
  /* <>
    <button>Hola Mundo</button>
    <button>Hola Mundo</button>
  </> */

  <App/>

)
