import { parsePhoneNumber } from "awesome-phonenumber";
import {
  getTelcoCode,
  getTelcoName,
  getTelcoNameII,
  invalidNumber,
  notFound,
} from "../utils/constants.js";
import {
  addIdentity,
  getIdentity,
  logView,
} from "../db/repository/identity.js";
import { transformText, getCountryName } from "../utils/transformer.js";
import { caller, stack } from "../utils/identity.js";
import { getRandomItem } from "../utils/randomizer.js";
import { responseType } from "../utils/responseView.js";

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

const webLookup = async ({ data, res, httpView = true }) => {
  const { transformedNumber, message } = validatePhoneNumber(data);

  if (message === invalidNumber) {
    return responseType(400, true, invalidNumber, res, httpView);
  }

  const nationalNumber = transformedNumber.number.national.replace(/\s+/g, "");
  const rfc3966 = transformedNumber.number.rfc3966;
  const internationalNumber = transformedNumber.number.e164;
  const regionCode = transformedNumber.regionCode;
  const dbData = await checkDB(nationalNumber);

  if (dbData.data) {
    return responseType(200, false, dbData.data, res, httpView);
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
    return responseType(200, true, notFound, res, httpView);
  }

  return responseType(
    200,
    false,
    external(paystack, truecaller, info),
    res,
    httpView
  );
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
  const name = paystack?.account_name || other_name;
  const phone = paystack?.account_number ?? info?.nationalNumber;
  const bank =
    getTelcoName(paystack?.bank_id) || getTelcoNameII(info?.nationalNumber);
  const carrier =
    getTelcoName(paystack?.bank_id) || getTelcoNameII(info?.nationalNumber);
  const email = truecaller?.internetAddresses
    ? truecaller?.internetAddresses[0]?.id
    : null;
  const numberType = truecaller?.phones
    ? truecaller?.phones[0]?.numberType
    : null;

  const result = {
    name,
    account_number: phone,
    bank,
    email,
    gender: truecaller?.gender,
    image,
    country,
    countryCode: info?.regionCode,
    rfc3966: info?.rfc3966,
    e164Format: info?.internationalNumber,
    numberType,
    carrier,
    score: truecaller?.score,
    telegramPayload: truecaller,
    paystackPayload: paystack,
  };

  addIdentity(result);
  return result;
};

export { webLookup };

// await webLookup({ data: req.params.id, res, httpView: true });
