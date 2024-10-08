const skillModel = require('../models/skillModel');

// Créer une compétence
const createSkill = (req, res) => {
  const { user_id, skill_name } = req.body;
  skillModel.createSkill(user_id, skill_name, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Compétence créée', skillId: result.id });
  });
};

// Récupérer toutes les compétences d'un utilisateur
const getSkillsByUser = (req, res) => {
  const { user_id } = req.params;
  skillModel.getSkillsByUser(user_id, (err, skills) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(skills);
  });
};

module.exports = { createSkill, getSkillsByUser };
