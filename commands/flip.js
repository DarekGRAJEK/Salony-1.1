const Discord = require("discord.js");
const errors = require("../utility/error.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {

  await message.delete();
  let replies = ["tails", "eagle"];

  let result = Math.floor((Math.random()* replies.length));
  let jmessege = args.join(" ");
  let emessege = args.join();
  let eagle = "eagle";
  let tails = "tails";
  let ert = 10;
  console.log(`${jmessege} ; ${eagle} ; ${result} | ${emessege}`);
  if (eagle != jmessege || jmessege != tails) return message.channel.send("Please write eagle or tails.");
  if (ert > emessege) return message.channel.send("Please write number greater or equal than 10!");
  
  if (result == jmessege)
  {
    let coin = emessege * 2;
    coins[message.author.id] = {
        coins: coins[message.author.id].coins + coin
        
    };

    let Winembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF0000")
    .addField("Placed by you", question)
    .addField("Drawn", replies[result])
    .addField("Win/Lose", "WIN!!!")
    message.channel.send(Winembed);
  } else {
    coins[message.author.id] = {
        coins: coins[message.author.id].coins + emessege
    };

    let Loseembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FFFFFF")
    .addField("Placed by you", question)
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