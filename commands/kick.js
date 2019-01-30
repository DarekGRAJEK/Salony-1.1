const Discord = require("discord.js")
const soption = require("../modules/serveroptions.js")
const stats = require("../modules/stats.js")
module.exports = class kick {
  constructor() {
    this.name = 'kick',
      this.alias = ['kk'],
      this.usage = '?kick'
  }

  async run(bot, message, args) {
    await message.delete();
    if (args[0] == "help") {
      message.reply("Usage: !ban <user> <reason>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if (!bUser) return message.reply("I can't find this persone.");
    let bReason = args.slice(1).join(" ").slice(22);
    stats.findOne({
      Serverid: message.guild.id,
      id: message.author.id
    }, (err, st) => {
      if (err) console.log(err);
      if (st.RankBot != "Admin" && st.RankBot != "Owner" && st.RankBot != "Mod" && st.RankBot != "BotDev") return message.channel.send("That person can't be banned!");
      if (st.RankBot != "Admin" && st.RankBot != "Owner" && st.RankBot != "Mod" && st.RankBot != "BotDev") return message.reply("You don't have permission.");
    });
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

    let banEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor(random)
      .addField("Kicked User", `${bUser} with ID ${bUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", bReason);
    soption.findOne({
      Serverid: message.guild.id
    }, (err, so) => {
      if (err) console.log(err);
      let kickChannel = message.guild.channels.find(`name`, `${so.botlog}`);
      if (!kickChannel) return message.channel.send("Can't find incidents channel.");

      message.guild.member(bUser).kick(bReason);
      kickChannel.send(banEmbed);
    });
  }
}