import { Schema } from "mongoose";

const dataSchema = new Schema(
  {
    userID: {
      type: String,
    },
    botID: {
      type: String,
    },
    question: {
      type: String,
    },
    userInfo: {
      type: String,
    },
    botInfo: {
      type: String,
    },
    impressionCount: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export { dataSchema };
