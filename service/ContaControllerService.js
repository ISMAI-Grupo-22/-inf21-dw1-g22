'use strict';
var db = require('../utils/db.js');

/**
 * Create conta
 *
 * body Conta  (optional)
 * returns Conta
 **/
exports.createConta = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    db.query(
      "INSERT INTO `Conta` (`email`, `genero`, `nome`, `senha`) Values(?,?,?,?)",
      [body.email, body.genero, body.nome, body.senha],
      (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("user created");
          resolve(result.insertedId);

        }
      }
    );
  });      
};


/**
 * Delete Conta
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteConta = function (id) {
  return new Promise(function (resolve, reject) {
    db.query(
      "DELETE FROM `Conta` WHERE id = ?",
      [id],
      (err, res) => {
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        } else {
          console.log(res);
          resolve({"deleted":id});
        }
    });
  });
};


/**
 * Retrieve conta
 *
 * returns List
 **/
exports.retrieveConta = function () {
  return new Promise(function (resolve, reject) {
    db.query(
      "SELECT * FROM `Conta`", 
    function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log('retrieve success');
        console.log(res);
        resolve(res);
      }
    });
  });
};


/**
 * Retrieve conta
 *
 * id Long 
 * returns Conta
 **/
exports.retrieveContaId = function(id) {
  return new Promise(function (resolve, reject) {
    db.query(
      "SELECT * FROM `Conta` WHERE id = ?", 
      [id], 
      (err, res) => {
        if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log('retrieve success');
        console.log(res);
        resolve(res);
      }
    });
  });
};



/**
 * Update conta
 *
 * body Conta 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateConta = function(body,id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    db.query(
      'UPDATE `Conta` set `nome` = ?, `email` = ?, `senha` = ?, `genero` = ? WHERE id = ?',
      [body.nome, body.email, body.senha, body.genero, id],
      (err, res) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log('update success');
          console.log(res);
          resolve(id);
        }
      },
    );
  });
};
