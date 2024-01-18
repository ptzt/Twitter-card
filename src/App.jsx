import { Card } from './components/Card'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Card userName={'ptztdev'} name={"Tomas Millan"} />
      <Card userName={'midudev'} name={"Miguel Ángel Durán"} />
      <Card userName={'EvilAFM'} name={"Alexelcapo"} />
      <Card userName={'betzerra'} name={"Ezequiel"} />
    </div>

  )
}

export default App