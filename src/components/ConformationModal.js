import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContent } from '../Redux/actionCreators/blogsAction';
import deleteBlogData from '../Redux/thunk/deleteBlog';

const ConformationModal = ({ blogData, setBlogData }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteBlogData(blogData._id))
        toast.success("Blog Deleted Successfully")
        setBlogData(null)
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label  htmlFor="my-modal-6" class="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-green-600 rounded-lg lg:mt-0 hover:bg-green-500 lg:w-auto">Cancel</label>
                        <label onClick={handleDelete} class="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-red-600 rounded-lg lg:mt-0 hover:bg-red-500 lg:w-auto" href="#">
                            Delete
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConformationModal;