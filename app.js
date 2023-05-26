import express, { json } from "express";
import cors from "cors";
import { connectDB } from "./db/index.js";
import router from "./routes/index.js";

const app = express();
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(json());

app.use("/api", router);

export default app;
