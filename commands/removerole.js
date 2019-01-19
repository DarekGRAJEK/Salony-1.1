const Discord = require("discord.js")

module.exports = class removeRole {
    constructor(){
            this.name = 'removerole',
            this.alias = ['rrole'],
            this.usage = '?removerole'
    }
 
async run(bot, message, args) {

if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You don't have permission.");
  if(args[0] == "help"){
    message.reply("Usage: !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
  if(!rMember) return errors.cantfindUser(channel);
  let role = args.slice(1).join(" ").slice(22);
  if(!role) return message.reply("Specify a role!").then(m => m.delete(5000));
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return errors.notfindRole(message);

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.").then(m => m.delete(5000));
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, you lost the ${gRole.name} role.`)
  }catch(e){
    message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`).then(m => m.delete(5000));
  }
}
}
