const { createStore } = require('redux')

// reuiring const 
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"

// state 

const initialTodosState = {
    todos: [],
    isLoading: false,
    err: null
}
