import { TwitterFollowCard } from './TwitterFollowCard'
import {useState} from "react"


const users = [
      {
            userName: 'matielsesser',
            name: 'Matias Elsesser',
            isFollowing: true
      },
      {
            userName: 'GiuliElsesser',
            name: 'Giuliana Elsesser',
            isFollowing: false
      },
      {
            userName: 'elonmusk',
            name: 'Elon Musk',
            isFollowing: false
      }
]




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

                        {
                              users.map( ( user ) => {
                                    {/* desestructuramos  para obtener mas facil los valores de los objetos*/}
                                    const { userName, name, isFollowing } = user
                                    return (
                                          <TwitterFollowCard 
                                          // la Key es un identificador unico que nos va  a pedir al momento de renderizar listas, para asi poder identificar cada elemento por separado en el VirtualDom. Siempre asegurarse de darle un valor unico, que no se repita
                                          key={userName}
                                          userName={userName}
                                          isFollowing={isFollowing}
                                          formatUsername={format}>
                                                {name}
                                          </TwitterFollowCard>
                                    )
                              })
                        }
                        {/* De la manera anterior podemos renderizar listas de objetos, al fin y al cabo sigue siendo javascript */}

                        <button onClick={ () => setName("midudev") }>
                              Cambio de nombre
                        </button>
                  </section>
      )
}