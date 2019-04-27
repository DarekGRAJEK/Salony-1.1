const moduled = require("../modules/module.js");
const so = require("../modules/serveroptions.js");

module.exports = class dig {
    constructor() {
        this.name = 'dig',
            this.alias = ['dg'],
            this.usage = '?dig'
    }

    async run(bot, message, args) {
        message.delete();
        moduled.findOne({
            idserver: message.guild.id,
            idplayer: message.author.id
        }, (err, modules) => {
            if (err) console.log(err);

            let Color = Math.floor(Math.random() * 999999) + "1";
            let random = "#" + Color;
            so.findOne({
                Serverid: message.guild.id
            }, (err, sop) => {
                if (err) console.log(err);
                if (so.diggame === "no") {
                    return message.reply("The Dig Game is Disabled! Please contact with Bot Developer to Enable this for Your Serwer!");
                }
            });

            let replies = ["rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "tin", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "copper", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "diamont", "diamont", "diamont", "diamont", "diamont", "diamont", "diamont", "emerald", "emerald", "emerald", "emerald", "emerald", "emerald", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "quarc", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "coal", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan", "titan",];
            let result = Math.floor((Math.random() * replies.length));



            if (replies[result] == "rock") {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "5", "4",];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id0 = modules.id0 + parseInt(ore[Get]);
                message.reply(`Get ${ore[Get]} Rock`);
            } else if (replies[result] == "coal") {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5"];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id7 = modules.id7 + parseInt(ore[Get])
                message.reply(`Get ${ore[Get]} Coal`)
            } else if (replies[result] == "gold") {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5"];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id5 = modules.id5 + parseInt(ore[Get])
                message.reply(`Get ${ore[Get]} Gold Ore`)
            } else if (replies[result] == "emerald") {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3"];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id6 = modules.id6 + parseInt(ore[Get])
                message.reply(`Get ${ore[Get]} Emerald`)
            } else if (replies[result] == "diamont") {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3"];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id2 = modules.id2 + parseInt(ore[Get])
                message.reply(`Get ${ore[Get]} Diamond`)
            } else if (replies[result == "titan"]) {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5"];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id9 = modules.id9 + parseInt(ore[Get])
                message.reply(`Get ${ore[Get]} Titan Ore`)
            } else if (replies[result] == "copper") {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5"];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id3 = modules.id3 + parseInt(ore[Get])
                message.reply(`Get ${ore[Get]} Copper Ore`)
            } else if (replies[result] == "tin") {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5"];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id4 = modules.id4 + parseInt(ore[Get])
                message.reply(`Get ${ore[Get]} Tin Ore`)
            } else if (replies[result] == "quarc") {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5"];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id8 = modules.id8 + parseInt(ore[Get])
                message.reply(`Get ${ore[Get]} Quarc Ore`)
            } else if (replies[result] == "iron") {
                let ore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5"];
                let Get = Math.floor((Math.random() * ore.length));
                modules.id1 = modules.id1 + parseInt(ore[Get])
                message.reply(`Get ${ore[Get]} Iron Ore`)
            }
            modules.save().catch(err => console.log(err));
        });
    }
}