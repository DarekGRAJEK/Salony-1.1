module.exports = class serverinfo {
    constructor(){
            this.name = 'serverinfo',
            this.alias = ['si'],
            this.usage = '?serverinfo'
    }
 
async run(bot, message, args) {
let sicon = message.guild.avatarURL;

let Color = Math.floor(Math.random() * 999999) + 1;
let random = "#" + Color;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Server Information")
      .setColor(random)
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("You Joined", message.member.joinedAt)
      .addField("Total Members", message.guild.memberCount);

      message.channel.send(serverembed).then(msg => {msg.delete(5000)});
}}