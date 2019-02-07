let usuarioModel = require('../models/usuario');

class Usuario { 
    // WS Para Registrar un usuario
    // @Type: 		POST 
    // @Params: 	
    // @Body: 		nombres, apellidos, email, telefono, driver, disponible
    // @Return: 	
    CreateUsuario(req, res) {
        let response = [];
        if (
            typeof req.body.nombres !== 'undefined' && typeof req.body.apellidos !== 'undefined' &&
            typeof req.body.email !== 'undefined' && typeof req.body.telefono !== 'undefined' &&
            typeof req.body.driver !== 'undefined' && typeof req.body.disponible !== 'undefined'
        ) {
            var reqObject = req.body;
            usuarioModel.addUsuario(reqObject, (err, result) => {
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
    // WS Para Consultar un usuario por ID
    // @Type: 		GET 
    // @Params: 	id(optional)
    // @Body: 		
    // @Return: 	
    GetUsuario(req, res) {
        usuarioModel.getUsuario((err, rows) => {
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

    // WS Para Consultar conductores
    // @Type: 		GET 
    // @Params: 	
    // @Body: 		
    // @Return: 

    GetDrivers(req,res) {
        usuarioModel.getDrivers((err, rows) => {
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

    // WS Para Consultar conductores disponibles
    // @Type: 		GET 
    // @Params: 	
    // @Body: 		
    // @Return: 
    

    GetDriversAvailable(req, res) {
        usuarioModel.getDriversAvailable((err, rows) => {
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

module.exports.Usuario = Usuario;