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
          console.log("User created");
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
 exports.deleteLesson = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      'DELETE FROM lesson WHERE id = ?',
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
exports.retrieveConta = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "senha" : "senha",
  "genero" : "genero",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
}, {
  "senha" : "senha",
  "genero" : "genero",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve conta
 *
 * id Long 
 * returns Conta
 **/
exports.retrieveContaId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "senha" : "senha",
  "genero" : "genero",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update conta
 *
 * body Conta 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateConta = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

