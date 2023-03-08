import React from 'react';
import { useSelector } from 'react-redux';
import Blogs from '../Blogs/Blogs';
import HomeBanner from '../HomeBanner/HomeBanner';
const Home = () => {
    const state = useSelector((state) => state)
    console.log(state)
    return (
        <div>
            <HomeBanner />
            <Blogs />
        </div>
    );
};

export default Home;