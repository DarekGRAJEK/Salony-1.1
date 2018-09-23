const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  await message.delete();
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  if(args[0] == "help"){
    message.reply("Usage: !coins");
    return;
  }


  let uCoins = coins[message.author.id].coins;

  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(random)
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "coins"
}