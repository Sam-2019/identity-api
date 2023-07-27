import Model from "../model/tweet.js";

const getAll = async () => {
 return await Model.find({});
};

const getNonRetweet = async () => {
 return await Model.findOne({
  retweeted: false,
 });
};

const getTweet = async (tweet) => {
 return await Model.findOne({ tweet });
};

const addTweet = async (tweet, status, retweeted, payload) => {
 return await Model.create({
  tweet,
  status,
  retweeted,
  payload,
 });
};

const updateTweet = async (retweeted, id) => {
 const query = { id: id };
 return await Model.findOneAndUpdate(query, { $set: { retweeted: retweeted } });
};

export { getAll, getNonRetweet, getTweet, addTweet, updateTweet };
