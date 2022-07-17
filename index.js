
// const { createStore } = require('redux')
// const INCREMENT = "INCREMENT";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";

// //state (state is an object)
// const initialiseCounterState = {
//     count: 0
// }


// //action
// const incrementCounter = () => {
//     return {
//         type: INCREMENT
//     }
// }
// const decrementCounter = () => {
//     return {
//         type: DECREMENT
//     }
// }
// const incrementByValue = (value) => {
//     return {
//         type: INCREMENT_BY_VALUE,
//         payload: value
//     }
// }
// const resetCounter = () => {
//     return {
//         type: RESET
//     }
// }


// //reducer

// const counterReducer = (state = initialiseCounterState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }
//         case RESET:
//             return {
//                 ...state,
//                 count: 0
//             }

//         case INCREMENT_BY_VALUE:
//             return {
//                 ...state,
//                 count: state.count + action.payload

//             }


//         default:
//             state
//     }
// }


// // store
// const store = createStore(counterReducer)

// store.subscribe(() => {
//     console.log(store.getState())
// })

// // store.dispatch(incrementCounter())
// // store.dispatch(resetCounter())
// // store.dispatch(decrementCounter())
// // store.dispatch(decrementCounter())
// // store.dispatch(decrementCounter())
// // store.dispatch(resetCounter())
// store.dispatch(incrementByValue(5))


// const nums = [2, 3, 4, 3, 3, 2, 1]

// nums.forEach(function (v) {
//     console.log(v)
// });

const { createStore } = require('redux')


const ADD_USER = "ADD_USER"

const userState = {
    count: 1,
    user: ["Al Amin Khan"]
}

const addingUSers = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const counterReducer = (state = userState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user: [...state.user, action.payload],
                count: state.count + 1

            }
    }

}

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addingUSers("Zabed Iqbal"))
store.dispatch(addingUSers("Mishal"))