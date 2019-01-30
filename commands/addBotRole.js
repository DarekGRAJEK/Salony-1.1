const Discord = require("discord.js")
const stats = require("../modules/stats.js")
module.exports = class help {
    constructor() {
        this.name = 'addSRole',
            this.alias = ['addSR'],
            this.usage = '?addSRole'
    }

    async run(bot, message, args) {
        if (args[1] === "help") {
            return message.reply("Usage: !addSRole <username> <SRole> (If you do not remember SRoles, then write $addSRole list)");
        } else if (args[1] === "list") {
            return message.reply("List: `Admin`, `Mod`, `Vip`, `User`");
        }
        stats.findOne({
            Serverid: message.guild.id,
            id: message.author.id
        }, (err, st) => {
            if (err) console.log(err);
            if (st.RankBot != "Owner" && st.RankBot != "BotDev") return message.reply("You don't have a permision.");
            if (st.RankBot === "Owner") {
                let srUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
                let srang = args[2];
                stats.findOne({
                    Serverid: message.guild.id,
                    id: srUser.id
                }, (err, sr) => {
                    if (err) console.log(err);
                    if (srang === "Admin" || srang === "Mod" || srang === "Vip" || srang === "User") {
                        sr.RankBot = srang;
                    }
                    sr.save().catch(err => console.log(err));
                });
            } else if (st.RankBot === "BotDev") {
                let srUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
                let srang = args[2];
                stats.findOne({
                    Serverid: message.guild.id,
                    id: srUser.id
                }, (err, sr) => {
                    if (err) console.log(err);
                    if (srang === "Admin" || srang === "Mod" || srang === "Vip" || srang === "User" || srang === "Owner") {
                        sr.RankBot = srang;
                    }
                    sr.save().catch(err => console.log(err));
                });
            }
        });

    }
}