const db = require('../config/db');


const createUser = (username, email, password, profileImage, callback) => {
    const query = `INSERT INTO users (username, email, password, image) VALUES (?, ?, ?, ?)`;
    db.run(query, [username, email, password, profileImage], function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { id: this.lastID });
    });
  };
  


const getUserByEmail = (email, callback) => {
  const query = `SELECT * FROM users WHERE email = ?`;
  db.get(query, [email], (err, user) => {
    if (err) {
      return callback(err);
    }
    callback(null, user);
  });
};

module.exports = { createUser, getUserByEmail };
