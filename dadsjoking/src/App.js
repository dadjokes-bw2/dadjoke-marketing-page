import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {LandingPage, LoginPage, SignUpPage, PublicJokes} from './views'
import {Route} from 'react-router-dom'
import {getPublicJokes} from './actions/index'


class App extends React.Component {
  componentDidMount() {
    this.props.getPublicJokes()
}
  render(){
    return (
    <div className="App">
      <header className="App-header">
      <Route exact path = '/' component = {LandingPage} />
      <Route exact path = '/login' component = {LoginPage} />
      <Route exact path = '/signup' component = {SignUpPage} />
      <Route path = '/publicJokes' component = {PublicJokes} />
      </header>
    </div>
  );}
}

const mapDispatchToProps = {
  getPublicJokes
}

export default connect(null, mapDispatchToProps)(App)
