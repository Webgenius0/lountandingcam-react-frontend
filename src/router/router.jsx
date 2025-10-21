import { createBrowserRouter, Link } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/HomePage/Home";
import AuthLayouts from "../layouts/AuthLayouts";
import SignIn from "../pages/AuthPages/SignIn";


export const router = createBrowserRouter([
    {
        path:"*",
        element: <div className="text-center py-[120px] ">
           <Link to="/" className="border-2 border-purple-300 p-4 "> Go to home page</Link>
        </div>
    },
    {
        path: '/',
        Component: MainLayouts,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    },

        {
        path: '/auth',
        Component: AuthLayouts,
        children:[
            {
                path: "sign-in",
                Component: SignIn,
            },
          
        ]

    },
])