const stats = require("../modules/stats.js")
module.exports = class say {
  constructor() {
    this.name = 'say',
      this.alias = ['s'],
      this.usage = '?say'
  }

  async run(bot, message, args) {

    message.delete();
    if (args[0] == "help") {
      message.reply("Usage: !say <text>");
      return;
    }

    stats.findOne({
      Serverid: message.guild.id,
      id: message.author.id
    }, (err, st) => {
      if (err) console.log(err);
      if (st.RankBot != "Admin" && st.RankBot != "Owner" && st.RankBot != "BotDev") return message.reply("You don't have permission.");
    });
    let botmessage = args.slice(1).join(" ");

    message.channel.send(botmessage);
  }
}



