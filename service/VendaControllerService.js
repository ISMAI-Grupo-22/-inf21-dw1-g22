'use strict';


/**
 * Create venda
 *
 * body Venda  (optional)
 * returns Venda
 **/
exports.createVenda = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contacto" : 5,
  "valor" : 1,
  "id" : 0,
  "artigo" : "artigo",
  "quantidade" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete venda
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteVenda = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve venda
 *
 * returns List
 **/
exports.retrieveVenda = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "contacto" : 5,
  "valor" : 1,
  "id" : 0,
  "artigo" : "artigo",
  "quantidade" : 6
}, {
  "contacto" : 5,
  "valor" : 1,
  "id" : 0,
  "artigo" : "artigo",
  "quantidade" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve venda
 *
 * id Long 
 * returns Venda
 **/
exports.retrieveVendaId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contacto" : 5,
  "valor" : 1,
  "id" : 0,
  "artigo" : "artigo",
  "quantidade" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update venda
 *
 * body Venda 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateVenda = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

