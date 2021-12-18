const Discord = require("discord.js");
const config = require("./config.json");
const Client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

Client.on("ready", () => {
  console.log("bot opérationnel");
});

const prefix = "!";

Client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  //!ping
  if (message.content === prefix + "ping") message.reply("pong !");
  else if (message.content === prefix + "help") {
    message.channel.send(
      "**__Les commandes du bot__**\n - !ping : renvoie pong"
    );
  }
});
