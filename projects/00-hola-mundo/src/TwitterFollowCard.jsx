import './TwitterFollowCard.css'
import { useState } from 'react' //importamos el Hook


export function TwitterFollowCard ({ formatUsername ,userName, children}) {
      // tambien podemos pasar funciones como props (formatUsername)


      const [ isFollowing, setIsFollowing] = useState(false)



      //renderizado condicional: le decimos al boton de texto que queremos que diga dependiendo si la prop isFollowing es true o false
      const text = isFollowing
            ? "Siguiendo"
            : "Seguir"
      
      const btnFollowClassName = isFollowing
            ? "tw-followCard-btnFollow is-following"
            : "tw-followCard-btnFollow"

      const handleClick = () => {
            setIsFollowing(!isFollowing)
      }


      return (
            <article className='tw-followCard'>
                  <header className='tw-followCard-header'>
                        <img className='tw-followCard-image' alt="el avatar de microlink" src={`https://unavatar.io/${userName}`}/>
                        <div className='tw-followCard-nickContainer'>
                              <strong>{ children } </strong>
                              {/* children se refiere a todo lo que este dentro del elemento que se renderiza, tanto como un texto o un elemento, la prop children recibe eso */}
                              <span className='tw-followCard-user'> {formatUsername(  userName) } </span>
                        </div>
                  </header>

                  <aside>
                        {/* aqui le damos el condicional a la clase para que sea dinamico y elija el estilo dependiendo el estado de la prop */}
                        <button 
                        className={btnFollowClassName}
                        onClick={handleClick}> {text} </button>
                  </aside>
            </article>
      )
}