import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext'; 

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth(); 

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
