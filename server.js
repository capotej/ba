var http = require('http');
var reqs = [];

var clear_reqs = function(){
	console.log("requests/second: " + reqs.length);
	reqs = [];
}

http.createServer(function (req, res) {
	reqs.push(req);
  res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(1337, "127.0.0.1");


console.log('Server running at http://127.0.0.1:1337/');

setInterval(clear_reqs, 1000);

