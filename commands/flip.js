const Discord = require("discord.js");
const moneyd = require("../modules/stats.js");
const so = require("../modules/serveroptions.js");

module.exports = class flip {
  constructor() {
    this.name = 'flip',
      this.alias = ['fp'],
      this.usage = '?flip'
  }

  async run(bot, message, args) {
    await message.delete();
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;
    if (args[1] == "help") {
      message.reply("Usage: !flip <tails/eagle> <ammount>");

      return;
    }
    so.findOne({
      Serverid: message.guild.id
    }, (err, sop) => {
      if (err) console.log(err);
      if (sop.games === "no") {
        return message.reply("The game module is disabed! Please contact with Owner to Enable!");
      }
    });
    let replies = ["tails", "eagle"];
    let result = Math.floor((Math.random() * replies.length));
    let PlaceBet = args[2];
    let eagle = "eagle";
    let tails = "tails";
    let PResult = replies[result]
    let x;
    moneyd.findOne({
      Serverid: message.guild.id,
      id: message.author.id
    }, (err, moneir) => {
      if (err) console.log(err);
      let uCoins = moneir.money;
      if (args[1] != tails && args[1] != eagle) return message.channel.send("Please write eagle or tails.");
      let ert = 9;
      if (ert >= args[2]) return message.channel.send("Please write number greater or equal than 10!");
      if (uCoins < args[2]) return message.reply("You don't have money");
      if (args[2] <= 20) { x = 0.68 }
      if (args[2] <= 50 && args[1] > 20) { x = 0.478 }
      if (args[2] <= 75 && args[1] > 50) { x = 0.345 }
      if (args[2] <= 100 && args[1] > 75) { x = 0.276 }
      if (args[2] <= 1000 && args[1] > 100) { x = 0.145 }
      if (args[2] >= 1001) { x = 0.078 }
      if (PResult == args[1]) {
        let wpo = parseInt(PlaceBet) * x;
        moneir.money = moneir.money + parseInt(wpo);

        let Winembed = new Discord.RichEmbed()
          .setAuthor(message.author.tag)
          .setColor(random)
          .addField("Placed by you", args[1])
          .addField("Drawn", replies[result])
          .addField("Win/Lose", "WIN!!!")

        message.channel.send(Winembed);

      } else {
        moneir.money = moneir.money - parseInt(PlaceBet);
        let Loseembed = new Discord.RichEmbed()
          .setAuthor(message.author.tag)
          .setColor(random)
          .addField("Placed by you", args[1])
          .addField("Drawn", replies[result])
          .addField('Win/Lose', "LOSE!!!")
        message.channel.send(Loseembed);

      }
      moneir.save().catch(err => console.log(err));
    });
  }
}