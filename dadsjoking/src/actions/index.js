import axios from 'axios'

//Sign-up action
export const SIGN_UP = 'SIGN_UP'  
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'

//Log-in action
export const LOG_IN = 'LOG_IN'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'

//Get public jokes
export const GET_PUBLIC_JOKES = 'GET_PUBLIC_JOKES'
export const GET_PUBLIC_JOKES_FAILED = 'GET_PUBLIC_JOKES_FAILED'
export const GET_PUBLIC_JOKES_SUCCESS = 'GET_PUBLIC_JOKES_SUCCESS'

//Get private jokes
export const GET_PRIVATE_JOKES = 'GET_PRIVATE_JOKES'
export const GET_PRIVATE_JOKES_FAILED = 'GET_PRIVATE_JOKES_FAILED'
export const GET_PRIVATE_JOKES_SUCCESS = 'GET_PRIVATE_JOKES_SUCCESS'

//Add Joke
export const ADD_PUBLIC_JOKE = 'ADD_PUBLIC_JOKE'
export const ADD_PUBLIC_JOKE_SUCCESS = 'ADD_PUBLIC_JOKE_SUCCESS'
export const ADD_PUBLIC_JOKE_FAILED = 'ADD_PUBLIC_JOKE_FAILED'

export const ADD_PRIVATE_JOKE = 'ADD_PRIVATE_JOKE'
export const ADD_PRIVATE_JOKE_SUCCESS = 'ADD_PRIVATE_JOKE_SUCCESS'
export const ADD_PRIVATE_JOKE_FAILED = 'ADD_PRIVATE_JOKE_FAILED'

//Edit Joke
export const EDIT_PRIVATE_JOKE = 'EDIT_PRIVATE_JOKE'
export const EDIT_PRIVATE_JOKE_SUCCESS = 'EDIT_PRIVATE_JOKE_SUCCESS'
export const EDIT_PRIVATE_JOKE_FAILED = 'EDIT_PRIVATE_JOKE_FAILED'

export function signUp(user, pass) {
    return dispatch => {
        dispatch({type:SIGN_UP})

        return axios.post("https://backend-dadjokes.herokuapp.com/api/auth/register", {user, pass})
            .then((res) => {
                console.log(res)
                dispatch({type: SIGN_UP_SUCCESS})
            })
            .catch((err) => {
                console.log(err)
                dispatch({type: SIGN_UP_FAILED})
            })
    }
}

export function login(user, pass) {
    return dispatch => {
        dispatch({type:LOG_IN})

        return axios.post("https://backend-dadjokes.herokuapp.com/api/auth/login", {user, pass})
            .then((res) => {
                console.log(res)
                dispatch({type: LOG_IN_SUCCESS})
            })
            .catch((err) => {
                console.log(err)
                dispatch({type: LOG_IN_FAILED})
            })
    }
}

export function getPublicJokes() {

}

export function getPrivateJokes() {

}

export function addPublicJoke(joke) {

}

export function addPrivateJoke(joke) {

}

export function editPublicJoke(joke) {

}