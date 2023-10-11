import { getTelcoNameII } from "../../utils/constants.js";
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

const fixCarrierMismatch = async () => {
  const info = await Model.find({ carrier: "AirtelTigo" });

  for (const iterator of info) {
    await Model.findByIdAndUpdate(
      iterator.id,
      {
        $set: {
          carrier: getTelcoNameII(iterator.account_number),
          bank: getTelcoNameII(iterator.account_number),
        },
      },
      {
        new: false,
      }
    );
    console.log("misMatch cleanup done");
  }
};

export { getAll, getIdentity, addIdentity, logView, fixCarrierMismatch };
