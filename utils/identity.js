import Paystack from "paystack-api";
import { searchNumber } from "truecallerjs";
import { TRUECALLER } from "../utils/config.js";

const paystack = Paystack(process.env.NIMBLE);
async function stack(phone, accountCode, res) {
 try {
  const paystackData = await paystack.verification.resolveAccount({
   account_number: phone,
   bank_code: accountCode,
  });

  return paystackData.data;
 } catch (error) {
  // res.status(500).json({ message: error.message });
 }
}

async function caller(pn, res) {
 try {
  var truecallerData = await searchNumber({
   number: pn.number.e164,
   countryCode: pn.regionCode,
   installationId: TRUECALLER,
   output: "JSON",
  });

  const info = JSON.stringify(truecallerData, null, 2);
  // const transformer = {
  //   id: info.data[0].id,
  //   name: info.data[0].name,
  //   image: info.data[0].image,
  //   gender: info.data[0].gender,
  //   internetAddresses: {
  //     email: info.data[0].internetAddresses[0].id,
  //     caption: info.data[0].internetAddresses[0].caption,
  //   },
  // };

  return info;
 } catch (error) {
  // res.status(500).json({ message: error.message });
 }
}

export { stack, caller };
