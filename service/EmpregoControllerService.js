'use strict';


/**
 * Create emprego
 *
 * body Emprego  (optional)
 * returns Emprego
 **/
exports.createEmprego = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "funcao" : "funcao",
  "tipo" : "tipo",
  "contacto" : 6,
  "contrato" : "contrato",
  "id" : 0,
  "empresa" : "empresa"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve emprego
 *
 * returns List
 **/
exports.retrieveEmprego = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "funcao" : "funcao",
  "tipo" : "tipo",
  "contacto" : 6,
  "contrato" : "contrato",
  "id" : 0,
  "empresa" : "empresa"
}, {
  "funcao" : "funcao",
  "tipo" : "tipo",
  "contacto" : 6,
  "contrato" : "contrato",
  "id" : 0,
  "empresa" : "empresa"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

