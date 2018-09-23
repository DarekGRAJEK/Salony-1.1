const Discord = require("discord.js");
const errors = require("../utility/error.js");
const fs = require("fs");
let coins = require("../coins.json");
let bets = require("../bets.json");

module.exports.run = async (bot, message, args) => {

  await message.delete();
  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;
  if(args[0] == "help"){
    message.reply("Usage: !flip <tails/eagle>");
    return;
  }
  
  let replies = ["tails", "eagle"];
  let jmessege = args.join(" ");
  let result = Math.floor((Math.random()* replies.length));
  let PlaceBet = bets[message.author.id].bet;
  let eagle = "eagle";
  let tails = "tails";
  let PResult = replies[result]
  let uCoins = coins[message.author.id].coins;
  let lost = uCoins - PlaceBet;
  let get =  uCoins + PlaceBet;
  console.log(`${get} || ${lost}`)
  console.log(`${jmessege} ; ${eagle} ; ${PResult}`);
  if (jmessege != tails && jmessege != eagle) return message.channel.send("Please write eagle or tails.");
  let ert = 9;
  console.log(`${ert} | ${PlaceBet}`);
  if (ert >= PlaceBet) return message.channel.send("Please write number greater or equal than 10! ($setbet)");
  if (uCoins < PlaceBet) return message.replay("You don't have money");
  
  if (PResult == jmessege)
  {
    let wpo = PlaceBet * 2;
    coins[message.author.id].coins = uCoins + wpo;

    let Winembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(random)
    .addField("Placed by you", jmessege)
    .addField("Drawn", replies[result])
    .addField("Win/Lose", "WIN!!!")

    message.channel.send(Winembed);
  } else {
    coins[message.author.id].coins = uCoins - PlaceBet;

    let Loseembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(random)
    .addField("Placed by you", jmessege)
    .addField("Drawn", replies[result])
    .addField('Win/Lose', "LOSE!!!")
    message.channel.send(Loseembed);
  }


  
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });

 
 
}


module.exports.help = {
    name: "flip"
  }