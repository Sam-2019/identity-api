import sha1 from "sha1";
import axios from "axios";
import moment from "moment";
import {
 HELLIO_CLIENT_ID,
 HELLIO_SENDER_ID,
 HELLIO_APP_SECRET,
} from "../../utils/config.js";

//Format date to support hasing
const utcMoment = moment.utc();
const currentDateTime = utcMoment.format("YYYYMMDDHH");

const hashedAuthKey = sha1(
 HELLIO_CLIENT_ID + HELLIO_APP_SECRET + currentDateTime
);

async function smsHellio({ from = HELLIO_SENDER_ID, to, message }) {
 if (to === "" || message === "") return;
 
 try {
  const { data } = await axios.post("https://api.helliomessaging.com/v2/sms", {
   senderId: from,
   msisdn: to,
   message: message,
   authKey: hashedAuthKey,
   clientId: HELLIO_CLIENT_ID,
  });

  console.log(data);
 } catch (error) {
  console.error(error.data);
 }
}

export { smsHellio };

// smsHellio("to", "message");
