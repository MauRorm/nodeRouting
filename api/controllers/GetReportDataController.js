/**
 * GetReportDataController
 *
 * @description :: Server-side logic for managing getreportdatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict';

var HttpRequest = require('./HTTPRequest');

let dataReport = {
  run: function (req, res, values) {
  	try {
      this.values = values;
  	  if (typeof this.values === 'undefined') {
  	  	return res.send("404 values undefined");
  	  }
      HttpRequest.run('https://api.ret.io/reports?country=MX&province=DF', 'get', '').then(function (resolve) {
        let jsonResolveGet = JSON.parse(resolve.body);
        return res.send(jsonResolveGet);
      }, function (err) {
      });
  	}
  	catch(e) {
  	  return res.send("500 server error	");
  	} 
  }
};

module.exports = dataReport;
