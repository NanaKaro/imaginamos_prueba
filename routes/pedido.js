'use strict'

let express = require('express');
const pedido = express.Router();
const {Pedido} = require('../controllers/pedido');
const routes = new Pedido();


pedido.post('/pedido/add', routes.CreatePedido);
pedido.get('/pedido/get/:id_driver?/:fecha_entrega/', routes.GetTareasDriver);


module.exports = pedido;