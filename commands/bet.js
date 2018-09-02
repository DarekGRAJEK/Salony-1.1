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
  
  
  let uCoins = bets[message.author.id].bet;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .setDescription("You bet in arcades.")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

  }
  fs.writeFile("./bets.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
}

module.exports.help = {
  name: "bet"
}