import Model from "../model/tweet.js";

const getAll = async () => {
 return await Model.find({});
};

const getTweet = async (tweet) => {
 return await Model.findOne({ tweet });
};

const addTweet = async (tweet, status, payload) => {
 return await Model.create({
  tweet,
  status,
  payload,
 });
};

export { getAll, getTweet, addTweet };
