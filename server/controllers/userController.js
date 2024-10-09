const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');


const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const profileImage = req.file ? req.file.path : null;  
  
    try {
      
      const hashedPassword = await bcrypt.hash(password, 10);
  
      
      userModel.createUser(username, email, hashedPassword, profileImage, (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Utilisateur créé', userId: result.id });
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


const loginUser = (req, res) => {
  const { email, password } = req.body;

  
  userModel.getUserByEmail(email, async (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    
    const token = jwt.sign({ id: user.id, email: user.email }, 'SECRET_KEY', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login réussi', token });
  });
};

module.exports = { registerUser, loginUser };
