const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!shop
  await message.delete();

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#f4e802")
  .setTitle("Server Shop")
  .addField("Rank Admin: 100000000$")
  .addField("Rank Noob: 1$")
  .addField("Rank Vip: 100000$")
  .addField("Rank Gracz: 10$")
  .addField("Rank Dobry: Gracz 100$")
  .addField("Rank Youtuber: 6000$")
  .addField("Rank Moderator: 1000000$");

  message.channel.send(coinEmbed).then(msg => {msg.delete(20000)});
}

module.exports.help = {
  name: "shop"
}