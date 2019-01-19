const mongoose = require("mongoose");
const xpShema = mongoose.Schema({
    Serverid: String,
    id: String,
    xp: Number,
    level: Number,
    next: Number
});

module.exports = mongoose.model("exp", xpShema);