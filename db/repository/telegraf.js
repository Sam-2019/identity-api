import Model from "../model/telegraf.js";

const getAll = async () => {
  return await Model.find({});
};

const addRecord = async (data) => {
    return await Model.create(data);
  };

const logView = async (data) => {
  await Model.findOneAndUpdate(
    { chatID: data },
    { $inc: { impressionCount: 1 } },
    { new: false }
  );
};

export { getAll, addRecord, logView };
