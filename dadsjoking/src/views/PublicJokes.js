import React from 'react'
import {connect} from 'react-redux'
import {getPublicJokes} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {
    Card, CardBody, CardText
} from 'reactstrap'
import NavBar from '../components/NavBar'

function PublicJokes(props) {
    const {isLoading, errorMessage, jokes} = props

    if (isLoading) {
        return <p>Loading Jokes...</p>
    }

    
    
        return (
            <section className = 'public-jokes'>
                <NavBar />
                <h2>Public Jokes</h2>
                {jokes.map((joke) => {
                    return (
                        <Card>
                            <CardBody>
                                <CardText>{joke.joke}</CardText>
                            </CardBody>
                            
                        </Card>
                    )
                })}
            </section>
        )
    
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        jokes: state.jokes
    }
}

const mapDispatchToProps = {
    getPublicJokes
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PublicJokes))