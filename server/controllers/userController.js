const userModel = require('../models/userModel');

// Créer un nouvel utilisateur
const createUser = (req, res) => {
  const { username, email, password } = req.body;
  userModel.createUser(username, email, password, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Utilisateur créé', userId: result.id });
  });
};

// Récupérer un utilisateur par email
const getUserByEmail = (req, res) => {
  const { email } = req.params;
  userModel.getUserByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user);
  });
};

module.exports = { createUser, getUserByEmail };
