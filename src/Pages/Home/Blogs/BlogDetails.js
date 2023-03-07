import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ScrollToTop from '../../../hooks/ScrollToTop';

const BlogDetails = () => {
    const blogData = useLoaderData()
    console.log(blogData)
    const { title, image, firstDetails, middleDitails, lastDetails } = blogData;
    return (
        <div className='max-w-7xl mx-auto px-5 xl:px-0 py-7 '>
            <ScrollToTop/>
            <div className='flex items-start flex-col md:flex-row gap-9'>
                <div className='flex-1'>
                    <img src={image}
                        className='w-full h-54 lg:h-[500px]'
                    />

                    <div className='py-7'>
                        <h2 class="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white pb-5">
                            {title}
                        </h2>

                        <p className='pb-5 '>{firstDetails}</p>
                        <p className='pb-5 '>{middleDitails}</p>
                        <p className='pb-5 '>{lastDetails}</p>
                    </div>
                </div>
                <div className='lg:w-96 w-full'>
                    <div className='p-5 border-2'>
                        <h3 className='text-2xl text-center pb-5'>About Me</h3>
                        <img src='https://images.unsplash.com/photo-1586767003402-8ade266deb64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlzbGFtaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className='w-full h-36' />
                        <p className='text-sm text-gray-400 py-5'>adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis.</p>
                    </div>
                    <div class="container p-5 my-7 border  bg-gray-900 ">
                        <h2 class="text-2xl font-semibold tracking-tight text-white text-center">
                            Join us and get the update
                        </h2>

                        <div class="mt-8 ">
                            <div class="flex flex-col space-y-3">
                                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-200  sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" />

                                <button class="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    Subscribe
                                </button>
                            </div>

                            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 text-center max-w-32 w-2/3 mx-auto">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</p>
                        </div>
                    </div>
                    <div className='p-5 border-2 '>
                        <h3 className='text-center text-xl pb-5'>Tags</h3>
                        <div className='grid grid-cols-3 gap-2'>
                            {
                                [1, 2, 3, 4, 5].map(i =>
                                    <div className='bg-gray-100 border px-3 py-1.5 text-sm text-center'>
                                        Islamic
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;