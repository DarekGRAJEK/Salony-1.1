const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!shop
  if(args[0] == "help"){
    message.reply("Usage: !shop");
    return;
  }
}

module.exports.help = {
    name: "roll"
}