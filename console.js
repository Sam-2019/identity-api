import { start } from "repl";
import "./loadEnv.js";
import { NODE_ENV } from "./utils/config.js";
import { connectDB } from "./db/index.js";
import Identity from "./db/identity.js";

const run = async () => {
 connectDB();

 const r = start({
  ignoreUndefined: true,
  useColors: true,
  terminal: true,
  prompt: `(${NODE_ENV}) $ `,
  input: process.stdin,
  output: process.stdout,
 });

 r.displayPrompt();
 console.log(`Ready 🚀`);
 r.displayPrompt();
 console.log(`To exit, type .exit & press enter`);
 r.displayPrompt();

 r.context.text = Identity.text();
 r.context.User = new Identity();

 // exit
 r.on("exit", () => {
  console.log('Received "exit" event from repl!');
  console.log("shutting down...!");
  process.exit();
 });
};

run();