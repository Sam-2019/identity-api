import RedisService from "./redis.js";

class SmsProcessor {
 static default_processor() {
  return "NONE";
 }

 //  SMSProcessor.current_processor()
 current_processor() {
  var redis = new RedisService();
  if (redis.read("sms_processor") === null) {
   return SmsProcessor.default_processor();
  }

  return redis.read("sms_processor");
 }

 // await SMSProcessor.switch("xxx")
 switch(value) {
  var redis = new RedisService();
  return redis.write("sms_processor", value);
 }
}

export default SmsProcessor;
