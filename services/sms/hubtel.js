import axios from "axios";
import {
 HUBTEL_CLIENT_ID,
 HUBTEL_SENDER_ID,
 HUBTEL_CLIENT_SECRET,
} from "../../utils/config.js";

async function smsHubtel({ from = HUBTEL_SENDER_ID, to, message }) {
 if (to === "" || message === "") return;

 try {
  const { data } = await axios.get(
   "https://devp-sms03726-api.hubtel.com/v1/messages/send",
   {
    params: {
     From: from,
     To: to,
     Content: message,
     ClientId: HUBTEL_CLIENT_ID,
     ClientSecret: HUBTEL_CLIENT_SECRET,
    },
   }
  );
  console.log(data);
 } catch (error) {
  console.error(error.response.data);
 }
}

export { smsHubtel };

// smsHubtel({ to: "to", message: "message" });
