import cors from "cors";
import express, { json } from "express";
import router from "./routes/index.js";
import helmet from "helmet";
import { connectDB } from "./db/index.js";
import { task } from "./services/cron.js";
import { redisClient } from "./services/redis.js";

const app = express();
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(json());

connectDB();
await redisClient.connect();
// task.start();

app.use("/", router);

export default app;
