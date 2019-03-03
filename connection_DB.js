var mysql = require('mysql');
 
console.log('Get connection ...');
 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Codingiscool"
});
 
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE products", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});