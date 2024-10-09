const express = require('express');
const app = express();
const port = 3000;

// Import des routes
const userRoutes = require('./routes/userRoutes');
const skillRoutes = require('./routes/skillRoutes');
const goalRoutes = require('./routes/goalRoutes');
const quizRoutes = require('./routes/quizRoutes');


// Middleware pour parser le JSON
app.use(express.json());

// Utiliser les routes
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/quiz', quizRoutes);

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
