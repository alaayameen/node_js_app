var http = require('http'),
httpProxy = require('http-proxy');
//
// Create reverse proxy server and set the target in the options to the tomcat server
//
httpProxy.createProxyServer({target:'http://127.0.0.1:8080/'}).listen(8081);

//Node app url
console.log('Server running at http://127.0.0.1:8081/')
