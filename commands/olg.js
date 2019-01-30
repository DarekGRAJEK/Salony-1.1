const Discord = require("discord.js")
const soption = require("../modules/serveroptions.js")
const stats = require("../modules/stats.js")
module.exports = class olg {
    constructor() {
        this.name = 'olg',
            this.alias = ['ol'],
            this.usage = '?olg'
    }

    async run(bot, message, args) {
        message.delete();
        if (args[0] == "help") {
            message.reply("Usage: !olg <text>");
            return;
        }
        stats.findOne({
            Serverid: message.guild.id,
            id: message.author.id
        }, (err, st) => {
            if (err) console.log(err);
            if (st.RankBot != "Admin" && st.RankBot != "Owner" && st.RankBot != "BotDev") return message.reply("You don't have permission.");
        }); let annmessage = args.slice(1).join(" ");
        let Color = Math.floor(Math.random() * 999999) + 1;
        let random = "#" + Color;

        let reportEmbed = new Discord.RichEmbed()
            .setTitle(`Ogłoszenie - ${message.author.username}`)
            .setThumbnail(message.author.avatarURL)
            .setColor(random)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp(message.createdAt)
            .setDescription(annmessage);
        soption.findOne({
            Serverid: message.guild.id
        }, (err, so) => {
            let reportschannel = message.guild.channels.find(`name`, `${so.annChannel}`);
            if (!reportschannel) return message.channel.send("Couldn't find announcement channel");

            reportschannel.send(reportEmbed);
        });
    }
}