import { redisClient } from "../redis.js";

class RedisService {
 //  Redis.write("key", "xxxxx")
 async write(key, value) {
  await redisClient.set(key, value);
 }

 //  Redis.read("key")
 async read(key) {
  const value = await redisClient.get(key);
  return console.log(value);
 }
}

export default RedisService;
