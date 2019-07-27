import React from 'react'
import signUp from '../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

class SignUpPage extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
          });
    }

    submit = e => {
        e.preventDefault()
        const {username, password} = this.state
    }

    render() {
        const {username, password} = this.state
        return (
            <Form>
                <FormGroup>
                    <Label for = 'username'>Username</Label>
                    <Input type = 'text' name = 'username' placeholder = 'Username' value = {username} onChange = {this.handleChanges} />
                </FormGroup>
                <FormGroup>
                    <Label for = 'password'>Password</Label>
                    <Input type = 'text' name = 'password' placeholder = 'Password' value = {password} onChange = {this.handleChanges} />
                </FormGroup>
                <Button>Sign Up!</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
})

const mapDispatchToProps = {
    signUp
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SignUpPage))