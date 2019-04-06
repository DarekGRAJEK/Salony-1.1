const Discord = require("discord.js")

module.exports = class help {
    constructor() {
        this.name = 'help',
            this.alias = ['h'],
            this.usage = '?help'
    }

    async run(bot, message, args) {
        await message.delete();
        let Color = Math.floor(Math.random() * 999999) + 1;
        let random = "#" + Color;

        //    .addField("Admin&Moderator Tools", " ban | kick | addrole | removerole | tempmute | say | ogl | clear")
        //    .addField("Users Tools", "help | shop | serverinfo | botinfo | buy | pay | report")
        //    .addField("User Settings", "coins, level")
        //    .addField("Fun&Games", "8ball | flip");
        //    message.channel.send(helpEmbed).then(msg => {msg.delete(20000)});

        const filter = m => m.author.id === message.author.id;
        message.reply("Please write a option to see catalog! (for example: Owner)").then(r => r.delete(10000));
        let helpEmbed = new Discord.RichEmbed()
            .setTitle("Help Menu")
            .setColor(random)
            .setDescription("A Help Menu In This Server! More Help Option e.g. $coins help")
            .addField("Owner Tools", "Owner")
            .addField("Admin Tools", "Admin")
            .addField("Mod Tools", "Mod")
            .addField("User Tools", "User")
            .addField("Arcades", "Arcade")
            .addField("Fun", "Fun");
        message.channel.send(helpEmbed).then(msg => { msg.delete(20000) });
        message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {

            if (collected.first().content == "Owner" || collected.first().content == "owner") {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle("Owner Help Menu")
                    .setDescription("Menu For Only Owner.")
                    .addField("$addSRole", "Add Super Rank to users.")
                    .addField("$soption", "Server Settings.");
                message.channel.send(helpEmbed).then(msg => { msg.delete(20000) });
            }
            else if (collected.first().content == "admin" || collected.first().content == "Admin") {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle("Admin Help Menu")
                    .setDescription("Menu For Only Admins.")
                    .addField("$ogl", "To annouce other People.")
                    .addField("$say", "To say Bot your text.")
                    .addField("$givemoney", "To give a coins to account.")
                    .addField("$addrole", "To add User role.")
                    .addField("$removerole", "To remove User role.");
                message.channel.send(helpEmbed).then(msg => { msg.delete(20000) });
            } else if (collected.first().content == "Mod" || collected.first().content == "mod") {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle("Mod Help Menu")
                    .setDescription("Menu For Only Mods in Server")
                    .addField("$tempmute", "For Mute Users.")
                    .addField("$ban", "For Banning Users.")
                    .addField("$kick", "For Kick Users.")
                    .addField("$clear", "For Cleaning Chat with Message.");

                message.channel.send(helpEmbed).then(msg => { msg.delete(20000) });

            } else if (collected.first().content == "User" || collected.first().content == "user") {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle("User Help Menu")
                    .setDescription("Menu For Users")
                    .addField("$report", "For report Users")
                    .addField("$profile", "For Show your server profile.")
                    .addField("$botinfo", "For Look a bot information.")
                    .addField("$serverinfo", "For Look a Server  information.")
                    .addField("$shop", "Server shop")
                    .addField("$pay", "For Pay To User Money with Your Account.");
                message.channel.send(helpEmbed).then(msg => { msg.delete(20000) });

            } else if (collected.first().content == "Arcade" || collected.first().content == "arcade") {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle("Arcade Help Menu")
                    .setDescription("Menu with Server Games")
                    .addField("$dig", "For dig ore")
                    .addField("$flip", "For get some money.");
                message.channel.send(helpEmbed).then(msg => { msg.delete(20000) });

            } else if (collected.first().content == "Fun" || collected.first().content == "fun") {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle("Fun Help Menu")
                    .setDescription("Menu for Fun")
                    .addField("$8ball", "For divination.")
                    .addField("$roll", "Roll number from 1 to 6");
                message.channel.send(helpEmbed).then(msg => { msg.delete(20000) });

            } else {
                return message.reply("Canceled!").then(r => r.delete(4000));
            }

        }).catch(err => {
            return message.reply("Time Out!").then(r => r.delete(4000));
        });

    }
}