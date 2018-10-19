const Discord = require("discord.js");
let invt = require("../inventory.json");
let fs = require("fs");


module.exports.run = async (bot, message, args) => {

    message.delete();
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

    let replies = ["rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","tin","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","diamont","diamont","diamont","diamont","diamont","diamont","diamont","emerald","emerald","emerald","emerald","emerald","emerald","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","quarc","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan","titan",];
    let result = Math.floor((Math.random()* replies.length));



    if (replies[result] == "rock") {
        invt[message.author.id].id0 = invt[message.author.id].id0 + parseInt(1)
        message.reply("Get Rock");
    } else if (replies[result] == "coal"){
        invt[message.author.id].id7 = invt[message.author.id].id7 + parseInt(1)
        message.reply("Get Coal")
    } else if (replies[result] == "gold"){
        invt[message.author.id].id5 = invt[message.author.id].id5 + parseInt(1)
        message.reply("Get Gold Ore")
    } else if (replies[result] == "emerald") {
        invt[message.author.id].id6 = invt[message.author.id].id6 + parseInt(1)
        message.reply("Get Emerald")
    } else if (replies[result] == "diamont") {
        invt[message.author.id].id2 = invt[message.author.id].id2 + parseInt(1) 
        message.reply("Get Diamond")
    } else if (replies[result == "titan"]) {
        invt[message.author.id].id9 = invt[message.author.id].id9 + parseInt(1)
        message.reply("Get Titan Ore")
    } else if (replies[result] == "copper") {
        invt[message.author.id].id3 = invt[message.author.id].id3 + parseInt(1)
        message.reply("Get Copper Ore")
    } else if (replies[result] == "tin") {
        invt[message.author.id].id4 = invt[message.author.id].id4 + parseInt(1)
        message.reply("Get Tin Ore")
    } else if (replies[result] == "quarc") {
        invt[message.author.id].id8 = invt[message.author.id].id8 + parseInt(1)
        message.reply("Get Quarc Ore")
    } else if (replies[result] == "iron") {
        invt[message.author.id].id1 = invt[message.author.id].id1 + parseInt(1)
        message.reply("Get Iron Ore")
    }

    fs.writeFile("./inventory.json", JSON.stringify(invt), (err) => {
        if(err) cosole.log(err)
    });
    
}

module.exports.help = {
    name: "dig"
}