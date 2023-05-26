import cron from "node-cron";
import { sendTweet } from "./twitter.js";

var task = cron.schedule(
 "30 9 * * *",
 function () {
  sendTweet();
 },
 {
  scheduled: true,
  timezone: "Africa/Accra",
 }
);

export { task };
