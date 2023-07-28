import {
 write,
 getAll,
 getTweet,
 getNonRetweet,
} from "../../db/repository/tweet.js";

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

 //  await tweet.get_non_retweet()
 //  await Tweet.get_non_retweet()
 get_non_retweet() {
  return getNonRetweet();
 }

 //  await tweet.migration()
 //  await Tweet.migration()
 migration() {
  return write();
 }
}

export default Tweet;
