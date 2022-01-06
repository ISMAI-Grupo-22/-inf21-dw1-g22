'use strict';


/**
 * Create publicacao
 *
 * body Publicacao  (optional)
 * returns Publicacao
 **/
exports.createPublicacao = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nome" : "nome",
  "id" : 0,
  "descricao" : "descricao"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Publicacao
 *
 * returns List
 **/
exports.retrievePublicacao = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nome" : "nome",
  "id" : 0,
  "descricao" : "descricao"
}, {
  "nome" : "nome",
  "id" : 0,
  "descricao" : "descricao"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

