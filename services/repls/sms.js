import RedisService from "./redis.js";
import { smsHellio } from "../sms/hellio.js";
import { smsPusher } from "../sms/smspusher.js";
import { smsHubtel } from "../sms/hubtel.js";

class SmsProcessor {
 constructor() {
  this.redis = new RedisService();
 }

 //  default_sms_processor
 static default() {
  return "HUBTEL";
 }

 // list sms providers
 // switch input must be in list
 // return default provider if input is foreign

 //  await sms_processor.send_sms("0240586043", "hi")
 async send_sms(to, message) {
  if (to === "" || message === "") return;

  const processors = ["HELLIO", "SMSPUSHER", "HUBTEL"];
  const processor = await this.redis.read("sms_processor");
  const validateProcessor = processors.includes(processor);
  if (validateProcessor === false) return;

  const current_processor = processor ?? "HUBTEL";
  switch (current_processor) {
   case "HELLIO":
    await smsHellio({ to, message });
    break;
   case "SMSPUSHER":
    await smsPusher({ to, message });
    break;
   default:
    await smsHubtel({ to, message });
  }
 }

 //  await sms_processor.current_processor()
 async current_processor() {
  if ((await this.redis.read("sms_processor")) === undefined) {
   return await this.redis.write("sms_processor", SmsProcessor.default());
  }

  return await this.redis.read("sms_processor");
 }

 // await sms_processor.switch("xxx")
 async switch(value = SmsProcessor.default()) {
  return await this.redis.write("sms_processor", value.toUpperCase());
 }
}

export default SmsProcessor;
