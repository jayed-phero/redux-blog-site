const { ADD_TO_CART, REMOVE_RFOM_CART, GET_BLOGS, ADD_BLOG } = require("../actionTypes/actionTypes")

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

export const getBlogs = (data) => {
    return {
        type: GET_BLOGS,
        payload: data
    }
}

export const addBlog = (data) => {
    return {
        type: ADD_BLOG,
        payload: data
    }
}