const mongoose = require("mongoose");
const xpShema = mongoose.Schema({
    Serverid: String,
    annChannel: String,
    botlog: String,
    inserver: String,
    outserver: String,
    report: String,
    leveling: String,
    games: String,
    diggame: String,
    money: String
});

module.exports = mongoose.model("serverOptions", xpShema);