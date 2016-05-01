var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'bootcamp',
  database : 'bamazon'
});

var schema = {
  properties: {
    name: {
      message: 'Please select one of the following options: ',
      required: true
    },
    password: {
      hidden: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, result) {
});