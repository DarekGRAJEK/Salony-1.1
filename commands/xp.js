const exp = require("../modules/xp.js");
const discord = require("discord.js");

module.exports = class xp {
    constructor(){
            this.name = 'xp',
            this.alias = ['x'],
            this.usage = '?xp'
    }
 
    async run(bot, message, args) {
            
            exp.findOne({
                Serverid: message.guild.id,
                id: message.author.id
            }, (err, exp) => {
                if(err) console.log(err);
                let newexp = new discord.RichEmbed()
                .setTitle(message.author.username + " - Stats")
                .setDescription("Player Exp & Level")
                .addField("Level:", exp.level)
                .addField("Exp:", exp.xp)
                .setFooter("Need Exp To Next Level:" + ` ${exp.next}`);

             message.channel.send(newexp).then(msg => {msg.delete(5000)});
            });
        
    }
}