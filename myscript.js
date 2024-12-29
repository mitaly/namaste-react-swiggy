import React from 'react';
import ReactDOM from 'react-dom/client';

import Body from './src/Body';
import Footer from './src/Footer';
import Header from './src/Header';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutUs from './src/AboutUs';
import ErrorHandler from './src/ErrorHandler';
const root = ReactDOM.createRoot(document.getElementById("root"));


const App = () => {

    return (
        <>
            <Header />
            <hr></hr>
            <Body />
            <hr></hr>
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorHandler />
    },
    {
        path: '/aboutUs',
        element: <AboutUs />
    }
]);

root.render(<RouterProvider router={router} />);