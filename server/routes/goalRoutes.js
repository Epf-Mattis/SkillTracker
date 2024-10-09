const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goalController');

// Ajouter un objectif
router.post('/', goalController.createGoal);

// Récupérer les objectifs d'un utilisateur
router.get('/:user_id', goalController.getGoalsByUser);

// Mettre à jour le statut d'un objectif
router.put('/:goal_id', goalController.updateGoalStatus);

// Supprimer un objectif
router.delete('/:goal_id', goalController.deleteGoal);

module.exports = router;
