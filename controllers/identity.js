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
import {
  addIdentity,
  getIdentity,
  logView,
} from "../db/repository/identity.js";

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
  const paystack = await stack(nationalNumber, accountCode);

  const info = await caller(pn.number.e164, pn.regionCode);

  const truecaller = info.data;

  if (paystack.message === stackNotFound) {
    return res.status(204).json({ message: notFound });
  }

  const output = {
    name: paystack.data.account_name ? paystack.data.account_name : null,
    account_number: paystack.data.account_number
      ? paystack.data.account_number
      : null,
    phone: nationalNumber ? nationalNumber : null,
    rfc3966: pn.number.rfc3966 ? pn.number.rfc3966 : null,
    bank: paystack.data.bank_id ? getTelcoName(paystack.data.bank_id) : null,
    country: pn?.regionCode ? getCountryName.of(pn.regionCode) : null,
    carrier: nationalNumber ? getTelcoName(paystack.data.bank_id) : null,
    other_name:
      truecaller.name === null ? null : transformText(truecaller.name),
    email:
      truecaller.internetAddresses.length === 0
        ? null
        : truecaller.internetAddresses[0].id,
    image: truecaller.image === undefined ? randomImage : truecaller.image,
    gender: truecaller.gender === null ? null : truecaller.gender,
    score: truecaller.score === null ? null : truecaller.score,
    e164Format:
      truecaller.phones.length === 0 ? null : truecaller.phones[0].e164Format,
    numberType:
      truecaller.phones.length === 0 ? null : truecaller.phones[0].numberType,
    countryCode:
      truecaller.phones.length === 0 ? null : truecaller.phones[0].countryCode,
    paystackPayload: paystack,
    telegramPayload: truecaller,
  };

  addIdentity(output);
  return res.status(200).json(output);
};

export { getID };
