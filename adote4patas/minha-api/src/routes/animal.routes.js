const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const animalController = require('../controllers/animal.controller');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'foto-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.get('/', animalController.getAll);
router.post('/', upload.single('foto'), animalController.create);

module.exports = router;