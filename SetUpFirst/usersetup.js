const statsed = require("../modules/stats.js");
const so = require("../modules/serveroptions.js")
const Discord = require('discord.js');
module.exports = function (message) {
    this.user = function () {
        so.findOne({
            Serverid: message.guild.id
        }, (err, sop) => {
            if (err) console.log(err);
            statsed.findOne({
                Serverid: message.guild.id,
                id: message.author.id
            }, (err, exp) => {
                if (err) console.log(err);
                if (!exp && message.author.id != "535791952193388545") {
                    if (message.author.id === message.guild.ownerID) {
                        const newExp = new statsed({
                            Serverid: message.guild.id,
                            id: message.author.id,
                            xp: 0,
                            level: 1,
                            next: 100,
                            money: 0,
                            RankBot: "Owner"
                        })
                        newExp.save().catch(err => console.log(err));
                        soption.findOne({
                            Serverid: message.guild.id
                        }, (err, sopt) => {
                            if (err) console.log(err);
                            if (!sopt) {
                                const newsopt = new soption({
                                    Serverid: message.guild.id,
                                    annChannel: "announcements",
                                    botlog: "logs",
                                    inserver: "no",
                                    outserver: "no",
                                    report: "reports",
                                    leveling: "no",
                                    games: "no",
                                    diggame: "no",
                                    money: "no"
                                })
                                newsopt.save().catch(err => console.log(err));
                            }
                        });
                    } else if (message.author.id != message.guild.ownerID && message.author.id === "215721725638213634") {
                        const newExp = new statsed({
                            Serverid: message.guild.id,
                            id: message.author.id,
                            xp: 0,
                            level: Infinity,
                            next: Infinity,
                            money: 9999999999999999999999999999999,
                            RankBot: "BotDev"
                        })
                        newExp.save().catch(err => console.log(err));
                    } else {
                        if (sop.money === "yes" || sop.leveling === "yes") {
                            const newExp = new statsed({
                                Serverid: message.guild.id,
                                id: message.author.id,
                                xp: 0,
                                level: 1,
                                next: 100,
                                money: 0,
                                RankBot: "User"
                            })
                            newExp.save().catch(err => console.log(err));
                        }
                    }
                } else {
                    if (sop.money === "yes" && sop.leveling === "yes") {
                        let Addxp = Math.ceil(Math.random() * 17);
                        let getexp = exp.xp;
                        let level = exp.level;
                        exp.xp = getexp + Addxp;
                        let defneed = exp.next;
                        if (defneed <= getexp) {
                            let defex = parseInt(defneed) * parseFloat(2.635);
                            exp.next = parseInt(defex);
                            exp.xp = parseInt(getexp) * parseInt(0);
                            exp.level = parseInt(level) + parseInt(1);
                            let lvlup = new Discord.RichEmbed()
                                .setTitle("Level Up!")
                                .setColor("#FF00FF")
                                .addField("New Level", exp.level);

                            message.channel.send(lvlup).then(msg => { msg.delete(5000) });
                        }
                        let moneyadd = Math.floor(Math.random() * 100) + 1;
                        let moneymuss = Math.floor(Math.random() * 100) + 1;
                        let getmoney = exp.money;
                        if (moneyadd == moneymuss) {
                            let defex = parseInt(getmoney) + parseInt(moneyadd);
                            exp.money = parseInt(defex);
                            let coinEmbed = new Discord.RichEmbed()
                                .setAuthor(message.author.username)
                                .setColor("#0000FF")
                                .addField(`💸💸`, `${moneyadd} coins added!`);

                            message.channel.send(coinEmbed).then(msg => { msg.delete(5000) });
                        }
                        exp.save().catch(err => console.log(err));
                    }
                }
            });
        });
    }
}