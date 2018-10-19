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
    let steel = invt[message.author.id].id107
    let mno = parseInt(1);
    let sur1 = parseInt(0);
    let sur2 = parseInt(0);
    let sur3 = parseInt(0);
    let sur4 = parseInt(0);
    let sur5 = parseInt(0);
    let sur6 = parseInt(0);
    let sur7 = parseInt(0);
    let get = parseInt(1);



  if(args[0] == "help"){
    message.reply("Usage: !smelt <ore/ingot> <amount>");
    return;
  }
  if(parseInt(args[1]) > 1) {
    mno = mno * 0 + parseInt(args[1]);
  }

  if(args[0] == "ironore") {
    sur1 = sur1 + parseInt(2);
    sur1 = sur1 * parseInt(mno); 
    if(iron < parseInt(sur1)) return message.reply("None ore / ingots!");
    sur2 = sur2 + 1;
    sur2 = sur2 * parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal");
    get = get * parseInt(mno);
    iron = iron - parseInt(sur1);
    coal = coal - parseInt(sur2);
    iiron = iiron + parseInt(get);
  } else if (args[0] == "tinore") {

  } else if (args[0] == "copperore") {

  } else if (args[0] == "rock") {

  } else if (args[0] == "titanore") {

  } else if (args[0] == "goldore") {

  } else if (args[0] == "quartzore") {

  } else if (args[0] == "electrium") {

  } else if (args[0] == "steel") {

  } else {

  }


  fs.writeFile("./inventory.json", JSON.stringify(invt), (err) => {
    if(err) cosole.log(err)
});

}

module.exports.help = {
  name: "smelt"
}