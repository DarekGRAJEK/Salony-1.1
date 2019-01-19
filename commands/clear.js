const Discord = require("discord.js")

module.exports = class ban {
    constructor(){
            this.name = 'ban',
            this.alias = ['bn'],
            this.usage = '?ban'
}
 
    async run(bot, message, args) {
await message.delete();
  if(args[1] == "help"){
    message.reply("Usage: !clear <amount>");
    return;
  }
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission.");
  if(!args[1]) return message.channel.send("No...");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}}