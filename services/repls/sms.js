import RedisService from "./redis.js";

class SmsProcessor {
 constructor() {
  this.redis = new RedisService();
 }

// list sms providers
// switch input must be in list
// return default provider if input is foreign  

 //  default_sms_processor
 static default() {
  return "HUBTEL";
 }

 //  await sms_processor.current_processor()
 async current_processor() {
  if ((await this.redis.read("sms_processor")) === undefined) {
   return await this.redis.write("sms_processor", SmsProcessor.default());
  }

  return await this.redis.read("sms_processor");
 }

 // await sms_processor.switch("xxx")
 async switch(value) {
  return await this.redis.write("sms_processor", value.toUpperCase());
 }
}

export default SmsProcessor;
