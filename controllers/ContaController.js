'use strict';

var utils = require('../utils/writer.js');
var ContaController = require('../service/ContaControllerService');

module.exports.createConta = function createConta (req, res, next, body) {
  ContaController.createConta(body)
    .then(ContaController.retrieveConta)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteConta = function deleteConta (req, res, next, id) {
  ContaController.deleteConta(id)
    .then(function (response) {
      utils.writeJson(res, response, 204);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveConta = function retrieveConta (req, res, next) {
  ContaController.retrieveConta()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveContaId = function retrieveContaId (req, res, next, id) {
  ContaController.retrieveContaId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateConta = function updateConta (req, res, next, body, id) {
  ContaController.updateConta(body, id)
    .then(ContaController.retrieveConta)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
