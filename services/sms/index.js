import { redisClient } from "../redis.js";
import { smsHellio } from "./hellio.js";
import { smsPusher } from "./smspusher.js";
import { smsHubtel } from "./hubtel.js";

const default_sms_processor = "HUBTEL";

const current_processor = async () => {
 if ((await redisClient.get("sms_processor")) === undefined || null) {
  return await redisClient.set("sms_processor", default_sms_processor);
 }

 return await redisClient.get("sms_processor");
};

const send_sms = async (to, message) => {
 if (to === "" || message === "") return;

 const processors = ["HELLIO", "SMSPUSHER", "HUBTEL", null];
 const processor = await redisClient.get("sms_processor");
 const validateProcessor = processors.includes(processor);
 if (validateProcessor === false) return;

 const current_processor = processor ?? (await switch_processor());
 switch (current_processor) {
  case "HELLIO":
   await smsHellio({ to, message, provider: processors[0] });
   break;
  case "SMSPUSHER":
   await smsPusher({ to, message, provider: processors[1] });
   break;
  default:
   await smsHubtel({ to, message, provider: processors[2] });
 }
};

const switch_processor = async (value = default_sms_processor) => {
 return await redisClient.set("sms_processor", value.toUpperCase());
};

export { current_processor, send_sms, switch_processor };
