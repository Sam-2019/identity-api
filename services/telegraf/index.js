import {
  welcomeMessage,
  faqs,
  salutations,
  unsupported_message,
} from "./constant.js";
import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../../utils/config.js";
import { addRecord, logView } from "../../db/repository/telegraf.js";

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
  const { entities } = ctx.message;

  const create = {
    chatID: "1",
    question: text,
  };

  const logger = {
    chatID: "1",
  };

  try {
    if (salutations.includes(text)) {
      return ctx.reply(welcomeMessage(username));
    }

    const findMatch = filterByQuestion(text);

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
