const Discord = require("discord.js");
const Money = require("../modules/stats.js");
const so = require("../modules/serveroptions.js");

module.exports = class pay {
  constructor() {
    this.name = 'pay',
      this.alias = ['py'],
      this.usage = '?pay'
  }

  async run(bot, message, args) {
    //!pay @isatisfied 59345
    so.findOne({
      Serverid: message.guild.id
    }, (err, sop) => {
      if (err) console.log(err);
      message.delete();
      if (args[1] == "help") {
        message.reply("Usage: !pay <nick> <amounce>");
        return;
      }

      if (sop.money === "no") {
        return message.reply("This function is disabled! Please contact with Owner to enabled **Money Module**.")
      }

      let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
      if (!pUser) return message.reply("I can't find this persone.");
      Money.findOne({
        Serverid: message.guild.id,
        id: message.author.id
      }, (err, moneir) => {
        if (err) console.log(err);
        if (!moneyir.money) {
        return message.reply("You do not have any money!")
        }
        let pCoins = moneir.money;
        if (pCoins < args[0]) return message.reply("What you want to send costs you more than you have on your account.").then(msg => { msg.delete(5000) });

        moneir.money = pCoins - parseInt(args[1])

        moneir.save().catch(err => console.log(err));
      });

      Money.findOne({
        Serverid: message.guild.id,
        id: pUser.id
      }, (err, moneid) => {
        if (err) console.log(err);
        let sCoins = moneid.money;
        if (pCoins < args[0]) return;

        moneid.money = pCoins - parseInt(args[1])

        moneid.save().catch(err => console.log(err));
      });

      message.channel.send(`${message.author} pay to ${pUser} ${args[1]} $.`);
    });
  }
}