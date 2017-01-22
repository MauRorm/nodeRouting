/**
 * GetRssController
 *
 * @description :: Server-side logic for managing getreportdatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict';

let HttpRequest = require('./HTTPRequest');
let feed = require('feed-read');

let getRss = {
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
