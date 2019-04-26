const Discord = require("discord.js")

module.exports = class help {
    constructor() {
        this.name = 'ping',
            this.alias = ['pg'],
            this.usage = '?ping'
    }

    async run(bot, message, args) {
        message.delete();
        message.channel.send("Pinging...").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp;
            let choise = ["Dobry?", "Działa?", "Chyba wszysto działa!"];
            let res = choise[Math.floor(Math.random() * choise.length)];

            m.edit(`${res} Opóżnienie Bota: ${ping}, Opóżnienie API: ${Math.round(bot.ping)}`);
        });
    }
}