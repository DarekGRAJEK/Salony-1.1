const Discord = require("discord.js");
const moneyd = require("../modules/money.js");

module.exports = class coins {
    constructor(){
            this.name = 'money',
            this.alias = ['m'],
            this.usage = '?money'
    }
 
    async run(bot, message, args) {


let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
 
  

  if(args[1] == "help"){
    message.reply("Usage: !coins");
    return;
  }
 
   
        
        if (!pUser) {
            moneyd.findOne({
                Serverid: message.guild.id,
                id: message.author.id
            }, (err, moneir) => {
                if(err) console.log(err);
            let uCoins = moneir.money
        
            let Color = Math.floor(Math.random() * 999999) + 1;
            let random = "#" + Color;
          
            let coinEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor(random)
            .addField("💸", uCoins);
          
            message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
            
        });
        } else {
            moneyd.findOne({
                Serverid: message.guild.id,
                id: pUser.id
            }, (err, moneyu) => {
                if(err) console.log(err);
            let Color = Math.floor(Math.random() * 999999) + 1;
            let random = "#" + Color;
        
            let coinEmbed = new Discord.RichEmbed()
            .setAuthor(pUser.user.username)
            .setColor(random)
            .addField("💸", moneyu.money);
        
            message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
            });
 
        }
    }  
}
