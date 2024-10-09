import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import AddGoalForm from './AddGoalForm';
import AddSkillForm from './AddSkillForm';

const Dashboard = () => {
  const [skills, setSkills] = useState([]);  
  const navigate = useNavigate();  

  useEffect(() => {
    axios.get('/api/skills/1')
      .then(response => {
        const skillsData = Array.isArray(response.data) ? response.data : [];
        setSkills(skillsData);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des compétences :", error);
      });
  }, []);

  
  const handleLogout = () => {
    localStorage.removeItem('token');  
    navigate('/login');  
  };

  return (
    <div>
      <div>
        <AddGoalForm />
        <AddSkillForm />
      </div>
      <h1>Mes Compétences</h1>
      <ul>
        {skills.length > 0 ? (
          skills.map(skill => (
            <li key={skill.id}>
              {skill.skill_name} - Progression : {skill.progress}%
            </li>
          ))
        ) : (
          <p>Aucune compétence disponible.</p>
        )}
      </ul>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Dashboard;
