module.exports = class say {
    constructor(){
            this.name = 'say',
            this.alias = ['s'],
            this.usage = '?say'
    }
 
async run(bot, message, args) {

    message.delete();
  if(args[0] == "help"){
    message.reply("Usage: !say <text>");
    return;
  }

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission.");
  let botmessage = args.slice(1).join(" ");

  message.channel.send(botmessage);
}
}



