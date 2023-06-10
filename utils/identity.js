import Paystack from "paystack-api";
import truecallerjs from "truecallerjs";
import { TRUECALLER } from "../utils/config.js";
import { tooManyRequests } from "./constants.js";

const paystack = Paystack(process.env.NIMBLE);
async function stack(phone, accountCode) {
 try {
  const paystackData = await paystack.verification.resolveAccount({
   account_number: phone,
   bank_code: accountCode,
  });

  return {
   message: null,
   data: paystackData.data,
  };
 } catch (error) {
  return { data: null, message: error.error.message };
 }
}

async function caller(internationalNumber, regionCode) {
 try {
  const { responseStatus, errorResp, data } = await truecallerjs.searchNumber({
   number: internationalNumber,
   countryCode: regionCode,
   installationId: TRUECALLER,
   output: "JSON",
  });

  if (errorResp === tooManyRequests) {
   return {
    data: null,
    message: tooManyRequests,
   };
  }

  if (responseStatus === "error") {
   return {
    data: null,
    message: "error",
   };
  }

  const info = JSON.stringify(data, null, 2);
  const transformer = JSON.parse(info);

  return {
   message: null,
   data: transformer[0],
  };
 } catch (error) {
  return {
   data: null,
   message: error,
  };
 }
}

export { stack, caller };
