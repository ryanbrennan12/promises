/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('request');
//import 
var firstLine = require('./promiseConstructor.js');
var myProf = require('./promisification.js');

// console.log('this is the func: ', firstLine);


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return firstLine.pluckFirstLineFromFileAsync(readFilePath)
    .then((username) => { //returned value from puckFirstLine..Promising to next func
      return myProf.getGitHubProfileAsync(username)
        .then((profile) => {
          return fs.writeFileSync(writeFilePath, JSON.stringify(profile));
        });  
    });
  // TODO
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

// Pass the successful value into the resolve function
// this value will be made available in the next then block

// only 1 value can ever be passed into resolve
// Pass any errors into the reject function
// this error will be made available in the catch block
// return the promise instance. This should be a synchronous step