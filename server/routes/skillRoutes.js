const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// Endpoint pour créer une compétence
router.post('/', skillController.createSkill);

// Endpoint pour récupérer toutes les compétences d'un utilisateur
router.get('/:user_id', skillController.getSkillsByUser);

module.exports = router;
