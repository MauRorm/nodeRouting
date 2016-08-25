'use strict';

var request = require('request'),
  Promise = require('promise');

var HTTPRequest = {
  run: function (url, method, json) {
    if(typeof url === 'undefined' || url.length === 0) {
      return false;
    }
    return new Promise(function (resolve, reject) {
      request({
        url: url,
        method: method,
        json: json,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json'
        }
      }, function (error, response, body) {
        if (error) {
          sails.log.error(e);
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
};

module.exports = HTTPRequest;
