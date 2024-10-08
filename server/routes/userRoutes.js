const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Endpoint pour créer un utilisateur
router.post('/', userController.createUser);

// Endpoint pour récupérer un utilisateur par email
router.get('/:email', userController.getUserByEmail);

module.exports = router;
