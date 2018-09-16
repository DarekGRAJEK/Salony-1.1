const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.avatarURL;
let botembed = new Discord.RichEmbed()
.setDescription("Bot Information")
.setColor("#01330e")
.setThumbnail(bicon)
.addField("Bot Name", bot.user.username)
.addField("Prefix (conventional) is", "**$**")
.addField("Created by", "DarekGRAJEK")
.addField("Version:", "1.5.0");

return message.send(botembed);

}
 module.exports.help = {
    name: "botinfo"
}