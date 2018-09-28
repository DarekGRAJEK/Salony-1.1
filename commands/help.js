const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    await message.delete();
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

    let helpEmbed = new Discord.RichEmbed()

//    .addField("Admin&Moderator Tools", " ban | kick | addrole | removerole | tempmute | say | ogl | clear")
//    .addField("Users Tools", "help | shop | serverinfo | botinfo | buy | pay | report")
//    .addField("User Settings", "coins, level")
//    .addField("Fun&Games", "8ball | flip");
//    message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});


    if(args[0] == "adm" || args[0] == "Adm"){
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("Admin Help Menu")
        .setDescription("Menu For Only Admins.")
        .addField("ogl", "To annouce other People.")
        .addField("say", "To say Bot your text.")
        .addField("givemoney", "To give a coins to account.")
        .addField("addrole", "To add User role.")
        .addField("removerole", "To remove User role.");
        message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});
    } else if (args[0] == "Mod" || args[0] == "mod") {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("Mod Help Menu")
        .setDescription("Menu For Only Mods in Server")
        .addField("tempmute", "For Mute Users.")
        .addField("ban", "For Banning Users.")
        .addField("kick", "For Kick Users.")
        .addField("clear", "For Cleaning Chat with Message.")

        message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});

    } else if (args[0] == "User" || args[0] == "user") {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("User Help Menu")
        .setDescription("Menu For Users")
        .addField("report", "For report Users")
        .addField("botinfo", "For Look a bot information.")
        .addField("serverinfo", "For Look a Server  information.")
        .addField("shop", "Server shop")
        .addField("pay", "For Pay To User Money with Your Account.");
        message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});

    } else if (args[0] == "Setting" || args[0] == "setting") {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("User Setting Help Menu")
        .setDescription("Menu For Change User Setting")
        .addField("coins", "For Look Your State Money")
        .addField("level", "For Look Your State Level");
        message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});

    } else if (args[0] == "Arcade" || args[0] == "arcade") {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("Arcade Help Menu")
        .setDescription("Menu with Server Games")
        .addField("flip", "For get some money");
        message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});

    } else if (args[0] == "Fun" || args[0] == "fun") {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("Fun Help Menu")
        .setDescription("Menu for Fun")
        .addField("8ball", "For divination");
        message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});

    } else {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("Help Menu")
        .setColor(random)
        .setDescription("A Help Menu In This Server! More Help Option e.g. $coins help")
        .addField("Admin Tools", "$help Adm")
        .addField("Mod Tools", "$help Mod")
        .addField("User Tools", "$help User")
        .addField("User Settings", "$help Setting")
        .addField("Arcades", "$help Arcade")
        .addField("Fun", "$help Fun");
        message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});
    }




}

module.exports.help = {
    name: "help"
}