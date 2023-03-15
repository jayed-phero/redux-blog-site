import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Headernav = () => {
    const [isOpen, setOpen] = useState(false)
    const [nav, setNav] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        function activateNav() {
            let scrollPosition = window.pageYOffset
            if (scrollPosition > 200) {
                setNav(true)
            }
            else if (scrollPosition < 10) {
                setNav(false)
            }
        }
        window.addEventListener("scroll", activateNav)
    }, [])

    return (
        <div className={`border-t shadow-md w-full transition duration-200 z-50`}>
            <nav class="max-w-7xl mx-auto py-3 mx-auto px-5 xl:px-0 lg:flex lg:justify-center lg:items-center z-50">
                <div class="flex items-center justify-between md:hidden z-50">
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
                <div class={`absolute inset-x-0 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
                    <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                        <Link onClick={() => setOpen(!isOpen)} to='/' class="text-gray-700 transition-colors duration-300 transform lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500">Home</Link>
                        <a onClick={() => setOpen(!isOpen)} class="text-gray-700 transition-colors duration-300 transform lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">About</a>
                        <Link onClick={() => setOpen(!isOpen)} to='/readinghistory' class=" transition-colors duration-300 transform lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500 text-blue-500 font-semibold" >History</Link>
                        <Link class="text-gray-700 transition-colors duration-300 transform lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" >Contact</Link>
                    </div>

                    <Link onClick={() => setOpen(!isOpen)} to='/dashboard' class="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" >
                        Dashboard
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Headernav;