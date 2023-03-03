import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Headernav = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='border-t shadow-md'>
            <nav class="max-w-7xl mx-auto py-3 mx-auto lg:flex lg:justify-center lg:items-center">
                <div class="flex items-center justify-between md:hidden">
                    <div className="">
                        <a className="font-bold normal-case sm:text-4xl text-2xl lg:text-7xl logo">LetsIqro</a>
                    </div>

                    {/* <!-- Mobile menu button --> */}
                    <div class="flex lg:hidden">
                        <button onClick={() => setOpen(!isOpen)} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">

                            {
                                isOpen ?
                                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    :
                                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                            }


                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div class={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
                    <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                        <a class="text-gray-700 transition-colors duration-300 transform lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Home</a>
                        <a class="text-gray-700 transition-colors duration-300 transform lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Components</a>
                        <a class="text-gray-700 transition-colors duration-300 transform lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Pricing</a>
                        <a class="text-gray-700 transition-colors duration-300 transform lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Contact</a>
                    </div>

                    <Link to='/dashboard' class="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" >
                        Dashboard
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Headernav;