'use strict'

var app = require('./app'),
    http = require('http'),
    mysql = require('mysql');
let logger = require('./logger');
var db = require('./dbconnection');

try {
    //Sucess Database Connection
    db.connect((err) => {
        if (err) {
            console.log('connecting error');
            console.log(err)
            return;
        }
        //Succes, Server Running
        http.createServer(app).listen(app.get('port'), function () {
            console.log('Server listening on port ' + app.get('port'));
        });
    });

} catch (e) {
    console.log('Database Connetion failed:' + e);
}

