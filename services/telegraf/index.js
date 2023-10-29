import { welcomeMessage, faqs } from "./constant.js";
import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../../utils/config.js";

export const bot = new Telegraf(BOT_TOKEN);

const filterByQuestion = (input) => {
  if (!input) return;

  const result = faqs.filter((el) => el.question === input);
  return result[0].answer;
};

bot.on("text", async (ctx) => {
  const text = ctx.message.text;

  try {
    const findMatch = filterByQuestion(text);
    return ctx.reply(findMatch);
  } catch (error) {
    ctx.reply("Unsupported questions");
  }
});

bot.hears("hi", (ctx) => {
  const username = ctx.message.chat.first_name;
  ctx.reply(welcomeMessage(username));
});
bot.hears("Hi", (ctx) => {
  const username = ctx.message.chat.first_name;
  ctx.reply(welcomeMessage(username));
});
bot.hears("hello", (ctx) => {
  const username = ctx.message.chat.first_name;
  ctx.reply(welcomeMessage(username));
});
bot.hears("Hello", (ctx) => {
  const username = ctx.message.chat.first_name;
  ctx.reply(welcomeMessage(username));
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
