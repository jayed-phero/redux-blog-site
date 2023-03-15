import React from 'react';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div>
            <div class="w-full bg-cover h-[25rem] bannerImage" >
                <div class="px-5 flex items-end justify-center w-full h-full bg-gray-900/40">
                    <div class="text-center">
                        <p className='text-lg text-white'>Sura Alaq' 96:01</p>
                        <h1 class="text-3xl font-semibold text-white lg:text-4xl uppercase pb-7">Recite in the name of your Lord who created </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;