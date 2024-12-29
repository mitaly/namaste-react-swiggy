import React from 'react';
import ReactDOM from 'react-dom/client';

import Body from './src/Body';
import Footer from './src/Footer';
import Header from './src/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import AboutUs from './src/AboutUs';
import ErrorHandler from './src/ErrorHandler';
import Contact from './src/Contact';

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
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
]);

root.render(<RouterProvider router={router} />);