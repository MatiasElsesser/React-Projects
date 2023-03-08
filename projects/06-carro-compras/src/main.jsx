import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/filters'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // envolvemos toda la app porque le pasamos la prop children al contexto
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
