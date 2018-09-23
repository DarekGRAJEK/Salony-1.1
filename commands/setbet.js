const Discord = require("discord.js");
const fs = require("fs");
let bets = require("../bets.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  await message.delete();
  let Bet = 9;
  let betset = args.join(" ");
  if (betset  <= Bet) return message.replay("You muss give number equal or big than 10");
  if(!bets[message.author.id]){
    bets[message.author.id] = {
      bet: 10
    };
  }
  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;

  let uCoins = bets[message.author.id].bet;

  uCoins = betset;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(random)
  .setDescription("You new bet in arcades.")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

    fs.writeFile("./bets.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    })
}

module.exports.help = {
  name: "setbet"
}