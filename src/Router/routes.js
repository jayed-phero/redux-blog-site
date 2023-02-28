import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
            }
        ]
    }
])