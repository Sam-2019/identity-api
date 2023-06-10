import Identity from "./identity.js";
import RedisService from "./redis.js";
import SmsProcessor from "./sms.js";
import Tweet from "./tweet.js";

const replServices = [
 { key: "text", value: Identity.text() },
 { key: "user", value: new Identity() },
 { key: "tweet", value: new Tweet() },
 { key: "redis_service", value: new RedisService() },
 { key: "sms_processor", value: new SmsProcessor() },
];

export { replServices };
