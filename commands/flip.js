const Discord = require("discord.js");
const errors = require("../utility/error.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {

  await message.delete();
  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;
  if(args[0] == "help"){
    message.reply("Usage: !flip <tails/eagle>");
    return;
  }
  
  let replies = ["tails", "eagle"];
  let result = Math.floor((Math.random()* replies.length));
  let PlaceBet = args[1];
  let eagle = "eagle";
  let tails = "tails";
  let PResult = replies[result]
  let x;
  let uCoins = coins[message.author.id].coins;
  console.log(`${args[0]} ; ${PResult}`);
  if (args[0] != tails && args[0] != eagle) return message.channel.send("Please write eagle or tails.");
  let ert = 9;
  console.log(`${ert} | ${PlaceBet}`);
  if (ert >= args[1]) return message.channel.send("Please write number greater or equal than 10!");
  if (uCoins < args[1]) return message.reply("You don't have money");
  if (args[1] <= 20) {x = 1.79}
  if (args[1] <= 50 && args[1] > 20) {x = 1.594}
  if (args[1] <= 75 && args[1] > 50) {x = 1.456}
  if (args[1] <= 100 && args[1] > 75) {x = 1.33}
  if (args[1] <= 1000 && args[1] > 100) {x = 1.139}
  if (args[1] >= 1001) {x = 1.09}
  if (PResult == args[0])
  {
    let wpo = parseInt(PlaceBet) * x;
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + parseInt(wpo)
    };

    let Winembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(random)
    .addField("Placed by you", args[0])
    .addField("Drawn", replies[result])
    .addField("Win/Lose", "WIN!!!")

    message.channel.send(Winembed);
  } else {
    coins[message.author.id].coins = uCoins - parseInt(PlaceBet);

    let Loseembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(random)
    .addField("Placed by you", args[0])
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