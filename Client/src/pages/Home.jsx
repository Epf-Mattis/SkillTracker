import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assurez-vous que le chemin est correct
import logoImage from '../images/logo.png'; // Assurez-vous que le chemin est correct

const Home = () => {
  return (
    <div className="home-container">
      {/* Barre de navigation */}
      <nav className="top-navigation">
        <Link to="/login">
          <button className="nav-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="nav-btn">Register</button>
        </Link>
        <Link to="/api">
          <button className="nav-btn">API</button>
        </Link>
      </nav>

      {/* Logo à gauche */}
      <div className="logo-section">
        <div className="logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
        <h1 className="main-title-left">SkillTracker</h1>
      </div>

      {/* Titre principal */}
      <div className="content">
        <h1 className="main-title">SkillTracker</h1>
        <p className="sub-title">
          the platform to track and improve your web developing skills 
        </p>

        <button className="discover-btn">Discover --------------</button>

        {/* Boutons Login et Register sous l'image */}
        <div className="login-register-btns">
          <Link to="/login">
            <button className="action-btn-login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="action-btn-register">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
