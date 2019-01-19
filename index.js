const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const { CommandHandler } = require("djs-commands");
const mongodb = require("mongoose")
const expl = require("./modules/xp.js");
const moneyd = require("./modules/money.js");
const token = process.env.token;
const past = process.env.pass;

mongodb.connect(`mongodb+srv://Darek:${past}@dvgbot-9wt2w.mongodb.net/exp?retryWrites=true`, { 
    useNewUrlParser: true 
});
const ChatCH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: ['$', 'D$', 'DVG$']
});

const DMCH = new CommandHandler({
    folder: __dirname + '/fungame/',
    prefix: ['$', 'D$', 'DVG$']
});



bot.on("ready", () => {
    console.log(bot.user.username + " is Online!");
});

bot.on("message", (message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm' && message.channel.type != 'text') {
        let args = message.content.split(" ");
        let command = args[0];
        let cmd = DMCH.getCommand(command);
        if(!cmd) return;
        console.log(message.channel.type);
        try{
            cmd.run(bot,message,args);
        }catch(e){
            console.log(e);
        }
    }
    console.log(past);
    expl.findOne({
        Serverid: message.guild.id,
        id: message.author.id
    }, (err, exp) => {
        if (err) console.log(err);
        if(!exp && message.author.id != "535791952193388545"){
            const newExp = new expl({
                Serverid: message.guild.id,
                id: message.author.id,
                xp: 0,
                level: 1,
                next: 100
            })

            newExp.save().catch(err => console.log(err));
        }else{
            let Addxp = Math.ceil(Math.random() * 17);
            let getexp = exp.xp;
            let level = exp.level;
            exp.xp = getexp + Addxp;
            let defneed = exp.next;
            if (defneed <= getexp){
                let defex = parseInt(defneed) * parseFloat(1.798);
                exp.next = parseInt(defex);
                exp.xp = parseInt(getexp) * parseInt(0);
                exp.level = parseInt(level) + parseInt(1);
                let lvlup = new Discord.RichEmbed()
                .setTitle("Level Up!")
                .setColor("#FF00FF")
                .addField("New Level", exp.level);

                message.channel.send(lvlup).then(msg => {msg.delete(5000)});
            }
            exp.save().catch(err => console.log(err));
        }
    });
    moneyd.findOne({
        Serverid: message.guild.id,
        id: message.author.id
    }, (err, money) => {
        if (err) console.log(err);
        if(!money && message.author.id != "535791952193388545"){
            const newmoney = new moneyd({
                Serverid: message.guild.id,
                id: message.author.id,
                money: 0
            })
            newmoney.save().catch(err => console.log(err));
        }else{
            let moneyadd = Math.floor(Math.random() * 100) + 1;
            let moneymuss = Math.floor(Math.random() * 100) + 1;
            let getmoney = money.money;
            if (moneyadd == moneymuss){
                let defex = parseInt(getmoney) + parseInt(moneyadd);
                money.money = parseInt(defex);
                let coinEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username)
                .setColor("#0000FF")
                .addField(`💸💸`, `${moneyadd} coins added!`);

                message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
            }
            money.save().catch(err => console.log(err));
        }
    });
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = ChatCH.getCommand(command);
    if(!cmd) return;
    try{
        cmd.run(bot,message,args);
    }catch(e){
        console.log(e);
    }
});

bot.login(token);