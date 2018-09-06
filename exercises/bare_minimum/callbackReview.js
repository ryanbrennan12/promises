/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  fs.readFile(filePath, 'utf-8', (err, body) => {
    if (err) {
      cb(err);
    } else {
      console.log('this is the first: ', body.split('\n')[0]);
      cb(err, body.split('\n')[0]);
    }
  });

  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  request(url, (err, res, body) => {
    if (err) {
      cb(err);
    } else {
      cb(err, res.statusCode);
    }
    

  });
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
