// while https is built-in to Node, it is a module, so it must be required
var https = require('https'); 

module.exports = function getHTML (options, callback) {
  let fullHtml = '';
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      fullHtml += data;
    });
  
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      callback(fullHtml);
    });
  });
};