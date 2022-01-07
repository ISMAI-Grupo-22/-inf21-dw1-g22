'use strict';


/**
 * Create venda
 *
 * body Venda  (optional)
 * returns Venda
 **/
 exports.createVenda = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    db.query(
      "INSERT INTO `Venda` (`artigo`, `quantidade`, `valor`, `contacto`) Values(?,?,?,?)",
      [body.artigo, body.quantidade, body.valor, body.contacto],
      (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("sale created");
        }
      }
    );
  });      
};


/**
 * Delete venda
 *
 * id Long 
 * no response value expected for this operation
 **/
 exports.deleteVenda = function (id) {
  return new Promise(function (resolve, reject) {
    db.query(
      "DELETE FROM `Venda` WHERE id = ?",
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
 * Retrieve venda
 *
 * returns List
 **/
 exports.retrieveVenda = function () {
  return new Promise(function (resolve, reject) {
    db.query(
      "SELECT * FROM `Venda`", 
    function (err) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log('retrieve success');
        console.log(res);
        resolve(res[0]);
      }
    });
  });
};


/**
 * Retrieve venda
 *
 * id Long 
 * returns Venda
 **/
 exports.retrieveVendaId = function(id) {
  return new Promise(function (resolve, reject) {
    db.query(
      "SELECT * FROM `Venda` WHERE id = ?", 
      [id], 
      (err, res) => {
        if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log('retrieve success');
        console.log(res);
        resolve(res[0]);
      }
    });
  });
};


/**
 * Update venda
 *
 * body Venda 
 * id Long 
 * no response value expected for this operation
 **/
 exports.updateConta = function(body,id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    db.query(
      'UPDATE `Venda` (`artigo`, `quantidade`, `valor`, `contacto`) Values(?,?,?,?)" WHERE id = ?',
      [body.artigo, body.quantidade, body.valor, body.contacto],
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

