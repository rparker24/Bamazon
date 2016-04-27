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

prompt.start();
prompt.get(['ProductID', 'Quantity'], function(err, result) {

})

// pseudo-ish code
var prodID = result.ProductID;
var orderQuant = result.Quantity;

var itemStock = SELECT stockQuantity FROM products WHERE id = prodID;
var itemPrice = SELECT price FROM products WHERE id = prodID;

if(itemStock > orderQuant) {
  orderCost = orderQuant * itemPrice;
  console.log('The customer owes $' + orderCost);
} else {
  console.log('Insufficient Quantity');
}

var stockLeft = itemStock - orderQuant;

UPDATE products SET stockQuantity = 'stockLeft' WHERE ItemID = 'prodID';