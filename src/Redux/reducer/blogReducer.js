import { ADDTOHISTORY, ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, REMOVEFROMHISTORY } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    history: []
}

const blogReducer = (state = initialState, action) => {

    const selectedBlog = state.history.find((blog) => blog._id === action.payload._id)
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

            if (selectedBlog) {
                const newBlogHistory = state.history.filter((blog) => blog._id != selectedBlog._id)

                return {
                    ...state,
                    history: [...newBlogHistory, selectedBlog]
                    // cart: [...newCart, selectedBlog]
                }
            }
            return {
                ...state,
                history: [...state.history, action.payload]
            }

        case REMOVEFROMHISTORY:
            return {
                ...state,
                history: state.history.filter((blog) => blog._id != action.payload._id)
            }


        default:
            return state
    }
}

export default blogReducer