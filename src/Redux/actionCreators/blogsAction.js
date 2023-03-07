const { ADD_TO_CART, REMOVE_RFOM_CART, GET_BLOGS, ADD_BLOG, GET_CONTENT, ADD_CONTENT, DELETE_CONTENT, ADDTOHISTORY } = require("../actionTypes/actionTypes")

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

export const getContent = (data) => {
    return {
        type: GET_CONTENT,
        payload: data
    }
}

export const addContent = (data) => {
    return {
        type: ADD_CONTENT,
        payload: data
    }
}


export const deleteContent = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}


export const addToHistory = (data) => {
    return {
        type: ADDTOHISTORY,
        payload: data
    }
}