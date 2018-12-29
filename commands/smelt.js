const Discord = require("discord.js");
let invt = require("../inventory.json");
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
  //!shop
    let iron = invt[message.author.id].id1
    let copper = invt[message.author.id].id3;
    let tin = invt[message.author.id].id4;
    let gold = invt[message.author.id].id5;
    let coal = invt[message.author.id].id7;
    let quartz = invt[message.author.id].id8;
    let titan = invt[message.author.id].id9;
    let rock = invt[message.author.id].id0;
    let stone = invt[message.author.id].id100;
    let itin = invt[message.author.id].id102;
    let icopper = invt[message.author.id].id103;
    let ititan = invt[message.author.id].id104;
    let igold = invt[message.author.id].id105;
    let iquartz = invt[message.author.id].id106;
    let electrium = invt[message.author.id].id108;
    let steel = invt[message.author.id].id107;

    let sur1 = parseInt(0);
    let sur2 = parseInt(0);
    let sur3 = parseInt(0);
    let sur4 = parseInt(0);
    let sur5 = parseInt(0);
    let sur6 = parseInt(0);
    let sur7 = parseInt(0);
    let sur8 = parseInt(0);
    let sur9 = parseInt(0);
    let sur0 = parseInt(0);
    let nub1;
    let nub2;
    let nub3;
    let name0;
    let name1;
    let name2;
    let mno = parseInt(0);
    let get = parseInt(0);
    let multi = parseInt(1);
    let fet = parseInt(0);
    let set = parseInt(0);
    let pentla = parseInt(0);

    let nameoreiron = "Iron ore"
    let nameiron = "Iron"
    let namecoal = "Coal"



    let Color = Math.floor(Math.random() * 999999) + 1;
    let random = "#" + Color;

  if(args[0] == "help"){
    message.reply("Usage: $smelt or $smelt list | Type:  ***cancel***  to Leave the progress.");
    return;
  }
  if (args[0] == "list") {
    message.channel.send("stone, iron, copper, gold, tin, electrium, steel, quartz, titan.").then(r => r.delete(10000));
  }

  const filter = m => m.author.id === message.author.id;
  message.reply("Please write a ingot name to get! (If you don't remeber the ingots name, then please write $smelt list.) (Ps. You Have 20s to write a options!)").then(r => r.delete(10000));
  message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {

    if(collected.first().content === "cancel") {
      return message.reply("Cancled");
    }

    let itemlist = collected.first().content;

    if(itemlist === "iron") {
      multi = parseInt(1);
      sur1 = sur1 + parseInt(2);
      sur2 = sur2 + parseInt(1);
      get = get + parseInt(1);
      mno = mno + parseInt(1);
      multi = parseInt(multi);
      sur1 = sur1 * parseInt(multi);
      sur2 = sur2 * parseInt(multi);
      mno = mno * parseInt(multi);
      get = get * parseInt(multi);
      set = set + parseInt(1);
      name0 = nameiron;
      name1 = nameoreiron;
      name2 = namecoal;
    }

    if(set === 1) {
      do {
        if (pentla === 1) {
          continue;
        }
      let helpEmbed = new Discord.RichEmbed()
        .setTitle(`Smelt ${name0}`)
        .setDescription("Information to Smelt.")
        .setColor(random)
        .addField(`Need ${name1}`, sur1)
        .addField(`Need ${name2}`, sur2)
        .addField(`Get ${name0}`, get)
        .addField(`Multiplier`, mno)
        .addField("If you accept this:", "Please write  ***accept***")
        .addField("If you change Multiplier:", "Please write  ***change***")
        .addField("If you cancel the smelt:", "Please write any letter.");
      message.channel.send(helpEmbed).then(r => r.delete(20000));
      
      message.reply("I'm wait to write option.").then(r => r.delete(10000));
      message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
        let option = collected.first().content;

        if(option === "accept") {
          let iron = invt[message.author.id].id1
          let copper = invt[message.author.id].id3;
          let tin = invt[message.author.id].id4;
          let gold = invt[message.author.id].id5;
          let coal = invt[message.author.id].id7;
          let quartz = invt[message.author.id].id8;
          let titan = invt[message.author.id].id9;
          let rock = invt[message.author.id].id0;
          let stone = invt[message.author.id].id100;
          let itin = invt[message.author.id].id102;
          let icopper = invt[message.author.id].id103;
          let ititan = invt[message.author.id].id104;
          let igold = invt[message.author.id].id105;
          let iquartz = invt[message.author.id].id106;
          let electrium = invt[message.author.id].id108;
          let steel = invt[message.author.id].id107;

          if(itemlist === "iron") {
            nub1 = iron;
            nub2 = coal;
            nub3 = iiron;
          }


          let Need = new Discord.RichEmbed()
          .setTitle("Progress Canceled!")
          .setColor(random)
          .addField("You Need:", `${name1}: ${sur1}`)
          .addField("You Have:", `${name1}: ${nub1}`);
          if(iron < sur1) return message.channel.send(Need).then(r => r.delete(5000));
          let Need2 = new Discord.RichEmbed()
          .setTitle("Progress Canceled!")
          .setColor(random)
          .addField("You Need:", `${name2}: ${sur2}`)
          .addField("You Have:", `${name2}: ${nub2}`);
          if(coal < sur1) return message.channel.send(Need2).then(r => r.delete(5000));
          
          if(itemlist === "iron") {
          invt[message.author.id].id101 = iiron + parseInt(get);
          invt[message.author.id].id1 = iron - parseInt(sur1);
          invt[message.author.id].id7 = coal - parseInt(sur2);
          }
          fs.writeFile("./inventory.json", JSON.stringify(invt), (err) => {
            if(err) cosole.log(err)
          });

         iron = invt[message.author.id].id1
         copper = invt[message.author.id].id3;
         tin = invt[message.author.id].id4;
         gold = invt[message.author.id].id5;
         coal = invt[message.author.id].id7;
         quartz = invt[message.author.id].id8;
         titan = invt[message.author.id].id9;
         rock = invt[message.author.id].id0;
         stone = invt[message.author.id].id100;
         itin = invt[message.author.id].id102;
         icopper = invt[message.author.id].id103;
         ititan = invt[message.author.id].id104;
         igold = invt[message.author.id].id105;
         iquartz = invt[message.author.id].id106;
         electrium = invt[message.author.id].id108;
         steel = invt[message.author.id].id107;

          let GetSur = new Discord.RichEmbed()
          .setTitle("You completed smelt progress!")
          .setColor(random)
          .setDescription("Hurry!!! You Happy DAY!")
          .addField("Now Have:", `${name0}: ${nub1}`)
          .addField("Now Have:", `${name1}: ${nub2}`)
          .addField("You Get:", `${itemlist}: ${get}`)
          .addField("Now Have:", `${name2}: ${nub3}`);
          return message.channel.send(GetSur).then(r => r.delete(15000));
        } else if (option === "change") {
          fet = parseInt(0) + multi;
          {
          message.reply("Please write new Multiplayer. (Write ***Cancel*** to return!) (defecult").then(r => r.delete(20000));
          message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
          
          multi = collected.first().content;

          if (multi === "cancel") multi = parseInt(0) + fet; message.reply("Returned!").then(r => r.delete(4000));
          if (multi == null) message.reply("This is not Number!").then(r => r.delete(4000)); 
          if (multi < 1) message.reply("The number muss be over 0.").then(r => r.delete(4000)); 
          if (multi >= 1) pentla === parseInt(0);
          }).catch(err => {
            return message.reply("Time Out!").then(r => r.delete(4000));
          });
          } 
        } else {
          return message.reply("Canceled!").then(r => r.delete(4000));
        }
      pentla === parseInt(1);
      }).catch(err => {
       return message.reply("Time Out!").then(r => r.delete(4000));
      });
      } while(true)
    }
    
  }).catch(err => {
    return message.reply("Time Out!").then(r => r.delete(4000));
  });
}

module.exports.help = {
  name: "smelt"
}