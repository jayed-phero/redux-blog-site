import React, { useEffect } from 'react';
import BlogRow from './BlogRow';
import { useDispatch, useSelector } from 'react-redux'
import getBlogsData from '../../../Redux/thunk/fetchBlogs';
import fetchBlogs from '../../../Redux/thunk/fetchBlogs';

const Blogs = () => {
    const dispatch = useDispatch()
    const blogs = useSelector((state) => state.blog.blogs)
    useEffect(() => {
        dispatch(fetchBlogs())
    }, [])

    console.log(blogs)
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-7xl xl:px-0 px-6 py-10 mx-auto">
                    {/* <div class="flex items-center justify-between">
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent posts </h1>

                        <button class="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div> */}

                    <hr class="my-8 border-gray-200 dark:border-gray-700" />

                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {
                            blogs.map((blog, i) =>
                                <BlogRow
                                    key={i}
                                    blog={blog}
                                />
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;