const NIMBLE = process.env.NIMBLE;
const DEV_DB = process.env.DEV_DB;
const PROD_DB = process.env.PROD_DB;
const AUTH_KEY = process.env.AUTH_KEY;
const NODE_ENV = process.env.NODE_ENV;
const BOT_TOKEN = process.env.BOT_TOKEN;
const TRUECALLER = process.env.TRUECALLER;
const TWITTER_API_KEY = process.env.TWITTER_API_KEY;
const HELLIO_CLIENT_ID = process.env.HELLIO_CLIENT_ID;
const HUBTEL_CLIENT_ID = process.env.HUBTEL_CLIENT_ID;
const HELLIO_SENDER_ID = process.env.HELLIO_SENDER_ID;
const HUBTEL_SENDER_ID = process.env.HUBTEL_SENDER_ID
const HELLIO_APP_SECRET = process.env.HELLIO_APP_SECRET;
const HUBTEL_CLIENT_SECRET = process.env.HUBTEL_CLIENT_SECRET;
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
const TWITTER_API_KEY_SECRET = process.env.TWITTER_API_KEY_SECRET;
const TWITTER_ACCESS_TOKEN_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET;

const NOTIFY = (port) => {
 console.log(
  NODE_ENV === "production"
   ? `server live`
   : `server live on http://localhost:${port}`
 );
};

export {
 NIMBLE,
 DEV_DB,
 NOTIFY,
 PROD_DB,
 AUTH_KEY,
 NODE_ENV,
 BOT_TOKEN,
 TRUECALLER,
 TWITTER_API_KEY,
 HELLIO_CLIENT_ID,
 HUBTEL_CLIENT_ID,
 HELLIO_SENDER_ID,
 HUBTEL_SENDER_ID,
 HELLIO_APP_SECRET,
 HUBTEL_CLIENT_SECRET,
 TWITTER_ACCESS_TOKEN,
 TWITTER_API_KEY_SECRET,
 TWITTER_ACCESS_TOKEN_SECRET,
};
