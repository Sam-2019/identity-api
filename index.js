import './loadEnv.js'
import { createServer } from "https";
import app from "./app.js";
import { NOTIFY } from "./utils/config.js";

const PORT = 4000;

createServer(app).listen(PORT , () => { NOTIFY(PORT) })
