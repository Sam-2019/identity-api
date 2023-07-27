import { Schema } from "mongoose";

const dataSchema = new Schema(
 {
  tweet: {
   type: String,
  },
  status: {
   type: String,
  },
  retweeted: {
    type: Boolean,
   },
  payload: {
   type: Object,
  },
 },
 { timestamps: true }
);

export { dataSchema };
