const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const usuarioController = require('../controllers/usuario.controller');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'avatar-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.get('/', usuarioController.getAll);
router.post('/', upload.single('avatar'), usuarioController.create);

module.exports = router;