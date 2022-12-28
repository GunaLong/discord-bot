const { Client, GatewayIntentBits } = require("discord.js");
const { openAiMessage } = require("../services/openai");
const { DISCORD_BOT_TOKEN } = require("../config");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  console.log("使用者發送的訊息：", message.content);
  if (message.author.bot) return; // 避免機器人互相回覆
  const response = await openAiMessage(message.content);
  message.reply(response);
});
// client.login(DISCORD_BOT_TOKEN);
