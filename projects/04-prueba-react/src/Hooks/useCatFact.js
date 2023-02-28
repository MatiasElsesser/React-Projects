import { useEffect, useState } from 'react'
import { getRandomFact } from '../Services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // efecto para recuperar la cita al cargar la pagina
  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
