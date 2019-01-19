const Discord = require("discord.js")

module.exports = class help {
    constructor(){
            this.name = '8ball',
            this.alias = ['8'],
            this.usage = '?8ball'
    }
 
    async run(bot, message, args) {
        if(args[0] == "help"){
            message.reply("Usage: !8ball <Question>");
            return;
        }
        if(args[0] == "Czy" || args[0] == "czy"){
            if(!args[2]) return message.reply("Please ask a full question")
            let replies = ["Tak.", "Nie.", "Może.", "Nie wiem", "Napewno Tak.", "Napewno Nie.", "Nie Moge Odpowiedzieć na to pytanie.", "Chyba tak", "Chyba nie"];
        
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
        if(args[0] == "Kiedy" || args[0] == "kiedy"){
            if(!args[2]) return message.reply("Please ask a full question")
            let number = Math.floor(Math.random() * 29) + 1;
            let replies = [number + " Stycznia", number + " Lutego", number + " Marca", number + " Kwietnia", number + " Maja", number + " Czerwca", number + " Lipca", number + " Sierpnia", number + " Września", number + " Października", number + " Listopada", number + " Grudnia", "Jutro", "Za Tydzień", "Za Miesiąc", "Za Rok"];
        
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
    }
}