var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'bootcamp',
  database : 'bamazon'
});

var orderedProductID = 4;
var orderQuantity = 3;

function showInventory() {
  connection.query('SELECT ItemID, ProductName, Price FROM products', function(err, rows, fields) {
    if (err) throw err;
    console.log('Available products: ', rows);

  });
};

function checkInventory() {
  connection.query('SELECT StockQuantity FROM products WHERE ItemID = ?', [orderedProductID], function(err, rows, fields) {
    if(err) throw err;
    console.log(JSON.parse(rows[0].StockQuantity));
    console.log(orderQuantity);
    if(JSON.parse(rows[0].StockQuantity) >= orderQuantity) {
      var adjQuantity = rows[0].StockQuantity - orderQuantity;
      console.log(adjQuantity);
      // connection.query('UPDATE products SET stockQuantity ? WHERE ItemID=?', [adjQuantity, orderedProductID], function(err, rows, fields) {
      //   if(err) throw err;
      // });
      return true;
    } else {
      return false;
    }
  });
}

function getPrice() {
  connection.query('SELECT Price FROM products WHERE ItemID = ?', [orderedProductID], function(err, rows, fields) {
    if(err) throw err;
    var orderPrice = JSON.parse(rows[0].Price) * orderQuantity;
    console.log('This order costs: $' + orderPrice);
  });
}

// prompt.start();
// prompt.get(['ProductID', 'Quantity'], function(err, result) {
//   console.log(result.ProductID, result.Quantity);
//   var orderedProductID = result.ProductID;
//   var orderQuantity = result.Quantity;
// });


showInventory();
checkInventory();
// getPrice();

connection.end();
