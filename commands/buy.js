const Discord = require("discord.js");
let coins = require("../coins.json");
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let mBuy = message.guild.membermessage.mentions.users.first() || message.guild.members.get(args[0]);
    let mTo = args.join(" ").slice(22);
    let gAdmin = message.guild.roles.find(`name`, "!!!Admin!!!");
    let gVip = message.guild.roles.find(`name`, "VIP");
    let gGracz = message.guild.roles.find(`name`, "!!!Gracz!!!");
    let gDobryGracz = message.guild.roles.find(`name`, "!!!dobry gracz!!!");
    let gNoob = message.guild.roles.find(`name`, "Noob");
    let gmoderator = message.guild.roles.find(`name`, "!!!Moderator!!!");
    let gYotuber = message.guild.roles.find(`name`, "Youtuber");
    let uCoins = coins[message.author.id].coins;
    let MAdmin = "100000000";
    let MMod = "1000000";
    let MVip = "100000";
    let MGracz = "10";
    let MDbGracz = "100";
    let MYt = "6000";
    let MNoob = "1";

    if(!coins[message.author.id]){
        coins[message.author.id] = {
          coins: 0
        };
    }
    fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    });


    if (mTo == "Admin" && uCoins == MAdmin)
    { 
        await(mBuy.addRole(gAdmin.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MAdmin
        };
      
    }else if (mto == "Moderator" && uCoins == MMod)
    {
        await(mBuy.addRole(gmoderator.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MMod
        };
        
    }else if (mto == "Dobry Gracz" && uCoins == MDbGracz)
    {
        await(mBuy.addRole(gDobryGracz.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MDbGracz
        };
       
    }else if (mto == "Noob" && uCoins == MNoob)
    {
        await(mBuy.addRole(gNoob.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MNoob
        };
        
    }else if (mto == "Gracz" && uCoins == MGracz)
    {
        await(mBuy.addRole(gGracz.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MGracz
        };
        
    }else if (mto == "Vip" && uCoins == MVip)
    {
        await(mBuy.addRole(gVip.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MVip
        };
        
    }else if (mto == "Youtuber" && uCoins == MYt)
    {
        await(mBuy.addRole(gYotuber.id));
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MYt
        };
        
    } else {
        message.replay("You do not have enough money");
    }
}


module.exports.help = {
    name: "buy"
}