const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!shop
  await message.delete();

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#f4e802")
  .setTitle("Server Shop")
  .addField("Rank Admin: 100000000$")
  .addBlankField("Rank Noob: 1$", true)
  .addBlankField("Rank Vip: 100000$", true)
  .addBlankField("Rank Gracz: 10$", true)
  .addBlankField("Rank Dobry: Gracz 100$", true)
  .addBlankField("Rank Youtuber: 6000$", true)
  .addBlankField("Rank Moderator: 1000000$", true);

  message.channel.send(coinEmbed).then(msg => {msg.delete(20000)});
}

module.exports.help = {
  name: "shop"
}