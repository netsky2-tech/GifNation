import './App.css'
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import Detail from './components/Detail/Detail'
import Home from './components/Home/Home'
import { Route, Link } from 'wouter'
import logo from './logo-transparent.png'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <img className='App-logo' alt='logo GifNation' src={logo} />
        </Link>
        <Route component={Home} path='/' />
        <Route component={ListOfGifs} path='/search/:keyboard' />
        <Route component={Detail} path='/gif/:id' />
      </section>
    </div>
  )
}
export default App
