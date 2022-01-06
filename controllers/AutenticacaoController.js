'use strict';

var utils = require('../utils/writer.js');
var AutenticacaoController = require('../service/AutenticacaoControllerService');

module.exports.retrieveAutenticacao = function retrieveAutenticacao (req, res, next) {
  AutenticacaoController.retrieveAutenticacao()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
