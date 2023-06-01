import mongoose from "mongoose";
import { NODE_ENV, DEV_DB, PROD_DB } from "../utils/config.js";

const DB_URI = NODE_ENV === "development" ? DEV_DB : PROD_DB;
var dbConn = mongoose.connection;
dbConn.on("connected", function () {
//  console.log("Mongoose connected");
});

const connectDB = () => {
 mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
 });
};

const disconnectDB = () => {
 mongoose.connection.close();
};

export { connectDB, disconnectDB };
