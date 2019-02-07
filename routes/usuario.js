'use strict'

let express = require('express');
const usuario = express.Router();
const {Usuario} = require('../controllers/usuario');
const routes = new Usuario();

usuario.post('/usuario/add', routes.CreateUsuario);
usuario.get('/usuario/get', routes.GetUsuario);
usuario.get('/usuario/driver/get', routes.GetDrivers);
usuario.get('/usuario/driver-available/get', routes.GetDriversAvailable);

module.exports = usuario;