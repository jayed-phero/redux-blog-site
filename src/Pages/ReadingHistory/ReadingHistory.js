import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromHistory } from '../../Redux/actionCreators/blogsAction';
const ReadingHistory = () => {
    const history = useSelector((state) => state.blog.history)
    console.log(history)
    const dispatch = useDispatch()
    return (
        <div className='max-w-3xl mx-auto my-10 px-5 xl:px-0'>
            <div class="lg:flex lg:items-center lg:-mx-6 bg-gray-100 rounded-3xl px-5 lg:px-0 py-10">
                <div class="lg:w-1/2 lg:mx-6">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl text-center lg:text-left">
                        See Reading History <br /> and read more
                    </h1>
                </div>

                <div class="mt-8 lg:mt-0 lg:w-1/2 lg:mx-6 flex items-center gap-3 flex-col">
                    {
                        history.length ?
                            history.map((history) =>
                                <div
                                    class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto">
                                    <div class="w-2 bg-gray-800 dark:bg-gray-900"></div>

                                    <div class="flex items-center px-2 py-3">
                                        <img class="object-cover w-16 h-10 rounded" alt="User avatar" src={history?.image} />

                                        <div class="mx-3">
                                            <p class="text-gray-600 dark:text-gray-200">{history.title.slice(0, 21)}

                                                <Link
                                                    to={`/details/${history._id}`}
                                                    class="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline"
                                                    onClick={() => dispatch(removeFromHistory(history))}
                                                >  Read Details</Link>.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            <div className='p-5 text-center text-red-500 bg-red-100 rounded-3xl'>
                                <h3>Reading history is empty</h3>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ReadingHistory;