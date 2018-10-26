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
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,5,4];
        let Get = Math.floor((Math.random()* ore.length));
        invt[message.author.id].id0 = invt[message.author.id].id0 + parseInt(Get)
        message.reply(`Get ${Get} Rock`);
    } else if (replies[result] == "coal"){
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5];
        let Get = Math.floor((Math.random()* ore.length));
        invt[message.author.id].id7 = invt[message.author.id].id7 + parseInt(Get)
        message.reply(`Get ${Get} Coal`)
    } else if (replies[result] == "gold"){
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5];
        let Get = Math.floor((Math.random()* ore.length));
        invt[message.author.id].id5 = invt[message.author.id].id5 + parseInt(Get)
        message.reply(`Get ${Get} Gold Ore`)
    } else if (replies[result] == "emerald") {
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3];
        let Get = Math.floor((Math.random()* ore.length));
        invt[message.author.id].id6 = invt[message.author.id].id6 + parseInt(Get)
        message.reply(`Get ${Get} Emerald`)
    } else if (replies[result] == "diamont") {
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3];
        let Get = Math.floor((Math.random()* ore.length));
        invt[message.author.id].id2 = invt[message.author.id].id2 + parseInt(Get) 
        message.reply(`Get ${Get} Diamond`)
    } else if (replies[result == "titan"]) {
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5];
        let Get = Math.floor((Math.random()* ore.length));

        invt[message.author.id].id9 = invt[message.author.id].id9 + parseInt(Get)
        message.reply(`Get ${Get} Titan Ore`)
    } else if (replies[result] == "copper") {
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5];
        let Get = Math.floor((Math.random()* ore.length));
        invt[message.author.id].id3 = invt[message.author.id].id3 + parseInt(Get)
        message.reply(`Get ${Get} Copper Ore`)
    } else if (replies[result] == "tin") {
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5];
        let Get = Math.floor((Math.random()* ore.length));
        invt[message.author.id].id4 = invt[message.author.id].id4 + parseInt(Get)
        message.reply(`Get ${Get} Tin Ore`)
    } else if (replies[result] == "quarc") {
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5];
        let Get = Math.floor((Math.random()* ore.length));
        invt[message.author.id].id8 = invt[message.author.id].id8 + parseInt(Get)
        message.reply(`Get ${Get} Quarc Ore`)
    } else if (replies[result] == "iron") {
        let ore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5];
        let Get = Math.floor((Math.random()* ore.length));
        invt[message.author.id].id1 = invt[message.author.id].id1 + parseInt(Get)
        message.reply(`Get ${Get} Iron Ore`)
    }

    fs.writeFile("./inventory.json", JSON.stringify(invt), (err) => {
        if(err) cosole.log(err)
    });
    
}

module.exports.help = {
    name: "dig"
}