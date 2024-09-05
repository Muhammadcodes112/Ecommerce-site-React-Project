import React from 'react'; 
import { Navigate } from 'react-router-dom'; 
// import { useAuth } from '../context/AuthContext'; 
import { useAuth } from './context/ac' 
 
function ProtectedRoutes({ children }) { 
  const { currentUser } = useAuth(); 
 
  if (!currentUser) { 
    return <Navigate to="/signin" />; 
  } 
 
  return children; 
} 
 
export default ProtectedRoutes;