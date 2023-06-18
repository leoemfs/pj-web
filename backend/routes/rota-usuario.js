const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario-controller');

router.post('/usuario', usuarioController.criarUsuario);

module.exports = router;
