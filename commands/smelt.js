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
    message.reply("Usage: $smelt <ingot> <amount> || $smelt list");
    return;
  }
  if(parseInt(args[1]) > 1) {
    mno = mno * 0 + parseInt(args[1]);
  }
  if (args[0] == "list") {
    message.channel.send("```Iron: 2 iron ore & 1 coal | Copper: 2 copper ore & 1 coal | Titan")
  }

  if(args[0] == "iron") {
    sur1 = sur1 + parseInt(2);
    sur1 = sur1 * parseInt(mno);
    if(iron < parseInt(sur1)) return message.reply("None ore!");
    sur2 = sur2 + parseInt(1);
    sur2 = sur2 * parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal!");
    get = get * parseInt(mno);
    invt[message.author.id].id1 = iron - parseInt(sur1);
    invt[message.author.id].id7 = coal - parseInt(sur2);
    invt[message.author.id].id101 = iiron + parseInt(get);
    message.reply(`Got a ${get} iron!`)
  } else if (args[0] == "tin") {
    sur1 = sur1 + parseInt(2);
    sur1 = sur1 * parseInt(mno);
    if(tin < parseInt(sur1)) return message.reply("None ore!");
    sur2 = sur2 + parseInt(1);
    sur2 = sur2 + parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal!");
    get = get * parseInt(mno);
    invt[message.author.id].id4 = tin - parseInt(sur1);
    invt[message.author.id].id7 = coal - parseInt(sur2);
    invt[message.author.id].id102 = itin + parseInt(get);
    message.reply(`Got a ${get} tin!`)
  } else if (args[0] == "copper") {
    sur1 = sur1 + parseInt(2);
    sur1 = sur1 * parseInt(mno);
    if(copper < parseInt(sur1)) return message.reply("None ore!");
    sur2 = sur2 + parseInt(1);
    sur2 = sur2 + parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal!");
    get = get * parseInt(mno);
    invt[message.author.id].id3 = copper - parseInt(sur1);
    invt[message.author.id].id7 = coal - parseInt(sur2);
    invt[message.author.id].id103 = icopper + parseInt(get);
    message.reply(`Got a ${get} copper!`)
  } else if (args[0] == "stone") {
    sur1 = sur1 + parseInt(6);
    sur1 = sur1 * parseInt(mno);
    if(rock < parseInt(sur1)) return message.reply("None ore!");
    sur2 = sur2 + parseInt(1);
    sur2 = sur2 + parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal!");
    get = get * parseInt(6);
    get = get * parseInt(mno);
    invt[message.author.id].id0 = rock - parseInt(sur1);
    invt[message.author.id].id7 = coal - parseInt(sur2);
    invt[message.author.id].id100 = stone + parseInt(get);
    message.reply(`Got a ${get} stone!`)
  } else if (args[0] == "titan") {
    sur1 = sur1 + parseInt(2);
    sur1 = sur1 * parseInt(mno);
    if(titan < parseInt(sur1)) return message.reply("None ore!");
    sur2 = sur2 + parseInt(1);
    sur2 = sur2 + parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal!");
    get = get * parseInt(mno);
    invt[message.author.id].id9 = titan - parseInt(sur1);
    invt[message.author.id].id7 = coal - parseInt(sur2);
    invt[message.author.id].id104 = ititan + parseInt(get);
    message.reply(`Got a ${get} titan!`)
  } else if (args[0] == "gold") {
    sur1 = sur1 + parseInt(2);
    sur1 = sur1 * parseInt(mno);
    if(gold < parseInt(sur1)) return message.reply("None ore!");
    sur2 = sur2 + parseInt(1);
    sur2 = sur2 + parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal!");
    get = get * parseInt(mno);
    invt[message.author.id].id5 = gold - parseInt(sur1);
    invt[message.author.id].id7 = coal - parseInt(sur2);
    invt[message.author.id].id105 = igold + parseInt(get);
    message.reply(`Got a ${get} gold!`)
  } else if (args[0] == "quartz") {
    sur1 = sur1 + parseInt(2);
    sur1 = sur1 * parseInt(mno);
    if(quartz < parseInt(sur1)) return message.reply("None ore!");
    sur2 = sur2 + parseInt(1);
    sur2 = sur2 + parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal!");
    get = get * parseInt(mno);
    invt[message.author.id].id8 = quartz - parseInt(sur1);
    invt[message.author.id].id7 = coal - parseInt(sur2);
    invt[message.author.id].id106 = iquartz + parseInt(get);
    message.reply(`Got a ${get} quartz!`)
  } else if (args[0] == "electrium") {
    sur1 = sur1 + parseInt(2);
    sur1 = sur1 * parseInt(mno);
    sur3 = sur3 + parseInt(2);
    sur3 = sur3 + parseInt(mno);
    if(gold < parseInt(sur1) || quartz < parseInt(sur3)) return message.reply("None ore!");
    sur2 = sur2 + parseInt(1);
    sur2 = sur2 + parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal!");
    get = get * parseInt(mno);
    invt[message.author.id].id4 = tin - parseInt(sur1);
    invt[message.author.id].id7 = coal - parseInt(sur2);
    invt[message.author.id].id108 = electrium + parseInt(get)
    invt[message.author.id].id106 = quartz - parseInt(sur3);
    message.reply(`Got a ${get} electrium!`)
  } else if (args[0] == "steel") {
    sur1 = sur1 + parseInt(2);
    sur1 = sur1 * parseInt(mno);
    if(iron < parseInt(sur1)) return message.reply("None ore!");
    sur2 = sur2 + parseInt(4);
    sur2 = sur2 + parseInt(mno);
    if(coal < parseInt(sur2)) return message.reply("None coal!");
    get = get * parseInt(mno);
    invt[message.author.id].id4 = iron - parseInt(sur1);
    invt[message.author.id].id7 = coal - parseInt(sur2);
    invt[message.author.id].id102 = itin + parseInt(get);
    message.reply(`Got a ${get} steel!`)
  } else {
    message.reply("Command: $smelt <ingot> <ammount> || $smelt list")
  }

  

  fs.writeFile("./inventory.json", JSON.stringify(invt), (err) => {
    if(err) cosole.log(err)
});

}

module.exports.help = {
  name: "smelt"
}