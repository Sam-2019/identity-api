import { TwitterApi } from "twitter-api-v2";
import {
 addTweet,
 getNonRetweet,
 updateTweet,
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
  console.log("post successful");
 } catch (e) {
  await addTweet(tweet, "failed", false, e.data);
  console.log("error");
 }
};

const retweet = async (tweetID) => {
 // loggedUserId: string: Logged user (you) ID
 const loggedUserId = "12";
 try {
  await client.v2.retweet(loggedUserId, tweetID);
  await updateTweet(true, data.id);
  console.log("retweet successful");
 } catch (e) {
  await updateTweet(false, data.id);
  console.log("retweet failed");
 }
};

const tweet = async () => {
 const data = await getNonRetweet();

 if (data) {
  const tweetID = data.payload.edit_history_tweet_ids.id;
  return retweet(tweetID);
 }

 sendTweet();
};

export { tweet };
