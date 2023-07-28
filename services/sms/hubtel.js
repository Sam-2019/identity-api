import axios from "axios";
import {
 HUBTEL_CLIENT_ID,
 HUBTEL_SENDER_ID,
 HUBTEL_CLIENT_SECRET,
} from "../../utils/config.js";
import { addReceipt } from "../../db/repository/sms.js";

async function smsHubtel({ from = HUBTEL_SENDER_ID, to, message, provider }) {
 if (to === "" || message === "") return;

 try {
  const { data } = await axios.get("https://smsc.hubtel.com/v1/messages/send", {
   params: {
    from: from,
    to: to,
    content: message,
    clientId: HUBTEL_CLIENT_ID,
    clientSecret: HUBTEL_CLIENT_SECRET,
   },
  });
  addReceipt(to, message, from, provider, data);
 } catch (error) {
  addReceipt(to, message, from, provider, error.response.data);
 }
}

export { smsHubtel };

// smsHubtel({ to: "to", message: "message" });
