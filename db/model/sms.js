import { model } from "mongoose";
import { dataSchema } from "../schema/sms.js";

export default model("SmsReceipt", dataSchema);