import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    path: string;
    element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
    const isUserDataAvailable = () => {
        const userData = localStorage.getItem('userData');
        return !!userData;
    };

    return isUserDataAvailable() ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/second" replace={true} />
    );
};

export default PrivateRoute;
