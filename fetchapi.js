const { default: axios } = require('axios')
const { createStore, applyMiddleware } = require('redux')
const { default: thunk } = require('redux-thunk')

// reuiring const 
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"
const URL = "https://jsonplaceholder.typicode.com/todos"
// state 

const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
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

// reducer 

const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:

            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:

            return {
                ...state,
                isLoading: false,
                todos: action.payload

            }
        case GET_TODOS_FAILED:

            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}
const fetchData = () => {
    return ((dispatch) => {
        dispatch(getTodos())
        axios.get(URL)
            .then(res => {
                const todos = res.data
                const titles = todos.map((todo) => todo.title)
                dispatch(successTodos(titles))
            })
            .catch(err => {
                const errM = (err.message)
                dispatch(failedTodos(errM))
            })
    })
}
// store 
const store = createStore(todosReducer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchData())
