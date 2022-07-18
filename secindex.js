const { createStore } = require('redux')

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

const productReducer = (state = initialProductState, action) => {
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
            state;
    }
}

const store = createStore(productReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProduct())