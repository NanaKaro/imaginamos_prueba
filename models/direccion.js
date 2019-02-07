const db = require('../dbconnection');

let direccionModel = {

    addDireccion: (req, callback) => {
        return db.query('INSERT INTO direccion (id_usuario, direccion, comentario) VALUES (?, ?, ?)', [req.id_usuario, req.direccion, req.comentario], callback);
    
    },

    getDireccion: (callback) => {
        return db.query('SELECT * from direccion', callback);
    },

    getDireccionByUsuario: (id_usuario, callback) => {
        return db.query('SELECT * from direccion WHERE id_usuario = ?', [id_usuario], callback);
    },
    
}

module.exports = direccionModel; 