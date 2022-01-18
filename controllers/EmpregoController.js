'use strict';

var utils = require('../utils/writer.js');
var EmpregoController = require('../service/EmpregoControllerService');

module.exports.createEmprego = function createEmprego (req, res, next, body) {
  EmpregoController.createEmprego(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEmprego = function retrieveEmprego (req, res, next) {
  EmpregoController.retrieveEmprego()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
