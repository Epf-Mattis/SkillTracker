const goalModel = require('../models/goalModel');


const createGoal = (req, res) => {
  const { user_id, skill_id, description, due_date } = req.body;
  goalModel.createGoal(user_id, skill_id, description, due_date, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Objectif créé', goalId: result.id });
  });
};


const getGoalsByUser = (req, res) => {
  const { user_id } = req.params;
  goalModel.getGoalsByUser(user_id, (err, goals) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(goals);
  });
};


const updateGoalStatus = (req, res) => {
  const { goal_id } = req.params;
  const { status } = req.body;
  goalModel.updateGoalStatus(goal_id, status, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};


const deleteGoal = (req, res) => {
  const { goal_id } = req.params;
  goalModel.deleteGoal(goal_id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

module.exports = { createGoal, getGoalsByUser, updateGoalStatus, deleteGoal };
