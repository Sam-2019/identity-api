const { parsePhoneNumber } = require("awesome-phonenumber");
const { AUTH_KEY } = require("../utils/config");
const { getTelcoCode, getTelcoName } = require("../utils/constants");
const { stack, caller } = require("../utils/identity");
const { transformText, getCountryName } = require("../utils/transformer");
const { getRandomItem } = require("../utils/randomizer");
const { addIdentity, getIdentity } = require("../db/repository");

const getID = async (req, res) => {
 const randomImage = getRandomItem();
 const authorization = req.headers.authorization;

 if (authorization != AUTH_KEY) {
  return res.json({ message: "Konnichiwa" });
 }

 let countryCode = "GH";
 const number = req.params.id;
 const pn = parsePhoneNumber(number, { regionCode: countryCode });

 if (!pn.valid) {
  return res.status(400).send("Invalid number");
 }

 const updated = `0${pn.number.significant}`;

 const dbData = await getIdentity(updated);
 if (dbData) {
  return res.json(dbData);
 }

 const accountCode = getTelcoCode(updated);
 const paystack = await stack(updated, accountCode, res);
 const info = await caller(pn, res);
 const transformer = JSON.parse(info);
 const truecaller = transformer.data;

 const output = {
  name: paystack.account_name ? paystack.account_name : null,
  account_number: paystack.account_number ? paystack.account_number : null,
  phone: updated ? updated : null,
  rfc3966: pn.number.rfc3966 ? pn.number.rfc3966 : null,
  bank: paystack.bank_id ? getTelcoName(paystack.bank_id) : null,
  country: pn?.regionCode ? getCountryName.of(pn.regionCode) : null,
  carrier: updated ? getTelcoName(updated) : null,
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
 };

 addIdentity(output);
 return res.json(output);
};

module.exports = { getID };
