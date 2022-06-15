import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Route } from 'wouter'

function App () {
  return (
    <div className='App'>
      <section className='App-contest'>
        <h1>App</h1>
        <Route component={ListOfGifs} path='/gif/:keyboard' />
      </section>
    </div>
  )
}

export default App
