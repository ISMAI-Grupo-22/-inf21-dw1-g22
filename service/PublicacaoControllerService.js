'use strict';
var db = require('../utils/db.js');

/**
 * Create publicacao
 *
 * body Publicacao  (optional)
 * returns Publicacao
 **/
 exports.createPublicacao = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    db.query(
      "INSERT INTO `Publicacao` (`nome`, `descricao`) Values(?,?)",
      [body.nome, body.descricao],
      (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("insert success");
          resolve(result.InsertedId);
        }
      }
    );
  });      
};

/**
 * Retrieve Publicacao
 *
 * returns List
 **/
 exports.retrievePublicacao = function() {
  return new Promise(function(resolve, reject) {
    db.query(
      "SELECT * FROM `Publicacao`",
      (err, res) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          console.log("Retrieve success");
          console.log(res);
          resolve(res);
        }
      }
    );
  });
};

