import React from 'react';
import { Navigate } from 'react-router-dom';

// Composant pour protéger les routes
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');  // Vérifie si le token JWT est présent dans le localStorage

  return isAuthenticated ? children : <Navigate to="/login" />;  // Redirige vers la page de login si pas authentifié
};

export default PrivateRoute;
