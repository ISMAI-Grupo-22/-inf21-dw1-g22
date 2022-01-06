'use strict';

var utils = require('../utils/writer.js');
var PublicacaoController = require('../service/PublicacaoControllerService');

module.exports.createPublicacao = function createPublicacao (req, res, next, body) {
  PublicacaoController.createPublicacao(body)
    .then(PublicacaoController.retrievePublicacao)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePublicacao = function retrievePublicacao (req, res, next) {
  PublicacaoController.retrievePublicacao()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
