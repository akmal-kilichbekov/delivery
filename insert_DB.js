var mysql = require('mysql');

console.log('Get connection ...');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Codingiscool",
    database: "products"
});

var sql = "INSERT INTO vegetables (id, Name, Country, ShippedTime, Weight, Unit, Price, Currency) VALUES ?";
var values = [
  /*  ['1', 'Potato', 'Belarus', '2018-12-05 12:39:16', '230', 'KG', '230', 'USD'],
    ['2', 'Onion', 'Uzbekistan', '2018-12-07 12:39:16', '130', 'KG', '1200', 'USD'],
    ['3', 'Carrot', 'Uzbekistan', '2018-01-05 12:39:16', '240', 'KG', '130', 'USD'],
    ['4', 'Tomato', 'Turkey', '2018-12-24 12:39:16', '240', 'KG', '232', 'USD'],
    ['5', 'Spices', 'Turkey', '2018-12-24 12:39:16', '232', 'KG', '20', 'USD'],
    ['6', 'Cucembur', 'Uzbekistan', '2018-12-05 12:39:16', '237', 'KG', '230', 'USD']
    ['7', 'Cabbage', 'Uzbekistan', '2018-12-05 12:39:16', '37', 'KG', '23', 'USD']*/
];

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});