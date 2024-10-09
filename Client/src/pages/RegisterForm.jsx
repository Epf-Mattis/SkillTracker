import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);  
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();  
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profileImage', profileImage);  

    axios.post('/api/users/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        setMessage('Inscription réussie !');
      })
      .catch(error => {
        setMessage('Erreur lors de l\'inscription.');
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <span className="input-span">
          <label htmlFor="username" className="label">Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </span>
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
          <label htmlFor="password" className="label">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </span>
        <span className="input-span">
          <label htmlFor="profileImage" className="label">Photo de profil</label>
          <input
            type="file"
            name="profileImage"
            id="profileImage"
            onChange={handleImageChange}  
            accept="image/*"
          />
        </span>
        <input className="submit" type="submit" value="S'inscrire" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterForm;
