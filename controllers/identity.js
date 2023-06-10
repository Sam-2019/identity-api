import { parsePhoneNumber } from "awesome-phonenumber";
import { AUTH_KEY } from "../utils/config.js";
import {
 getTelcoCode,
 getTelcoName,
 stackNotFound,
 defaultMessage,
 invalidNumber,
 notFound,
} from "../utils/constants.js";
import { stack, caller } from "../utils/identity.js";
import { transformText, getCountryName } from "../utils/transformer.js";
import { getRandomItem } from "../utils/randomizer.js";
import { addIdentity, getIdentity } from "../db/repository/identity.js";

const getID = async (req, res) => {
 const authorization = req.headers.authorization;
 if (authorization != AUTH_KEY) {
  return res.status(401).json({ message: defaultMessage });
 }

 const randomImage = getRandomItem();
 let countryCode = "GH";
 const number = req.params.id;
 const pn = parsePhoneNumber(number, { regionCode: countryCode });

 if (!pn.valid) {
  return res.status(400).json({ message: invalidNumber });
 }

 const nationalNumber = pn.number.national.replace(/\s+/g, "");

 const dbData = await getIdentity(nationalNumber);
 if (dbData) {
  await logView(number);
  return res.status(200).json(dbData);
 }

 const accountCode = getTelcoCode(nationalNumber);
 const paystack = await stack(nationalNumber, accountCode, res);
 const info = await caller(pn, res);
 const transformer = JSON.parse(info);
 const truecaller = transformer.data;

 if (paystack === undefined || stackNotFound) {
  return res.status(204).json({ message: notFound });
 }

 const output = {
  name: paystack.account_name ? paystack.account_name : null,
  account_number: paystack.account_number ? paystack.account_number : null,
  phone: nationalNumber ? nationalNumber : null,
  rfc3966: pn.number.rfc3966 ? pn.number.rfc3966 : null,
  bank: paystack.bank_id ? getTelcoName(paystack.bank_id) : null,
  country: pn?.regionCode ? getCountryName.of(pn.regionCode) : null,
  carrier: nationalNumber ? getTelcoName(paystack.bank_id) : null,
  other_name:
   truecaller[0].name === null ? null : transformText(truecaller[0].name),
  email:
   truecaller[0].internetAddresses.length === 0
    ? null
    : truecaller[0].internetAddresses[0].id,
  image: truecaller[0].image === undefined ? randomImage : truecaller[0].image,
  gender: truecaller[0].gender === null ? null : truecaller[0].gender,
  score: truecaller[0].score === null ? null : truecaller[0].score,
  e164Format:
   truecaller[0].phones.length === 0
    ? null
    : truecaller[0].phones[0].e164Format,
  numberType:
   truecaller[0].phones.length === 0
    ? null
    : truecaller[0].phones[0].numberType,
  countryCode:
   truecaller[0].phones.length === 0
    ? null
    : truecaller[0].phones[0].countryCode,
  paystackPayload: paystack,
  telegramPayload: truecaller[0],
 };

 addIdentity(output);
 return res.status(200).json(output);
};

export { getID };
