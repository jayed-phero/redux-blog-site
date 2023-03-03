import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';
import Spinner from '../Pages/Shared/Spinner/Spinner';

const DashboardLayout = () => {
    return (
        <div>
            <div className='md:flex relative min-h-screen'>
                <>
                    {/* <DashboardSidebar /> */}
                    <Sidebar />
                    <div className='flex-1 md:ml-64'>
                        <div className='p-5'>
                            <Outlet />
                        </div>
                    </div>
                </>
                {/* {loading ? (
                    <Spinner />
                ) : (
                   
                )} */}
            </div>
        </div>
    );
};

export default DashboardLayout;