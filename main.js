var http = require('http'),
httpProxy = require('http-proxy');
//
// Create reverse proxy server and set the target in the options to the tomcat server
//
httpProxy.createProxyServer({target:'http://127.0.0.1:8080/single-page-app'}).listen(8081);
// http.createServer(function (request, response) {
//    // Send the HTTP header
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);
//Node app url
console.log('Server running at http://127.0.0.1:8081/')
