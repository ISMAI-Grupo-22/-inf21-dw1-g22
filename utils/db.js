'use strict';

const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: '12345678',
    database: 'social',
  });


database.connect (function (err) {
  if (err){
    console.log('Error on database connection.');
    throw err;
} 
console.log('Database connection active.');
});


module.exports = database;