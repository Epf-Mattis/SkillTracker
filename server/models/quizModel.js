const db = require('../config/db');


const createQuiz = (user_id, quiz_name, callback) => {
  const sql = `INSERT INTO quiz (user_id, quiz_name, date_taken) VALUES (?, ?, DATE('now'))`;
  db.run(sql, [user_id, quiz_name], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { id: this.lastID });
  });
};


const submitQuiz = (quiz_id, score, callback) => {
  const sql = `UPDATE quiz SET score = ? WHERE id = ?`;
  db.run(sql, [score, quiz_id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { message: 'Score enregistré' });
  });
};


const getQuizByUser = (user_id, callback) => {
  const sql = `SELECT * FROM quiz WHERE user_id = ?`;
  db.all(sql, [user_id], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

module.exports = { createQuiz, submitQuiz, getQuizByUser };
