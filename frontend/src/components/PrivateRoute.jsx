//frontend\src\components\PrivateRoute.jsx

import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ roleRequired }) => {
  const { authUser } = useContext(AuthContext);

  if (!authUser || (roleRequired && authUser.rol_id !== roleRequired)) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
