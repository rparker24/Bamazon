var mysql = require('mysql');
var prompt = require('prompt');

// settings for mysql DB connection
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'bootcamp',
  database : 'bamazon'
});

function showOptions() {
	var menuOptions = ['1. View Products for Sale', '2. View Low Inventory', '3. Add to Inventory', '4. Add New Product'];
	console.log('Menu Options:');
	for(var i = 0; i < menuOptions.length; i++) {
		console.log(menuOptions[i]);
	}
	menuPrompt();
}

function menuPrompt() {

	// settings for prompt
	var schema = {
	  properties: {
	    number: {
	      message: 'Please select a menu option by number',
	      required: true
	    }
	  }
	};

	prompt.start();
	prompt.get(schema, function (err, result) {
		var num = result.number;
		checkSelected(num);
	});
}

function checkSelected(option) {
	switch(option) {
		case '1':
			console.log(1);
			listProducts();
			break;
		case '2':
			console.log(2);
			showLowInventory();
			break;
		case '3':
			console.log(3);
			break;
		case '4':
			console.log(4);
			break;
		default:
			console.log('You did not enter a number for a menu option, please try again');
	}
}

// displays available products with their stats, runs if option 1 is selected
function listProducts() {
	connection.query('SELECT ItemID, ProductName, Price, StockQuantity FROM products', function(err, rows, fields) {
		if(err) throw err;
		console.log('Available products for sale:');
		showSelectedProducts(rows);
	});
	connection.end();
}

function showLowInventory() {
	connection.query('SELECT ItemID, ProductName, Price, StockQuantity FROM products WHERE StockQuantity < 5', function(err, rows, fields) {
		if(err) throw err;
		console.log('Items with low inventory:');
		showSelectedProducts(rows);
	});
	connection.end();
}

function showSelectedProducts(rows) {
	for(var i = 0; i < rows.length; i++) {
	  console.log('Item ID: ' + rows[i].ItemID + '   Product Name: ' + rows[i].ProductName + '   Price: $' + rows[i].Price + '   Stock: ' + rows[i].StockQuantity);
	}
}

showOptions();
