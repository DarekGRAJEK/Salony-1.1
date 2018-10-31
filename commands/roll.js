const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!shop
  if(args[0] == "help"){
    message.reply("Usage: !roll");
    return;
  }

  let rand = Math.floor(Math.random() * 6) + 1;

  if (rand == 1) {
    message.reply("Rolled number :one:")
  } else if (rand == 2){
    message.reply("Rolled number :two:")
  } else if (rand == 3){
    message.reply("Rolled number :three:")
  } else if (rand == 4){
      message.reply("Rolled number :four:")
  } else if (rand == 5){
    message.reply("Rolled number :five:")
  } else if (rand == 6){
    message.reply("Rolled number :six:")
  } else {
      message.reply("Error")
  }
}

module.exports.help = {
    name: "roll"
}