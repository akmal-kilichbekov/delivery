var mysql = require('mysql');
 
console.log('Get connection ...');
 
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Codingiscool"
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});