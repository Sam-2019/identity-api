import { Schema } from "mongoose";

const dataSchema = new Schema(
  {
    chatID: {
      type: String,
    },
    question: {
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
