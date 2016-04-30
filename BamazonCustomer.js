var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'bootcamp',
  database : 'bamazon'
});

var orderedProductID = 4;
var orderQuantity = 7;

function showInventory() {
  connection.query('SELECT ItemID, ProductName, Price FROM products', function(err, rows, fields) {
    if (err) throw err;
    console.log('Available products: ', rows);

  });
};

function checkInventory() {
  connection.query('SELECT StockQuantity FROM products WHERE ItemID = ?' [orderedProductID], function(err, rows, fields) {
    if(err) throw err;
    console.log(rows[0]);
    // if(JSON.parse(rows[0].stockQuantity) >= orderQuantity) {
    //   var adjQuantity = rows[0].stockQuantity - orderQuantity;
    //   console.log(adjQuantity);
      // connection.query('UPDATE products SET stockQuantity ? WHERE ItemID=?', [adjQuantity, orderedProductID], function(err, rows, fields) {
      //   if(err) throw err;
      // });

    // }
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
  // var orderedProductID = result.ProductID;
  // var orderQuantity = result.Quantity;
// });


showInventory();
checkInventory();
getPrice();

connection.end();
