const mongoose = require("mongoose");
const xpShema = mongoose.Schema({
    Serverid: String,
    id: String,
    xp: Number,
    level: Number,
    next: Number,
    money: Number,
    RankBot: String
});

module.exports = mongoose.model("stats", xpShema);