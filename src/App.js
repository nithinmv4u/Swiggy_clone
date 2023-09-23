import React, { lazy, Suspense, useState } from 'react'
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
import UserContext from './utils/UserContext';
import useOnline from './utils/useOnline';

const Instamart = lazy(() => import('./components/Instamart'));

require('dotenv').config();

const App = () => {

    /** logged in data from api */
    const [user, setUser] = useState({
        name: "Customer",
        email: "customer@gmail.com",
    })
    const [isOnline, color] = useOnline() ? ["online", "green"] : ["offline", "red"];
    
    return (
        <UserContext.Provider value={{
            user:user,
            status:[isOnline, color],
            setUser: setUser,
        }}>
            <HeaderComponent/>
            <Outlet/>
            <Footer/>
        </UserContext.Provider>
        
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