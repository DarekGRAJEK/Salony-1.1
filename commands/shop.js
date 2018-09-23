const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!shop
  if(args[0] == "help"){
    message.reply("Usage: !shop");
    return;
  }

  await message.delete();
  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;

  let coinEmbed = new Discord.RichEmbed()
  .setColor(random)
  .setTitle("Server Shop - W.I.P.")
  //.addField("Rank Admin:", "100000000$")
  //.addField("Rank Noob:", "1$")
  //.addField("Rank Vip:", "100000$")
  //.addField("Rank Gracz:", "10$")
  //.addField("Rank Dobry Gracz:", "100$")
  //.addField("Rank Youtuber:", "6000$")
  //.addField("Rank Moderator:", "1000000$");

  message.channel.send(coinEmbed).then(msg => {msg.delete(20000)});
}

module.exports.help = {
  name: "shop"
}