import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToHistory } from '../../../Redux/actionCreators/blogsAction';

const BlogRow = ({ blog }) => {
    const dispatch = useDispatch()
    return (
        <Link className='z-10' onClick={() => dispatch(addToHistory(blog))} to={`/details/${blog?._id}`}>  <div>
            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 z-10" src={blog.image} alt="" />

            <div class="mt-8">
                <span class="text-blue-500 uppercase">{blog.category}</span>

                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    {blog.title.slice(0, 35)}
                </h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">
                    {blog.firstDetails.slice(0, 201)}
                </p>

                <div class="flex items-center justify-between mt-4">
                    <div>
                        <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                            John snow
                        </a>

                        <p class="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                    </div>

                    <Link to={`/details/${blog?._id}`} class="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                </div>

            </div>
        </div></Link>
    );
};

export default BlogRow;