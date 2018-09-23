const Discord = require("discord.js");
const errors = require("../utility/error.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(args[0] == "help"){
    message.reply("Usage: !ogl <text>");
    return;
  }
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  let annmessage = args.join(" ");
  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;
  
      let reportEmbed = new Discord.RichEmbed()
    .setTitle(`Ogłoszenie - ${message.author.username}`)
    .setThumbnail(message.author.avatarURL)
    .setColor(random)
    .setFooter(bot.user.username, bot.user.avatarURL) 
    .setTimestamp(message.createdAt)
    .setDescription(annmessage);

    let reportschannel = message.guild.channels.find(`name`, `ogłoszenia`);
    if(!reportschannel) return message.channel.send("Couldn't find announcement channel");

    reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "olg"
}