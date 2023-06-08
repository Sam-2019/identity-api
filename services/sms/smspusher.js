import axios from "axios";
import {
 MSMPUSHER_SENDER_ID,
 MSMPUSHER_PUBLICKEY,
 MSMPUSHER_PRIVATEKEY,
} from "../../utils/config.js";

async function smsPusher({ from = MSMPUSHER_SENDER_ID, to, message }) {
 try {
  const response = await axios.post("https://api.msmpusher.net/v1/send", {
   privatekey: MSMPUSHER_PRIVATEKEY,
   publickey: MSMPUSHER_PUBLICKEY,
   sender: from,
   numbers: to,
   message,
  });

  console.log(response);
 } catch (e) {
  console.log(e);
 }
}
export { smsPusher };

// smsPusher({ to: "to", message: "message" });
