const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Créer un quiz
router.post('/', quizController.createQuiz);

// Soumettre un quiz
router.post('/submit', quizController.submitQuiz);

// Récupérer les quiz d'un utilisateur
router.get('/:user_id', quizController.getQuizByUser);

module.exports = router;
