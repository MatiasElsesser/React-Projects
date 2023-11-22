import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { type User, SortBy } from './types.d'
import { UsersList } from './components/UsersList'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  // useRef guarda un valor que se comparte entre renderizados
  // pero que al cambiar no vuelva a renderizar el componente
  // useReff si cambia el componente no se vuelve a renderizar, y para cambiarlo tenemos que acceder a el a travez del .current
  const originalUsers = useRef<User[]>([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const toggleColor = () => {
    setShowColors(!showColors)
  }
  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => {
      return user.email !== email
    })
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }


  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
        })
      : users
  },[users, filterCountry])

    // con useMemo le decimos que el valor de la constante sortedUsers no lo vuelva a calcular entre renderizados a menos que cambie filteredUsers o sortByCountry
    const sortedUsers = useMemo(() => {

      if (sorting === SortBy.NONE) return filteredUsers

      const compareProperties: Record<string, (user: User) => any> = {
        [SortBy.COUNTRY]: user => user.location.country,
        [SortBy.NAME]: user => user.name.first,
        [SortBy.LAST]: user => user.name.last
      }

      // toSorted no muta el array original, por ende no muta el estado, en caso de usar sort() hacerlo asi: [... state].sort()
      return filteredUsers.toSorted((a, b) => {
        const extractProperty = compareProperties[sorting]
        return extractProperty(a).localeCompare(extractProperty(b))
      })

    }, [filteredUsers, sorting])

  useEffect(() => {
    setLoading(true)
    fetch(`https://randomuser.me/api/?results=10&seed=matielsesser&page=${currentPage}`)
      .then(data => {
        if (!data.ok) throw new Error('Error en la peticion')
        return data.json()
      })
      .then(res =>{
        setUsers(prevUsers =>  {
          const newUsers = prevUsers.concat(res.results)
          originalUsers.current = newUsers
          return newUsers
        })
      })
      .catch(err => {
        console.error(err)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])

  return (
    <div>
      <h1>Prueba técnica</h1>
      <header>
        <p className='usersBadge'>Usuarios: {users.length}</p>
        <button onClick={toggleColor}>
          Colorear filas
        </button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY? 'Ordenar por defecto' : 'Ordenar por país'}
        </button>
        <button onClick={handleReset}>
          Resetear usuarios
        </button>
        <input 
          placeholder='Filtrar por pais'
          onChange={(event) =>{
            setFilterCountry(event.target.value)
          }}/>
      </header>

      <main>
        { users.length > 0 &&
          <UsersList
            users={sortedUsers} 
            showColors={showColors}
            handleDelete={handleDelete}
            changeSorting={handleChangeSort}/>
        }

        {loading && <p>Cargando ...</p>}

        {!loading && error && <p> Ha ocurrido un error</p>}

        {!loading && !error && users.length === 0 && <p>No hay resultados que mostrar</p>}


        { !loading && !error &&
          <button onClick={() => setCurrentPage(currentPage + 1)}>Cargar mas resultados</button>
        }
      </main>
    </div>
  )
}

export default App
