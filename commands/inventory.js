const Discord = require("discord.js");
let invt = require("../inventory.json");
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!invt[message.author.id]){
        invt[message.author.id] = {
            machete: 0, // Rare
            diamond: 0, // Legendary
            iron: 0, //Common
            copper: 0,  //Common
            tin: 0, //common
            gold: 0, //Uncommon
            titan: 0, //Epic
            emerald: 0, // Legendary
            sword: 0, // Rare
            coal: 0, // common
            steel: 0, // Rare
            electrium: 0, // Rare
            quarc: 0, // Uncommon
            signatureCPL: 0, // Limited
            tinore: 0, //ore
            copperore: 0, //ore
            ironore: 0, //ore
            goldore: 0, //ore
            quarcore: 0, //ore
            titanore: 0, //ore
            rock: 0,  //ore
            stone: 0 //ore
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
        .addField("Podpis CreazyPL", invt[message.author.id].signatureCPL)
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
        .addField("Diamond", invt[message.author.id].diamond)
        .addField("Emerald", invt[message.author.id].emerald)
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
        .addField("Titan", invt[message.author.id].titan)
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
        .addField("Machete", invt[message.author.id].machete)
        .addField("Electrium", invt[message.author.id].electrium)
        .addField("Steel", invt[message.author.id].steel)
        .addField("Sword", invt[message.author.id].sword)
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
        .addField("quarc", invt[message.author.id].quarc)
        .addField("Gold", invt[message.author.id].gold)
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
        .addField("Iron", invt[message.author.id].iron)
        .addField("Tin", invt[message.author.id].tin)
        .addField("Copper", invt[message.author.id].copper)
        .addField("Coal", invt[message.author.id].coal)
        .addField("Stone", invt[message.author.id].stone)
        .addField("???", "???")
        .addField("???", "???");
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
    } else if (args[0] == "ore" || args[0] == "Ore") {
        let inventory = new Discord.RichEmbed()
        .setTitle("Ores")
        .setDescription("Your inventory.")
        .setColor(random)
        .addField("Iron ore ",  invt[message.author.id].ironore)
        .addField("Tin ore",  invt[message.author.id].tinore)
        .addField("Copper ore",  invt[message.author.id].copperore)
        .addField("Gold ore",  invt[message.author.id].goldore)
        .addField("Titan ore", invt[message.author.id].titanore)
        .addField("Quarc ore", invt[message.author.id].quarcore)
        .addField("Rock", invt[message.author.id].rock);
        message.channel.send(inventory).then(msg => {msg.delete(10000)});
    }

}

module.exports.help = {
    name: "inv"
}