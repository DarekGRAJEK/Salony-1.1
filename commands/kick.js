const Discord = require("discord.js")

module.exports = class kick {
    constructor(){
            this.name = 'kick',
            this.alias = ['kk'],
            this.usage = '?kick'
    }
 
    async run(bot, message, args) {
await message.delete();
  if(args[0] == "help"){
    message.reply("Usage: !ban <user> <reason>");
    return;
  }
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if(!bUser) return message.reply("I can't find this persone.");
  let bReason = args.slice(1).join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have permission.");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");
  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor(random)
  .addField("Kicked User", `${bUser} with ID ${bUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let kickChannel = message.guild.channels.find(`name`, "bot_logs");
  if(!kickChannel) return message.channel.send("Can't find incidents channel.");

  message.guild.member(bUser).kick(bReason);
  kickChannel.send(banEmbed);
}}