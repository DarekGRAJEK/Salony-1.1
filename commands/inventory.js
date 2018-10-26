const Discord = require("discord.js");
let invt = require("../inventory.json");
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!invt[message.author.id]){
        invt[message.author.id] = {
            id300: 0, // Rare
            id2: 0, // Legendary
            id101: 0, //Common
            id103: 0,  //Common
            id102: 0, //common
            id105: 0, //Uncommon
            id104: 0, //Epic
            id6: 0, // Legendary
            id301: 0, // Rare
            id7: 0, // common
            id107: 0, // Rare
            id108: 0, // Rare
            id106: 0, // Uncommon
            id10000: 0, // Limited
            id4: 0, //ore
            id3: 0, //ore
            id1: 0, //ore
            id5: 0, //ore
            id8: 0, //ore
            id9: 0, //ore
            id0: 0,  //ore
            id100: 0 //ore
        };
    }
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;
    if (!args[0]) {
    let inventory = new Discord.RichEmbed()
    .setTitle("Iventory")
    .setDescription("Your inventory.")
    .setColor(random)
    .addField("Exclusive items", "$inv ex")
    .addField("Limited items", "$inv lm")
    .addField("Legendery items", "$inv le")
    .addField("Epic items", "$inv ec")
    .addField("Rare items", "$inv re")
    .addField("Uncommon items", "$inv uc")
    .addField("Common items", "$inv cm")
    .addField("Ores", "$inv ore");
    message.channel.send(inventory).then(msg => {msg.delete(10000)});
    //             \/ exclusive items \/
    } else if (args[0] == "ex" || args[0] == "Ex") {
        let inventory = new Discord.RichEmbed()
        .setTitle("Exclusive items")
        .setDescription("Your inventory.")
        .setColor(random)
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???");
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
        //         \/ Limited items \/
    } else if (args[0] == "lm" || args[0] == "Lm") {
        let inventory = new Discord.RichEmbed()
        .setTitle("Limited items")
        .setDescription("Your inventory.")
        .setColor(random)
        .addField("Podpis CreazyPL", invt[message.author.id].id10000)
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???");
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
        //         \/ Legendery items \/
    } else if (args[0] == "le" || args[0 == "Le"]) {
        let inventory = new Discord.RichEmbed()
        .setTitle("Legendary items")
        .setDescription("Your inventory.")
        .setColor(random)
        .addField("Diamond", invt[message.author.id].id2)
        .addField("Emerald", invt[message.author.id].id6)
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???");
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
        //         \/ Epic items \/
    } else if (args[0] == "ec" || args[0] == "Ec") {
        let inventory = new Discord.RichEmbed()
        .setTitle("Epic items")
        .setDescription("Your inventory.")
        .setColor(random)
        .addField("Titan", invt[message.author.id].id104)
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???");
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
        //         \/ Rare items \/
    } else if (args[0] == "re" || args[0] == "Re") {
        let inventory = new Discord.RichEmbed()
        .setTitle("Rare items")
        .setDescription("Your inventory.")
        .setColor(random)
        .addField("Machete", invt[message.author.id].id300)
        .addField("Electrium", invt[message.author.id].id108)
        .addField("Steel", invt[message.author.id].id107)
        .addField("Sword", invt[message.author.id].id301)
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???");
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
        //         \/ Uncommon items \/
    } else if (args[0] == "uc" || args[0] == "Uc") {
        let inventory = new Discord.RichEmbed()
        .setTitle("Uncommon items")
        .setDescription("Your inventory.")
        .setColor(random)
        .addField("quartz", invt[message.author.id].id106)
        .addField("Gold", invt[message.author.id].id105)
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???")
        .addField("???", "???");
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
        //         \/ Common items \/
    } else if (args[0] == "cm" || args[0] == "Cm") {
        let inventory = new Discord.RichEmbed()
        .setTitle("Common items")
        .setDescription("Your inventory.")
        .setColor(random)
        .addField("Iron", invt[message.author.id].id101)
        .addField("Tin", invt[message.author.id].id102)
        .addField("Copper", invt[message.author.id].id103)
        .addField("Coal", invt[message.author.id].id7)
        .addField("Stone", invt[message.author.id].id100)
        .addField("???", "???")
        .addField("???", "???");
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
    } else if (args[0] == "ore" || args[0] == "Ore") {
        let inventory = new Discord.RichEmbed()
        .setTitle("Ores")
        .setDescription("Your inventory.")
        .setColor(random)
        .addField("Iron ore ",  invt[message.author.id].id1)
        .addField("Tin ore",  invt[message.author.id].id4)
        .addField("Copper ore",  invt[message.author.id].id3)
        .addField("Gold ore",  invt[message.author.id].id5)
        .addField("Titan ore", invt[message.author.id].id9)
        .addField("Quarc ore", invt[message.author.id].id8)
        .addField("Rock", invt[message.author.id].id0);
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
    }

}

module.exports.help = {
    name: "inv"
}