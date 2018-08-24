const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    await message.delete();
    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setDescription("A Help Menu In This Server! More Help Option e.g. $coins help")
    .addField("Admin&Moderator Tools", " ban | kick | addrole | removerole | tempmute | say")
    .addField("Users Tools", "help | coins | level | shop | serverinfo | botinfo | buy | pay | report")
    .addField("Fun&Games", "8-ball");
    message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});
}

module.exports.help = {
    name: "help"
}