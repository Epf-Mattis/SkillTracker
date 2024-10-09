import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';  

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/users/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token); 
        navigate('/dashboard'); 
      })
      .catch(error => {
        setMessage('Erreur lors de la connexion.');
        console.error(error);
      });
  };

  return (
    <div className="form-container">  
      <form className="form" onSubmit={handleSubmit}>
        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </span>
        <span className="input-span">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </span>
        <span className="span"><a href="#">Forgot password?</a></span>
        <input className="submit" type="submit" value="Log in" />
        <span className="span">Don't have an account? <a href="/register">Sign up</a></span>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
