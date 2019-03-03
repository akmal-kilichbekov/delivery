var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Codingiscool",
    database: "products"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM vegetables", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});