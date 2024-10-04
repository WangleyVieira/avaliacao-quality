import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem('token');
  console.log(token);
  

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};
