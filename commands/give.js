const Discord = require("discord.js");
let coins = require("../coins.json");
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
  //!coins
  await message.delete();
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  if(args[0] == "help"){
    message.reply("Usage: !givemoney <amount>");
    return;
  }

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;
  if(!args[1]){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + parseInt(args[0])
    };
    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(random)
    .addField("💸 Get:", args[0]);
   message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  } else {
    if(!coins[rUser.id]){
      coins[rUser.id] = {
        coins: 0
      };
    }
    coins[rUser.id] = {
      coins: coins[rUser.id].coins + parseInt(args[0])
    };
    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(random)
    .addField("💸 Give:", args[0])
    .addField("To:", rUser.user.username);
    message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });

}

module.exports.help = {
  name: "givemoney"
}