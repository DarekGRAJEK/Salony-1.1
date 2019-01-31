const Discord = require("discord.js")
const modules = require("../modules/module.js")
module.exports = class inventory {
    constructor() {
        this.name = 'inv',
            this.alias = ['i'],
            this.usage = '?inv'
    }

    async run(bot, message, args) {

        modules.findOne({
            idserver: message.guild.id,
            idplayer: message.author.id
        }, (err, mod) => {
            if (err) console.log(err);
            let Color = Math.floor(Math.random() * 999999) + 1;
            let random = "#" + Color;
            let numberpage = parseInt(1);
            start();
            function start() {
                numberpage = parseInt(1);
                let inventory = new Discord.RichEmbed()
                    .setTitle("Iventory")
                    .setDescription("Your inventory.")
                    .setColor(random)
                    .addField("Exclusive items", "segment: (ex)")
                    .addField("Limited items", "segment: (lm)")
                    .addField("Legendery items", "segment: (le)")
                    .addField("Epic items", "segment: (ec)")
                    .addField("Rare items", "segment: (re)")
                    .addField("Uncommon items", "segment: (uc)")
                    .addField("Common items", "segment: (cm)")
                    .addField("Ores", "segment: (ore)");
                message.channel.send(inventory).then(msg => { msg.delete(10000) });
                const filter = m => m.author.id === message.author.id;
                message.reply("Please write a segment to see picked catalog! (cancel - canceling the progress.)").then(r => r.delete(10000));
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    let oprioned = collected.first().content;
                    if (oprioned === "ex") {
                        ex();
                    } else if (oprioned === "lm") {
                        li();
                    } else if (oprioned === "le") {
                        le();
                    } else if (oprioned === "ec") {
                        ec();
                    } else if (oprioned === "re") {
                        re();
                    } else if (oprioned === "uc") {
                        uc();
                    } else if (oprioned === "cm") {
                        cm();
                    } else if (oprioned === "ore") {
                        ore();
                    } else if (oprioned === "cancel") {
                        return message.reply("Canceled Progress By You.")
                    } else {
                        return message.reply("ERROR! or wrong segment!")
                    }
                }).catch(err => {
                    console.log(err);
                    return message.reply("Time Out!").then(r => r.delete(4000));
                    
                });
            }

            function ore() {
                if (numberpage === 1) {
                    IOre();
                } else {
                    message.reply("ERROR!");
                }
            }

            function IOre() {
                let ored = new Discord.RichEmbed()
                    .setTitle("Ores")
                    .setDescription("Your inventory. (exit to exit process. | back to return mainlist.")
                    .setColor(random)
                    .addField("Iron ore ", mod.id1)
                    .addField("Tin ore", mod.id4)
                    .addField("Copper ore", mod.id3)
                    .addField("Gold ore", mod.id5)
                    .addField("Titan ore", mod.id9)
                    .addField("Quarc ore", mod.id8)
                    .addField("Rock", mod.id0)
                    .setFooter("page 1/1");
                message.channel.send(ored).then(r => r.delete(10000));
                const filter = m => m.author.id === message.author.id;
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    let dex = collected.first().content;
                    if (dex === "exit") {
                        return message.reply("Exited Process!")
                    } else if (dex === "back") {
                        start();
                    } else if (parseInt(dex) >= 1) {
                        numberpage = parseInt(dex);
                        ore();
                    } else {
                        return message.reply("ERROR! or wrong page!")
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));
                });
            }

            function cm() {
                if (numberpage === 1) {
                    Icm();
                } else {
                    message.reply("ERROR!");
                }
            }

            function Icm() {
                let ored = new Discord.RichEmbed()
                    .setTitle("Common items")
                    .setDescription("Your inventory. (exit to exit process. | back to return mainlist.")
                    .setColor(random)
                    .addField("Stone", mod.id31)
                    .addField("Coal", mod.id7)
                    .addField("Iron ingot", mod.id32)
                    .addField("Tin ingot", mod.i33)
                    .addField("Copper ingot", mod.id34)
                    .addField("Gear", mod.id101)
                    .addField("???", "0")
                    .setFooter("page 1/1");
                message.channel.send(ored).then(r => r.delete(10000));
                const filter = m => m.author.id === message.author.id;
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    let dex = collected.first().content;
                    if (dex === "exit") {
                        return message.reply("Exited Process!")
                    } else if (dex === "back") {
                        start();
                    } else if (parseInt(dex) >= 1) {
                        numberpage = parseInt(dex);
                        cm();
                    } else {
                        return message.reply("ERROR! or wrong page!")
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));
                });
            }
            function uc() {
                if (numberpage === 1) {
                    Iuc();
                } else {
                    message.reply("ERROR!");
                }
            }

            function Iuc() {
                let ored = new Discord.RichEmbed()
                    .setTitle("Uncommon items")
                    .setDescription("Your inventory. (exit to exit process. | back to return mainlist.")
                    .setColor(random)
                    .addField("Gold ingot", mod.id36)
                    .addField("Quartz ingot", mod.id37)
                    .addField("Steel ingot", mod.id38)
                    .addField("Machete", mod.id102)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .setFooter("page 1/1");
                message.channel.send(ored).then(r => r.delete(10000));
                const filter = m => m.author.id === message.author.id;
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    let dex = collected.first().content;
                    if (dex === "exit") {
                        return message.reply("Exited Process!")
                    } else if (dex === "back") {
                        start();
                    } else if (parseInt(dex) >= 1) {
                        numberpage = parseInt(dex);
                        uc();
                    } else {
                        return message.reply("ERROR! or wrong page!")
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));
                });
            }
            function re() {
                if (numberpage === 1) {
                    Ire();
                } else {
                    message.reply("ERROR!");
                }
            }

            function Ire() {
                let ored = new Discord.RichEmbed()
                    .setTitle("Rare items")
                    .setDescription("Your inventory. (exit to exit process. | back to return mainlist.")
                    .setColor(random)
                    .addField("Titan ingot", mod.id35)
                    .addField("Electrium ingot", mod.id39)
                    .addField("Sword", mod.id103)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .setFooter("page 1/1");
                message.channel.send(ored).then(r => r.delete(10000));
                const filter = m => m.author.id === message.author.id;
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    let dex = collected.first().content;
                    if (dex === "exit") {
                        return message.reply("Exited Process!")
                    } else if (dex === "back") {
                        start();
                    } else if (parseInt(dex) >= 1) {
                        numberpage = parseInt(dex);
                        re();
                    } else {
                        return message.reply("ERROR! or wrong page!")
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));
                });
            }
            function ec() {
                if (numberpage === 1) {
                    Iec();
                } else {
                    message.reply("ERROR!");
                }
            }

            function Iec() {
                let ored = new Discord.RichEmbed()
                    .setTitle("Epic items")
                    .setDescription("Your inventory. (exit to exit process. | back to return mainlist.")
                    .setColor(random)
                    .addField("Diamond", mod.id2)
                    .addField("Emerald", mod.id6)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .setFooter("page 1/1");
                message.channel.send(ored).then(r => r.delete(10000));
                const filter = m => m.author.id === message.author.id;
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    let dex = collected.first().content;
                    if (dex === "exit") {
                        return message.reply("Exited Process!")
                    } else if (dex === "back") {
                        start();
                    } else if (parseInt(dex) >= 1) {
                        numberpage = parseInt(dex);
                        ec();
                    } else {
                        return message.reply("ERROR! or wrong page!")
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));
                });
            }
            function le() {
                if (numberpage === 1) {
                    Ile();
                } else {
                    message.reply("ERROR!");
                }
            }

            function Ile() {
                let ored = new Discord.RichEmbed()
                    .setTitle("Legendary items")
                    .setDescription("Your inventory. (exit to exit process. | back to return mainlist.")
                    .setColor(random)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .setFooter("page 1/1");
                message.channel.send(ored).then(r => r.delete(10000));
                const filter = m => m.author.id === message.author.id;
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    let dex = collected.first().content;
                    if (dex === "exit") {
                        return message.reply("Exited Process!")
                    } else if (dex === "back") {
                        start();
                    } else if (parseInt(dex) >= 1) {
                        numberpage = parseInt(dex);
                        le();
                    } else {
                        return message.reply("ERROR! or wrong page!")
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));
                });
            }
            function li() {
                if (numberpage === 1) {
                    Ili();
                } else {
                    message.reply("ERROR!");
                }
            }

            function Ili() {
                let ored = new Discord.RichEmbed()
                    .setTitle("Limited items")
                    .setDescription("Your inventory. (exit to exit process. | back to return mainlist.")
                    .setColor(random)
                    .addField("signature CreazyPL", mod.id401)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .setFooter("page 1/1");
                message.channel.send(ored).then(r => r.delete(10000));
                const filter = m => m.author.id === message.author.id;
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    let dex = collected.first().content;
                    if (dex === "exit") {
                        return message.reply("Exited Process!")
                    } else if (dex === "back") {
                        start();
                    } else if (parseInt(dex) >= 1) {
                        numberpage = parseInt(dex);
                        li();
                    } else {
                        return message.reply("ERROR! or wrong page!")
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));
                });
            }
            function ex() {
                if (numberpage === 1) {
                    Iex();
                } else {
                    message.reply("ERROR!");
                }
            }

            function Iex() {
                let ored = new Discord.RichEmbed()
                    .setTitle("Exlusive items")
                    .setDescription("Your inventory. (exit to exit process. | back to return mainlist.")
                    .setColor(random)
                    .addField("Bot author's signature", mod.id700)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .addField("???", 0)
                    .setFooter("page 1/1");
                message.channel.send(ored).then(r => r.delete(10000));
                const filter = m => m.author.id === message.author.id;
                message.channel.awaitMessages(filter, { max: 1, time: 20000 }).then(collected => {
                    let dex = collected.first().content;
                    if (dex === "exit") {
                        return message.reply("Exited Process!")
                    } else if (dex === "back") {
                        start();
                    } else if (parseInt(dex) >= 1) {
                        numberpage = parseInt(dex);
                        ex();
                    } else {
                        return message.reply("ERROR! or wrong page!")
                    }
                }).catch(err => {
                    return message.reply("Time Out!").then(r => r.delete(4000));
                });
            }
        });
    }
}