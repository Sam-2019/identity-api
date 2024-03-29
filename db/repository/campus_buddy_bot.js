import Model from "../model/campus_buddy_bot.js";

const getAll = async () => {
  return await Model.find({});
};

const addRecord = async (data) => {
  return await Model.create(data);
};

const findRecord = async (userID, question) => {
  return await Model.findOne({
    userID: userID,
    question: question,
  });
};

const logView = async (userID, botID, question) => {
  await Model.findOneAndUpdate(
    { userID: userID, botID: botID, question: question },
    { $inc: { impressionCount: 1 } },
    { new: false }
  );
};

export { getAll, addRecord, findRecord, logView };
