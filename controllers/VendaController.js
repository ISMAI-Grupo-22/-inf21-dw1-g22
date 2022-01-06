'use strict';

var utils = require('../utils/writer.js');
var VendaController = require('../service/VendaControllerService');

module.exports.createVenda = function createVenda (req, res, next, body) {
  VendaController.createVenda(body)
    .then(VendaController.retrieveVenda)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteVenda = function deleteVenda (req, res, next, id) {
  VendaController.deleteVenda(id)
    .then(function (response) {
      utils.writeJson(res, response, 204);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveVenda = function retrieveVenda (req, res, next) {
  VendaController.retrieveVenda()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveVendaId = function retrieveVendaId (req, res, next, id) {
  VendaController.retrieveVendaId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateVenda = function updateVenda (req, res, next, body, id) {
  VendaController.updateVenda(body, id)
    .then(VendaController.retrieveVenda)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
