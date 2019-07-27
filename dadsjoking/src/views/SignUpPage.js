import React from 'react'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

class SignUpPage extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
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
        const {username, password, email} = this.state
    }

    render() {
        const {username, password, email} = this.state
        return (
            <Form>
                <FormGroup>
                    <Label for = 'email'>E-mail</Label>
                    <Input type = 'email' name = 'email' placeholder = 'someone@example.com' value = {email} onChange = {this.handleChanges} />
                </FormGroup>
                <FormGroup>
                    <Label for = 'username'>Username</Label>
                    <Input type = 'text' name = 'username' placeholder = 'Username' value = {username} onChange = {this.handleChanges} />
                </FormGroup>
                <FormGroup>
                    <Label for = 'password'>Password</Label>
                    <Input type = 'text' name = 'password' placeholder = 'Password' value = {password} onChange = {this.handleChanges} />
                </FormGroup>
                <Button>Login</Button>
            </Form>
        )
    }
}

export default SignUpPage