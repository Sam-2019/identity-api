const PORT = process.env.PORT;
const NIMBLE = process.env.NIMBLE;
const DEV_DB = process.env.DEV_DB;
const PROD_DB = process.env.PROD_DB;
const AUTH_KEY = process.env.AUTH_KEY;
const NODE_ENV = process.env.NODE_ENV;
const BOT_TOKEN = process.env.BOT_TOKEN;
const TRUECALLER = process.env.TRUECALLER;

const NOTIFY = (instance, port) => {
 console.log(
  NODE_ENV === "production"
   ? `server live`
   : `server live on ${instance}://localhost:${port}`
 );
};

module.exports = {
 PORT,
 NIMBLE,
 DEV_DB,
 NOTIFY,
 PROD_DB,
 AUTH_KEY,
 NODE_ENV,
 BOT_TOKEN,
 TRUECALLER,
};
