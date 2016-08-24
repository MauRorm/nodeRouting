/**
 * GetReportDataController
 *
 * @description :: Server-side logic for managing getreportdatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict';

var dataReport = {
  run: function (req, res, values) {
  	try {
  	  if (typeof values === 'undefined') {
  	  	return res.send("404 values undefined");
  	  }
  	  return res.send("200 HELLO WORLD");
  	}
  	catch(e) {
  	  return res.send("500 server error	");
  	} 
  }
};

module.exports = dataReport;
