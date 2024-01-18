import './App.css'

const App = () => {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img alt="El avatar del usuario" src="https://unavatar.io/ptztdev" className='tw-followCard-avatar' />
        <div className='tw-followCard-info'>
          <strong >Tomas Millan</strong>
          <span className='tw-followCard-infoUserName'>@ptztdev</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}

export default App