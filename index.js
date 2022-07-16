
const { createStore } = require('redux')
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//state (state is an object)
const initialiseCounterState = {
    count: 0
}


//action
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
const resetCounter = () => {
    return {
        type: RESET
    }
}


//reducer

const counterReducer = (state = initialiseCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        case RESET:
            return {
                count: 0
            }


        default:
            state
    }
}


// store 
const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounter())
store.dispatch(resetCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())