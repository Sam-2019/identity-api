import Model from "../model/identity.js";

const getAll = async () => {
 return await Model.find({});
};

const getIdentity = async (phone) => {
 return await Model.findOne({ e164Format: phone });
};

const logView = async (data) => {
 await Model.findOneAndUpdate(
  { e164Format: data },
  { $inc: { impressionCount: 1 } },
  { new: false }
 );
};

const addIdentity = async (data) => {
 return await Model.create(data);
};

export { getAll, getIdentity, addIdentity, logView };
