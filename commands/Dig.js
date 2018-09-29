const Discord = require("discord.js");
let invt = require("../inventory.json");
let fs = require("fs");


module.exports.run = async (bot, message, args) => {

    message.delete();
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

    
    let procent = Math.floor(Math.random() * 100) + 0.01;

    message.channel.send("Procenty: " + procent + "%");




}

module.exports.help = {
    name: "dig"
}