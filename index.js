require("dotenv").config();
var http = require("http");
const app = require("./app");
const { PORT, NOTIFY } = require("./utils/config"); 

http.createServer(app).listen(PORT , () => { NOTIFY('http', PORT) })
