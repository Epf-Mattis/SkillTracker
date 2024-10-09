const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./skilltracker.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Base de données SQLite créée.');
    createTables();
  }
});

function createTables() {
  // Table des utilisateurs

  db.run(`
    ALTER TABLE users
    ADD COLUMN image TEXT;
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      image TEXT  -- Ajout de la colonne pour l'image de profil
    );
`);

  // Table des compétences
  db.run(`
    CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      skill_name TEXT NOT NULL,
      level TEXT CHECK(level IN ('Débutant', 'Intermédiaire', 'Avancé')) DEFAULT 'Débutant',
      progress INTEGER DEFAULT 0,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  // Table des objectifs
  db.run(`
    CREATE TABLE IF NOT EXISTS goals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      skill_id INTEGER NOT NULL,
      description TEXT NOT NULL,
      due_date DATE NOT NULL,
      status TEXT CHECK(status IN ('En cours', 'Atteint')) DEFAULT 'En cours',
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (skill_id) REFERENCES skills(id)
    );
  `);

  // Table des quiz
  db.run(`
    CREATE TABLE IF NOT EXISTS quiz (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      quiz_name TEXT NOT NULL,
      score INTEGER DEFAULT 0,
      date_taken DATE NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  // Table des questions de quiz
  db.run(`
    CREATE TABLE IF NOT EXISTS quiz_questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      quiz_id INTEGER NOT NULL,
      question TEXT NOT NULL,
      correct_answer TEXT NOT NULL,
      FOREIGN KEY (quiz_id) REFERENCES quiz(id)
    );
  `);

  // Table des réponses de quiz
  db.run(`
    CREATE TABLE IF NOT EXISTS quiz_answers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question_id INTEGER NOT NULL,
      user_answer TEXT NOT NULL,
      is_correct BOOLEAN NOT NULL,
      FOREIGN KEY (question_id) REFERENCES quiz_questions(id)
    );
  `);

  console.log('Tables créées avec succès.');
}

db.close();
