import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoutes = (props) => {
    // return props.isLoggedIn ? props.children: <Navigate to="/login" />;
    const auth = props.isLoggedIn; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;