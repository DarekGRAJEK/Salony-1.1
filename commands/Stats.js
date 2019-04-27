const exp = require("../modules/stats.js");
const discord = require("discord.js");
const so = require("../modules/serveroptions.js");

module.exports = class stats {
    constructor() {
        this.name = 'profile',
            this.alias = ['pf'],
            this.usage = '?profile'
    }

    async run(bot, message, args) {
        so.findOne({
            Serverid: message.guild.id
        }, (err, sop) => {
            if (err) console.log(err);
            if (sop.leveling === "no" && sop.money === "no") {
                return message.reply("The Modney Module And Leveling Modue is Disabled! Please to contact with Owner to Enable the Modules.");
            }
        });
        exp.findOne({
            Serverid: message.guild.id,
            id: message.author.id
        }, (err, exp) => {
            if (err) console.log(err);
            let newexp = new discord.RichEmbed()
                .setTitle(message.author.username + " - Stats")
                .setDescription("Player Server Profil")
                .addField("Level:", exp.level)
                .addField("Exp:", exp.xp)
                .addField("Money:", exp.money)
                .addField("SRank:", exp.RankBot)
                .setFooter("Need Exp To Next Level:" + ` ${exp.next}`);

            message.channel.send(newexp).then(msg => { msg.delete(10000) });
        });

    }
}