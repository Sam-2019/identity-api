import { Schema } from "mongoose";

const dataSchema = new Schema(
 {
  name: {
   type: String,
  },
  account_number: {
   type: String,
  },
  bank: {
   type: String,
  },
  email: {
   type: String,
  },
  gender: {
   type: String,
  },
  image: {
   type: String,
  },
  country: {
   type: String,
  },
  countryCode: {
   type: String,
  },
  rfc3966: {
   type: String,
  },
  e164Format: {
   type: String,
  },
  numberType: {
   type: String,
  },
  carrier: {
   type: String,
  },
  score: {
   type: String,
  },
  impressionCount: {
   type: Number,
   default: 1,
  },
  paystackPayload: {
   type: Object,
  },
  telegramPayload: {
   type: Object,
  },
 },
 { timestamps: true }
);

export { dataSchema };
