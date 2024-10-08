const db = require('../config/db');

// Créer une compétence
const createSkill = (user_id, skill_name, callback) => {
  const sql = `INSERT INTO skills (user_id, skill_name) VALUES (?, ?)`;
  db.run(sql, [user_id, skill_name], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { id: this.lastID });
  });
};

// Récupérer toutes les compétences d'un utilisateur
const getSkillsByUser = (user_id, callback) => {
  const sql = `SELECT * FROM skills WHERE user_id = ?`;
  db.all(sql, [user_id], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

module.exports = { createSkill, getSkillsByUser };
