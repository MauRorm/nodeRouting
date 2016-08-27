/**
 * GetRssController
 *
 * @description :: Server-side logic for managing getreportdatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict';

var HttpRequest = require('./HTTPRequest');
var feed = require('feed-read');

var getRss = {
  run: function (req, res, values) {
  	try {
      feed('http://archivo.eluniversal.com.mx/rss/universalmxm.xml', function(err, articles) {
        res.send(articles);
      });
  	}
  	catch(e) {
  	  return res.send("500 server error	");
  	} 
  }
};

module.exports = getRss;
