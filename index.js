const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const { CommandHandler } = require("djs-commands");
const mongodb = require("mongoose");
const statsed = require("./modules/stats.js");
const moduled = require("./modules/module.js");
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

<<<<<<< HEAD
  console.log("User Leave!!!");

  let channel = member.guild.channels.find(`name`, "logi-publiczne");
  channel.send(`${member.user.username} wyszedł z serwera!`);

});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  if(!invt[message.author.id]){
    invt[message.author.id] = {
        id300: 0, // Rare
        id2: 0, // Legendary
        id101: 0, //Common
        id103: 0,  //Common
        id102: 0, //common
        id105: 0, //Uncommon
        id104: 0, //Epic
        id6: 0, // Legendary
        id301: 0, // Rare
        id7: 0, // common
        id107: 0, // Rare
        id108: 0, // Rare
        id106: 0, // Uncommon
        id10000: 0, // Limited
        id4: 0, //ore
        id3: 0, //ore
        id1: 0, //ore
        id5: 0, //ore
        id8: 0, //ore
        id9: 0, //ore
        id0: 0,  //ore
        id100: 0 //ore
    };
  }

  fs.writeFile("./coins.json", JSON.stringify(invt), (err) => {
    if (err) console.log(err)
  });

  let coinAmt = Math.floor(Math.random() * 100) + 1;
  let baseAmt = Math.floor(Math.random() * 100) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("??", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 14) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 346;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    xp[message.author.id].xp = 0;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
=======
    soption.findOne({
        Serverid: member.guild.id
    }, (err, so) => {
        if (err) console.log(err);
        if (so.inserver === "yes") {
            let channel = member.guild.channels.find(`name`, "logi-publiczne");
                channel.send(`${member.user.username} left the server!`);
        } else {
            return;
        }
    })
>>>>>>> 2
    

});

bot.on("message", (message) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if (message.channel.type === 'text') {
        statsed.findOne({
            Serverid: message.guild.id,
            id: message.author.id
        }, (err, exp) => {
            if (err) console.log(err);
            if (!exp && message.author.id != "535791952193388545") {
                if (message.author.id === message.guild.ownerID) {
                    const newExp = new statsed({
                        Serverid: message.guild.id,
                        id: message.author.id,
                        xp: 0,
                        level: 1,
                        next: 100,
                        money: 0,
                        RankBot: "Owner"
                    })
                    newExp.save().catch(err => console.log(err));
                    soption.findOne({
                        Serverid: message.guild.id
                    }, (err, sopt) => {
                        if (err) console.log(err);
                        if (!sopt) {
                            const newsopt = new soption({
                                Serverid: message.guild.id,
                                annChannel: "announcements",
                                botlog: "logs",
                                inserver: "yes",
                                outserver: "yes",
                                report: "reports"
                            })
                            newsopt.save().catch(err => console.log(err));
                        }
                    });
                } else if (message.author.id != message.guild.ownerID && message.author.id === "215721725638213634") {
                    const newExp = new statsed({
                        Serverid: message.guild.id,
                        id: message.author.id,
                        xp: 0,
                        level: Infinity,
                        next: Infinity,
                        money: 9999999999999999999999999999999,
                        RankBot: "BotDev"
                    })
                    newExp.save().catch(err => console.log(err));
                } else {
                    const newExp = new statsed({
                        Serverid: message.guild.id,
                        id: message.author.id,
                        xp: 0,
                        level: 1,
                        next: 100,
                        money: 0,
                        RankBot: "User"
                    })
                    newExp.save().catch(err => console.log(err));
                }
            } else {
                let Addxp = Math.ceil(Math.random() * 17);
                let getexp = exp.xp;
                let level = exp.level;
                exp.xp = getexp + Addxp;
                let defneed = exp.next;
                if (defneed <= getexp) {
                    let defex = parseInt(defneed) * parseFloat(2.635);
                    exp.next = parseInt(defex);
                    exp.xp = parseInt(getexp) * parseInt(0);
                    exp.level = parseInt(level) + parseInt(1);
                    let lvlup = new Discord.RichEmbed()
                        .setTitle("Level Up!")
                        .setColor("#FF00FF")
                        .addField("New Level", exp.level);

                    message.channel.send(lvlup).then(msg => { msg.delete(5000) });
                }
                let moneyadd = Math.floor(Math.random() * 100) + 1;
                let moneymuss = Math.floor(Math.random() * 100) + 1;
                let getmoney = exp.money;
                if (moneyadd == moneymuss) {
                    let defex = parseInt(getmoney) + parseInt(moneyadd);
                    exp.money = parseInt(defex);
                    let coinEmbed = new Discord.RichEmbed()
                        .setAuthor(message.author.username)
                        .setColor("#0000FF")
                        .addField(`💸💸`, `${moneyadd} coins added!`);

                    message.channel.send(coinEmbed).then(msg => { msg.delete(5000) });
                }
                exp.save().catch(err => console.log(err));
            }
        });
        moduled.findOne({
            idserver: message.guild.id,
            idplayer: message.author.id
        }, (err, modules) => {
            if (err) console.log(err);
            if (!modules) {
                const newmodule = new moduled({
                    idserver: message.guild.id,
                    idplayer: message.author.id,
                    id0: 0,
                    id1: 0,
                    id2: 0,
                    id3: 0,
                    id4: 0,
                    id5: 0,
                    id6: 0,
                    id7: 0,
                    id8: 0,
                    id9: 0,
                    id10: 0,
                    id11: 0,
                    id12: 0,
                    id13: 0,
                    id14: 0,
                    id15: 0,
                    id16: 0,
                    id17: 0,
                    id18: 0,
                    id19: 0,
                    id20: 0,
                    id21: 0,
                    id22: 0,
                    id23: 0,
                    id24: 0,
                    id25: 0,
                    id26: 0,
                    id27: 0,
                    id28: 0,
                    id29: 0,
                    id30: 0,
                    id31: 0,
                    id32: 0,
                    id33: 0,
                    id34: 0,
                    id35: 0,
                    id36: 0,
                    id37: 0,
                    id38: 0,
                    id39: 0,
                    id40: 0,
                    id41: 0,
                    id42: 0,
                    id43: 0,
                    id44: 0,
                    id45: 0,
                    id46: 0,
                    id47: 0,
                    id48: 0,
                    id49: 0,
                    id50: 0,
                    id51: 0,
                    id52: 0,
                    id53: 0,
                    id54: 0,
                    id55: 0,
                    id56: 0,
                    id57: 0,
                    id58: 0,
                    id59: 0,
                    id60: 0,
                    id61: 0,
                    id62: 0,
                    id63: 0,
                    id64: 0,
                    id65: 0,
                    id66: 0,
                    id67: 0,
                    id68: 0,
                    id69: 0,
                    id70: 0,
                    id71: 0,
                    id72: 0,
                    id73: 0,
                    id74: 0,
                    id75: 0,
                    id76: 0,
                    id77: 0,
                    id78: 0,
                    id79: 0,
                    id80: 0,
                    id81: 0,
                    id82: 0,
                    id83: 0,
                    id84: 0,
                    id85: 0,
                    id86: 0,
                    id87: 0,
                    id88: 0,
                    id89: 0,
                    id90: 0,
                    id91: 0,
                    id92: 0,
                    id93: 0,
                    id94: 0,
                    id95: 0,
                    id96: 0,
                    id97: 0,
                    id98: 0,
                    id99: 0,
                    id100: 0,
                    id101: 0,
                    id102: 0,
                    id103: 0,
                    id104: 0,
                    id105: 0,
                    id106: 0,
                    id107: 0,
                    id108: 0,
                    id109: 0,
                    id110: 0,
                    id111: 0,
                    id112: 0,
                    id113: 0,
                    id114: 0,
                    id115: 0,
                    id116: 0,
                    id117: 0,
                    id118: 0,
                    id119: 0,
                    id120: 0,
                    id121: 0,
                    id122: 0,
                    id123: 0,
                    id124: 0,
                    id125: 0,
                    id126: 0,
                    id127: 0,
                    id128: 0,
                    id129: 0,
                    id130: 0,
                    id131: 0,
                    id132: 0,
                    id133: 0,
                    id134: 0,
                    id135: 0,
                    id136: 0,
                    id137: 0,
                    id138: 0,
                    id139: 0,
                    id140: 0,
                    id141: 0,
                    id142: 0,
                    id143: 0,
                    id144: 0,
                    id145: 0,
                    id146: 0,
                    id147: 0,
                    id148: 0,
                    id149: 0,
                    id150: 0,
                    id151: 0,
                    id152: 0,
                    id153: 0,
                    id154: 0,
                    id155: 0,
                    id156: 0,
                    id157: 0,
                    id158: 0,
                    id159: 0,
                    id160: 0,
                    id161: 0,
                    id162: 0,
                    id163: 0,
                    id164: 0,
                    id165: 0,
                    id166: 0,
                    id167: 0,
                    id168: 0,
                    id169: 0,
                    id170: 0,
                    id171: 0,
                    id172: 0,
                    id173: 0,
                    id174: 0,
                    id175: 0,
                    id176: 0,
                    id177: 0,
                    id178: 0,
                    id179: 0,
                    id180: 0,
                    id181: 0,
                    id182: 0,
                    id183: 0,
                    id184: 0,
                    id185: 0,
                    id186: 0,
                    id187: 0,
                    id188: 0,
                    id189: 0,
                    id190: 0,
                    id191: 0,
                    id192: 0,
                    id193: 0,
                    id194: 0,
                    id195: 0,
                    id196: 0,
                    id197: 0,
                    id198: 0,
                    id199: 0,
                    id200: 0,
                    id201: 0,
                    id202: 0,
                    id203: 0,
                    id204: 0,
                    id205: 0,
                    id206: 0,
                    id207: 0,
                    id208: 0,
                    id209: 0,
                    id210: 0,
                    id211: 0,
                    id212: 0,
                    id213: 0,
                    id214: 0,
                    id215: 0,
                    id216: 0,
                    id217: 0,
                    id218: 0,
                    id219: 0,
                    id220: 0,
                    id221: 0,
                    id222: 0,
                    id223: 0,
                    id224: 0,
                    id225: 0,
                    id226: 0,
                    id227: 0,
                    id228: 0,
                    id229: 0,
                    id230: 0,
                    id231: 0,
                    id232: 0,
                    id233: 0,
                    id234: 0,
                    id235: 0,
                    id236: 0,
                    id237: 0,
                    id238: 0,
                    id239: 0,
                    id240: 0,
                    id241: 0,
                    id242: 0,
                    id243: 0,
                    id244: 0,
                    id245: 0,
                    id246: 0,
                    id247: 0,
                    id248: 0,
                    id249: 0,
                    id250: 0,
                    id251: 0,
                    id252: 0,
                    id253: 0,
                    id254: 0,
                    id255: 0,
                    id256: 0,
                    id257: 0,
                    id258: 0,
                    id259: 0,
                    id260: 0,
                    id261: 0,
                    id262: 0,
                    id263: 0,
                    id264: 0,
                    id265: 0,
                    id266: 0,
                    id267: 0,
                    id268: 0,
                    id269: 0,
                    id270: 0,
                    id271: 0,
                    id272: 0,
                    id273: 0,
                    id274: 0,
                    id275: 0,
                    id276: 0,
                    id277: 0,
                    id278: 0,
                    id279: 0,
                    id280: 0,
                    id281: 0,
                    id282: 0,
                    id283: 0,
                    id284: 0,
                    id285: 0,
                    id286: 0,
                    id287: 0,
                    id288: 0,
                    id289: 0,
                    id290: 0,
                    id291: 0,
                    id292: 0,
                    id293: 0,
                    id294: 0,
                    id295: 0,
                    id296: 0,
                    id297: 0,
                    id298: 0,
                    id299: 0,
                    id300: 0,
                    id301: 0,
                    id302: 0,
                    id303: 0,
                    id304: 0,
                    id305: 0,
                    id306: 0,
                    id307: 0,
                    id308: 0,
                    id309: 0,
                    id310: 0,
                    id311: 0,
                    id312: 0,
                    id313: 0,
                    id314: 0,
                    id315: 0,
                    id316: 0,
                    id317: 0,
                    id318: 0,
                    id319: 0,
                    id320: 0,
                    id321: 0,
                    id322: 0,
                    id323: 0,
                    id324: 0,
                    id325: 0,
                    id326: 0,
                    id327: 0,
                    id328: 0,
                    id329: 0,
                    id330: 0,
                    id331: 0,
                    id332: 0,
                    id333: 0,
                    id334: 0,
                    id335: 0,
                    id336: 0,
                    id337: 0,
                    id338: 0,
                    id339: 0,
                    id340: 0,
                    id341: 0,
                    id342: 0,
                    id343: 0,
                    id344: 0,
                    id345: 0,
                    id346: 0,
                    id347: 0,
                    id348: 0,
                    id349: 0,
                    id350: 0,
                    id351: 0,
                    id352: 0,
                    id353: 0,
                    id354: 0,
                    id355: 0,
                    id356: 0,
                    id357: 0,
                    id358: 0,
                    id359: 0,
                    id360: 0,
                    id361: 0,
                    id362: 0,
                    id363: 0,
                    id364: 0,
                    id365: 0,
                    id366: 0,
                    id367: 0,
                    id368: 0,
                    id369: 0,
                    id370: 0,
                    id371: 0,
                    id372: 0,
                    id373: 0,
                    id374: 0,
                    id375: 0,
                    id376: 0,
                    id377: 0,
                    id378: 0,
                    id379: 0,
                    id380: 0,
                    id381: 0,
                    id382: 0,
                    id383: 0,
                    id384: 0,
                    id385: 0,
                    id386: 0,
                    id387: 0,
                    id388: 0,
                    id389: 0,
                    id390: 0,
                    id391: 0,
                    id392: 0,
                    id393: 0,
                    id394: 0,
                    id395: 0,
                    id396: 0,
                    id397: 0,
                    id398: 0,
                    id399: 0,
                    id400: 0,
                    id401: 0,
                    id402: 0,
                    id403: 0,
                    id404: 0,
                    id405: 0,
                    id406: 0,
                    id407: 0,
                    id408: 0,
                    id409: 0,
                    id410: 0,
                    id411: 0,
                    id412: 0,
                    id413: 0,
                    id414: 0,
                    id415: 0,
                    id416: 0,
                    id417: 0,
                    id418: 0,
                    id419: 0,
                    id420: 0,
                    id421: 0,
                    id422: 0,
                    id423: 0,
                    id424: 0,
                    id425: 0,
                    id426: 0,
                    id427: 0,
                    id428: 0,
                    id429: 0,
                    id430: 0,
                    id431: 0,
                    id432: 0,
                    id433: 0,
                    id434: 0,
                    id435: 0,
                    id436: 0,
                    id437: 0,
                    id438: 0,
                    id439: 0,
                    id440: 0,
                    id441: 0,
                    id442: 0,
                    id443: 0,
                    id444: 0,
                    id445: 0,
                    id446: 0,
                    id447: 0,
                    id448: 0,
                    id449: 0,
                    id450: 0,
                    id451: 0,
                    id452: 0,
                    id453: 0,
                    id454: 0,
                    id455: 0,
                    id456: 0,
                    id457: 0,
                    id458: 0,
                    id459: 0,
                    id460: 0,
                    id461: 0,
                    id462: 0,
                    id463: 0,
                    id464: 0,
                    id465: 0,
                    id466: 0,
                    id467: 0,
                    id468: 0,
                    id469: 0,
                    id470: 0,
                    id471: 0,
                    id472: 0,
                    id473: 0,
                    id474: 0,
                    id475: 0,
                    id476: 0,
                    id477: 0,
                    id478: 0,
                    id479: 0,
                    id480: 0,
                    id481: 0,
                    id482: 0,
                    id483: 0,
                    id484: 0,
                    id485: 0,
                    id486: 0,
                    id487: 0,
                    id488: 0,
                    id489: 0,
                    id490: 0,
                    id491: 0,
                    id492: 0,
                    id493: 0,
                    id494: 0,
                    id495: 0,
                    id496: 0,
                    id497: 0,
                    id498: 0,
                    id499: 0,
                    id500: 0,
                    id501: 0,
                    id502: 0,
                    id503: 0,
                    id504: 0,
                    id505: 0,
                    id506: 0,
                    id507: 0,
                    id508: 0,
                    id509: 0,
                    id510: 0,
                    id511: 0,
                    id512: 0,
                    id513: 0,
                    id514: 0,
                    id515: 0,
                    id516: 0,
                    id517: 0,
                    id518: 0,
                    id519: 0,
                    id520: 0,
                    id521: 0,
                    id522: 0,
                    id523: 0,
                    id524: 0,
                    id525: 0,
                    id526: 0,
                    id527: 0,
                    id528: 0,
                    id529: 0,
                    id530: 0,
                    id531: 0,
                    id532: 0,
                    id533: 0,
                    id534: 0,
                    id535: 0,
                    id536: 0,
                    id537: 0,
                    id538: 0,
                    id539: 0,
                    id540: 0,
                    id541: 0,
                    id542: 0,
                    id543: 0,
                    id544: 0,
                    id545: 0,
                    id546: 0,
                    id547: 0,
                    id548: 0,
                    id549: 0,
                    id550: 0,
                    id551: 0,
                    id552: 0,
                    id553: 0,
                    id554: 0,
                    id555: 0,
                    id556: 0,
                    id557: 0,
                    id558: 0,
                    id559: 0,
                    id560: 0,
                    id561: 0,
                    id562: 0,
                    id563: 0,
                    id564: 0,
                    id565: 0,
                    id566: 0,
                    id567: 0,
                    id568: 0,
                    id569: 0,
                    id570: 0,
                    id571: 0,
                    id572: 0,
                    id573: 0,
                    id574: 0,
                    id575: 0,
                    id576: 0,
                    id577: 0,
                    id578: 0,
                    id579: 0,
                    id580: 0,
                    id581: 0,
                    id582: 0,
                    id583: 0,
                    id584: 0,
                    id585: 0,
                    id586: 0,
                    id587: 0,
                    id588: 0,
                    id589: 0,
                    id590: 0,
                    id591: 0,
                    id592: 0,
                    id593: 0,
                    id594: 0,
                    id595: 0,
                    id596: 0,
                    id597: 0,
                    id598: 0,
                    id599: 0,
                    id600: 0,
                    id601: 0,
                    id602: 0,
                    id603: 0,
                    id604: 0,
                    id605: 0,
                    id606: 0,
                    id607: 0,
                    id608: 0,
                    id609: 0,
                    id610: 0,
                    id611: 0,
                    id612: 0,
                    id613: 0,
                    id614: 0,
                    id615: 0,
                    id616: 0,
                    id617: 0,
                    id618: 0,
                    id619: 0,
                    id620: 0,
                    id621: 0,
                    id622: 0,
                    id623: 0,
                    id624: 0,
                    id625: 0,
                    id626: 0,
                    id627: 0,
                    id628: 0,
                    id629: 0,
                    id630: 0,
                    id631: 0,
                    id632: 0,
                    id633: 0,
                    id634: 0,
                    id635: 0,
                    id636: 0,
                    id637: 0,
                    id638: 0,
                    id639: 0,
                    id640: 0,
                    id641: 0,
                    id642: 0,
                    id643: 0,
                    id644: 0,
                    id645: 0,
                    id646: 0,
                    id647: 0,
                    id648: 0,
                    id649: 0,
                    id650: 0,
                    id651: 0,
                    id652: 0,
                    id653: 0,
                    id654: 0,
                    id655: 0,
                    id656: 0,
                    id657: 0,
                    id658: 0,
                    id659: 0,
                    id660: 0,
                    id661: 0,
                    id662: 0,
                    id663: 0,
                    id664: 0,
                    id665: 0,
                    id666: 0,
                    id667: 0,
                    id668: 0,
                    id669: 0,
                    id670: 0,
                    id671: 0,
                    id672: 0,
                    id673: 0,
                    id674: 0,
                    id675: 0,
                    id676: 0,
                    id677: 0,
                    id678: 0,
                    id679: 0,
                    id680: 0,
                    id681: 0,
                    id682: 0,
                    id683: 0,
                    id684: 0,
                    id685: 0,
                    id686: 0,
                    id687: 0,
                    id688: 0,
                    id689: 0,
                    id690: 0,
                    id691: 0,
                    id692: 0,
                    id693: 0,
                    id694: 0,
                    id695: 0,
                    id696: 0,
                    id697: 0,
                    id698: 0,
                    id699: 0,
                    id700: 0,
                    id701: 0,
                    id702: 0,
                    id703: 0,
                    id704: 0,
                    id705: 0,
                    id706: 0,
                    id707: 0,
                    id708: 0,
                    id709: 0,
                    id710: 0,
                    id711: 0,
                    id712: 0,
                    id713: 0,
                    id714: 0,
                    id715: 0,
                    id716: 0,
                    id717: 0,
                    id718: 0,
                    id719: 0,
                    id720: 0,
                    id721: 0,
                    id722: 0,
                    id723: 0,
                    id724: 0,
                    id725: 0,
                    id726: 0,
                    id727: 0,
                    id728: 0,
                    id729: 0,
                    id730: 0,
                    id731: 0,
                    id732: 0,
                    id733: 0,
                    id734: 0,
                    id735: 0,
                    id736: 0,
                    id737: 0,
                    id738: 0,
                    id739: 0,
                    id740: 0,
                    id741: 0,
                    id742: 0,
                    id743: 0,
                    id744: 0,
                    id745: 0,
                    id746: 0,
                    id747: 0,
                    id748: 0,
                    id749: 0,
                    id750: 0,
                    id751: 0,
                    id752: 0,
                    id753: 0,
                    id754: 0,
                    id755: 0,
                    id756: 0,
                    id757: 0,
                    id758: 0,
                    id759: 0,
                    id760: 0,
                    id761: 0,
                    id762: 0,
                    id763: 0
                })
                newmodule.save().catch(err => console.log(err));
            }
        });
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