const Discord = require("discord.js")
var getImageUrls = require("get-image-urls")

module.exports = class catgirl {
  constructor() {
    this.name = 'catgirl',
      this.alias = ['cg'],
      this.usage = '?catgirl'
  }

  async run(bot, message, args) {
    message.delete();
    let dex = Math.floor(Math.random() * 10) + 1
    let url = 'https://dawnotemu.000webhostapp.com/catgirl/' + dex + '.jpg';
    let pol = new Discord.RachEmbed()
    .setDescription("Cute Anime Cat Girls")
    .setImage(url);
    message.send(pol);
  }
}