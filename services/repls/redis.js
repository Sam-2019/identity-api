import { redisClient } from "../redis.js";

class RedisService {
 // await redis.write("key", "xxxxx")
 async write(key, value) {
  return await redisClient.set(key, value);
 }

 // await redis.read("key")
 async read(key) {
  return await redisClient.get(key);
 }
}

export default RedisService;
