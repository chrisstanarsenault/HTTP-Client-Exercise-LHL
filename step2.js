var https = require('https');
var bufferedData = "";

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };



  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      bufferedData += (data + '\n');
      //console.log('Chunk Recieved. Data:\n', data + '\n');
    });

    response.on('end', function () {
      console.log(bufferedData)
      console.log('Response stream complete.')
    });
  });
}

getAndPrintHTML()