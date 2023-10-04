import Paystack from "paystack-api";
import truecallerjs from "truecallerjs";
import { TRUECALLER } from "../utils/config.js";

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
    return { message: error.error.message, data: null };
  }
}

async function caller(internationalNumber, regionCode) {
  const searchData = {
    number: internationalNumber,
    countryCode: regionCode,
    installationId: TRUECALLER,
    output: "JSON",
  };

  try {
    const response = await truecallerjs.search(searchData);
    const { data } = response.json();

    return {
      message: null,
      data: data[0],
    };
  } catch (error) {
    return {
      message: error,
      data: null,
    };
  }
}

export { stack, caller };
