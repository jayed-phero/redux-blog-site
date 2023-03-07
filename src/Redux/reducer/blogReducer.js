import { ADDTOHISTORY, ADD_CONTENT, DELETE_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    history: []
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                blogs: action.payload
            }
        case ADD_CONTENT:
            return {
                ...state,
                blogs: action.payload
            }

        case DELETE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            }

        case ADDTOHISTORY:
            return {
                ...state,
                history: action.payload
            }


        default:
            return state
    }
}

export default blogReducer