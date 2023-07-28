import axios from "axios";
import {
 MSMPUSHER_SENDER_ID,
 MSMPUSHER_PUBLICKEY,
 MSMPUSHER_PRIVATEKEY,
} from "../../utils/config.js";
import { addReceipt } from "../../db/repository/sms.js";

async function smsPusher({ from = MSMPUSHER_SENDER_ID, to, message }) {
 if (to === "" || message === "") return;

 const provider = "sms_pusher";

 try {
  const response = await axios.post("https://api.msmpusher.net/v1/send", {
   privatekey: MSMPUSHER_PRIVATEKEY,
   publickey: MSMPUSHER_PUBLICKEY,
   sender: from,
   numbers: to,
   message,
  });

  addReceipt(to, message, from, provider, response);
 } catch (e) {
  addReceipt(to, message, from, provider, e);
 }
}
export { smsPusher };

// smsPusher({ to: "to", message: "message" });
