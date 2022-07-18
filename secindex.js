const { createStore } = require('redux')
const { combineReducers } = require('redux')

const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

const GET_CART_ITEMS = "GET_CART_ITEMS"
const ADD_CART_ITEMS = "ADD_CART_ITEMS"

const initialProductState = {
    products: ["suger", "salt"],
    numberofProducts: 2,
}
const initialCartState = {
    products: ["oil"],
    numberofProducts: 1,
}

const getProduct = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
const getCartProduct = () => {
    return {
        type: GET_CART_ITEMS
    }
}

const addCartProduct = (product) => {
    return {
        type: ADD_CART_ITEMS,
        payload: product
    }
}

const productReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1
            }



        default:
            return state;
    }
}
const cartReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEMS:
            return {
                products: [...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1
            }



        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProduct())
store.dispatch(addProduct("coffe"))
store.dispatch(getCartProduct())
store.dispatch(addCartProduct("fish"))