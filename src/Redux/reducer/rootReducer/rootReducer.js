import { combineReducers } from "redux";
import blogReducer from "../blogReducer";
import blogsReducer from "../blogsReducer";
import { filterReducer } from "../filterReducer";

const rootReducer = combineReducers({
    blog: blogReducer,
    filter: filterReducer
})

export default rootReducer;