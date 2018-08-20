const Discord = require("discord.js");
let coins = require("../coins.json");
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let mBuy = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let mto = args.join(" ").slice(22);
    let gAdmin = message.guild.roles.find(`name`, "! ! ! Admin ! ! !");
    let gVip = message.guild.roles.find(`name`, "VIP");
    let gGracz = message.guild.roles.find(`name`, "! ! ! Gracz ! ! !");
    let gDobryGracz = message.guild.roles.find(`name`, "! ! ! dobry gracz ! ! !");
    let gNoob = message.guild.roles.find(`name`, "Noob");
    let gmoderator = message.guild.roles.find(`name`, "! ! ! Moderator ! ! !");
    let gYotuber = message.guild.roles.find(`name`, "Youtuber");
    let uCoins = coins[message.author.id].coins;
    let MAdmin = 100000000;
    let MMod = 1000000;
    let MVip = 100000;
    let MGracz = 10;
    let MDbGracz = 100;
    let MYt = 6000;
    let MNoob = 1;

    if(!coins[message.author.id]){
        coins[message.author.id] = {
          coins: 0
        };
     } 
    Console.log(uCoins, ":", MAdmin);

    if (mto == "admin")
    { 
        await(mBuy.addRole(gAdmin.id));
        if (uCoins = MAdmin) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MAdmin
           };
        } 
      
    }else if (mto == "moderator")
    {
        await(mBuy.addRole(gmoderator.id));
        if ( uCoins = MMod) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MMod
        };
       } 
    }else if (mto == "dobry gracz")
    {
        await(mBuy.addRole(gDobryGracz.id));
        if (uCoins == MDbGracz) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MDbGracz
        };
      } 
    }else if (mto == "noob")
    {
        await(mBuy.addRole(gNoob.id));
        if (uCoins == MNoob) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MNoob
        };
       } 
    }else if (mto == "gracz")
    {
        await(mBuy.addRole(gGracz.id));
        if (uCoins == MGracz) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MGracz
        };
       } 
    }else if (mto == "vip")
    {
        await(mBuy.addRole(gVip.id));
        if (uCoins == MVip) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MVip
        };
       } 
    }else if (mto == "youtuber")
    {
        await(mBuy.addRole(gYotuber.id));
        if (uCoins == MYt) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins - MYt
        };
       } 
    } else {
        message.reply("You do not have enough money");
    }
}


module.exports.help = {
    name: "buy"
}