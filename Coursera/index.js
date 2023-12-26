let http = require('http');
http.createServer(function (req, res) {
    res.write('hello from server');//write a response to the client
    res.end();//end of response from server
}).listen(6000);//the server instance listens for http requests on port 6000


// Asynchronous I/O with Callback Programming

    // Creating Callback Functions

function calculateSum(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

function displayResult(result) {
  console.log("The result is: " + result);
}

calculateSum(5, 3, displayResult);

const message = function (){
    console.log("this message shows after 3 seconds")
}

setTimeout(message, 3000)