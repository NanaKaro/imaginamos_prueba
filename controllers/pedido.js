let pedidoModel = require('../models/pedido');
let usuarioModel = require('../models/usuario');

class Pedido { 
    // WS Para Registrar un pedido
    // @Type: 		POST 
    // @Params: 	
    // @Body: 		id_usuario, id_direccion, fecha_entrega, hora_entrega, id_driver
    // @Return: 	
    CreatePedido(req, res) {
        let response = [];
        if (
            typeof req.body.id_usuario !== 'undefined' && typeof req.body.id_direccion !== 'undefined' &&
            typeof req.body.fecha_entrega !== 'undefined' && typeof req.body.hora_entrega !== 'undefined'
        ) {
            usuarioModel.getDriversAvailable((err, rows) => {
                if (!err) {
                    if (rows.length != 0) {
                        var reqObject = req.body;
                        
                        var resultado = Math.floor(Math.random() * rows.length);
                        var id_driver = rows[resultado].id;
                        var response = [];
                        pedidoModel.addPedido(reqObject, id_driver, (err, result) => {
                            if (!err) {
                                if (result.affectedRows != 0) {
                                    response.push({ 'result': 'success' });
                                } else {
                                    response.push({ 'msg': 'No Result Found' });
                                }
                                res.setHeader('Content-Type', 'application/json');
                                res.status(200).send(JSON.stringify(response));
                            } else {
                                res.status(400).send(err);
                                console.log(err)
                            }
                        });
                    } else {
                        response.push({ 'msg': 'No Result Found' });
                    }
                } else {
                    res.status(400).send(err);
                    console.log(err)
                }
            })
            
        } else {
            response.push({ 'result': 'error', 'msg': 'Por favor ingrese todos los datos' });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response));
        }
    };
    // WS Para Consultar tareas de un driver
    // @Type: 		GET 
    // @Params: 	id_driver(optional)
    // @Body: 		
    // @Return: 	
    GetTareasDriver(req, res) {
        let id_driver = req.params.id_driver;
        let fecha_entrega = req.params.fecha_entrega;
        pedidoModel.getTareasDriver(id_driver,fecha_entrega, (err, rows) => {
            if (!err) {
                var response = [];
                response.push({ 'result': 'success' });
                if (rows.length != 0) {
                    response.push({ 'data': rows });
                } else {
                    response.push({ 'msg': 'No Result Found' });
                }
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(response));
            } else {
                res.status(400).send(err);
                console.log(err)
            }
        });
    };

   
    
}

module.exports.Pedido = Pedido;