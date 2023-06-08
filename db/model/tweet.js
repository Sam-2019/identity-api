import { model } from "mongoose";
import { dataSchema } from "../schema/tweet.js";

export default model("Tweet", dataSchema);