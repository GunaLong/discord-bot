require("dotenv").config();

const { env } = process;

module.exports = {
  PORT: env.PORT || 3000,
  DISCORD_MODE: env.DISCORD_MODE || "channel",
  DISCORD_BOT_TOKEN: env.DISCORD_BOT_TOKEN || "",
  DISCORD_CHANNEL_ID: env.DISCORD_CHANNEL_ID || "1057218343406420049",
  DISCORD_CHANNEL_MAX_MESSAGE: env.DISCORD_CHANNEL_MAX_MESSAGE || 10,
  DISCORD_FORUM_ID: env.DISCORD_FORUM_ID,
  OPEN_AI_API_KEY: env.OPEN_AI_API_KEY,
  OPEN_AI_GPT_MODEL: env.OPEN_AI_GPT_MODEL || "text-davinci-003",
  OPEN_AI_MAX_TOKENS: env.OPEN_AI_MAX_TOKENS || 1000,
  MAX_TEXT_LENGTH: env.MAX_TEXT_LENGTH || 1000,
};
