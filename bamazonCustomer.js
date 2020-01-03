const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; 
  port: 3306,

  // Your username
  user: '',

  // Your password
  password: '',
  database: 'bamazon'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('You are connected to your database');
  productTable();

});

function productTable() {
  connection.query('SELECT * FROM products', function (err, bamanzonTable) {
    if (err) throw err;
    // Shows the database table
    console.table(bamanzonTable);
    productID();
  });
};

// Prompt user for product ID
function productID() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'itemId',
        message: 'What is the id of the product you want to purchase?',
      }
    ])
    .then(function (answer) {
      console.log(answer)
      // console.log('answer.itemId', answer.itemId);
      verifyProduct(answer);
    })

}

// Prompt user for product quantity
function productQuantity(productData) {
  // console.log(' productData', productData);
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'quantity',
        message: 'How many do you want to purchase?'
      }
    ])
    .then(function (answer2) {
      if (answer2.quantity > productData.stock_quantity) {
        console.log('Insufficient product inventory!');
        connection.end();

      }
      else productPurchase(productData, answer2.quantity)
    })

}

// Check product inventory -- verify that it exists in inventory??? Need a for loop to loop through each item? 
function verifyProduct(answer3) {
  connection.query('SELECT * FROM products WHERE ?', { id: answer3.itemId }, function (err, res) {
    if (err) throw err;
    // console.log(res);
    // console.log(`id ${res[0].id}, product ${res[0].product_name}`)
    if (res.length === 0) {
      console.log('Not a valid id')
      productTable();
      // connection.end()
    }
    else
      productQuantity(res[0])
  })

}

// Customer purchase - this should update database and show the total cost of products purchased.
function productPurchase(data, purchaseQuanity) {
  // console.log('data', data);
  console.log('Purchase Quantity:', purchaseQuanity);
  connection.query(
    'UPDATE products SET stock_quantity = stock_quantity - ? WHERE ?',
    [

      purchaseQuanity,

      {
        id: data.id
      }
    ], function (err, res) {
      if (err) throw err;
      console.log('Total Cost: $', purchaseQuanity * data.price);
      connection.end();
      // productTable();
      // console.log(`id ${res[0].id}, product ${res[0].product_name}`)

    })

}
