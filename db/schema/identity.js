import { Schema } from "mongoose";

const dataSchema = new Schema(
 {
  name: {
   type: String,
  },
  account_number: {
   type: String,
  },
  phone: {
   type: String,
  },
  rfc3966: {
   type: String,
  },
  bank: {
   type: String,
  },
  country: {
   type: String,
  },
  carrier: {
   type: String,
  },
  other_name: {
   type: String,
  },
  email: {
   type: String,
  },
  image: {
   type: String,
  },
  gender: {
   type: String,
  },
  score: {
   type: String,
  },
  e164Format: {
   type: String,
  },
  numberType: {
   type: String,
  },
  countryCode: {
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
