import { getAll, getTweet } from "../../db/repository/tweet.js";

class Tweet {
 //  await tweet.get_tweet("xxxx")
 //  await Tweet.get_tweet("xxxx")
 get_tweet(data) {
  return getTweet(data);
 }

 //  await tweet.get_tweets()
 //  await Tweet.get_tweets()
 get_tweets() {
  return getAll();
 }
}

export default Tweet;
