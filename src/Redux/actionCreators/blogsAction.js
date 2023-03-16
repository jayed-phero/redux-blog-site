const { GET_CONTENT, ADD_CONTENT, DELETE_CONTENT, ADDTOHISTORY, REMOVEFROMHISTORY } = require("../actionTypes/actionTypes")



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


export const removeFromHistory = (data) => {
    return {
        type: REMOVEFROMHISTORY,
        payload: data
    }
}