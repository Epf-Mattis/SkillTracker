import React, { useState } from 'react';
import axios from 'axios';

const AddSkillForm = () => {
  const [skillName, setSkillName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios.post('/api/skills', {
      user_id: 1, 
      skill_name: skillName,
    })
    .then(response => {
      console.log("Compétence ajoutée :", response.data);
      setSkillName(''); 
    })
    .catch(error => {
      console.error("Erreur lors de l'ajout de la compétence :", error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="skill">Ajouter une compétence :</label>
      <input
        type="text"
        id="skill"
        value={skillName}
        onChange={(e) => setSkillName(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddSkillForm;
