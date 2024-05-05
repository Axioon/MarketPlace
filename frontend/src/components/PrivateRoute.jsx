import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children, roleRequired }) {
    const location = useLocation();
    const userRole = 1; // Esto debería provenir de algún contexto o autenticación de estado

    if (userRole !== roleRequired) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
}

export default PrivateRoute;
