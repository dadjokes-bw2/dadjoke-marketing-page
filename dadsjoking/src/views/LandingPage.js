import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import {getPublicJokes} from '../actions/index'


class LandingPage extends React.Component {
   
    render() {
        return (
            <section className = 'landing-page'>
                <h1>Dad Jokes</h1>
                <h2>Welcome to Dad Jokes</h2>
                <Link to = 'publicJokes'><Button outline color = 'primary'>Public Jokes!</Button></Link><br/>
                <Link to = '/signup'><Button outline color = 'secondary'>Sign Up!</Button>{' '}</Link>
                <Link to = '/login'><Button outline color = 'secondary'>Log In</Button>{' '}</Link>
            </section>
        )
    }
}

const mapDispatchToProps = {
    getPublicJokes
}

export default connect(null, mapDispatchToProps)(LandingPage)