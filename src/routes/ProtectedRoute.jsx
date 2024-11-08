import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useAuth(); // Get the token from the AuthContext

  // If there is no token, user is not authenticated, so redirect to login
  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If the user is authenticated, render the protected route
  return children;
};

export default ProtectedRoute;
