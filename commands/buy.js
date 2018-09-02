const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let mto = args.join(" ");
    let mbuy = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
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
    let UserCoin = coins[message.author.id].coins;
    
    if(!coins[message.author.id]){
        coins[message.author.id] = {
          coins: 0
        };
    } 

    if (mto == "admin" && uCoins >= MAdmin)
    { 
        await(mBuy.addRole(gAdmin.id));
        coins[message.author.id].coins = UserCoin - MAdmin;
        message.reply("Congratulations! You bought Rank!");
    }else if(mto == "moderator" && uCoins >= MMod)
    {
        await(mBuy.addRole(gmoderator.id));
        coins[message.author.id].coins = UserCoin - MMod;
        message.reply("Congratulations! You bought Rank!");
    }else if(mto == "dobry gracz" && uCoins >= MDbGracz)
    {
        await(mBuy.addRole(gDobryGracz.id));
        coins[message.author.id].coins = UserCoin - MDbGracz;
        message.reply("Congratulations! You bought Rank!");
    }else if(mto == "noob" && uCoins >= MNoob)
    {
        await(mBuy.addRole(gNoob.id));
        coins[message.author.id].coins = UserCoin - MNoob;
        message.reply("Congratulations! You bought Rank!");
    }else if(mto == "gracz" && uCoins >= MGracz)
    {
        await(mBuy.addRole(gGracz.id));
        coins[message.author.id].coins = UserCoin - MGracz;
        message.reply("Congratulations! You bought Rank!");
    }else if(mto == "vip" && uCoins >= MVip)
    {
        await(mBuy.addRole(gVip.id));
        coins[message.author.id].coins = UserCoin - MVip;
        message.reply("Congratulations! You bought Rank!");
    }else if(mto == "youtuber" && uCoins >= MYt)
    {
        await(mBuy.addRole(gYotuber.id));
        coins[message.author.id].coins = UserCoin - MYt;
        message.reply("Congratulations! You bought Rank!");
    } else {
        message.reply("You do not have enough money or bad rank name.");
    }
    fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    });
}


module.exports.help = {
    name: "buy"
}