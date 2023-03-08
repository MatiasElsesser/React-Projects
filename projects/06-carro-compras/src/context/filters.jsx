import { createContext, useState } from 'react'

// Con esto creamos el contexto que vamos a consumir
export const FiltersContext = createContext()

// Crear el Provider, para proveer el acceso al contexto
export function FiltersProvider ({ children }) {
  // Con esto podemos tener un estado que sea global en la aplicacion
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
