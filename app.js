'use strict'
var //http     = require('http'),
	express  = require('express'),
	parser   = require('body-parser'),
    cors     = require('cors'),
    db       = require('./dbconnection');
    
var app = express();

//Load Routes
const usuario = require('./routes/usuario');
const pedido = require('./routes/pedido');
const direccion = require('./routes/direccion');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:9320'}));
app.set('port', process.env.PORT || 5000);

// db state
app.use(function(req, res, next) {
    req.connection = db;
    next();
});

// Set default route
app.use('/v1/',usuario);
app.use('/v1/',pedido);
app.use('/v1/',direccion);

module.exports = app;