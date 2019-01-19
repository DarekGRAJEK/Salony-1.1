const Discord = require("discord.js");

module.exports = class addRole {
    constructor(){
            this.name = 'addrole',
            this.alias = ['addr'],
            this.usage = '?addrole'
    }
 
    async run(bot, message, args) {
  //!addrole @andrew Dog Person
  if(args[0] == "help"){
    message.reply("Usage: !addrole <user> <role name>");
    return;
  }
  await message.delete();
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have permission.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
  if(!rMember) return errors.cantfindUser(channel);
  let role = args.slice(1).join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}
}