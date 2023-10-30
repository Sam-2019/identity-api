import { model } from "mongoose";
import { dataSchema } from "../schema/telegraf.js";

export default model("Telegraf", dataSchema);