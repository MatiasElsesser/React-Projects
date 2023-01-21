import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
      const format = (userName) => `@ ${userName}`

      return (
                  <section className='App'>
                        <TwitterFollowCard userName="matielsesser"
                        name="Matias Elsesser"
                        formatUsername={format}
                        // pasamos la funcion sola, porque si pasamos la ejecucion de la funcion "formatUsername()" nos devolveria lo que devuelve la funcion
                        >
                              Mati Elsesser
                        </TwitterFollowCard>
                        <TwitterFollowCard userName="elonmusk"
                        //podemos pasar el parametro solo y al ser un boleano lo tomaria como true
                        formatUsername={format}>
                              Elon Musk 
                        </TwitterFollowCard>
                        <TwitterFollowCard 
                        userName="pepito"
                        // name="El Pepito"
                        formatUsername={format}>
                              El Pepito
                        </TwitterFollowCard>
                  </section>
      )
}