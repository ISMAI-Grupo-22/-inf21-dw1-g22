'use strict';

const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dw',
  });


database.connect (function (err) {
  if (err){
    console.log('Error on database connection.');
    throw err;
} 
console.log('Database connection active.');
});


module.exports = database;