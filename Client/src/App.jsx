import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterForm';
import LoginPage from './pages/LoginForm';
import DashboardPage from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';  // Importer le composant PrivateRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />        {/* Page d'inscription par défaut */}
        <Route path="/login" element={<LoginPage />} />      {/* Page de connexion */}

        {/* Protéger la route du Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
