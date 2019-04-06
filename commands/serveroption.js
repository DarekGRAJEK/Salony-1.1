const sopt = require("../modules/serveroptions.js");
const stats = require("../modules/stats.js");
const Discord = require("discord.js");

module.exports = class serveroption {
    constructor() {
        this.name = 'soption',
            this.alias = ['so'],
            this.usage = '?soption'
    }

    async run(bot, message, args) {
        message.delete();
        stats.findOne({
            Serverid: message.guild.id
        }, (err, stat) => {
            if (err) console.log(err);
            if (stat.RankBot === "Owner" || stat.RankBot === "BotDev") {
                menuho();
            } else {
               return message.reply("You don't have permision!");
            }
        });

        function menuho() {
            const filter = m => m.author.id === message.author.id;
            let Color = Math.floor(Math.random() * 999999) + 1;
            let random = "#" + Color;
            message.reply("Please write a segment to change! (or Cancel to canceled the process)").then(r => r.delete(10000));
            sopt.findOne({
                Serverid: message.guild.id
            }, (err, sopts) => {
                if (err) console.log(err);
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle("Server Settings")
                    .setColor(random)
                    .setDescription("All Options to change or not! (The segment is for example: ann)")
                    .addField("Annoucemet Channel:", `${sopts.annChannel} (ann)`)
                    .addField("Log Channel:", `${sopts.botlog} (log)`)
                    .addField("Report Channel:", `${sopts.report} (report)`)
                    .addField("Join Notification", `${sopts.inserver} (join)`)
                    .addField("Left Notification", `${sopts.outserver} (left)`);
                message.channel.send(helpEmbed).then(r => r.delete(15000));
            });
            message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                if (collected.first().content === "ann") {
                    ann();
                } else if (collected.first().content === "log") {
                    logsed();
                } else if (collected.first().content === "join") {
                    joined();
                } else if (collected.first().content === "left") {
                    outed();
                } else if (collected.first().content === "cancel") {
                    return message.reply("You canceled the process!")
                } else if (collected.first().content === "report") {
                    reported();
                } else {
                    return message.reply("Error or Bad Segment!");
                }
            }).catch(err => {
                return message.reply("Time Out!").then(r => r.delete(4000));
            });
        };


        function ann() {
            sopt.findOne({
                Serverid: message.guild.id
            }, (err, sopts) => {
                if (err) console.log(err);
                const filter = m => m.author.id === message.author.id;
                let Color = Math.floor(Math.random() * 999999) + 1;
                let random = "#" + Color;
                message.reply("Please write a new variable! (or Cancel to canceled the process!)").then(r => r.delete(10000));
                let newlet = new Discord.RichEmbed()
                    .setTitle("Annoucement Channel")
                    .setColor(random)
                    .setDescription("The Segment!")
                    .addField("Old:", `${sopts.annChannel}`)
                    .addField("New:", `...`);
                message.channel.send(newlet).then(r => r.delete(10000));
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    if (collected.first().content === "cancel") {
                        return message.reply("You canceled the process!")
                    } else if (collected.first().content != null) {
                        let reportschannel = message.guild.channels.find(`name`, `${collected.first().content}`);
                        if (!reportschannel) return channel.reply("ERROR! Couldn't find channel. Shutdowned process!");
                        sopts.annChannel = collected.first().content;
                        sopts.save().catch(err => console.log(err));
                        message.reply("The segment has been changed!");
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));

                });
            });
        };

        function logsed() {
            sopt.findOne({
                Serverid: message.guild.id
            }, (err, sopts) => {
                if (err) console.log(err);
                const filter = m => m.author.id === message.author.id;
                let Color = Math.floor(Math.random() * 999999) + 1;
                let random = "#" + Color;
                message.reply("Please write a new variable! (or Cancel to canceled the process!)").then(r => r.delete(10000));
                let newlet = new Discord.RichEmbed()
                    .setTitle("Log Channel")
                    .setColor(random)
                    .setDescription("The Segment!")
                    .addField("Old:", `${sopts.botlog}`)
                    .addField("New:", `...`);
                message.channel.send(newlet).then(r => r.delete(10000));
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    if (collected.first().content === "cancel") {
                        return message.reply("You canceled the process!")
                    } else if (collected.first().content != null) {
                        let reportschannel = message.guild.channels.find(`name`, `${collected.first().content}`);
                        if (!reportschannel) return channel.reply("ERROR! Couldn't find channel. Shutdowned process!");
                        sopts.botlog = collected.first().content;
                        sopts.save().catch(err => console.log(err));
                        message.reply("The segment has been changed!");
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));

                });
            });
        };

        function joined() {
            sopt.findOne({
                Serverid: message.guild.id
            }, (err, sopts) => {
                if (err) console.log(err);
                const filter = m => m.author.id === message.author.id;
                let Color = Math.floor(Math.random() * 999999) + 1;
                let random = "#" + Color;
                message.reply("Please write a new variable! (or Cancel to canceled the process!)").then(r => r.delete(10000));
                let newlet = new Discord.RichEmbed()
                    .setTitle("Join Event")
                    .setColor(random)
                    .setDescription("The Segment!")
                    .addField("Old:", `${sopts.inserver}`)
                    .addField("New:", `...`);
                message.channel.send(newlet).then(r => r.delete(10000));
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    if (collected.first().content === "cancel") {
                        return message.reply("You canceled the process!")
                    } else if (collected.first().content === "yes" || collected.first().content === "no") {
                        sopts.inserver = collected.first().content;
                        sopts.save().catch(err => console.log(err));
                        message.reply("The segment has been changed!");
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));
                });
            });
        }

        function outed() {
            sopt.findOne({
                Serverid: message.guild.id
            }, (err, sopts) => {
                if (err) console.log(err);
                const filter = m => m.author.id === message.author.id;
                let Color = Math.floor(Math.random() * 999999) + 1;
                let random = "#" + Color;
                message.reply("Please write a new variable! (or Cancel to canceled the process!)").then(r => r.delete(10000));
                let newlet = new Discord.RichEmbed()
                    .setTitle("Left Event")
                    .setColor(random)
                    .setDescription("The Segment!")
                    .addField("Old:", `${sopts.outserver}`)
                    .addField("New:", `...`);
                message.channel.send(newlet).then(r => r.delete(10000));
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    if (collected.first().content === "cancel") {
                        return message.reply("You canceled the process!")
                    } else if (collected.first().content === "yes" || collected.first().content === "no") {
                        sopts.outserver = collected.first().content;
                        sopts.save().catch(err => console.log(err));
                        message.reply("The segment has been changed!");
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));

                });
            });
        };

        function reported() {
            sopt.findOne({
                Serverid: message.guild.id
            }, (err, sopts) => {
                if (err) console.log(err);
                const filter = m => m.author.id === message.author.id;
                let Color = Math.floor(Math.random() * 999999) + 1;
                let random = "#" + Color;
                message.reply("Please write a new variable! (or Cancel to canceled the process!)").then(r => r.delete(10000));
                let newlet = new Discord.RichEmbed()
                    .setTitle("Reported Channel")
                    .setColor(random)
                    .setDescription("The Segment!")
                    .addField("Old:", `${sopts.report}`)
                    .addField("New:", `...`);
                message.channel.send(newlet).then(r => r.delete(10000));
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    if (collected.first().content === "cancel") {
                        return message.reply("You canceled the process!")
                    } else if (collected.first().content != null) {
                        let reportschannel = message.guild.channels.find(`name`, `${collected.first().content}`);
                        if (!reportschannel) return channel.reply("ERROR! Couldn't find channel. Shutdowned process!");
                        sopts.report = collected.first().content;
                        sopts.save().catch(err => console.log(err));
                        message.reply("The segment has been changed!");
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));

                });
            });
        };
    }
}



