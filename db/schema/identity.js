const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
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
 paystackPayload: {
  type: Object,
 },
 telegramPayload: {
  type: Object,
 },
});

module.exports = {
 dataSchema,
};
