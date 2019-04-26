const Discord = require("discord.js")
var getImageUrls = require("get-image-urls")

module.exports = class catgirl {
  constructor() {
    this.name = 'catgirl',
      this.alias = ['cg'],
      this.usage = '?catgirl'
  }

  async run(bot, message, args) {
    var dex = Math.floor(Math.random() * 10) + 1
    getImageUrls('https://dawnotemu.000webhostapp.com/catgirl/'+ 'dex' + '.jpg', function(err, images) {
    console.log(dex)
    if (!err) {
        console.log('Images found', images.length);
        console.log(images);
    }else{
        console.log('ERROR', err);
    }
    });
  }
}