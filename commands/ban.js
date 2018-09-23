const Discord = require("discord.js");
const errors = require("../utility/error.js")


module.exports.run = async (bot, message, args) => {
  await message.delete();
  if(args[0] == "help"){
    message.reply("Usage: !ban <user> <reason>");
    return;
  }
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return errors.cantfindUser(channel);
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");
  let Color = Math.floor(Math.random() * 999999) + 1;
  let random = "#" + Color;

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor(random)
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let incidentchannel = message.guild.channels.find(`name`, "ban_logs");
  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
}

module.exports.help = {
  name: "ban"
}