var mysql=require('mysql');

// Database Connection
var connection=mysql.createConnection({

  multipleStatements: true,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_imaginamos'

});
module.exports=connection;