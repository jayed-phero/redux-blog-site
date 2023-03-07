import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddBlog from "../Pages/Dashboard/AddBlog/AddBlog";
import AllBlogs from "../Pages/Dashboard/AllBlogs/AllBlogs";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import BlogDetails from "../Pages/Home/Blogs/BlogDetails";
import Home from "../Pages/Home/Home/Home";
import ReadingHistory from "../Pages/ReadingHistory/ReadingHistory";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'readinghistory',
                element: <ReadingHistory />
            },
            {
                path: '/details/:id',
                loader: ({params}) => fetch(`${process.env.REACT_APP_API_URL}/blogdetails/${params.id}`),
                element: <BlogDetails />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/addblog',
                element: <AddBlog />
            },
            {
                path: '/dashboard/allblogs',
                element: <AllBlogs />
            }
        ]
    }
])