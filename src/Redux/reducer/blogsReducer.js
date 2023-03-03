import { ADD_BLOG, ADD_TO_CART, GET_BLOGS, REMOVE_RFOM_CART } from "../actionTypes/actionTypes";

const initialState = {
    text: "TEST",
    cart: [],
    blogs: []
}

const blogsReducer = (state = initialState, action) => {

    // console.log(action.payload)
    const selectedBlog = state.cart.find((blog) => blog._id == action.payload._id)

    // console.log(selectedBlog)
    // console.log(selectedBlog)


    switch (action.type) {
        case GET_BLOGS: 
        return {
            ...state,
            blogs: action.payload
        }

        case ADD_BLOG: 
        return {
            ...state,
            
        }
        case ADD_TO_CART:
            if (selectedBlog) {

                const newCart = state.cart.filter(blog => blog._id !== selectedBlog._id)

                selectedBlog.quantity = selectedBlog.quantity + 1;
                return {
                    ...state,
                    cart: [...newCart, selectedBlog]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_RFOM_CART:
            if (selectedBlog.quantity > 1) {

                const newCart = state.cart.filter(blog => blog._id !== selectedBlog._id)

                selectedBlog.quantity = selectedBlog.quantity - 1;
                return {
                    ...state,
                    cart: [...newCart, selectedBlog]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(blog => blog._id != action.payload._id)
            }


        default:
            return state;
    }
}

export default blogsReducer;