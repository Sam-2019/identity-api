import { getAll, getTweet } from "../../db/repository/tweet.js";

class Tweet {
 //  Tweet.text()
 static text() {
  return "test";
 }

 //  await Tweet.get_tweet("xxxx")
 get_tweet(data) {
  return getTweet(data);
 }

 //  await Tweet.get_tweets()
 get_tweets() {
  return getAll();
 }
}

export default Tweet;
