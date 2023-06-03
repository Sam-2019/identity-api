import { start } from "repl";
import "./loadEnv.js";
import { NODE_ENV } from "./utils/config.js";
import { connectDB } from "./db/index.js";
import { replServices } from "./services/repls/index.js";

function consoleIntro(r) {
 console.log("------------------------------------");
 r.displayPrompt();
 console.log(`To exit, type .exit & press enter`);
 r.displayPrompt();
 console.log("------------------------------------");
 r.displayPrompt();
 console.log(`To reload, type .clear & press enter`);
 r.displayPrompt();
 console.log("------------------------------------");
 r.displayPrompt();
 console.log(`Ready 🚀`);
 r.displayPrompt();
 console.log("------------------------------------");
 r.displayPrompt();
}

function setContext(ctx) {
 replServices.forEach((service) => {
  Object.defineProperty(ctx, service.key, {
   configurable: false,
   enumerable: true,
   value: service.value,
  });
 });
}

const options = {
 ignoreUndefined: true,
 useColors: true,
 terminal: true,
 prompt: `(${NODE_ENV}) $ `,
 input: process.stdin,
 output: process.stdout,
};

const runConsole = async () => {
 connectDB();

 const r = start(options);

 consoleIntro(r);
 setContext(r.context);

 // exit
 r.on("exit", () => {
  console.log("shutting down...!");
  process.exit();
 });

 //  reload
 r.on("reset", () => {
  setContext, console.log("Repl reload!");
 });
};

runConsole();