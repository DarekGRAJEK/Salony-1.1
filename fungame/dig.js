module.exports = class test {
    constructor(){
            this.name = 'test',
            this.alias = ['t'],
            this.usage = '?test'
    }
 
    async run(bot, message, args) {
        await message.delete();
        message.channel.send(this.name + " worked!");
    }
}