const express = require("express");
const { botMessages } = require("./services");
const { PORT, DISCORD_BOT_TOKEN } = require("./config");

const { discord } = require("./connection");
// const { botMessages } = require("./services");
console.log(DISCORD_BOT_TOKEN);
discord.login(DISCORD_BOT_TOKEN);

discord.once("ready", (c) => {
  // eslint-disable-next-line no-console
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

discord.on("messageCreate", async (message) => {
  if (message.author?.bot) return;

  botMessages(message);
});

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on ${PORT}`);
});
