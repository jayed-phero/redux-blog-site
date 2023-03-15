import React, { useEffect } from 'react';
import BlogRow from './BlogRow';
import { useDispatch, useSelector } from 'react-redux'
import getBlogsData from '../../../Redux/thunk/fetchBlogs';
import fetchBlogs from '../../../Redux/thunk/fetchBlogs';
import { Link } from 'react-router-dom';
import { toggleCategory, toggleType } from '../../../Redux/actionCreators/filterActions';

const Blogs = () => {
    const dispatch = useDispatch()
    const rootData = useSelector((state) => state)
    console.log(rootData)
    const { blog, filter } = rootData;
    const { blogs } = blog
    const { filters } = filter
    const {category} = filters
    useEffect(() => {
        dispatch(fetchBlogs())
    }, [])

    console.log(blogs)

    const categories = [
        {
            name: "Solat",
            category: "solat"
        },
        {
            name: "Romadan",
            category: "romadan"
        },
        {
            name: "Zakat",
            category: "zakat"
        }
    ]

    // fetch data by filter action 
    let content;

    if (blogs.length) {
        content = blogs?.map((blog, i) =>
            <BlogRow
                key={i}
                blog={blog}
            />
        )
    }

    if (blogs.length && (filters.type || category.length)) {
        content =  blogs
        .filter((blog) => {
            if(category.length){
                return category.includes(blog.category)
            }
            return blog
        })
        // .filter(blog => blog.type === )
        .map((blog, i) => <BlogRow  key={i} blog={blog} />
        )
    }

    const activeClass = 'text-blue-500 font-semibold'
    const typeActiveClass = 'text-white bg-blue-500 font-semibold'
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-7xl xl:px-0 px-6 py-10 mx-auto">
                    <hr class="my-8 border-gray-200 dark:border-gray-700" />

                    <div className='flex items-start flex-col md:flex-row gap-11 relative'>
                        <div className='flex-1'>
                            <div class="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
                                {
                                    content
                                }
                            </div>
                        </div>
                        <div className='w-full md:w-80 lg:w-96  h-screen lg:sticky top-9'>
                            <div className='border bg-blue-100 px-5 py-7'>
                                <label className='text-xl font-semibold text-gray-700 pb-7 text-center uppercase'>Short by Uploaded Method</label>
                                <label class="text-gray-700 dark:text-gray-200" for="emailAddress"></label>
                                <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                >
                                    <option>Select</option>
                                    <option selected value='firstupload'>First Upload</option>
                                    <option value='lastupload'>Last Upload</option>
                                </select>
                            </div>
                            <div className='px-5 py-9 border mt-9 '>
                                <h3 className='text-xl font-semibold text-gray-700 pb-7 text-center uppercase'>Categorries</h3>
                                <div className='flex flex-col '>
                                    {
                                        categories.map((data, i) =>
                                            <Link
                                                key={i}
                                                className={`text-md border-b border-gray-300 py-3 transition duration-200 hover:text-blue-500  ${filters.category.includes(data.category) ? activeClass : null}`}
                                                onClick={() => dispatch(toggleCategory(data.category))}
                                            >{data.name}</Link>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='border bg-blue-100 mt-9 px-5 py-7'>
                                <h3 className='text-xl font-semibold text-gray-700 pb-7 text-center uppercase'>Content Type</h3>
                                <div className='flex items-center gap-5'>
                                    <Link
                                        className={` border-2 rounded px-5 py-2 text-gray-600 border-blue-500 ${filters.type.includes("importance") ? typeActiveClass : null}`}
                                        onClick={() => dispatch(toggleType("importance"))}
                                    >Importance</Link>
                                    <Link
                                        className={` border-2 rounded px-5 py-2 text-gray-600 border-blue-500 ${filters.type.includes("masyala") ? typeActiveClass : null}`}
                                        onClick={() => dispatch(toggleType("masyala"))}
                                    >Masyala</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Blogs;