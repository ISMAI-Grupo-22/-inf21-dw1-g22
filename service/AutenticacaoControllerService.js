'use strict';
var db = require('../utils/db.js');

/**
 * Retrieve autenticacao
 *
 * returns List
 **/
exports.retrieveAutenticacao = function(req) {
  return new Promise(function(resolve, reject) {
    db.query(
      "SELECT * FROM `Conta` WHERE email = ?",
      [req.body.email],
      (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          if (result[0].password === req.body.password) {
            console.log("user confirmed");
            resolve(result);
          }else{
            console.log("user not found");
          }
        }
      }
    );
  });
};

