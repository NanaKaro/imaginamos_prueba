let direccionModel = require('../models/direccion');

class Direccion { 
    // WS Para guardar una direccion
    // @Type: 		POST 
    // @Params: 	
    // @Body: 		id_usuario, direccion, comentario
    // @Return: 	
    CreateDireccion(req, res) {
        let response = [];
        if (
            typeof req.body.id_usuario !== 'undefined' && typeof req.body.direccion !== 'undefined' 
        ) {
            var reqObject = req.body;
            direccionModel.addDireccion(reqObject, (err, result) => {
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
            response.push({ 'result': 'error', 'msg': 'Por favor ingrese todos los datos' });
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response));
        }
    };
    // WS Para Consultar una direccion por id_usuario
    // @Type: 		GET 
    // @Params: 	id_usuario(optional)
    // @Body: 		
    // @Return: 	
    GetDireccionByUsuario(req, res) {
        let id_usuario = req.params.id_usuario;
        direccionModel.getDireccionByUsuario(id_usuario, (err, rows) => {
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

module.exports.Direccion = Direccion;