import Model from "../model/sms.js";

const getAll = async () => {
 return await Model.find({});
};

const getOne = async (mobile_number) => {
 return await Model.findOne({ mobile_number });
};

const addReceipt = async (mobile_number, message, from, provider, data) => {
 return await Model.create({
  mobile_number,
  message,
  from,
  provider,
  payload: data,
 });
};

export { getAll, getOne, addReceipt };
