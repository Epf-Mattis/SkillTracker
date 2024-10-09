const db = require('../config/db');


const createGoal = (user_id, skill_id, description, due_date, callback) => {
  const sql = `INSERT INTO goals (user_id, skill_id, description, due_date) VALUES (?, ?, ?, ?)`;
  db.run(sql, [user_id, skill_id, description, due_date], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { id: this.lastID });
  });
};


const getGoalsByUser = (user_id, callback) => {
  const sql = `SELECT * FROM goals WHERE user_id = ?`;
  db.all(sql, [user_id], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};


const updateGoalStatus = (goal_id, status, callback) => {
  const sql = `UPDATE goals SET status = ? WHERE id = ?`;
  db.run(sql, [status, goal_id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { message: 'Objectif mis à jour' });
  });
};


const deleteGoal = (goal_id, callback) => {
  const sql = `DELETE FROM goals WHERE id = ?`;
  db.run(sql, [goal_id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { message: 'Objectif supprimé' });
  });
};

module.exports = { createGoal, getGoalsByUser, updateGoalStatus, deleteGoal };
