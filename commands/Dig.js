const Discord = require("discord.js");
let invt = require("../inventory.json");
let fs = require("fs");


module.exports.run = async (bot, message, args) => {

    message.delete();
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

    let replies = ["rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock", "coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal","coal", "rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock","rock", "iron","iron","iron","iron","iron","iron","iron","iron","iron","iron","copper","copper", "copper", "copper", "copper", "copper", "copper", "copper",  "gold", "gold","gold","gold","gold","gold","titna", "titna", "titna", "titna", "titna", "titna", "tin",  "tin",  "tin",  "tin",  "tin",  "tin",  "tin",  "tin",  "tin",  "tin",  "tin",  "tin",  "tin", "diamont", "quarc",  "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc","emerald"];
    let result = Math.floor((Math.random()* replies.length));



    if (replies[result] == "rock") {
        invt[message.author.id].rock = invt[message.author.id].rock + parseInt(1)
        message.reply("Get Rock");
    } else if (replies[result] == "coal"){
        invt[message.author.id].coal = invt[message.author.id].coal + parseInt(1)
        message.reply("Get Coal")
    } else if (replies[result] == "gold"){
        invt[message.author.id].goldore = invt[message.author.id].goldore + parseInt(1)
        message.reply("Get Gold Ore")
    } else if (replies[result] == "emerald") {
        invt[message.author.id].emerald = invt[message.author.id].emerald + parseInt(1)
        message.reply("Get Emerald")
    } else if (replies[result] == "diamont") {
        invt[message.author.id].diamond = invt[message.author.id].diamond + parseInt(1) 
        message.reply("Get Diamond")
    } else if (replies[result == "titan"]) {
        invt[message.author.id].titanore = invt[message.author.id].titanore + parseInt(1)
        message.reply("Get Titan Ore")
    } else if (replies[result] == "copper") {
        invt[message.author.id].copperore = invt[message.author.id].copperore + parseInt(1)
        message.reply("Get Copper Ore")
    } else if (replies[result] == "tin") {
        invt[message.author.id].tinore = invt[message.author.id].tinore + parseInt(1)
        message.reply("Get Rin Ore")
    } else if (replies[result] == "quarc") {
        invt[message.author.id].quarcore = invt[message.author.id].quarcore + parseInt(1)
        message.reply("Get Quarc Ore")
    } else if (replies[result] == "iron") {
        invt[message.author.id].ironore = invt[message.author.id].ironore + parseInt(1)
        message.reply("Get Iron Ore")
    }

    fs.writeFile("./inventory.json", JSON.stringify(invt), (err) => {
        if(err) cosole.log(err)
    });
    
}

module.exports.help = {
    name: "dig"
}