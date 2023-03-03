import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { addContent } from "../actionCreators/blogsAction"


const postBlogData = (blogData) => {

    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_API_URL}/addblog`, blogData)
            .then(res => {
                console.log(res.data)
                dispatch(addContent({
                    ...blogData,
                    _id: res.data.insertedId
                }))

                if (res.data.acknowledged === true) {
                    toast.success("Blog Posted Successfully")
                }

            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default postBlogData