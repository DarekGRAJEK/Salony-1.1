const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    if(args[0] == "help"){
        message.reply("Usage: !botinfo");
       return;
    }

    let bicon = bot.user.avatarURL;
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor(random)
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Prefix (conventional) is", "**$**")
    .addField("Created by", "DarekGRAJEK")
    .addField("Version:", "1.5.0");

    message.channel.send(botembed);

}
 module.exports.help = {
    name: "botinfo"
}