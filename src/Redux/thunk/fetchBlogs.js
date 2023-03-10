import axios from "axios"
import { getBlogs, getContent } from "../actionCreators/blogsAction"

const fetchBlogs = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API_URL}/blogs`)
        .then(res => {
            console.log(res.data)
            dispatch(getContent(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default fetchBlogs;