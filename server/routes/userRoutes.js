const express = require('express');
const multer = require('multer');
const userController = require('../controllers/userController');
const router = express.Router();

// Configuration de Multer pour les fichiers d'image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);  
  }
});

const upload = multer({ storage: storage });

// Route pour l'inscription
router.post('/register', upload.single('profileImage'), userController.registerUser);

// Route pour la connexion (Login)
router.post('/login', userController.loginUser);


module.exports = router;

