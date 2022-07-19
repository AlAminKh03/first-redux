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

// action 

const getTodos = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const successTodos = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
const failedTodos = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}
