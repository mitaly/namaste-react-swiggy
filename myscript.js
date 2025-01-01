import React from 'react';
import ReactDOM from 'react-dom/client';

import Body from './src/Body';
import Footer from './src/Footer';
import Header from './src/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import AboutUs from './src/AboutUs';
import ErrorHandler from './src/ErrorHandler';
import Contact from './src/Contact';
import RestaurantMenu from './src/RestaurantMenu';
import ProfileClass from './src/ProfileClass';

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <>
            <Header />
            <hr></hr>
            <Outlet />
            <hr></hr>
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorHandler />,
        children: [
            {path: '/',
                element: <Body />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />,
                children: [
                    // {
                    //     path: 'profile',
                    //     element: <ProfileClass />
                    // }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:id',
                element: <RestaurantMenu />
            }
        ]
    }
]);

root.render(<RouterProvider router={router} />);