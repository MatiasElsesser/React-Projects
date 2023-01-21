import './TwitterFollowCard.css'
export function TwitterFollowCard ({userName, name, isFollowing}) {
      return (
            <article className='tw-followCard'>
                  <header className='tw-followCard-header'>
                        <img className='tw-followCard-image' alt="el avatar de microlink" src={`https://unavatar.io/${userName}`}/>
                        <div className='tw-followCard-nickContainer'>
                              <strong> { name } </strong>
                              <span className='tw-followCard-user'> @{ userName } </span>
                        </div>
                  </header>

                  <aside>
                        <button className='tw-followCard-btnFollow'> Seguir </button>
                  </aside>
            </article>
      )
}