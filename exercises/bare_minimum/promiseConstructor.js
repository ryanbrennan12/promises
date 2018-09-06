/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body.split('\n')[0]);
      }
    });
  });
  // TODO
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};


// var pluckFirstLineFromFile = function (filePath, cb) {
//   fs.readFile(filePath, 'utf-8', (err, body) => {
//     if (err) {
//       cb(err);
//     } else {
//       console.log('this is the first: ', body.split('\n')[0]);
//       cb(err, body.split('\n')[0]);
//     }
//   });

//   // TODO
// };