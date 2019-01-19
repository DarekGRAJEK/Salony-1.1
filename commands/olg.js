const Discord = require("discord.js")

module.exports = class olg {
    constructor(){
            this.name = 'olg',
            this.alias = ['ol'],
            this.usage = '?olg'
    }
 
async run(bot, message, args) {
    message.delete();
  if(args[0] == "help"){
    message.reply("Usage: !olg <text>");
    return;
  }
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission.");
  let annmessage = args.slice(1).join(" ");
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
}