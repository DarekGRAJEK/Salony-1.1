const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(args[0] == "help"){
        message.reply("Usage: !8ball <Question>");
        return;
    }
    if(!args[2]) return message.reply("Please ask a full question")
    let replies = ["Tak.", "Nie.", "Może.", "Nie wiem", "Napewno Tak.", "Napewno Nie.", "Nie Moge Odpowiedzieć na to pytanie."];

    let result = Math.floor((Math.random()* replies.length));
    let question = args.slice(0).join(" ");
    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(random)
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "8ball"
}