import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect } from 'react'
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter'



function App() {
  return (
    <div className="App">
      <section className="App-contest">
        <h1>App</h1>
        <Route component={ListOfGifs} path='/gif/:keyboard'></Route>
      </section>
    </div>
  );
}

export default App;
