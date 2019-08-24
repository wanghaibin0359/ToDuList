var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
connection.connect()
 
let query =function (sql,params){
  return new Promise((resolve,reject)=>{
    connection.query(sql,params,(err,res)=>{
        if(err){
          reject(err)
        }
        resolve(res)
    })
  })
 }
module.exports = query