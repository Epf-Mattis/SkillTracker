import React, { useState } from 'react';
import axios from 'axios';

const AddGoalForm = () => {
  const [goalDescription, setGoalDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios.post('/api/goals', {
      user_id: 1,  
      skill_id: 1, 
      description: goalDescription,
      due_date: dueDate,
    })
    .then(response => {
      console.log("Objectif ajouté :", response.data);
      setGoalDescription('');  
      setDueDate('');
    })
    .catch(error => {
      console.error("Erreur lors de l'ajout de l'objectif :", error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Description de l'objectif :</label>
      <input
        type="text"
        id="description"
        value={goalDescription}
        onChange={(e) => setGoalDescription(e.target.value)}
      />
      <label htmlFor="dueDate">Date limite :</label>
      <input
        type="date"
        id="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddGoalForm;
