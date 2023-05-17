const Model = require("../model");

const getIdentity = async (phone) => {
 return await Model.findOne({ phone });
};

const addIdentity = async (data) => {
 return await Model.create(data);
};

module.exports = {
 getIdentity,
 addIdentity,
};
