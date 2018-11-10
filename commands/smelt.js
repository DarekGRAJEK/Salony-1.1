const Discord = require("discord.js");
let invt = require("../inventory.json");
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
  //!shop

    let iron = invt[message.author.id].id1;
    let copper = invt[message.author.id].id3;
    let tin = invt[message.author.id].id4;
    let gold = invt[message.author.id].id5;
    let coal = invt[message.author.id].id7;
    let quartz = invt[message.author.id].id8;
    let titan = invt[message.author.id].id9;
    let rock = invt[message.author.id].id0;
    let iiron = invt[message.author.id].id101;
    let stone = invt[message.author.id].id100;
    let itin = invt[message.author.id].id102;
    let icopper = invt[message.author.id].id103;
    let ititan = invt[message.author.id].id104;
    let igold = invt[message.author.id].id105;
    let iquartz = invt[message.author.id].id106;
    let electrium = invt[message.author.id].id108;
    let steel = invt[message.author.id].id107;

    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

  if(args[0] == "help"){
    message.reply("Usage: $smelt or $smelt list Type:  ***cancel***  to Leave the progress.");
    return;
  }
  if (args[0] == "list") {
    message.channel.send("stone, iron, copper, gold, tin, electrium, steel, quartz, titan.").then(r => r.delete(10000));
  }

  const filter = m => m.author.id === message.author.id;
  message.reply("Please write a ingot name to get! (If you don't remeber the ingots name, then please write $smelt list.) (Ps. You Have 10s to write a options!)").then(r => r.delete(10000));
  message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {

    if(collected.first().content === "cancel") {
      return message.reply("Cancled");
    }

    let itemlist = collected.first().content; 
    if(parseInt(args[1]) > 1) {
      mno = mno * 0 + parseInt(args[1]);
    }

   

    if(itemlist == "iron") {
    sur1 = sur1 + parseInt(2);
    sur2 = sur2 + parseInt(1);
    get = get + parseInt(1);
    mno = mno + parseInt(1);
      let helpEmbed = new Discord.RichEmbed()
        .setTitle("Smelt Iron")
        .setDescription("Information to Smelt. (default)")
        .setColor(random)
        .addField("Need Iron Ore", sur1)
        .addField("Neet Coal", sur2)
        .addField("Get Iron", get)
        .addField("Multiplier", mno)
        .addField("If you accept this:", "Please write  ***accept***")
        .addField("If you change Multiplier:", "Please write  ***change***")
        .addField("If you cancel all progress:", "Please write any letter.");
      message.channel.send(helpEmbed).then(r => r.delete(20000));
      
      message.reply("Im wait to write option.").then(r => r.delete(10000));
      message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
        let option = collected.first().content;
        
        if(option == "accept") {
          let Need = new Discord.RichEmbed()
          .setTitle("Progress Canceled!")
          .setColor(random)
          .addField("You Need:" `iron ore: ${sur1}`)
          .addField("You Have:", `iron ore: ${iron}`);
          if(iron < sur1) return message.channel.send(Need).then(r => r.delete(5000));
          let Need2 = new Discord.RichEmbed()
          .setTitle("Progress Canceled!")
          .setColor(random)
          .addField("You Need:" `coal: ${sur2}`)
          .addField("You Have:", `coal: ${coal}`);
          if(coal < sur1) return message.channel.send(Need2).then(r => r.delete(5000));

          invt[message.author.id].id101 = iiron + parseInt(get);
          invt[message.author.id].id1 = iron - parseInt(sur1);
          invt[message.author.id].id7 = coal - parseInt(sur2);

          fs.writeFile("./inventory.json", JSON.stringify(invt), (err) => {
            if(err) cosole.log(err)
          });

          let GetSur = new Discord.RichEmbed()
          .setTitle("You completed smelt progress!")
          .setColor(random)
          .setDescription("Hurry!!! You Happy DAY!")
          .addField("Now Have:", `iron ore: ${iron}`)
          .addField("Now Have:", `coal: ${coal}`)
          .addField("You Get:", `iron: ${iiron}`)
          .addField("Now Have:", `iron: ${iiron}`);
          message.channel.send(GetSur).then(r => r.delete(10000));
        } else if (option == "change") {
          message.reply("Please write new Multiplayer. (Write ***Cancel*** to cancel all progress!)").then(r => r.delete(10000));
          message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
          let multi = collected.first().content;
          
          if (multi != Number) return message.reply("This is not Number! Smelt Progress has canceled!");
          multi = parseInt(multi);
          sur1 = sur1 * parseInt(multi);
          sur2 = sur2 * parseInt(multi);
          mno = mno * parseInt(multi);
          get = get * parseInt(multi);
          if (multi == Number) { 
          let helpEmbed = new Discord.RichEmbed()
          .setTitle("Smelt Iron")
          .setDescription("Information to Smelt. (changed)")
          .setColor(random)
          .addField("Need Iron Ore", sur1)
          .addField("Neet Coal", sur2)
          .addField("Get Iron", get)
          .addField("Multiplier", mno)
          .addField("If you accept this:", "Please write  ***accept***")
          .addField("If you cancel all progress:", "Please write any letter.");
          message.channel.send(helpEmbed).then(r => r.delete(15000));
          message.reply("I'm waiting for write a option.").then(r => r.delete(10000));
          message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
          let option = collected.first().content;

            if (option == "accept"){
              let Need = new Discord.RichEmbed()
              .setTitle("Progress Canceled!")
              .setColor(random)
              .addField("You Need:" `iron ore: ${sur1}`)
              .addField("You Have:", `iron ore: ${iron}`);
              if(iron < sur1) return message.channel.send(Need).then(r => r.delete(5000));
              let Need2 = new Discord.RichEmbed()
              .setTitle("Progress Canceled!")
              .setColor(random)
              .addField("You Need:" `coal: ${sur2}`)
              .addField("You Have:", `coal: ${coal}`);
              if(coal < sur1) return message.channel.send(Need2).then(r => r.delete(5000));
    
              invt[message.author.id].id101 = iiron + parseInt(get);
              invt[message.author.id].id1 = iron - parseInt(sur1);
              invt[message.author.id].id7 = coal - parseInt(sur2);
    
              fs.writeFile("./inventory.json", JSON.stringify(invt), (err) => {
                if(err) cosole.log(err)
              });
    
              let GetSur = new Discord.RichEmbed()
              .setTitle("You completed smelt progress!")
              .setColor(random)
              .setDescription("Hurry!!! You Happy DAY!")
              .addField("Now Have:", `iron ore: ${iron}`)
              .addField("Now Have:", `coal: ${coal}`)
              .addField("You Get:", `iron: ${iiron}`)
              .addField("Now Have:", `iron: ${iiron}`);
              message.channel.send(GetSur).then(r => r.delete(10000));    
            } else {
              return message.reply("Canceled!").then(r => r.delete(5000));
            }

          }).catch(err => {
            message.reply("Canceled!").then(r => r.delete(5000));
          });
          }

          }).catch(err => {
            message.reply("Canceled!").then(r => r.delete(5000));
          });
        } else {
          message.reply("Canceled!").then(r => r.delete(5000));
        }

      }).catch(err => {
      message.reply("Canceled!").then(r => r.delete(5000));
      });
    }
   
  }).catch(err => {
    message.reply("Canceled!").then(r => r.delete(5000));
  });
}

module.exports.help = {
  name: "smelt"
}