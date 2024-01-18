import { useState } from "react"

export function Card({ userName, name, isFollowing }) {
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClaseName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img alt="El avatar del usuario" src={`https://unavatar.io/${userName}`} className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong >{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClaseName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}