const Discord = require("discord.js");
const errors = require("../utility/error.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(args[0] == "help"){
    message.reply("Usage: !say <text>");
    return;
  }

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}