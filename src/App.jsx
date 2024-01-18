import { Card } from './components/Card'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Card userName={'ptztdev'} name={"Tomas Millan"} />
      <Card userName={'midudev'} name={"Miguel Angel Duran"} />
    </div>

  )
}

export default App