import {
  faqs,
  salutations,
  salutMessage,
  welcomeMessage,
  just_questions,
  unsupported_message,
} from "./constant.js";
import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../../utils/config.js";
import {
  logView,
  addRecord,
  findRecord,
} from "../../db/repository/telegraf.js";

export const bot = new Telegraf(BOT_TOKEN);

const filterByQuestion = (input, context) => {
  if (!input) return;

  const result = faqs.filter(
    (el) => el.question.toLowerCase() === input.toLowerCase()
  );

  getOrLog(context);
  return result[0].answer;
};

const getOrLog = async (ctx) => {
  const userID = ctx.update.message.chat.id;
  const botID = ctx.botInfo.id;
  const question = ctx.update.message.text;

  const getRecord = await findRecord(userID, question);
  if (!getRecord) {
    await addRecord({
      userID: userID,
      botID: botID,
      question: question,
      userInfo: JSON.stringify(ctx.update.message.chat),
      botInfo: JSON.stringify(ctx.botInfo),
    });
  } else {
    await logView(userID, botID, question);
  }
};

bot.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log("Response time: %sms", ms);
});

bot.hears(just_questions, async (ctx) => {
  const question = ctx.update.message.text;
  const { entities } = ctx.message;

  try {
    const findMatch = filterByQuestion(question, ctx);
    return ctx.reply(findMatch, {
      entities,
      parse_mode: "Markdown",
    });
  } catch (error) {
    return ctx.reply(unsupported_message);
  }
});

bot.start((ctx) => {
  const username = ctx.message.chat.first_name;
  return ctx.reply(welcomeMessage(username));
});

bot.help((ctx) => {
  const username = ctx.message.chat.first_name;
  return ctx.reply(welcomeMessage(username));
});

bot.hears(salutations, (ctx) => {
  const username = ctx.message.chat.first_name;
  return ctx.reply(salutMessage(username));
});

// bot.catch(async (err, ctx) => {
// console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
// });

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
