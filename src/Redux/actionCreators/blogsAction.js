const { ADD_TO_CART, REMOVE_RFOM_CART } = require("../actionTypes/actionTypes")

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_RFOM_CART,
        payload: data
    }
}