import axios from "axios"
import { deleteContent } from "../actionCreators/blogsAction"

const deleteBlogData = (id) => {
    return (dispatch) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/id`)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    dispatch(deleteContent(id))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default deleteBlogData;