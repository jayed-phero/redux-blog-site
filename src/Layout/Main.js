import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Headernav from '../Pages/Shared/HeaderNav/Headernav';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Headernav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;