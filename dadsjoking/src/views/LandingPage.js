import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

class LandingPage extends React.Component {
    render() {
        return (
            <section className = 'landing-page'>
                <h1>Dad Jokes</h1>
                <h2>Welcome to Dad Jokes</h2>
                <Button outline color = 'secondary'>Sign Up!</Button>{' '}
                <Button outline color = 'secondary'>Log In</Button>{' '}
            </section>
        )
    }
}

export default LandingPage