import { Card } from './components/Card'
import './App.css'

const users = [
  {
    userName: 'ptztdev',
    name: "Tomas Millan",
    initialIsFollowing: true
  },
  {
    userName: 'midudev',
    name: "Miguel Ángel Durán",
    initialIsFollowing: false
  },
  {
    userName: 'EvilAFM',
    name: "Alexelcapo",
    initialIsFollowing: true
  },
  {
    userName: 'betzerra',
    name: "Ezequiel Becerra",
    initialIsFollowing: true
  }
]

const App = () => {
  return (
    <div className='App'>
      {
        users.map(({ userName, name, initialIsFollowing }) => (
          < Card
            userName={userName}
            name={name}
            initialIsFollowing={initialIsFollowing}
            key={userName}
          />
        ))
      }
    </div>

  )
}

export default App