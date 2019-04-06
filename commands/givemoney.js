const Discord = require("discord.js")
const moneyd = require("../modules/stats.js");
const stats = require("../modules/stats.js")
module.exports = class givemoney {
  constructor() {
    this.name = 'givemoney',
      this.alias = ['givem'],
      this.usage = '?givemoney'
  }

  async run(bot, message, args) {

    if (args[1] == "help") {
      message.reply("Usage: !givemoney <amount>");
      return;
    }
    stats.findOne({
      Serverid: message.guild.id,
      id: message.author.id
    }, (err, st) => {
      if (err) console.log(err);
      if (st.RankBot != "Admin" && st.RankBot != "Owner" && st.RankBot != "BotDev") return message.reply("You don't have permission.");
    });
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[2]));
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;
    if (!args[2]) {
      moneyd.findOne({
        Serverid: message.guild.id,
        id: message.author.id
      }, (err, moneir) => {
        if (err) console.log(err);
        moneir.money = moneir.money + parseInt(args[1])

        let coinEmbed = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setColor(random)
          .addField("💸 Get:", args[1]);
        message.channel.send(coinEmbed).then(msg => { msg.delete(5000) });
        moneir.save().catch(err => console.log(err));
      });
    } else {
      moneyd.findOne({
        Serverid: message.guild.id,
        id: rUser.id
      }, (err, moneyr) => {
        if (err) console.log(err);
        moneyr.money = moneyr.money + parseInt(args[1])
        let coinEmbed = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setColor(random)
          .addField("💸 Give:", args[1])
          .addField("To:", rUser.user.username);
        message.channel.send(coinEmbed).then(msg => { msg.delete(5000) });
        moneyr.save().catch(err => console.log(err));
      });
    }
  }
}