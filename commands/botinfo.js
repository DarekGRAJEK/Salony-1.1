const Discord = require("discord.js");

module.exports = class botinfo {
    constructor() {
        this.name = 'botinfo',
            this.alias = ['bi'],
            this.usage = '?botinfo'
    }

    async run(bot, message, args) {
        await message.delete();
        if (args[1] == "help") {
            message.reply("Usage: !botinfo");
            return;
        }

        let bicon = bot.user.avatarURL;
        let Color = Math.floor(Math.random() * 999999) + 1;
        let random = "#" + Color;

        let botembed = new Discord.RichEmbed()
            .setDescription("Bot Information")
            .setColor(random)
            .setThumbnail(bicon)
            .addField("Bot Name", bot.user.username)
            .addField("Prefix (conventional) is", "**$**")
            .addField("Created by", "DarekGRAJEK")
            .addField("Version:", "Alfa *1.7* (1.6.0)");

        message.channel.send(botembed);
    }
}