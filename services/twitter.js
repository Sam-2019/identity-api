import { TwitterApi } from "twitter-api-v2";
import {
 addTweet,
 updateTweet,
 getNonRetweet,
} from "../db/repository/tweet.js";

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
  await addTweet(tweet, "success", false, response);
  //   console.log("post successful");
 } catch (e) {
  await addTweet(tweet, "failed", false, e.data);
  //   console.log("error");
 }
};

const retweet = async (result) => {
 const { data } = await client.v2.me();
 const tweetID = result.payload.data.id;
 const entryID = result.id;
 try {
  await client.v2.retweet(data.id, tweetID);
  await updateTweet(true, entryID);
    // console.log("retweet successful");
 } catch (e) {
  await updateTweet(false, entryID);
    console.log("retweet failed");
 }
};

const tweet = async () => {
 const result = await getNonRetweet();
 if (result) {
  return retweet(result);
 }

 sendTweet();
};

export { tweet };
