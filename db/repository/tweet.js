import Model from "../model/tweet.js";
import { success } from "../../utils/constants.js";

const getAll = async () => {
 return await Model.find({});
};

const getNonRetweet = async () => {
 return await Model.findOne({
  retweeted: false,
  status: success,
 });
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

const updateTweet = async (id) => {
 await Model.findByIdAndUpdate(id, { retweeted: true });
};

const write = async () => {
 await Model.bulkWrite([
  {
   updateMany: {
    filter: { status: success },
    update: { retweeted: false },
   },
  },
 ]).then((res) => {
  console.log(res.insertedCount, res.modifiedCount, res.deletedCount);
 });
};

export { getAll, getNonRetweet, getTweet, addTweet, updateTweet, write };
