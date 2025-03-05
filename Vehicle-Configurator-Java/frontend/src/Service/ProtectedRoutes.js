import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
const ProtectedRoute = ({ element }) => {
  const token = sessionStorage.getItem('authToken');

  if (!token) {
    return <Navigate to="/LoginPage" />;
  }

  try {
    const decoded = jwtDecode(token);
    if (decoded.exp * 1000 < Date.now()) {
      sessionStorage.removeItem('authToken'); // Remove expired token
      return <Navigate to="/LoginPage" />;
    }
  } catch (err) {
    sessionStorage.removeItem('authToken'); // Handle invalid token
    return <Navigate to="/LoginPage" />;
  }

  return element;
};

export default ProtectedRoute;
