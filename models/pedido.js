const db = require('../dbconnection');

let pedidoModel = {

    addPedido: (req, id_driver, callback) => {
        return db.query('INSERT INTO pedidos (id_usuario, id_direccion, fecha_entrega, hora_entrega, id_driver) VALUES (?, ?, ?, ?, ?)', [req.id_usuario, req.id_direccion, req.fecha_entrega, req.hora_entrega, id_driver], callback);
    
    },

    getPedido: (callback) => {
        return db.query('SELECT * from pedidos', callback);
    },

    getTareasDriver: (id_driver, fecha_entrega, callback) => {
        return db.query('SELECT concat(u.nombres," ", u.apellidos) as cliente, u.email, u.telefono, d.direccion, p.fecha_entrega, p.hora_entrega from pedidos as p, usuario as u, direccion as d WHERE d.id=p.id_direccion and p.id_usuraio=u.id and p.id_driver = ? and p.fecha_entrega = ?', [id_driver, fecha_entrega], callback);
    },
    
}

module.exports = pedidoModel; 