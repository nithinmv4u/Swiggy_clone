import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error'
import Footer from './components/Footer';
import Contact from './components/Contact';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login'
import Profile from './components/Profile';
import Shimmer from './components/ShimmerUI';

const Instamart = lazy(() => import('./components/Instamart'));

require('dotenv').config();

const App = () => {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>
                    },
                ]
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: '/instamart',
                element: (
                    <Suspense fallback={<Shimmer/>}>
                        <Instamart/>
                    </Suspense>
                ),
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} key={Math.random()}/>);