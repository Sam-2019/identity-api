import { TwitterApi } from "twitter-api-v2";
import { addTweet } from "../db/repository/tweet.js";

const client = new TwitterApi({
 appKey: process.env.TWITTER_API_KEY,
 appSecret: process.env.TWITTER_API_KEY_SECRET,
 accessToken: process.env.TWITTER_ACCESS_TOKEN,
 accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const sendTweet = async () => {
 const tweet = "grateful";
 try {
  const response = await client.v2.tweet(tweet);
  await addTweet(tweet, "success", response);
  console.log("post successful");
 } catch (e) {
  await addTweet(tweet, "failed", e.data);
  console.log("error");
 }
};

export { sendTweet };
