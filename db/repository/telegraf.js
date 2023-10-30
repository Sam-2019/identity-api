import Model from "../model/telegraf.js";

const getAll = async () => {
  return await Model.find({});
};

const addRecord = async (data) => {
  return await Model.create(data);
};

const logView = async ({ userID, botID }) => {
  await Model.findOneAndUpdate(
    { userID: userID, botID: botID },
    { $inc: { impressionCount: 1 } },
    { new: false }
  );
};

export { getAll, addRecord, logView };
