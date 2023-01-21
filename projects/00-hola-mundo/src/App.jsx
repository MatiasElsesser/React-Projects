import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
      return (
                  <section className='App'>
                        <TwitterFollowCard userName="matielsesser"
                        name="Matias Elsesser"
                        />
                        <TwitterFollowCard userName="elonmusk"
                        name="Elon Musk"
                        />
                  </section>
      )
}