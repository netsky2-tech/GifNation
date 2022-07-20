import './App.css'
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import { Route, Link } from 'wouter'
import logo from './logo-transparent.png'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <img className='App-logo' alt='logo GifNation' src={logo} />
        </Link>
        <Route component={ListOfGifs} path='/gif/:keyboard' />
      </section>
    </div>
  )
}
export default App
