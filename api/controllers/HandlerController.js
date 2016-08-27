/**
 * HandlerController
 *
 * @description :: Server-side logic for managing handlers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

'use strict';
var dataReport = require('./GetReportDataController'),
  getRss = require('./GetRssController');
var HandlerController = HandlerController || {};


HandlerController.restMethod = function (req, res, service) {
  let values = 'data';
  service.run(req, res, values);
};

HandlerController.getReportData = function (req, res) {
  this.restMethod(req, res, dataReport);
};

HandlerController.getRss = function (req, res) {
	this.restMethod(req, res, getRss);
}

module.exports = HandlerController;
