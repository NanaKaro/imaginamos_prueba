const db = require('../dbconnection');

let usuarioModel = {

    addUsuario: (req, callback) => {
        return db.query('INSERT INTO usuario (nombres, apellidos, email, telefono, driver, disponible) VALUES (?, ?, ?, ?, ?, ?)', [req.nombres, req.apellidos, req.email, req.telefono, req.driver, req.disponible], callback);
    
    },

    getUsuario: (callback) => {
        return db.query('SELECT * from usuario', callback);
    },

    getUsuarioById: (id, callback) => {
        return db.query('SELECT * from usuario WHERE id = ?', [id], callback);
        
    },

    getDrivers: (callback) => {
        return db.query('SELECT * from usuario WHERE driver=1', callback);
    },

    getDriversAvailable: (callback) => {
        db.query('SELECT * from usuario WHERE driver=1 and disponible=1', callback);
    }
    
}

module.exports = usuarioModel; 