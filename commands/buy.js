const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    let mBuy = message.author.user.client
    let mTo = args.join(" ").slice(22);
    let gAdmin = message.guild.roles.find(`name`, "!!!Admin!!!");
    let gVip = message.guild.roles.find(`name`, "VIP");
    let gGracz = message.guild.roles.find(`name`, "!!!Gracz!!!");
    let gDobryGracz = message.guild.roles.find(`name`, "!!!dobry gracz!!!");
    let gNoob = message.guild.roles.find(`name`, "Noob");
    let gmoderator = message.guild.roles.find(`name`, "!!!Moderator!!!");
    let gYotuber = message.guild.roles.find(`name`, "Youtuber");
    let uCoins = coins[message.author.id].coins;

    if(!coins[message.author.id]){
        coins[message.author.id] = {
          coins: 0
        };
    }


    if (mTo == "Admin" && uCoins == "100000000")
    { 
        await(mBuy.addRole(gAdmin.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - "100000000"
          };
    }else if (mto == "Moderator" && uCoins == "1000000")
    {
        await(rMember.addRole(gmoderator.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - "1000000"
          };
    }else if (mto == "Dobry Gracz" && uCoins == "100")
    {
        await(rMember.addRole(gDobryGracz.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - "100"
          };
    }else if (mto == "Noob" && uCoins == "1")
    {
        await(rMember.addRole(gNoob.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - "1"
          };
    }else if (mto == "Gracz" && uCoins == "10")
    {
        await(rMember.addRole(gGracz.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - "10"
          };
    }else if (mto == "Vip" && uCoins == "100000")
    {
        await(rMember.addRole(gVip.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - "100000"
          };
    }else if (mto == "Youtuber" && uCoins == "6000")
    {
        await(rMember.addRole(gYotuber.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - "6000"
          };
    } else {
        message.replay("You do not have enough money");
    }
}


module.exports.help = {
    name: "buy"
}