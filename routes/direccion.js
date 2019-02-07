'use strict'

let express = require('express');
const direccion = express.Router();
const {Direccion} = require('../controllers/direccion');
const routes = new Direccion();


direccion.post('/direccion/add', routes.CreateDireccion);
direccion.get('/direccion/get/:id_usuario?', routes.GetDireccionByUsuario);


module.exports = direccion;