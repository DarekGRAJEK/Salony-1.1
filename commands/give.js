const Discord = require("discord.js");
let coins = require("../coins.json");
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
  //!coins
  await message.delete();
  let money = args.join(" ");
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  if(args[0] == "help"){
    message.reply("Usage: !givemoney");
    return;
  }


  let uCoins = coins[message.author.id].coins;

  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;
  coins[message.author.id].coins = uCoins + money;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(random)
  .addField("💸 Get:", money);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "givemoney"
}