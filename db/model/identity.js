import { model } from "mongoose";
import { dataSchema } from "../schema/identity.js";

export default model("Identity", dataSchema);