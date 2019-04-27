const Discord = require("discord.js")
const sleep = require("system-sleep");

module.exports = class ping {
    constructor() {
        this.name = 'ping',
            this.alias = ['pg'],
            this.usage = '?ping'
    }

    async run(bot, message, args) {
        message.delete();
        message.channel.send("Pinging").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp;
            let choise = ["Dobry?", "Działa?", "Chyba wszysto działa!"];
            let res = choise[Math.floor(Math.random() * choise.length)];
            sleep(250);
            m.edit("Pinging.");
            sleep(250);
            m.edit("Pinging..");
            sleep(250);
            m.edit("Pinging...");
            sleep(250);
            m.edit("Pinging");
            sleep(250);
            m.edit("Pinging.");
            sleep(250);
            m.edit("Pinging..");
            sleep(250);
            m.edit("Pinging...");
            sleep(250);
            m.edit(`${res} Opóżnienie Bota: ${ping}ms, Opóżnienie API: ${Math.round(bot.ping)}ms`);
        });
    }
}