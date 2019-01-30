const Discord = require("discord.js");
const ms = require("ms");
const stats = require("../modules/stats.js")
module.exports = class tempmute {
  constructor() {
    this.name = 'tempmute',
      this.alias = ['tm'],
      this.usage = '?tempmute'
  }

  async run(bot, message, args) {


    //!tempmute @user 1s/m/h/d
    if (args[0] == "help") {
      message.reply("Usage: !tempmute <nick> <1s/m/h/d>");
      return;
    }

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    stats.findOne({
      Serverid: message.guild.id,
      id: message.author.id
    }, (err, st) => {
      if (err) console.log(err);
      if (st.RankBot != "Admin" && st.RankBot != "Owner" && st.RankBot != "Mod" && st.RankBot != "BotDev") return message.reply("Can't mute them!").then(m => m.delete(5000));

      if (st.RankBot != "Admin" && st.RankBot != "Owner" && st.RankBot != "Mod" && st.RankBot != "BotDev") return message.reply("You don't have permission.");
    });
    let muterole = message.guild.roles.find(`name`, "🔕🔇");
    //start of create role
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "🔕🔇",
          color: "#000000",
          permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[2];
    if (!mutetime) return message.reply("You didn't specify a time!").then(m => m.delete(5000));

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`).then(m => m.delete(5000));

    setTimeout(function () {
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> has been unmuted!`).then(m => m.delete(5000));
    }, ms(mutetime));


    //end of module
  }
}