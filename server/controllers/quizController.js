const quizModel = require('../models/quizModel');


const createQuiz = (req, res) => {
  const { user_id, quiz_name } = req.body;
  quizModel.createQuiz(user_id, quiz_name, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Quiz créé', quizId: result.id });
  });
};


const submitQuiz = (req, res) => {
  const { quiz_id, score } = req.body;
  quizModel.submitQuiz(quiz_id, score, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};


const getQuizByUser = (req, res) => {
  const { user_id } = req.params;
  quizModel.getQuizByUser(user_id, (err, quizzes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(quizzes);
  });
};

module.exports = { createQuiz, submitQuiz, getQuizByUser };
