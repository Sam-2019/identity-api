import { parsePhoneNumber } from "awesome-phonenumber";
import {
 getTelcoCode,
 getTelcoName,
 getTelcoNameII,
 invalidNumber,
 notFound,
} from "../utils/constants.js";
import { getIdentity, logView } from "../db/repository/identity.js";
import { transformText, getCountryName } from "../utils/transformer.js";
import { caller, stack } from "../utils/identity.js";
import { getRandomItem } from "../utils/randomizer.js";

const validatePhoneNumber = (number) => {
 let countryCode = "GH";
 const pn = parsePhoneNumber(number, { regionCode: countryCode });

 if (pn.valid === false) {
  return {
   regionCode: null,
   rfc3966: null,
   nationalNumber: null,
   internationalNumber: null,
   message: invalidNumber,
  };
 }

 const transformedNumber = pn;

 return {
  message: null,
  transformedNumber,
 };
};

const checkDB = async (data) => {
 const dbData = await getIdentity(data);

 if (dbData) {
  await logView(data);
  return { message: null, data: dbData };
 }

 return {
  message: null,
  data: null,
 };
};

const webLookup = async (data, res) => {
 const { transformedNumber, message } = validatePhoneNumber(data);
 const nationalNumber = transformedNumber.number.national.replace(/\s+/g, "");
 const rfc3966 = transformedNumber.number.rfc3966;
 const internationalNumber = transformedNumber.number.e164;
 const regionCode = transformedNumber.regionCode;

 if (message === invalidNumber) {
  return res.status(400).json({ message: invalidNumber });
 }

 const dbData = await checkDB(nationalNumber);

 if (dbData.data) {
  return res.status(200).json(dbData.data);
 }

 const accountCode = getTelcoCode(nationalNumber);
  const paystack = await stack(nationalNumber, accountCode);
  const truecaller = await caller(internationalNumber, regionCode);

 const info = {
  nationalNumber,
  rfc3966,
  internationalNumber,
  regionCode,
 };

 if (paystack.message && truecaller.message) {
  return res.status(200).json({ message: notFound });
 }

 return res.status(200).json(external(paystack, truecaller, info));
};

const external = (paystack, truecaller, info) => {
 if (paystack.data && truecaller.message) {
  console.log("first");
  return payload(paystack.data, truecaller.message, info);
 }

 if (truecaller.data && paystack.message) {
  console.log("second");
  return payload(paystack.message, truecaller.data, info);
 }

 console.log("last");
 return payload(paystack.data, truecaller.data, info);
};

const payload = (paystack, truecaller, info) => {
 const country = getCountryName.of(info?.regionCode);
 const other_name = transformText(truecaller?.name);
 const image = truecaller?.image || getRandomItem();
 const name = paystack?.account_name || truecaller?.name;
 const bank = getTelcoName(paystack?.bank_id) || getTelcoNameII(info?.nationalNumber);
 const carrier = getTelcoName(paystack?.bank_id) || getTelcoNameII(info?.nationalNumber);
 const email = truecaller?.internetAddresses ? truecaller?.internetAddresses[0]?.id : null;
 const numberType = truecaller?.phones ? truecaller?.phones[0]?.numberType : null;

 return {
  name,
  account_number: paystack?.account_number,
  bank,
  other_name,
  email,
  gender: truecaller?.gender,
  image,
  country,
  countryCode: info?.regionCode,
  rfc3966: info?.rfc3966,
  phone: info?.nationalNumber,
  e164Format: info?.internationalNumber,
  numberType,
  carrier,
  score: truecaller?.score,
  telegramPayload: truecaller,
  paystackPayload: paystack,
 };
};

export { webLookup };
