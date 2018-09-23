const Discord = require("discord.js");
const fs = require("fs");
let bets = require("../bets.json");

module.exports.run = async (bot, message, args) => {
  //!bet
  await message.delete();
  if(!bets[message.author.id]){
    bets[message.author.id] = {
      bet: 10
    };
  }
  if(args[0] == "help"){
    message.reply("Usage: !bet");
    return;
  }
  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;

  
  let uCoins = bets[message.author.id].bet;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(random)
  .setDescription("You bet in arcades.")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "bet"
}