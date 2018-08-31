const Discord = require("discord.js");
const errors = require("../utility/error.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  let annmessage = args.join(" ");
  
      let reportEmbed = new Discord.RichEmbed()
    .setTitle(`Ogłoszenie - ${message.author.username}`)
    .setColor("#00FF00")
    .setTimestamp(message.createdAt)
    .setDescription(annmessage);

    let reportschannel = message.guild.channels.find(`name`, `ogłoszenia`);
    if(!reportschannel) return message.channel.send("Couldn't find announcement channel");

    reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "olg"
}