import { TwitterFollowCard } from './TwitterFollowCard'
import {useState} from "react"

export function App () {
      const format = (userName) => `@ ${userName}`

      const [name, setName] = useState("matielsesser")
      console.log("render with:", name) // se ejecuta cada vez que cambia el estado
      // cuando el elemento padre cambia su estado todos sus hijos se vuelven a renderizar en el virtual Dom

      return (
                  <section className='App'>
                        <TwitterFollowCard 
                        initialIsFolowing
                        userName={name}
                        name="Matias Elsesser"
                        formatUsername={format}
                        // pasamos la funcion sola, porque si pasamos la ejecucion de la funcion "formatUsername()" nos devolveria lo que devuelve la funcion
                        >
                              Mati Elsesser
                        </TwitterFollowCard>

                        <TwitterFollowCard userName="elonmusk"
                        //podemos pasar el parametro solo y al ser un boleano lo tomaria como true
                        initialIsFolowing
                        formatUsername={format}>
                              Elon Musk 
                        </TwitterFollowCard>

                        <TwitterFollowCard 
                        initialIsFolowing={false}
                        userName="pepito"
                        // name="El Pepito"
                        formatUsername={format}>
                              El Pepito
                        </TwitterFollowCard>

                        <button onClick={ () => setName("midudev") }>
                              Cambio de nombre
                        </button>
                  </section>
      )
}