const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const { CommandHandler } = require("djs-commands");
const mongodb = require("mongoose");
const soption = require("./modules/serveroptions.js");
const token = process.env.token;
const pass = process.env.pass;

mongodb.connect(`mongodb://Darek:${pass}@dvgbot-shard-00-00-9wt2w.mongodb.net:27017,dvgbot-shard-00-01-9wt2w.mongodb.net:27017,dvgbot-shard-00-02-9wt2w.mongodb.net:27017/exp?ssl=true&replicaSet=DVGBOT-shard-0&authSource=admin&retryWrites=true`, {
    useNewUrlParser: true
});
const ChatCH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: ['$', 'D$', 'DVG$']
});

bot.on("ready", () => {
    console.log(bot.user.username + " is Online!");
});

bot.on("guildMemberAdd", async member => {
    soption.findOne({
        Serverid: member.guild.id
    }, (err, so) => {
        if (err) console.log(err);
        if (so.inserver === "yes") {
            let channel = member.guild.channels.find(`name`, "logi-publiczne");
            channel.send(`${member} joined to server!`);
        } else {
            return;
        }
    })


});

bot.on("guildMemberRemove", async member => {
    console.log("User Leave!!!");

    let channel = member.guild.channels.find(`name`, "logi-publiczne");
    channel.send(`${member.user.username} wyszedł z serwera!`);

});
bot.on("message", (message) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if (message.channel.type === 'text') {
        require('./SetUpFirst/moneys.js')(message);
        require('./SetUpFirst/usersetup.js')(message);
        detect();
        let args = message.content.split(" ");
        let command = args[0];
        let cmd = ChatCH.getCommand(command);
        if (!cmd) return;
        try {
            cmd.run(bot, message, args);
        } catch (e) {
            console.log(e);
        }
    }
});

bot.login(token);

function detect() {
    CraftinGame();
    user();
}