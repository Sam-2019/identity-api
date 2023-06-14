import { webLookup } from "../id.js";

class WebLookup {
 async get_identity(data) {
  if (data === undefined || "") {
   console.log("Please provide a mobile number");
   return;
  }

  await webLookup({ data, httpView: false });
 }
}
export default WebLookup;
