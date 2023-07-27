import cron from "node-cron";
import { tweet } from "./twitter.js";

var task = cron.schedule(
 "30 9 * * *",
 function () {
  tweet();
 },
 {
  scheduled: true,
  timezone: "Africa/Accra",
 }
);

export { task };
