require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/index");
const routes = require("./routes");

const app = express();
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api", routes);

module.exports = app;
