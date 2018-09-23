const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    await message.delete();
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setColor(random)
    .setDescription("A Help Menu In This Server! More Help Option e.g. $coins help")
    .addField("Admin&Moderator Tools", " ban | kick | addrole | removerole | tempmute | say | ogl | clear")
    .addField("Users Tools", "help | shop | serverinfo | botinfo | buy | pay | report")
    .addField("User Settings", "setbet, bet, coins, level")
    .addField("Fun&Games", "8ball | flip");
    message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});
}

module.exports.help = {
    name: "help"
}