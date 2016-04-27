var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'bootcamp',
  database : 'bamazon'
});
 
connection.connect();
 
connection.query('SELECT * FROM products', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows);

});
 
connection.end();