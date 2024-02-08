import { useState } from 'react'
/*eslint-disable-next-line */
export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
  const imgSrc = `https://unavatar.io/${userName}`

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="imagen de perfil"
          src={imgSrc}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          {text}
        </button>
      </aside>
    </article>
  )
}
