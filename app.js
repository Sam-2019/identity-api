import cors from "cors";
import express, { json } from "express";
import router from "./routes/index.js";
import { connectDB } from "./db/index.js";
import { task } from "./services/cron.js";

const app = express();
connectDB();
task.start();

app.use(cors({ origin: true, credentials: true }));
app.use(json());

app.use("/api", router);

export default app;
