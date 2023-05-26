import Model from "../model/index.js";

const getIdentity = async (phone) => {
 return await Model.findOne({ phone });
};

const addIdentity = async (data) => {
 return await Model.create(data);
};

export {
 getIdentity,
 addIdentity,
};
