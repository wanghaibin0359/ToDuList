var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});

function con(fn){
    connection.connect()
    fn(connection)
    connection.end()
}
module.exports = con