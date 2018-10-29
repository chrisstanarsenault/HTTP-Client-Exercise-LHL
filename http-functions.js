module.exports = function getHTML(options, callback) {
  var https = require('https')
  var bufferedData = "";

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      bufferedData += (data + '\n');
    });

    response.on('end', function () {
      callback(bufferedData)
      console.log('Response stream complete.')
    });
  });

};