import {
  welcomeMessage,
  faqs,
  salutations,
  unsupported_message,
} from "./constant.js";
import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../../utils/config.js";
import {
  addRecord,
  findRecord,
  logView,
} from "../../db/repository/telegraf.js";

export const bot = new Telegraf(BOT_TOKEN);

const filterByQuestion = (input) => {
  if (!input) return;

  const result = faqs.filter(
    (el) => el.question.toLowerCase() === input.toLowerCase()
  );
  return result[0].answer;
};

bot.on("text", async (ctx) => {
  const text = ctx.message.text;
  const username = ctx.message.chat.first_name;
  const userID = ctx.update.message.chat.id;
  const botID = ctx.botInfo.id;
  const question = ctx.update.message.text;

  const { entities } = ctx.message;

  const createInfo = {
    userID: userID,
    botID: botID,
    question: question,
    userInfo: ctx.update.message.chat,
    botInfo: ctx.botInfo,
  };

  const logInfo = {
    userID: userID,
    botID: botID,
  };

  try {
    if (salutations.includes(text)) {
      return ctx.reply(welcomeMessage(username));
    }

    const findMatch = filterByQuestion(text);
    if (findMatch) {
      await addRecord(createInfo);
    }

    const dbMatch = await findRecord(userID, question);
    if (dbMatch) {
      await logView(logInfo);
    }

    return ctx.reply(findMatch, {
      entities,
      parse_mode: "Markdown",
    });
  } catch (error) {
    ctx.reply(unsupported_message);
  }
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
