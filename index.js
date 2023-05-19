require("dotenv").config();
var https = require("https");
var http = require("http");
var fs = require("fs");
const app = require("./app");
const { HTTPPORT, HTTPSPORT, NOTIFY } = require("./utils/config"); 

const httpPort = HTTPPORT || 80;
const httpsPort = HTTPSPORT || 443;

const options = {
  key: fs.readFileSync('test/fixtures/keys/client-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/client-cert.pem'),
};

// // Create an HTTP service.
http.createServer(app).listen(httpPort , () => { NOTIFY('http', httpPort) })

// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(httpsPort, () => { NOTIFY('https', httpsPort) });
