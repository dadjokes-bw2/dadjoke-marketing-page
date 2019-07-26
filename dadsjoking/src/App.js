import React from 'react';
import './App.css';
import {LandingPage, LoginPage, SignUpPage} from './views'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Route exact path = '/' component = {LandingPage} />
       <Route exact path = '/login' component = {LoginPage} />
       <Route exact path = '/signup' component = {SignUpPage} />
      </header>
    </div>
  );
}

export default App;
