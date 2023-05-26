require("dotenv").config();
var http = require("http");
const app = require("./app");
const { NOTIFY } = require("./utils/config");

const PORT = 4000;

http.createServer(app).listen(PORT , () => { NOTIFY('http', PORT) })
