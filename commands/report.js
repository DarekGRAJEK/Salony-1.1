const Discord = require("discord.js")
const soption = require("../modules/serveroptions.js")
module.exports = class report {
    constructor() {
        this.name = 'report',
            this.alias = ['rt'],
            this.usage = '?report'
    }

    async run(bot, message, args) {
        await message.delete();
        if (args[1] == "help") {
            message.reply("Usage: !report <user> <reason>");
            return;
        }
        let Color = Math.floor(Math.random() * 999999) + 1;
        let random = "#" + Color;

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        if (!rUser) return errors.cantfindUser(channel);

        let reason = args.slice(1).join(" ").slice(50);

        let reportEmbed = new Discord.RichEmbed()
            .setDescription("Report")
            .setColor(random)
            .addField("Reported User", `${rUser} for ID: ${rUser.id}`)
            .addField("Reported By", `${message.author} for ID: ${message.author.id}`)
            .addField("Channel", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", reason);
        soption.findOne({
            Serverid: message.guild.id
        }, (err, so) => {
            if (err) console.log(err);
            let reportschannel = message.guild.channels.find(`name`, `${so.report}`);
            if (!reportschannel) return message.channel.send("Couldn't find reports channel");

            reportschannel.send(reportEmbed);
        });
    }
}